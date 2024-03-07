import { BannerProps } from "../_utilities";
import { Sancreek } from "next/font/google";

const sancreek = Sancreek({
  weight: "400",
  subsets: ["latin"],
});

export function Banner({ backgroundURL, title, children }: BannerProps) {
  return (
    <div
      className={" w-full shadow-md aspect-video"}
      style={{
        backgroundImage: `url("${backgroundURL}")`,
        backgroundSize: "cover",
        maxHeight: "750px",
        minHeight: "450px",
      }}
    >
      <div className="bg-black/70 w-full h-full grid place-content-center select-none">
        {title ? (
          <span
            className={`${sancreek.className} text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl animate-fade-in`}
          >
            {title}
          </span>
        ) : (
          <div className="animate-fade-in px-8">{children}</div>
        )}
      </div>
    </div>
  );
}
