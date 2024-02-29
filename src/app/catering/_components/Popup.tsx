"use client";
import { PopupProps } from "@/app/_utilities";

export function Popup({ isOpen, onClose }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
        <p>Your inquiry has been sent!</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-800 text-white px-4 py-1 rounded hover:bg-red-700 w-1/2 "
        >
          Close
        </button>
      </div>
    </div>
  );
}
