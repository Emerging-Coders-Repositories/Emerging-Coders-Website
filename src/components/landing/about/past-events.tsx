"use client";

import Image from "next/image";
import { eventImages } from "@/constants/about-us-image-gallery";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function EventsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? eventImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === eventImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    trackMouse: true,
  });

  const getPositionClass = (size: string) => {
    switch (size) {
      case "large-right":
        return "lg:col-start-2 lg:col-span-2 lg:row-span-2";
      case "medium-left":
        return "lg:col-start-1 lg:col-span-1 lg:row-span-1";
      case "medium-right":
        return "lg:col-start-3 lg:col-span-1 lg:row-span-1";
      case "small-left":
        return "lg:col-start-1 lg:col-span-1 lg:row-span-1";
      case "small-right":
        return "lg:col-start-3 lg:col-span-1 lg:row-span-1";
      default:
        return "lg:col-span-1 lg:row-span-1";
    }
  };

  return (
    <div className="bg-black py-12 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-md mx-auto lg:max-w-none">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <div className="lg:top-8">
              <h2 className="text-5xl font-semibold -tracking-4 mb-6 text-white lg:text-left">
                What We&apos;ve Done
              </h2>
              <p className="font-mono text-xl md:text-base leading-relaxed text-zinc-400 mb-8 lg:text-left">
                We&apos;ve hosted a variety of event types ranging from social
                events to professional development events. Our events are open
                to all Northwestern students and we encourage you to attend our
                events to learn more about Emerging Coders and the FGLI
                community at Northwestern.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-7/12">
            {isMobile ? (
              <div className="relative w-full px-4 py-8">
                <div
                  {...swipeHandlers}
                  className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 group mx-auto w-full max-w-xs h-[350px] touch-pan-x"
                >
                  <Image
                    src={eventImages[currentIndex].src || "/placeholder.svg"}
                    alt={eventImages[currentIndex].alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white font-medium">{eventImages[currentIndex].alt}</p>
                      <p className="text-zinc-300 text-sm font-mono">
                        {eventImages[currentIndex].description}
                      </p>
                    </div>
                  </div>

                  {/* Arrows */}
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 z-20"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 z-20"
                    onClick={goToNext}
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {eventImages.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? "bg-purple-600" : "bg-zinc-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="hidden lg:grid lg:grid-cols-3 lg:auto-rows-[minmax(150px,auto)] gap-4">
                {eventImages.map((image) => {
                  const isLarge = image.size === "large-right";
                  return (
                    <div
                      key={`desktop-${image.id}`}
                      className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 group ${getPositionClass(
                        image.size
                      )} ${isLarge ? "" : "aspect-square"}`}
                      style={{
                        transform: `translateY(${Math.random() * 20 - 10}px)`,
                        ...(isLarge && { aspectRatio: "1/1" }),
                      }}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-white font-medium">{image.alt}</p>
                          <p className="text-zinc-300 text-sm font-mono">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
