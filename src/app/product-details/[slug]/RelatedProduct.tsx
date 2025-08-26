import Badge from "@/components/ui/badge";
import { useAppSelector } from "@/hooks/reduxHooks";
import { Product } from "@/types/products.types";
import Image from "next/image";
import Link from "next/link";

interface RelatedProductProps {
  product: Product;
}

const RelatedProduct = ({ product }: RelatedProductProps) => {
  const { data } = useAppSelector((state) => state.products);

  const filteredArray = data
    .filter(
      (prod) => prod.category === product.category && prod.id !== product.id
    )
    .slice(0, 4);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-[140px]">
      <div className="flex items-center flex-col space-y-2 lg:space-y-3">
        <Badge text="Our Products" />

        <span className="font-rubik font-medium text-custom-black lg:text-[48px] text-[32px]">
          Related Products
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredArray.map((prod) => (
          <Link
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
    </div>
  );
};

export default RelatedProduct;
