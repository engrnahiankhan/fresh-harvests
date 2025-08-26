"use client";

import Badge from "@/components/ui/badge";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fetchProducts } from "@/redux/productSlice";
import { Product } from "@/types/products.types";
import { Heart, Loader2, ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import ImageCarousel from "./ImageCarousel";
import DescReview from "./DescReview";
import RelatedProduct from "./RelatedProduct";

interface ProductPageProps {
  params: React.Usable<{ slug: string }>;
}

const ProductDetails = ({ params }: ProductPageProps) => {
  const resolvedParams = React.use(params);

  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.products);

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      const foundProduct = data.find(
        (item: Product) => item.slug === resolvedParams.slug
      );
      setProduct(foundProduct || null);
    }
  }, [data, resolvedParams.slug]);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (!loading && data.length > 0 && !product) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <p className="text-red-500">No product found for this slug.</p>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:py-28">
      <div className="">
        <div className="w-full flex flex-col lg:flex-row items-center gap-8">
          <ImageCarousel product={product} />

          <div className="flex flex-col space-y-3 lg:space-y-6 mt-12 lg:mt-0">
            {/* product heading */}
            <div className="flex flex-col space-y-2 mb-8">
              <Badge text={product.category} />

              <span className="font-rubik font-medium text-4xl md:text-[48px] text-custom-black">
                {product.name}
              </span>

              <div className="flex items-baseline space-x-1 font-rubik font-medium">
                <span className="md:text-lg">
                  {product.rating ? product.rating.toFixed(1) : "0.0"}
                </span>
                <span className="text-xs text-custom-black">
                  {`(${product.reviews.length} review)`}
                </span>
              </div>

              <span className="font-rubik font-semibold text-primary text-2xl md:text-[32px]">
                ${product.price}/kg
              </span>

              <p className="font-normal text-gray100 text-base leading-relaxed md:text-lg">
                {product.description}
              </p>
            </div>

            {/* Product quantity adding */}
            <div className="flex items-center space-x-3 mb-8">
              <span className="font-rubik font-medium text-lg text-custom-black">
                Quantity
              </span>

              <div className="flex h-[43px] border rounded">
                <button className="w-[43px] cursor-pointer text-gray100 hover:text-custom-black text-2xl active:bg-gray-200">
                  -
                </button>
                <span className="w-[43px] flex items-center justify-center border-l border-r font-rubik font-semibold text-[20px] text-gray100">
                  1
                </span>
                <button className="w-[43px] cursor-pointer text-gray100 hover:text-custom-black text-lg active:bg-gray-200">
                  +
                </button>
              </div>

              <span className="font-normal text-lg text-gray100">/kg</span>
            </div>

            {/* save favorites and add to cart action button */}
            <div className="flex items-center space-x-4">
              <button className="md:py-4 md:px-8 py-3 px-6 bg-gray20 rounded flex items-center space-x-2 text-gray100 cursor-pointer hover:shadow-lg transition-shadow duration-200">
                <Heart className="w-5" />
                <span className="font-rubik font-semibold text-lg">
                  Save as favorite
                </span>
              </button>

              <button className="md:py-4 md:px-8 py-3 px-6 bg-primary rounded flex items-center space-x-2 text-white cursor-pointer hover:shadow-lg transition-shadow duration-200">
                <ShoppingCart className="w-5" />
                <span className="font-rubik font-semibold text-lg">
                  Add to carts
                </span>
              </button>
            </div>
          </div>
        </div>

        <DescReview product={product} />

        <RelatedProduct product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
