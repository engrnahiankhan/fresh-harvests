"use client";

import { useEffect, useState } from "react";
import Badge from "../ui/badge";

const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-[640px] w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/images/footer-bg.png')`,
      }}>
      {/* Content Container */}
      <div className="relative z-10 h-full min-h-[640px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto">
            {/* Heading */}
            <Badge text="Special Offer" />

            <span className="font-rubik font-medium text-custom-black text-[40px] md:text-[60px] lg:text-[80px] mt-4">
              Seasonal Fruit Bundle
            </span>

            <p className="font-rubik font-medium text-[28px] md:text-[32px] lg:text-[48px] text-custom-black">
              Discount up to <span className="text-primary">80% OFF</span>
            </p>

            {/* Time Counter card */}
            <div className="flex items-center text-center space-x-6 pt-6">
              <div className="bg-white py-4 px-8 rounded-lg shadow-lg flex flex-col justify-center items-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                <span className="font-normal font-rubik text-[28px] md:text-[40px] text-custom-black">
                  {timeLeft.days.toString().padStart(2, "0")}
                </span>
                <span className="font-normal text-base md:text-lg text-gray100">
                  Days
                </span>
              </div>

              <div className="bg-white py-4 px-8 rounded-lg shadow-lg flex flex-col justify-center items-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                <span className="font-normal font-rubik text-[28px] md:text-[40px] text-custom-black">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </span>
                <span className="font-normal text-base md:text-lg text-gray100">
                  Hour
                </span>
              </div>

              <div className="bg-white py-4 px-8 rounded-lg shadow-lg flex flex-col justify-center items-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                <span className="font-normal font-rubik text-[28px] md:text-[40px] text-custom-black">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </span>
                <span className="font-normal text-base md:text-lg text-gray100">
                  Min
                </span>
              </div>

              <div className="bg-white py-4 px-8 rounded-lg shadow-lg flex flex-col justify-center items-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                <span className="font-normal font-rubik text-[28px] md:text-[40px] text-custom-black">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </span>
                <span className="font-normal text-base md:text-lg text-gray100">
                  Second
                </span>
              </div>
            </div>

            {/* code badge  */}
            <div className="rounded-full bg-[#176D38] py-3 px-6 md:py-4 md:px-8 mt-8">
              <p className="text-white font-rubik font-semibold md:text-[28px] text-[24px]">
                CODE : <span className="text-[#FAC714]">FRESH28</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
