"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fetchProducts } from "@/redux/productSlice";
import { ProductsType } from "@/types/products.types";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import Badge from "../ui/badge";
import Link from "next/link";

const ProductSection = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    const getProductsByCategory = (category: string, limit = 8) => {
      if (category === "all") {
        return data.slice(0, limit);
      }

      return data
        .filter(
          (product) =>
            product.category?.toLowerCase() === category.toLowerCase()
        )
        .slice(0, limit);
    };

    return {
      all: getProductsByCategory("all", 8),
      fruits: getProductsByCategory("fruits", 8),
      vegetables: getProductsByCategory("vegetables", 8),
      salad: getProductsByCategory("salad", 8),
    };
  }, [data]);

  const ProductGrid = ({ products }: { products: ProductsType }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((prod) => (
        <Link
          target="_blank"
          href={`/product-details/${prod.slug}`}
          key={prod.id}
          className="bg-white shadow-sm rounded-xl p-2 sm:p-3 overflow-hidden text-center cursor-pointer hover:scale-105 transition-all duration-200 hover:shadow-lg space-y-3 sm:space-y-4">
          <Image
            width={258}
            height={208}
            src={prod.images[1] || "/placeholder.svg"}
            alt={`Products ${prod.name} image`}
            className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-52"
          />
          <div className="space-y-1 sm:space-y-2">
            <h6 className="text-sm sm:text-base">{prod.name}</h6>
            <span className="font-normal text-base sm:text-lg text-gray100">
              ${prod.price}/kg
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="rounded-lg py-2 sm:py-3 w-full font-rubik font-normal text-sm sm:text-lg text-custom-black border cursor-pointer hover:border-primary hover:bg-primary hover:text-white transition-all duration-200 mb-2">
            Add to cart
          </button>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="shop">
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
            }}
          />
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

        <div className="flex items-center flex-col space-y-2 lg:space-y-3">
          <Badge text="Our Products" />

          <span className="font-rubik font-medium text-custom-black lg:text-[48px] text-[32px]">
            Our Fresh Products
          </span>

          <span className="text-sm text-gray100 max-w-[400px] lg:max-w-[448px] text-center">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </span>
        </div>

        <Tabs defaultValue="all" className="mt-6 md:mt-8">
          <TabsList className="flex items-center space-x-4 md:space-x-6 bg-none mb-8">
            <TabsTrigger
              className="rounded-[8px] py-2 px-4 md:py-3 md:px-6 border text-gray80 border-gray80 font-rubik text-base md:text-lg hover:bg-custom-green transition-all duration-200 hover:text-white font-normal cursor-pointer hover:border-custom-green"
              value="all">
              All
            </TabsTrigger>
            <TabsTrigger
              className="rounded-[8px] py-2 px-4 md:py-3 md:px-6 border text-gray80 border-gray80 font-rubik text-base md:text-lg hover:bg-custom-green transition-all duration-200 hover:text-white font-normal cursor-pointer hover:border-custom-green"
              value="fruits">
              Fruits
            </TabsTrigger>
            <TabsTrigger
              className="rounded-[8px] py-2 px-4 md:py-3 md:px-6 border text-gray80 border-gray80 font-rubik text-base md:text-lg hover:bg-custom-green transition-all duration-200 hover:text-white font-normal cursor-pointer hover:border-custom-green"
              value="vegetables">
              Vegetables
            </TabsTrigger>
            <TabsTrigger
              className="rounded-[8px] py-2 px-4 md:py-3 md:px-6 border text-gray80 border-gray80 font-rubik text-base md:text-lg hover:bg-custom-green transition-all duration-200 hover:text-white font-normal cursor-pointer hover:border-custom-green"
              value="salad">
              Salad
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ProductGrid products={filteredProducts.all} />
          </TabsContent>
          <TabsContent value="fruits">
            <ProductGrid products={filteredProducts.fruits} />
          </TabsContent>
          <TabsContent value="vegetables">
            <ProductGrid products={filteredProducts.vegetables} />
          </TabsContent>
          <TabsContent value="salad">
            <ProductGrid products={filteredProducts.salad} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductSection;
