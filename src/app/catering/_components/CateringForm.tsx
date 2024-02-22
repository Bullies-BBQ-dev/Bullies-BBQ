"use client";

import { useRef, useState } from "react";
import { useSelectedItemsContext } from "./context";

export function CateringForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const minTime = "11:30";
  const maxTime = "19:30";
  const [selectedTime, setSelectedTime] = useState("");
  const { selectedItems, setSelectedItems } = useSelectedItemsContext();

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

  function sendEmail() {}

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
  return (
    <div className="flex w-full justify-center text-black">
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
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] border`}
              />
            </div>
          </div>

          <div className={`flex `}>
            <div className="w-1/2 pl-2">
              <label htmlFor="items">Items</label>
              {selectedItems.map((item, index) => (
                <div key={index} className="flex mb-4">
                  <div className="w-1/2">
                    <label htmlFor={`quantity-${index}`}>{item.name}</label>
                  </div>
                  <div className="w-1/2">
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
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="message" className={``}>
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] border`}
              />
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button
              type="submit"
              value="Send"
              className={`border px-4 py-1 w-full lg:w-1/4  font-medium bg-[#1F2937] border-none hover:text-[#FB904D] transition ease-in-out hover:outline hover:outline-[#FB904D] hover:outline-1
                
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
