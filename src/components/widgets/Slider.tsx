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

export default function Hero() {
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
    <div className="flex justify-center items-center bg-primary-theme2 mx-auto p-12 h-fit">
      {/* Left Content */}
      <div className="flex-1 text-white px-8 overflow-hidden">
        <div
          className={`transition-transform duration-500 ease-in-out transform ${
            animating ? "translate-x-[-500%]" : "translate-x-0"
          }`}
        >
          <h2 className="text-sm uppercase font-semibold mb-2">
            {contentData[currentIndex]?.title}
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            {contentData[currentIndex]?.title}
          </h1>
          <div className="flex gap-4 mb-4 text-5xl">
            <Shirt size={50} />
            <Footprints size={50} />
            <GraduationCap size={50} />
          </div>
          <p className="mb-4">{contentData[currentIndex]?.description}</p>
          <Button variant={"secondary"} className="rounded-xl px-6 py-3 mt-10">
            MAN
          </Button>
        </div>
      </div>

      {/* Right Carousel */}
      <div className="relative w-1/2 h-96">
        {/* Image Display */}
        <div className="flex w-full justify-between h-full rounded-lg overflow-hidden relative">
          {/* Current Image */}
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              animating ? "translate-x-[-100%] pl-96" : "translate-x-0 p-0"
            } w-1/2 h-full rounded-lg overflow-hidden relative`}
          >
            <Image
              src={contentData[currentIndex].image}
              alt={contentData[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Next Image */}
          <div
            className={`w-[200px] transition-transform duration-500 ease-in-out transform ${
              animating
                ? "translate-x-[100%] "
                : "translate-x-0 "
            } w-1/2 h-full rounded-lg overflow-hidden relative`}
          >
            {currentIndex + 1 < contentData.length ? (
              <Image
                src={contentData[currentIndex + 1].image}
                alt={contentData[currentIndex + 1].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            ) : (
              <span></span>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="text-white bg-primary-theme2 p-3 rounded-md "
          >
            <ArrowLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-1/2 transform -translate-y-1/2">
          <button
            onClick={handleNext}
            className="text-white bg-primary-theme2 p-3 rounded-md"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
