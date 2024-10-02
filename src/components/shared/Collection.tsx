'use client';
import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { GoPlus } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface ImageData {
  src: string | StaticImageData;
  alt: string;
}

interface HeadingTitleLink {
  heading: string;
  title: string;
  link: string;
  background?: string;
  isDark?: boolean; // New prop to control dark mode
  images: ImageData[];
}

type Content = HeadingTitleLink;

const Collection: React.FC<Content> = ({ heading, title, link, images, background, isDark }) => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  // Apply conditional text color
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-white' : 'border-black';

  return (
    <section className={`flex-col px-3 py-5 space-y-5 w-full justify-between items-center ${background  || 'bg-primary-theme2'} h-fit md:text-left text-center ${textColor}`}>
      <div className="flex lg:flex-row flex-col-reverse w-full justify-between items-center h-fit  py-5 lg:py-10">
        <div className="flex-1 flex-col justify-center items-center md:px-7 lg:px-10 lg:w-1/2 space-y-6">
          <h4>{heading}</h4>
          <h1 className="scroll-m-20 text-3xl md:text-4xl font-sans tracking-tight lg:text-6xl">
            {title}
          </h1>
          <div className="space-y-8">
            <Link href='/shop' className={`border-b py-3 ${borderColor}`}>Shop Now</Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex-1 flex justify-center items-center  lg:w-1/2 pt-4 px-6">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-1 lg:gap-x-10  gap-x-4">
              {images.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-[66.67%] md:basis-[66.67%] lg:basis-[66.67%] bg-transparent" // Set to 66.67% to show 1.5 slides
                >
                  <div className="p-1">
                    <Card className="bg-transparent border-none shadow-none">
                      <CardContent className="flex bg-transparent items-center justify-center max-h-[300px]  lg:max-h-[400px] lg:w-full w-auto">
                        <Image src={item.src} alt={item.alt} width={400} height={400} objectFit="cover" className="lg:min-h-[400px] w-full min-h-[300px]" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <hr className={`${borderColor}`} />
      <div className="px-3 flex gap-4">
        <Link href={link} className={`flex w-fit h-fit gap-2 justify-center items-center bg-transparent border px-4 py-2 rounded-full hover:cursor-pointer ${borderColor}`}>
          <GoPlus /> Discover
        </Link>
        <Link href='/learn-more' className={`${textColor } flex w-fit h-fit gap-2 justify-center items-center bg-transparent  px-4 py-2 rounded-full hover:cursor-pointer`}>
          Learn more <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Collection;

