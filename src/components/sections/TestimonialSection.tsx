"use client";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Badge from "../ui/badge";
import Image from "next/image";

interface SlideType {
  id: number;
  name: string;
  image: string;
  profession: string;
  review: string;
}
const TestimonialSection = () => {
  const slides: SlideType[] = [
    {
      id: 1,
      name: "Sophia Carter",
      image: "/images/customer-1.jpg",
      profession: "Marketing Manager",
      review:
        "I had an amazing experience shopping here. The website was super easy to navigate, checkout was smooth, and delivery was right on time. The quality of the products truly exceeded my expectations. Customer support was also very helpful and responsive whenever I had a question.",
    },
    {
      id: 2,
      name: "James Miller",
      image: "/images/customer-2.jpg",
      profession: "Software Engineer",
      review:
        "This is one of the best online stores I’ve purchased from. The product descriptions were clear, the images were accurate, and the items arrived in perfect condition. What I loved most is the attention to detail in packaging and how fresh the products felt when I received them.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      image: "/images/customer-3.jpg",
      profession: "Fitness Trainer",
      review:
        "Fresh Harvests has become my go-to store for healthy and organic products. I really appreciate how transparent they are about the source of their items and the quality is consistently outstanding. The taste, freshness, and overall value for money make it worth recommending to anyone.",
    },
  ];

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
    adaptiveHeight: false,
    arrows: false,
    autoplay: false,
    waitForAnimate: false,
    cssEase: "linear",
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    customPaging: () => (
      <div className="w-4 h-4 bg-gray50 rounded-full mx-2 cursor-pointer relative transition-all duration-300 ease-in-out hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-custom-green focus:ring-opacity-50 active:bg-custom-green mt-4">
        <div className="absolute inset-0 w-full h-full bg-gray50 rounded-full opacity-100 transition-all duration-300 ease-in-out"></div>
      </div>
    ),
    dotsClass: "slick-dots flex justify-center items-center",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between pt-8">
        <div
          style={{
            width: "105px",
            height: "100px",
            backgroundImage: "url('/images/leaf.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            transform: "rotate(1deg)",
            marginTop: "55px",
          }}
        />

        <div className="flex items-center flex-col space-y-2 lg:space-y-3">
          <Badge text="Testimonial" />

          <span className="font-rubik text-center font-medium text-custom-black lg:text-[48px] text-[32px]">
            What Our
            <br className="md:hidden block" /> Customers Say
          </span>

          <span className="text-sm text-gray100 max-w-[400px] lg:max-w-[448px] text-center">
            Don&apos;t just take our word for it—here&apos;s what some of our
            customers have to say about their experience with Fresh Harvest:
          </span>
        </div>

        <div
          style={{
            width: "105px",
            height: "100px",
            backgroundImage: "url('/images/leaf.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            transform: "rotate(-50deg)",
            marginTop: "100px",
          }}
        />
      </div>

      {/* Testimonial slide */}
      <div className="pb-12">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="!flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-[80px] mt-20">
              {/* image div */}
              <div className="max-w-[335px] relative">
                <Image
                  src={slide.image}
                  alt={slide.name}
                  width={200}
                  height={200}
                  className="rounded-[200px]"
                />

                <Image
                  width={62}
                  height={62}
                  alt="group-icon"
                  src="/images/group-4.png"
                  className="w-[62px] h-[62px] absolute -top-15 -right-8 z-[1000]"
                />
              </div>

              {/* review div */}
              <div className="rounded-[24px] p-6 md:p-8 bg-gray20 w-full text-left max-w-[600px] min-h-[250px] flex flex-col justify-between">
                <p className="font-normal text-base md:text-[20px] text-gray100">
                  &quot;{slide.review}&quot;
                </p>

                <p className="font-rubik font-normal text-custom-black text-lg mt-4">
                  <span className="font-medium">{slide.name}</span> -{" "}
                  {slide.profession}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
