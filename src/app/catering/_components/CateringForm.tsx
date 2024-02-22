"use client";

import { useRef, useState } from "react";
import { useSelectedItemsContext } from "./context";

export function CateringForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const minTime = "11:30";
  const maxTime = "19:30";
  const [selectedTime, setSelectedTime] = useState("");
  const { selectedItems, setSelectedItems } = useSelectedItemsContext();
  const [showAllItems, setShowAllItems] = useState(false);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value;
    // Check if the selected time is within the min-max range
    if (time >= minTime && time <= maxTime) {
      setSelectedTime(time);
    } else {
      setSelectedTime("");
      alert("Please select a time between 11:30 AM and 7:30 PM.");
    }
  };

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElements = form.current?.elements;
    if (formElements) {
      console.log("Form Inputs:");
      for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i] as HTMLInputElement;
        if (element.name && element.value) {
          console.log(element.name, element.value);
        }
      }
    }

    // Log selected items and quantities
    console.log("Selected Items:");
    selectedItems.forEach((item) => {
      console.log(item.quantity, item.name);
    });
  }

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
  //   const minDate = today.toISOString().split("T")[0]; // Today's date as minDate
  const maxDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 20
  )
    .toISOString()
    .split("T")[0]; // 3 weeks into the future as maxDate
  const disableSundays = (date: Date) => {
    return date.getDay() === 6; // 6 is Sunday
  };

  let nextAvailableDate = new Date();

  // If today is Sunday, find the next Monday
  if (nextAvailableDate.getDay() === 6) {
    nextAvailableDate.setDate(nextAvailableDate.getDate() + 1); // Move to Monday
  }

  // Find the next available date that is not a Sunday
  while (disableSundays(nextAvailableDate)) {
    nextAvailableDate.setDate(nextAvailableDate.getDate() + 1);
  }

  const minDate = nextAvailableDate.toISOString().split("T")[0];

  const itemsToShow = showAllItems
    ? selectedItems.length
    : Math.min(selectedItems.length, 4);
  return (
    <div className="flex w-full justify-center">
      <div className="w-full lg:w-3/4 lg:px-0 px-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full mb-16 lg:mb-30 "
        >
          <div className="flex">
            <div className="w-1/3 pr-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                required
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] border`}
              />
            </div>
            <div className={`w-1/3 pl-2 `}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                required
                className="mb-4 p-2 w-full focus:outline-[#FB904D] border"
                min={minDate}
                max={maxDate}
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value);
                  if (disableSundays(selectedDate)) {
                    e.target.value = "";
                    alert("Please select a date other than Sunday.");
                  }
                }}
              />
            </div>
            <div className={`w-1/3 pl-2 `}>
              <label htmlFor="time">Time</label>
              <input
                type="time"
                name="time"
                required
                className="mb-4 p-2 w-full focus:outline-[#FB904D] border"
                value={selectedTime}
                onChange={handleTimeChange}
                min={minTime}
                max={maxTime}
              />
            </div>
          </div>

          <div className={`flex `}>
            <div className="w-1/3 pr-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] border`}
              />
            </div>
            <div className="w-1/3 pl-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="phone"
                name="phone"
                required
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] border`}
              />
            </div>
            <div className="w-1/3 pl-2">
              <label htmlFor="people">Number of People</label>
              <input
                type="number"
                name="people"
                required
                min={11}
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] border`}
              />
            </div>
          </div>

          <div className={`flex `}>
            <div className="w-1/2 pl-2">
              <label htmlFor="items">Items:</label>
              {selectedItems.slice(0, itemsToShow).map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-1/2">
                    <label htmlFor={`quantity-${index}`}>{item.name}</label>
                  </div>
                  <div className="w-1/2 mr-2">
                    <input
                      id={`quantity-${index}`}
                      type="number"
                      min="0"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(index, parseInt(e.target.value))
                      }
                      className="mb-4 p-2 w-full focus:outline-[#FB904D] border"
                    />
                  </div>
                </div>
              ))}
              {selectedItems.length > 4 && (
                <button
                  onClick={() => setShowAllItems(!showAllItems)}
                  className="text-red-500 hover:underline ease-in-out delay-75"
                >
                  {showAllItems ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
            <div className="w-full pl-2">
              <label htmlFor="message" className={``}>
                Requests/Description (optional)
              </label>
              <textarea
                name="message"
                rows={4}
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] border`}
              />
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button
              type="submit"
              value="Send"
              className={` px-4 py-1 w-full lg:w-1/4 text-white font-medium bg-red-800  transition ease-in-out
              rounded border-4 hover:border-red-800 duration-300 hover:bg-white hover:text-red-800
                `}
            >
              Send!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
