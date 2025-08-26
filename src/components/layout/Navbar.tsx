"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, ShoppingCart, Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import { useParams } from "next/navigation";
const navigationLinks = [
  { name: "Home", href: "" },
  { name: "Shop", href: "shop" },
  { name: "About Us", href: "about" },
  { name: "Blog", href: "blog" },
];

export function Navbar() {
  const params = useParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log("check params:", params.slug);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[2000] transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link
            href={params.slug ? "/" : "#"}
            className="flex items-center space-x-2">
            <Image alt="Logo" src={logo} width={40} className="w-[40px]" />
            <h5>Fresh Harvests</h5>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={params.slug ? `/#${link.href}` : `#${link.href}`}
                  className="relative px-3 py-2 text-sm font-normal text-gray100 hover:text-black/80 cursor-pointer transition-colors duration-200 group">
                  {link.name}
                  {/* Active underline */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 h-0.5 bg-custom-green rounded-[10px] transition-all duration-300 ease-out",
                      activeLink === link.name
                        ? "w-[14px] -translate-x-1/2 text-black/80"
                        : "w-0 -translate-x-1/2 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* Desktop Actions */}
          {params.slug ? (
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 flex text-sm items-center space-x-2 cursor-pointer text-custom-black">
                <Heart className="w-5 h-5 text-custom-green" fill="#749B3F" />
                <span>Favorites</span>
              </button>

              <button className="p-2 flex text-sm items-center space-x-2 cursor-pointer text-custom-black">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5 text-custom-green" />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] font-normal rounded-full h-[18px] w-[18px] flex items-center justify-center">
                    3
                  </div>
                </div>
                <span>Cart</span>
              </button>

              <button className="p-2 flex text-sm items-center space-x-2 cursor-pointer font-rubik font-semibold border rounded px-4 py-2 text-custom-black border-custom-black">
                <span>Sign in</span>
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <button
                className={cn(
                  "p-2 flex text-sm items-center space-x-2 cursor-pointer",
                  isScrolled ? "text-custom-black" : "text-white"
                )}>
                <Heart
                  className="w-5 h-5"
                  fill={isScrolled ? "black" : "white"}
                />
                <span>Favorites</span>
              </button>

              <button
                className={cn(
                  "p-2 flex text-sm items-center space-x-2 cursor-pointer",
                  isScrolled ? "text-custom-black" : "text-white"
                )}>
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] font-normal rounded-full h-[18px] w-[18px] flex items-center justify-center">
                    3
                  </div>
                </div>
                <span>Cart</span>
              </button>

              <button
                className={cn(
                  "p-2 flex text-sm items-center space-x-2 cursor-pointer font-rubik font-semibold border rounded px-4 py-2",
                  isScrolled
                    ? "text-custom-black border-custom-black"
                    : "text-white border-white"
                )}>
                <span>Sign in</span>
              </button>
            </div>
          )}
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">
                        L
                      </span>
                    </div>
                    <span className="text-lg font-semibold">Logo</span>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-4">
                    {navigationLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => {
                          setActiveLink(link.name);
                          setIsMobileMenuOpen(false);
                        }}
                        className={cn(
                          "text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200",
                          activeLink === link.name
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-accent hover:text-accent-foreground"
                        )}>
                        {link.name}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Actions */}
                  <div className="flex flex-col space-y-3 pt-6 border-t">
                    <Button variant="ghost" className="justify-start">
                      <Heart className="h-5 w-5 mr-3" />
                      Favorites
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <ShoppingCart className="h-5 w-5 mr-3" />
                      Cart
                      <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        2
                      </span>
                    </Button>
                    <Button className="justify-start mt-4">
                      <User className="h-4 w-4 mr-3" />
                      Sign In
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
