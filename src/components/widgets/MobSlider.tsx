"use client";
import { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js
import {
  ArrowLeft,
  ArrowRight,
  Footprints,
  Shirt,
  GraduationCap,
} from "lucide-react";
import slide1 from "@/public/assets/slide-image01.jpg";
import slide2 from "@/public/assets/slide-image02.jpg";
import slide3 from "@/public/assets/slide-image03.jpg";
import slide4 from "@/public/assets/slide-image04.jpg";
import { Button } from "../ui/button";

const contentData = [
  {
    title: "Unleash the stylish man within",
    description:
      "Discover the latest in men’s fashion with our wide selection of stylish clothing.",
    image: slide1,
  },
  {
    title: "Style Meets Comfort",
    description:
      "Explore clothing that combines fashion and comfort effortlessly.",
    image: slide2,
  },
  {
    title: "Elevate Your Everyday Look",
    description: "Transform your daily outfit with our stylish pieces.",
    image: slide3,
  },
  {
    title: "Fit for Every Occasion",
    description: "Find the perfect outfit for any event, casual or formal.",
    image: slide4,
  },
];

export default function MobSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handlePrev = () => {
    if (animating) return; // Prevent multiple clicks during animation
    setAnimating(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? contentData.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);

    setTimeout(() => {
      setAnimating(false);
    }, 500); // Adjust timeout to match the transition duration
  };

  const handleNext = () => {
    if (animating) return; // Prevent multiple clicks during animation
    setAnimating(true);
    const isLastSlide = currentIndex === contentData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);

    setTimeout(() => {
      setAnimating(false);
    }, 500); // Adjust timeout to match the transition duration
  };

  return (
    <div className="flex flex-col md:flex-row justify-center text-center items-center bg-primary-theme2 mx-auto p-4 md:p-12 h-fit">
      {/* Left Content */}
      <div className="flex-1 text-white px-4 md:px-8 mb-8 md:mb-0">
        <div
          className={`transition-transform duration-300 ease-in-out transform ${
            animating ? "translate-x-[-100%]" : "translate-x-0"
          }`}
        >
          <h2 className="text-sm uppercase font-semibold mb-2">
            {contentData[currentIndex]?.title}
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {contentData[currentIndex]?.title}
          </h1>
          <div className="flex gap-2 mb-4 text-4xl mx-auto md:text-5xl px-16 ">
            <Shirt size={40} />
            <Footprints size={40} />
            <GraduationCap size={40} />
          </div>
          <p className="mb-4">{contentData[currentIndex]?.description}</p>
          <Button variant={"secondary"} className="rounded-xl px-4 md:px-6 py-2 md:py-3 mt-4">
            MAN
          </Button>
        </div>
      </div>

      {/* Right Carousel */}
      <div className="relative w-full md:w-1/2 h-64 md:h-96">
        {/* Image Display */}
        <div className="flex w-full justify-between h-full rounded-lg overflow-hidden relative">
          {/* Current Image */}
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              animating ? "translate-x-[-100%]" : "translate-x-0"
            } w-full h-full rounded-lg overflow-hidden relative`}
          >
            <Image
              src={contentData[currentIndex].image}
              alt={contentData[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

        
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="text-white bg-primary-theme2 p-2 rounded-md"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
          <button
            onClick={handleNext}
            className="text-white bg-primary-theme2 p-2 rounded-md"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
