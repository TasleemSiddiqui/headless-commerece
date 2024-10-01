"use client";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaRegHeart } from "react-icons/fa";
import HomeProduct from "../shared/HomeProduct";

interface ProductCardProps {
  imageUrl: StaticImageData | string;
  hoverImageUrl: StaticImageData | string;
  title: string;
  item: number;
  brand: string;
  link:string;
}

const HomeSlider: React.FC<ProductCardProps> = ({
  imageUrl,
  hoverImageUrl,
  title,
  item,
  link,
  brand,
}) => {
  const [currentImage, setCurrentImage] = useState<StaticImageData | string>(
    imageUrl
  );

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full p-0"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="p-0 border-none shadow-none">
                <CardContent className="flex  border-none shadow-none w-full items-center justify-center ">
                  <HomeProduct
                  link={link}
                    imageUrl={imageUrl}
                    hoverImageUrl={hoverImageUrl}
                    brand={brand}
                    title={title}
                    item={1}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:left-7" />
      <CarouselNext className="lg:right-7" />
    </Carousel>
  );
};

export default HomeSlider;
