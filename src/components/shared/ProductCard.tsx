'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { CiDeliveryTruck } from 'react-icons/ci';

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

const ProductCard: React.FC<ProductCardProps> = ({
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
  const [currentImage, setCurrentImage] = useState<StaticImageData>(imageUrl);

  return (
    <div className="w-full max-w-sm  rounded-lg overflow-hidden">
      <Link href={productUrl}>
        <div
          className="relative block"
          onMouseEnter={() => setCurrentImage(hoverImageUrl)}
          onMouseLeave={() => setCurrentImage(imageUrl)}
        >
          {isOnSale && (
            <span className="absolute top-2 left-2 bg-primary-theme text-white text-xs px-2 py-1 rounded-full z-10">
              SALE!
            </span>
          )}
          <Image
            src={currentImage}
            alt={title}
            width={400} // Set your desired width
            height={400} // Set your desired height
            objectFit="cover"
            className="w-full h-[20rem] duration-500"
          />
          <button className="absolute top-2 right-2 bg-white rounded-full p-1 focus:outline-none z-10">
            <FaRegHeart />
          </button>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-gray-700 font-bold text-lg">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-primary-theme font-bold text-xl">€{price.toFixed(2)}</span>
          {oldPrice > price && (
            <span className="text-gray-400 line-through">€{oldPrice.toFixed(2)}</span>
          )}
          
          {discount > 0 && (
            <span className="bg-orange-200 text-primary-theme text-xs px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>
        <hr className='my-2'/>
        {expressDelivery && (
          <div className="flex items-center gap-2 text-black text-xs font-semibold mt-2">
            <CiDeliveryTruck size={20} className="text-primary-theme" />
            Express Delivery
          </div>
        )}
      </div>
    </div>
  );
};


export default ProductCard;
