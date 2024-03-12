"use client";
import { FormEvent, useRef, useState } from "react";
import { useSelectedItemsContext } from "./index";
import emailjs from "@emailjs/browser";
import { CiCircleCheck } from "react-icons/ci";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";

export function CateringForm() {
  const [selectedTime, setSelectedTime] = useState("");
  const [showAllItems, setShowAllItems] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { selectedItems, setSelectedItems } = useSelectedItemsContext();
  const form = useRef<HTMLFormElement | null>(null);
  const MIN_TIME = "11:30";
  const MAX_TIME = "19:30";

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value;
    if (time >= MIN_TIME && time <= MAX_TIME) {
      setSelectedTime(time);
    } else {
      setSelectedTime("");
      alert("Please select a time between 11:30 AM and 7:30 PM.");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_l66sb72", "template_4vlk3li", form.current, {
          publicKey: "69VTj3m726TFXQowL",
        })
        .then(
          () => {
            form.current?.reset();
            setSelectedItems([]);
            setIsSubmitted(true);
            setTimeout(() => {
              setIsSubmitted(false);
            }, 6000); //
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  function updateQuantity(
    index: number,
    action: "add" | "subtract" | "delete"
  ) {
    const updatedItems = [...selectedItems];
    if (action === "add") {
      updatedItems[index].quantity++;
    } else if (action === "subtract") {
      if (updatedItems[index].quantity > 1) updatedItems[index].quantity--;
    } else {
      updatedItems.splice(index, 1);
    }
    setSelectedItems(updatedItems);
  }

  const today = new Date();
  const maxDate = new Date(today.setDate(today.getDate() + 30))
    .toISOString()
    .split("T")[0];
  const disableSundays = (date: Date) => date.getDay() === 6;

  let nextAvailableDate = new Date();
  if (nextAvailableDate.getDay() === 6) {
    nextAvailableDate.setDate(nextAvailableDate.getDate() + 1);
  }
  while (disableSundays(nextAvailableDate)) {
    nextAvailableDate.setDate(nextAvailableDate.getDate() + 1);
  }
  const minDate = nextAvailableDate.toISOString().split("T")[0];

  const itemsToShow = showAllItems ? selectedItems.length : 4;

  return (
    <div className="flex w-full justify-center">
      <div className="w-full px-4">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col w-full mb-16 lg:mb-30 "
        >
          <div className="flex flex-col lg:flex-row">
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                required
                className={`mb-4 p-2 w-full focus:outline-red-800 border`}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                className={`mb-4 p-2 w-full focus:outline-red-800 border`}
              />
            </div>
          </div>
          <div className={`flex flex-col lg:flex-row`}>
            <div className="w-full lg:w-1/2 lg:pr-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="phone"
                name="phone"
                required
                className={`mb-4 p-2 w-full focus:outline-red-800 border`}
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-2">
              <label htmlFor="people">Number of People</label>
              <input
                type="number"
                name="people"
                required
                min={11}
                className={`mb-4 p-2 w-full focus:outline-red-800 border`}
              />
            </div>
          </div>
          <div className={`flex flex-col lg:flex-row`}>
            <div className={`w-full lg:w-1/2 lg:pr-2 `}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                required
                className="mb-4 p-2 w-full focus:outline-red-800 border"
                min={minDate}
                max={maxDate}
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value);
                  if (disableSundays(selectedDate)) {
                    e.target.value = "";
                    alert("Please select a date other than Sunday!!!!!!!!.");
                  }
                }}
              />
            </div>
            <div className={`lg:w-1/2 w-full lg:pl-2 `}>
              <label htmlFor="time">Time</label>
              <input
                type="time"
                name="time"
                required
                className="mb-4 p-2 w-full focus:outline-red-800 border"
                value={selectedTime}
                onChange={handleTimeChange}
                min={MIN_TIME}
                max={MAX_TIME}
              />
            </div>
          </div>
          <div className={`flex flex-col lg:flex-row`}>
            {" "}
            <div className="w-full ">
              <label htmlFor="message" className={``}>
                Requests/Description
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className={`mb-4 p-2 w-full focus:outline-red-800 border resize-none `}
              />
            </div>
          </div>
          <div className={`flex flex-col lg:flex-row`}>
            <div className=" w-full lg:pl-2 pl-0 pb-4">
              <label htmlFor="items">Items</label>
              {selectedItems.slice(0, itemsToShow).map((item, index) => (
                <div key={index} className="flex mb-4">
                  <div className=" w-full">
                    <input
                      type="text"
                      name="items"
                      value={item.name}
                      readOnly
                      className="py-2 w-full border-none bg-inherit select-none focus:outline-none"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full lg:mr-2 flex justify-end items-center gap-2">
                    <div className="gap-2 flex items-center">
                      <button
                        type="button"
                        className="p-1 h-full "
                        onClick={() => updateQuantity(index, "subtract")}
                      >
                        <FaMinus size={20} />{" "}
                      </button>
                      <input
                        readOnly
                        id={`quantity-${index}`}
                        type="text"
                        name="quantity"
                        min="0"
                        value={`${item.quantity}`}
                        className="p-2 w-1/2 focus:outline-red-800 border text-center pointer-events-none min-w-[2rem]"
                      />
                      <button
                        type="button"
                        className="p-1 h-full "
                        onClick={() => updateQuantity(index, "add")}
                      >
                        <FaPlus size={15} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => updateQuantity(index, "delete")}
                    >
                      <FaTrashAlt size={15} />
                    </button>
                  </div>
                  <div className="hidden">
                    <input
                      id={`quantity-${index}`}
                      type="text"
                      name="selectedItems"
                      readOnly
                      value={`${item.quantity} ${item.name}`}
                    />
                  </div>
                </div>
              ))}

              {selectedItems.length > 4 && (
                <button
                  onClick={() => setShowAllItems(!showAllItems)}
                  className="text-red-500 hover:underline ease-in-out delay-75 py-4"
                >
                  {showAllItems ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              value="Send"
              disabled={isSubmitted || selectedItems.length === 0}
              className={` w-60 mx-auto py-2 text-lg bg-red-800 border-black border-[1px] text-white  tracking-wide rounded active:scale-95 hover:scale-105 duration-300 hover:cursor-pointer`}
            >
              {isSubmitted ? "Sent!" : "Send Inquiry"}
            </button>
          </div>{" "}
          {isSubmitted && (
            <div className="flex items-center flex-col w-full justify-center font-bold absolute bottom-[-20px] animate-success opacity-0 left-0 ">
              <div className="flex w-3/4 items-center bg-[#4CAE00] text-white rounded-lg p-2">
                <CiCircleCheck size="30" className=" text-[#ffff]" />
                Your Inquiry Has Been Sent!
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
