"use client";

import Image from "next/image";
import Badge from "../ui/badge";
import { ArrowRight } from "lucide-react";

interface BlogType {
  id: number;
  date: string;
  image: string;
  headline: string;
}
const OurBlog = () => {
  const blogs: BlogType[] = [
    {
      id: 1,
      date: "2025-08-25",
      image: "/images/news-1.png",
      headline: "5 Tips to Keep Your Fruits Fresh Longer at Home",
    },
    {
      id: 2,
      date: "2025-08-20",
      image: "/images/news-2.png",
      headline: "Healthy Salad Recipes for a Nutritious Lunch",
    },
    {
      id: 3,
      date: "2025-08-15",
      image: "/images/news-3.png",
      headline: "The Ultimate Guide to Organic Vegetables in Your Kitchen",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-end">
        <div
          style={{
            width: "105px",
            height: "100px",
            backgroundImage: "url('/images/leaf.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            transform: "rotate(-50deg)",
          }}
        />
      </div>

      <div className="flex items-center flex-col space-y-2 lg:space-y-3 text-center">
        <Badge text="Our Blog" />

        <span className="font-rubik text-center font-medium text-custom-black lg:text-[48px] text-[32px]">
          Fresh Harvest Blog
        </span>

        <span className="text-sm text-gray100 max-w-[400px] lg:max-w-[448px] text-center">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-12">
        {blogs.map((blog) => {
          const formattedDate = new Date(blog.date).toLocaleDateString(
            "en-US",
            {
              month: "long",
              day: "numeric",
              year: "numeric",
            }
          );

          return (
            <div
              key={blog.id}
              className="overflow-hidden border h-96 flex flex-col justify-end items-center p-4">
              {/* Image */}
              <Image
                src={blog.image}
                alt={blog.headline}
                width={300}
                height={300}
                className="object-cover rounded-xl w-full"
                priority
              />

              {/* Text + Read More */}
              <div className="text-left flex flex-col justify-start space-y-2 pt-4">
                <p className="md:text-lg text-base font-normal text-gray100">
                  {formattedDate}
                </p>
                <span className="md:text-lg text-custom-black font-medium font-rubik">
                  {blog.headline}
                </span>
                <div className="flex justify-start">
                  <button className="font-semibold font-rubik md:text-lg text-base text-primary hover:underline transition-all duration-200 cursor-pointer flex items-center group">
                    Read More{" "}
                    <ArrowRight size={20} className="ml-1 group-hover:ml-2" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurBlog;
