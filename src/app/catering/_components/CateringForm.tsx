"use client";
import { FormEvent, useRef, useState } from "react";
import { useSelectedItemsContext } from "./index";
import emailjs from "@emailjs/browser";
import { CiCircleCheck } from "react-icons/ci";

export function CateringForm() {
  const [selectedTime, setSelectedTime] = useState("");
  const [showAllItems, setShowAllItems] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { selectedItems, setSelectedItems } = useSelectedItemsContext();
  const form = useRef<HTMLFormElement | null>(null);
  const minTime = "11:30";
  const maxTime = "19:30";

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value;
    if (time >= minTime && time <= maxTime) {
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
            console.log("SUCCESS!");
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

  function updateQuantity(index: number, quantity: number) {
    const updatedItems = [...selectedItems];
    if (quantity > 0) {
      updatedItems[index].quantity = quantity;
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
                min={minTime}
                max={maxTime}
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
                <div key={index} className="flex">
                  <div className=" w-full">
                    <input
                      type="text"
                      name="items"
                      value={item.name}
                      readOnly
                      className="py-2 w-full border-none bg-inherit select-none focus:outline-none"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full lg:mr-2 flex justify-end">
                    <input
                      id={`quantity-${index}`}
                      type="number"
                      name="quantity"
                      min="0"
                      value={`${item.quantity}`}
                      onChange={(e) =>
                        updateQuantity(index, parseInt(e.target.value))
                      }
                      className="mb-4 p-2 w-1/2 focus:outline-red-800 border"
                    />
                  </div>
                  <div className="hidden">
                    <input
                      id={`quantity-${index}`}
                      type="text"
                      name="selectedItems"
                      readOnly
                      value={`${item.quantity} ${item.name}`}
                      onChange={(e) =>
                        updateQuantity(index, parseInt(e.target.value))
                      }
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
              className={` px-4 py-1 w-full text-white font-medium bg-red-800  transition ease-in-out
              rounded border-red-800 border-4 hover:border-red-800 duration-300 hover:bg-white hover:text-red-800
                `}
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
