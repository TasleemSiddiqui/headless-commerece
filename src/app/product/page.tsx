"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import p1 from "@/public/assets/products/pexels-3motional-studio-407102-1081685.jpg";
import p2 from "@/public/assets/products/pexels-anastasiya-gepp-654466-2065203.jpg";

import { CiHeart, CiStar } from "react-icons/ci";
import Link from "next/link";
import { IoBag } from "react-icons/io5";
import freeReturn from "@/public/assets/icon/icon-free-return.svg";
import quickDelivery from "@/public/assets/icon/icon-quick-delivery (1).svg";
import quickShipping from "@/public/assets/icon/icon-quick-shipping.svg";

const ProductPage = () => {
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const [image, setImage] = useState(p1)

  // Function to handle increase
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Function to handle decrease (not going below 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Function to handle direct input value change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto p-5">
      {/* Product Section */}
      <div className="flex flex-col  lg:flex-row gap-5">
        {/* Product Images */}
        <div className="flex flex-col md:flex-row lg::w-1/2 w-full  gap-4 h-fit">
          <div className="bg-gray-100 p-5 md:w-2/3 relative">
            <Image
              src={image}
              alt="Brown Tote Bag"
              className="w-full max-h-[500px] min-h-[400px] object-cover transform ease-in-out"
            ></Image>
            <div className="absolute top-2 left-2">
              {" "}
              <Badge className="bg-[#FF6900] px-3 rounded-full tracking-wider">
                {" "}
                Sale!{" "}
              </Badge>{" "}
              <Badge className="bg-[#6328DF] px-3 rounded-full tracking-wider">
                {" "}
                Last{" "}
              </Badge>{" "}
            </div>
          </div>
          <div className="flex md:flex-col  gap-2 mt-2 md:w-1/3">
            {/* Thumbnails */}
            <Image
              src={p1}
              alt="Thumbnail 1"
              className="w-20 h-20 object-cover"
              onClick={()=>setImage(p1)}
            />
            <Image
              src={p2}
              alt="Thumbnail 2"
              className="w-20 h-20 object-cover"
              onClick={()=>setImage(p2)}
            />
            <Image
              src={p1}
              alt="Thumbnail 3"
              className="w-20 h-20 object-cover"
              onClick={()=>setImage(p1)}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 space-y-4">
          <span className="text-[#FF6900] text-sm font-semibold">
            Delivery Name{" "}
          </span>
          <Link href={""} className="flex justify-between ">
            <h4 className="text-xl md:text-2xl font-bold mb-4">Lightup</h4>
            <span className="flex items-center gap-1 text-sm font-semibold">
              Add To favorite <CiHeart />
            </span>
          </Link>
          <h1 className="text-3xl md:text-5xl font-normal mb-2">
            Brown Tote Bag
          </h1>
          <div className=" text-gray-500 flex gap-2 items-center ">
            <span className="line-through">€59.00</span>{" "}
            <Badge className="bg-red-600">-60%</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-red-600 font-semibold text-2xl ">€23.00</span>
            <span className="text-base flex items-center text-yellow-600 gap-1">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              (0 Reveiws)
            </span>{" "}
          </div>
{/* buttons cart and purchase */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:justify-between w-full">
            {/* Quantity Input & Buttons */}
            <div className="flex items-center w-fit md:h-[80px] bg-gray-100 border border-gray-200 justify-center space-x-4">
              {/* Quantity Input */}
              <input
                type="number"
                className="w-14 text-center bg-transparent rounded"
                value={quantity}
                onChange={handleInputChange}
                min="1"
              />

              {/* Increase and Decrease Buttons */}
              <div className="flex flex-col">
                {/* Decrease Button */}
                <Button
                  className="w-5 h-5 bg-transparent"
                  variant="outline"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  -
                </Button>

                {/* Increase Button */}
                <Button
                  className="w-5 h-5 bg-transparent"
                  variant="outline"
                  onClick={increaseQuantity}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="w-1/3 h-full">
              <Button className="mt-5 h-fit md:h-[80px] text-base w-fit md:w-full flex justify-center items-center gap-1">
                Add to Cart <IoBag size={30} />
              </Button>
            </div>

            {/* Quick Purchase Button */}
            <div className="w-1/3">
              <Button
                variant="outline"
                className="mt-5 h-fit md:h-[80px] text-base w-fit md:w-full flex justify-center items-center gap-1"
              >
                Quick Purchase
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="w-full border p-4 border-gray-200 h-fit flex gap-4">
              <Image
                alt="free return"
                src={quickShipping}
                className="max-h-[80px]"
              />
              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  2-3 Days Shipping
                </h1>
                <p className="text-gray-400 text-sm"> Standart Delivery</p>
              </div>
            </div>
            <div className="w-full border p-4 border-gray-200 h-fit flex gap-4">
              <Image
                alt="free return"
                src={freeReturn}
                className="max-h-[80px]"
              />
              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Free Item Return
                </h1>
                <p className="text-gray-400 text-sm"> Standart Delivery</p>
              </div>
            </div>
            <div className="w-full border p-4 border-gray-200 h-fit flex gap-4">
              <Image
                alt="free return"
                src={quickDelivery}
                className="max-h-[80px]"
              />
              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Next Day Shipping
                </h1>
                <p className="text-gray-400 text-sm">Exclusive Delivery</p>
              </div>
            </div>
          </div>

          {/* Product Details Accordion */}
          <Accordion type="multiple" className="mt-5 space-y-2">
            <AccordionItem value="item-1">
              <AccordionTrigger>Product Description</AccordionTrigger>
              <AccordionContent>
                They are often worn with a sock. Shoes are also used as an item
                of decoration and fashion. The design of shoes has varied
                enormously through time and from culture to culture, with form
                originally being tied to function.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Product Materials</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ut accumsan felis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Product Quality</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ut accumsan felis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Care & Usage</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ut accumsan felis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
