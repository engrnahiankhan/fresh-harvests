"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-[1000px] items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-[1500px] h-full">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        a
        <div className="text-left">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Perfect
            </span>
            <br />
            <span className="text-white">Hero Section</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Experience the future of web design with stunning visuals and modern
            aesthetics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
