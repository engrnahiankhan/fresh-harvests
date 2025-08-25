"use client";

import Image from "next/image";
import Badge from "../ui/badge";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center">
        <button className="rounded-[8px] border border-primary py-3 px-6 md:py-4 md:px-8 text-primary font-rubik font-semibold text-base md:text-lg hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer z-[1000]">
          See All Products
        </button>
      </div>

      <div className="flex lg:flex-row flex-col space-y-4 items-center justify-between relative lg:-top-16 pt-10 md:pt-0">
        <Image
          src="/images/about-img.png"
          width={1000}
          height={1000}
          alt="about image"
          className="max-w-[660px] w-full"
        />

        <div className="flex flex-col space-y-2 md:space-y-4 pt-4 md:pt-0">
          <Badge text="About us" />

          <span className="font-rubik font-medium text-custom-black text-[32px] lg:text-[48px]">
            About Fresh Harvest
          </span>

          <p className="font-normal text-sm text-gray100 max-w-[455px]">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>

          <button className="rounded-[8px] border border-primary py-2 px-4 md:py-4 md:px-8 text-primary font-rubik font-semibold text-base md:text-lg hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer w-fit">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
