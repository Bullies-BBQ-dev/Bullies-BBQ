import { reviewList } from "@/app/_utilities";
import { IoStarSharp } from "react-icons/io5";

export function Reviews() {
  return (
    <div className="flex flex-nowrap overflow-x-hidden px-4 py-10">
      {[...reviewList, ...reviewList].map((review, index) => (
        <div
          key={review.id}
          className="flex-shrink-0 max-w-full md:max-w-[600px] lg:max-w-[700px] animate-slide-reviews"
        >
          <div className="h-full bg-white m-2 p-4  border rounded-xl shadow-2xl ">
            <div className="flex justify-between">
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
        </div>
      ))}
    </div>
  );
}
