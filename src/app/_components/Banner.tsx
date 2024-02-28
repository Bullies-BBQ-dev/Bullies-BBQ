import { BannerProps } from "../_utilities";
import { Sancreek } from "next/font/google";

const sancreek = Sancreek({
  weight: "400",
  subsets: ["latin"],
});

export function Banner({ backgroundURL, title, children }: BannerProps) {
  return (
    <div
      className={" w-full shadow-md"}
      style={{
        backgroundImage: `url("${backgroundURL}")`,
        backgroundSize: "cover",
        height: "750px",
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
          <div className="animate-fade-in">{children}</div>
        )}
      </div>
    </div>
  );
}
