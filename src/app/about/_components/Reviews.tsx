"use client";
import { reviewList } from "@/app/_utilities";
import { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";

export function Reviews() {
  const [reviewListState, setReviewListState] = useState([...reviewList]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          const newList = [...reviewListState];
          const review = newList.shift();
          if (review) newList.push(review);
        }
      });
    });
  });
  return (
    <div className="flex flex-nowrap overflow-x-auto px-4 py-10 gap-4 ">
      {reviewList.map((review, index) => (
        <div
          key={review.id}
          className="flex-shrink-0 border p-4 rounded-xl bg-white shadow-2xl max-w-full md:max-w-[600px] lg:max-w-[700px] "
        >
          <div className="flex justify-between ">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row">
                {[...Array(review.stars)].map((_, i) => (
                  <IoStarSharp key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="text-sm">{review.date}</div>
              <div className="font-bold">{review.name}</div>
            </div>
            <div className="flex items-center flex-col">
              <img
                src={review.img}
                className="max-w-[4.9rem] rounded-full"
                alt={review.name}
              />
            </div>
          </div>

          <hr />
          <div>{`"${review.review}"`}</div>
        </div>
      ))}
    </div>
  );
}
