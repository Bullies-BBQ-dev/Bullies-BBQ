import { FaCircle } from "react-icons/fa";

export function StoreStatus() {
  const isOpen = () => {
    const now = new Date();

    const openTime = new Date();
    openTime.setHours(7, 0, 0); // Set opening time to 11am

    const closeTime = new Date();
    closeTime.setHours(16, 0, 0); // Set closing time to 8pm

    const openingSoonTime = new Date(openTime);
    openingSoonTime.setHours(openTime.getHours() - 1); // Set opening soon time to 1 hour before opening

    const closingSoonTime = new Date(closeTime);
    closingSoonTime.setHours(closeTime.getHours() - 1); // Set closing soon time to 1 hour before closing

    if (now >= openTime && now <= closeTime) {
      if (now >= closingSoonTime) {
        return "closingSoon";
      } else {
        return "open";
      }
    } else if (now >= openingSoonTime) {
      return "openingSoon";
    } else {
      return "closed";
    }
  };

  return (
    <>
      {isOpen() === "open" ? (
        <div className="animate-pulse text-green-400 flex gap-1">
          <FaCircle className="self-center" />
          <p>Open Now</p>
        </div>
      ) : isOpen() === "closed" ? (
        <div className="text-red-600 flex gap-1">
          <FaCircle className="self-center" />
          <p>Closed</p>
        </div>
      ) : isOpen() === "openingSoon" ? (
        <div className="text-gray-500 animate-pulse flex gap-1">
          <FaCircle className="self-center" />
          <p>Opening Soon</p>
        </div>
      ) : (
        <div className="animate-pulse text-orange-400 flex gap-1">
          <FaCircle className="self-center" />
          <p>Closing Soon</p>
        </div>
      )}
    </>
  );
}
