"use client";
import { useState } from "react";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaRegHeart } from "react-icons/fa";

interface ProductCardProps {
  imageUrl: StaticImageData | string;
  hoverImageUrl: StaticImageData | string;
  title: string;
  link:string
  item: number;
  brand: string;
}

const HomeProduct: React.FC<ProductCardProps> = ({
  imageUrl,
  hoverImageUrl,
  title,
  link,
  item,
  brand,
}) => {
  const [currentImage, setCurrentImage] = useState<StaticImageData | string>(
    imageUrl
  );

  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden">
      <Link href={link}>
        <div
          className="relative block"
          onMouseEnter={() => setCurrentImage(hoverImageUrl)}
          onMouseLeave={() => setCurrentImage(imageUrl)}
        >
          <Image
            src={currentImage}
            alt={title}
            width={500} // Set a specific width for the image
            height={500} // Set a specific height to maintain aspect ratio
            className="w-full h-[400px] md:[450px]  lg:h-[600px] object-cover transition-transform duration-500" // Set a fixed height for responsiveness
          />
          <button className="absolute top-2 right-2 bg-white rounded-full p-2 focus:outline-none z-10 hover:bg-gray-100">
            <FaRegHeart />
          </button>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-gray-700 text-base capitalize">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[#FF6900] font-bold text-lg ">
            {item} Items
          </span>
        </div>
        <hr className="my-2" />
        <div className="flex items-center gap-2 text-gray-500 text-sm capitalize  mt-2">
          {brand}
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
