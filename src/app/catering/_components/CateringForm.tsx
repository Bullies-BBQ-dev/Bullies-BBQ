"use client";

import { useRef } from "react";

export function CateringForm() {
  const form = useRef<HTMLFormElement | null>(null);

  function sendEmail() {}

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
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] `}
              />
            </div>
            <div className={`w-1/3 pl-2 `}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                required
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] outline-1 outline"
                `}
              />
            </div>
            <div className={`w-1/3 pl-2 `}>
              <label htmlFor="time">Time</label>
              <input
                type="time"
                name="time"
                required
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] outline-1 outline"
                `}
              />
            </div>
          </div>

          <div className={`flex `}>
            <div className="w-1/3 pl-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] `}
              />
            </div>
            <div className="w-1/3 pl-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="phone"
                name="phone"
                required
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] `}
              />
            </div>
            <div className="w-1/3 pl-2">
              <label htmlFor="people">Number of People</label>
              <input
                type="number"
                name="people"
                required
                className={`mb-4 p-2 w-full focus:outline-[#FB904D] `}
              />
            </div>
          </div>

          <label htmlFor="message" className={``}>
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className={`mb-4 p-2 w-full focus:outline-[#FB904D]`}
          />
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
