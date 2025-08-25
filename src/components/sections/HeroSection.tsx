"use client";
import Image from "next/image";
import Badge from "../ui/badge";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-[1000px] items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left flex flex-col max-w-4xl">
          <Badge text="Welcome to Fresh Harvest" />

          <span className="font-rubik font-medium text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-custom-black leading-tight sm:leading-tight md:leading-tight lg:leading-none mt-4 mb-6">
            Fresh Fruits and <br className="hidden sm:block" />
            Vegetables
          </span>

          <p className="max-w-[448px] font-normal text-sm sm:text-base md:text-lg text-gray100 mb-6 sm:mb-8">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>

          <Link
            href="#shop"
            className="bg-primary rounded-[8px] py-3 px-6 sm:py-4 sm:px-8 font-semibold text-base sm:text-lg font-rubik hover:scale-105 hover:shadow-lg transition-all duration-300 text-white w-fit inline-block text-center">
            Shop Now
          </Link>
        </div>

        <div className="w-full">
          <div
            style={{
              marginLeft: "110px",
              marginTop: "10px",
            }}>
            <Image
              src="/images/arrow.png"
              alt="offer-card"
              width={60}
              height={160}
            />
          </div>

          <div
            style={{
              marginLeft: "200px",
              marginTop: "-80px",
            }}>
            <Image
              src="/images/offer-card.png"
              alt="offer-card"
              width={330}
              height={160}
            />
          </div>
        </div>

        <div className="mt-8">
          <span className="font-normal text-sm text-gray100 text-left">
            Download App:
          </span>

          <div className="flex items-center space-x-2 mt-1.5">
            <Image
              src="/images/appstore.png"
              alt="app store"
              width={100}
              height={30}
            />
            <Image
              src="/images/googleplay.png"
              alt="google play"
              width={100}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
