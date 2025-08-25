"use client";

import {
  FacebookIcon,
  Instagram,
  MailIcon,
  MapIcon,
  PhoneCall,
  TwitterIcon,
} from "lucide-react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-gray20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔹 Desktop Layout (unchanged) */}
        <div className="hidden md:flex items-start justify-between pt-12">
          {/* Logo */}
          <div className="flex flex-col justify-between w-full h-52">
            <Link href="#" className="flex items-center space-x-2">
              <Image alt="Logo" src={logo} width={40} className="w-[40px]" />
              <h5>Fresh Harvests</h5>
            </Link>

            {/* Download App div */}
            <div>
              <span className="font-rubik font-medium text-xs text-custom-black">
                Download App:
              </span>
              <div className="flex items-center space-x-3 mt-2">
                <Image
                  src="/images/appstore.png"
                  alt="app store"
                  width={140}
                  height={40}
                />
                <Image
                  src="/images/googleplay.png"
                  alt="google play"
                  width={140}
                  height={40}
                />
              </div>
            </div>
          </div>

          {/* Quick links 1 */}
          <div className="text-left flex flex-col space-y-3 w-full max-w-1/5">
            <h6>Quick links 1</h6>
            <div className="flex flex-col space-y-3 text-gray100 font-normal text-sm">
              <Link
                href="#"
                className="hover:text-custom-green transition-all duration-200">
                Home
              </Link>
              <Link
                href="#shop"
                className="hover:text-custom-green transition-all duration-200">
                Shop
              </Link>
              <Link
                href="#about-us"
                className="hover:text-custom-green transition-all duration-200">
                About us
              </Link>
              <Link
                href="#blog"
                className="hover:text-custom-green transition-all duration-200">
                Blog
              </Link>
              <Link
                href="#offer"
                className="hover:text-custom-green transition-all duration-200">
                Special Offer
              </Link>
            </div>
          </div>

          {/* Quick links 2 */}
          <div className="text-left flex flex-col space-y-3 w-full max-w-1/5">
            <h6>Quick links 2</h6>
            <div className="flex flex-col space-y-3 text-gray100 font-normal text-sm">
              <Link
                href="#"
                className="hover:text-custom-green transition-all duration-200">
                Favorites
              </Link>
              <Link
                href="#"
                className="hover:text-custom-green transition-all duration-200">
                Cart
              </Link>
              <Link
                href="#"
                className="hover:text-custom-green transition-all duration-200">
                Sign in
              </Link>
              <Link
                href="#"
                className="hover:text-custom-green transition-all duration-200">
                Register
              </Link>
            </div>
          </div>

          {/* Contact + Payment */}
          <div className="flex flex-col justify-between w-full h-52">
            <div className="text-left flex flex-col space-y-3 w-full">
              <h6>Contact us</h6>
              <div className="flex flex-col space-y-3 text-gray100 font-normal text-sm">
                <Link
                  href="#"
                  className="hover:text-custom-green inline-flex items-center transition-all duration-200">
                  <PhoneCall className="w-5 h-5 mr-2 text-custom-green" /> 023
                  985 433
                </Link>
                <Link
                  href="#"
                  className="hover:text-custom-green inline-flex items-center transition-all duration-200">
                  <MailIcon className="w-5 h-5 mr-2 text-custom-green" />{" "}
                  freshharvests@gmail.com
                </Link>
                <Link
                  href="#"
                  className="hover:text-custom-green inline-flex transition-all duration-200">
                  <MapIcon className="w-5 h-5 mr-2 text-custom-green" /> Tanjung
                  Sari Street, Pontianak, Indonesia
                </Link>
              </div>
            </div>

            <div className="pt-4">
              <span className="font-rubik font-medium text-xs text-custom-black">
                Accepted Payment Methods:
              </span>
              <div className="flex items-center space-x-3 mt-2">
                <Image
                  src="/images/Visa.png"
                  alt="visa"
                  width={70}
                  height={48}
                />
                <Image
                  src="/images/Paypal.png"
                  alt="paypal"
                  width={70}
                  height={48}
                />
                <Image
                  src="/images/ApplePay.png"
                  alt="apple pay"
                  width={70}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (new, stacked order) */}
        <div className="flex flex-col md:hidden pt-10 space-y-6 w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image alt="Logo" src={logo} width={32} className="w-[32px]" />
            <h5 className="text-sm font-semibold">Fresh Harvests</h5>
          </div>

          {/* Quick Links + Contact (row) */}
          <div className="flex flex-row justify-between w-full">
            {/* Quick links 1 */}
            <div className="flex flex-col space-y-1.5 text-xs">
              <h6 className="!font-medium !text-sm">Quick links 1</h6>
              <Link
                href="#"
                className="hover:text-custom-green transition-all duration-200">
                Home
              </Link>
              <Link
                href="#shop"
                className="hover:text-custom-green transition-all duration-200">
                Shop
              </Link>
              <Link
                href="#about-us"
                className="hover:text-custom-green transition-all duration-200">
                About us
              </Link>
              <Link
                href="#blog"
                className="hover:text-custom-green transition-all duration-200">
                Blog
              </Link>
              <Link
                href="#offer"
                className="hover:text-custom-green transition-all duration-200">
                Special Offer
              </Link>
            </div>

            {/* Quick links 2 */}
            <div className="flex flex-col space-y-1.5 text-xs">
              <h6 className="!font-medium !text-sm">Quick links 2</h6>
              <Link
                href="#"
                className="hover:text-custom-green transition-all duration-200">
                Favorites
              </Link>
              <Link
                href="#"
                className="hover:text-custom-green transition-all duration-200">
                Cart
              </Link>
              <Link
                href="#"
                className="hover:text-custom-green transition-all duration-200">
                Sign in
              </Link>
              <Link
                href="#"
                className="hover:text-custom-green transition-all duration-200">
                Register
              </Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col space-y-1.5 text-xs">
              <h6 className="!font-medium !text-sm">Contact us</h6>
              <Link
                href="#"
                className="hover:text-custom-green inline-flex items-center transition-all duration-200">
                <PhoneCall className="w-4 h-4 mr-1.5 text-custom-green" /> 023
                985 433
              </Link>
              <Link
                href="#"
                className="hover:text-custom-green inline-flex items-center transition-all duration-200">
                <MailIcon className="w-4 h-4 mr-1.5 text-custom-green" />{" "}
                freshharvests@gmail.com
              </Link>
              <Link
                href="#"
                className="hover:text-custom-green inline-flex items-center transition-all duration-200">
                <MapIcon className="w-4 h-4 mr-1.5 text-custom-green" /> Tanjung
                Sari Street, Pontianak, Indonesia
              </Link>
            </div>
          </div>

          {/* Download App */}
          <div>
            <span className="font-rubik font-medium text-[10px] text-custom-black">
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

          {/* Payment Methods */}
          <div>
            <span className="font-rubik font-medium text-[10px] text-custom-black">
              Accepted Payment Methods:
            </span>
            <div className="flex items-center space-x-2 mt-1.5">
              <Image src="/images/Visa.png" alt="visa" width={48} height={32} />
              <Image
                src="/images/Paypal.png"
                alt="paypal"
                width={48}
                height={32}
              />
              <Image
                src="/images/ApplePay.png"
                alt="apple pay"
                width={48}
                height={32}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-0.5 w-full bg-gray50 mt-8"></div>

        {/* Bottom Section (same both mobile/desktop) */}
        <div className="flex flex-col md:flex-row items-center justify-between py-[24px] gap-4 md:gap-0">
          <span className="font-rubik font-medium text-xs text-custom-black text-center md:text-left hidden lg:block">
            © Copyright 2025, All Rights Reserved by Banana Studio
          </span>

          <div className="flex items-center space-x-3">
            <Link
              href="#"
              className="rounded-full bg-custom-black hover:bg-primary transition-all duration-200 w-[32px] h-[32px] flex items-center justify-center">
              <TwitterIcon className="w-4 text-white" />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-custom-black hover:bg-primary transition-all duration-200 w-[32px] h-[32px] flex items-center justify-center">
              <FacebookIcon className="w-4 text-white" />
            </Link>
            <Link
              href="#"
              className="rounded-full bg-custom-black hover:bg-primary transition-all duration-200 w-[32px] h-[32px] flex items-center justify-center">
              <Instagram className="w-4 text-white" />
            </Link>
          </div>

          <span className="font-rubik font-medium text-xs text-custom-black text-center md:text-left block lg:hidden">
            © Copyright 2025, All Rights Reserved by Banana Studio
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
