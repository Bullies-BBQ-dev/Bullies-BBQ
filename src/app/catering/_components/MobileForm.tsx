"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useSelectedItemsContext } from "./index";
import emailjs from "@emailjs/browser";
import { CiCircleCheck } from "react-icons/ci";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import { useNavBarHeight } from "@/app/_utilities";

export function MobileForm() {
  const [selectedTime, setSelectedTime] = useState("");
  const [showAllItems, setShowAllItems] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const { selectedItems, setSelectedItems } = useSelectedItemsContext();
  const navBarHeight = useNavBarHeight();
  const form = useRef<HTMLFormElement | null>(null);
  const minTime = "11:30";
  const maxTime = "19:30";

  function toggleForm() {
    setIsOpen(!isOpen);
  }
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
          publicKey: "1pGGiF0cCRIkzZg8T",
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

  const itemsToShow = showAllItems ? selectedItems.length : 2;

  useEffect(() => {
    const allItems = () => {
      let totalItems = 0;
      for (let i = 0; i < selectedItems.length; i++) {
        if (selectedItems[i] !== undefined) {
          totalItems += selectedItems[i].quantity;
          console.log(totalItems);
        }
      }
      setTotal(totalItems);
    };
    allItems();
  }, [selectedItems]);

  return (
    <>
      <div
        className={`flex lg:hidden fixed inset-0 duration-200 z-10 ${
          isOpen ? "" : "translate-y-full"
        }`}
        style={{ top: navBarHeight }}
      >
        <div className="">
          <div className="flex w-full justify-center  items-center flex-col">
            <div className="sticky top-[72px]  max-h-screen min-w-screen p-4 pb-10 overflow-y-scroll">
              <div className="w-full px-4 bg-white rounded-lg shadow-gray-800 shadow-2xl">
                <h3 className="text-3xl font-bold flex justify-center py-10 text-red-800">
                  Catering Inquiry
                </h3>
                <p className="text-md text-center pb-10">
                  *Contact us for catering information we will get back to you
                  soon, order not confirmed until you receive confirmation
                  email*
                </p>
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="flex flex-col w-full mb-16 lg:mb-30 z-10"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 lg:pr-2">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className={`mb-4 p-2 w-full focus:outline-red-800 border`}
                      />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-2">
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
                        className="mb-4 p-2 w-full focus:outline-red-800 border hover:cursor-pointer"
                        min={minDate}
                        max={maxDate}
                        onChange={(e) => {
                          const selectedDate = new Date(e.target.value);
                          if (disableSundays(selectedDate)) {
                            e.target.value = "";
                            alert(
                              "Please select a date other than Sunday!!!!!!!!."
                            );
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
                        className="mb-4 p-2 w-full focus:outline-red-800 border hover:cursor-pointer"
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
                      {selectedItems
                        .slice(0, itemsToShow)
                        .map((item, index) => (
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
                            <div className="lg:w-1/2 w-full lg:mr-2 flex justify-end gap-2 ">
                              <button
                                type="button"
                                className="p-1 h-full "
                                onClick={() =>
                                  updateQuantity(index, "subtract")
                                }
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
                                className="p-2 w-1/4 focus:outline-red-800 border text-center pointer-events-none mb-2 min-w-[2rem]"
                              />
                              <button
                                type="button"
                                className="p-1 h-full "
                                onClick={() => updateQuantity(index, "add")}
                              >
                                <FaPlus size={15} />
                              </button>
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

                      {selectedItems.length > 2 && (
                        <button
                          type="button"
                          onClick={() => setShowAllItems(!showAllItems)}
                          className="text-red-500 hover:underline ease-in-out delay-75 py-4"
                        >
                          {showAllItems ? "Show Less" : "Show More"}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="w-[200px] mx-auto flex justify-end pb-4">
                    <button
                      type="submit"
                      value="Send"
                      disabled={isSubmitted || total === 0}
                      className={` w-60 mx-auto py-2 text-lg bg-red-800 border-black border-[1px] text-white  tracking-wide rounded active:scale-95 hover:scale-105 duration-300 hover:cursor-pointer`}
                    >
                      {isSubmitted ? "Sent!" : "Send Inquiry"}
                    </button>
                  </div>{" "}
                  <div className="flex font-bold pb-12 ">
                    {isSubmitted && (
                      <div className="flex w-full justify-center font-bold absolute bottom-[20px] left-[-10px]  ">
                        <div className="flex w-1/3 justify-center bg-[#4CAE00] text-white rounded-lg p-2 ">
                          <CiCircleCheck size="30" className=" text-[#ffff]" />
                          Your Inquiry Has Been Sent!
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={toggleForm}
        className="px-8 fixed bottom-0 right-4 m-4 p-4 bg-yellow-400/75 border border-black-400 rounded-full shadow-md z-10 block lg:hidden hover:bg-yellow-400/95 duration-100"
      >
        {isOpen ? "Close Form" : "Open Form"}{" "}
        {!isOpen && total > 0 && (
          <span
            key={total}
            className="absolute border border-solid rounded-full bg-red-800 text-white h-8 w-8 right-1 top-[-12px] p-1 animate-fade-in  "
          >
            {total}
          </span>
        )}
      </button>
    </>
  );
}
