import { Product } from "@/types/products.types";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface ImageCarouselProps {
  product: Product;
}

const ImageCarousel = ({ product }: ImageCarouselProps) => {
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
    <div className="rounded-lg h-[550px] w-[550px] max-w-full pt-24 lg:pt-0">
      <Slider {...settings}>
        {product.images.map((img, index) => (
          <div key={index} className="relative w-full h-[550px]">
            <Image
              src={img}
              alt={product.name + " image"}
              fill
              className="object-cover object-center rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
