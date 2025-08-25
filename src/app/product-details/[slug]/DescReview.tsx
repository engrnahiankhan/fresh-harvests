import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/types/products.types";
import Image from "next/image";

interface DescReviewsProps {
  product: Product;
}
const DescReview = ({ product }: DescReviewsProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-26">
      <div className="flex justify-start">
        <Tabs defaultValue="desc">
          <TabsList className="flex items-center justify-start space-x-4 md:space-x-6 bg-none mb-8">
            <TabsTrigger
              className="rounded-[8px] py-2 px-4 md:py-3 md:px-6 border text-gray80 border-gray80 font-rubik text-base md:text-lg hover:bg-custom-green transition-all duration-200 hover:text-white font-normal cursor-pointer hover:border-custom-green"
              value="desc">
              Description
            </TabsTrigger>
            <TabsTrigger
              className="rounded-[8px] py-2 px-4 md:py-3 md:px-6 border text-gray80 border-gray80 font-rubik text-base md:text-lg hover:bg-custom-green transition-all duration-200 hover:text-white font-normal cursor-pointer hover:border-custom-green"
              value="review">
              Reviews ({product.review_count})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="desc">
            <div className="rounded-[24px] p-6 md:p-8 bg-gray20 w-full text-left max-w-[800px]">
              <p className="font-normal text-base md:text-[20px] text-gray100 leading-relaxed">
                {product.description}
              </p>
            </div>
          </TabsContent>
          <TabsContent value="review">
            <div className="flex flex-wrap gap-6">
              {product.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-gray20 rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                    {/* Left side - Username and Review Text */}
                    <div className="flex-1">
                      <span className="font-semibold text-custom-black text-lg font-rubik mb-3">
                        {rev.username}
                      </span>
                      <p className="text-gray-700 leading-relaxed">
                        {rev.review_text}
                      </p>
                    </div>

                    {/* Right side - Full Rounded Image */}
                    <div className="flex-shrink-0">
                      <Image
                        src={rev.user_img}
                        alt={`${rev.username}'s profile`}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DescReview;
