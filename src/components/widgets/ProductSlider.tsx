"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Hproduct from "@/public/assets/products/product18c-306x442.webp";
import product1 from "@/public/assets/products/product18a.webp";
import ProductCard from "../shared/ProductCard";
import { StaticImageData } from "next/image";

interface ProductCardProps {
  imageUrl: StaticImageData;
  hoverImageUrl: StaticImageData;
  title: string;
  price: number;
  oldPrice: number;
  discount: number;
  isOnSale: boolean;
  expressDelivery: boolean;
  productUrl: string;
}

const ProductSlider: React.FC<ProductCardProps> = ({
  imageUrl,
  hoverImageUrl,
  title,
  price,
  oldPrice,
  discount,
  isOnSale,
  expressDelivery,
  productUrl,
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className={`w-full`}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center ">
                  <ProductCard
                    imageUrl={imageUrl}
                    hoverImageUrl={hoverImageUrl}
                    title={title}
                    price={price}
                    oldPrice={oldPrice}
                    discount={discount}
                    isOnSale={isOnSale}
                    expressDelivery={expressDelivery}
                    productUrl={productUrl} // Replace with the actual product page link
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default ProductSlider;
