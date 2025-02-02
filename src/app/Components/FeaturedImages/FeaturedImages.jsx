import React, { useState } from "react";
import Image from "next/image";
export default function FeaturedImage() {
  const images = [
    `/community_pictures/photo1.jpg`,
    `/community_pictures/photo5.JPG`,
    `/Photo3.png`,
    `/community_pictures/photo7.JPG`,
    `/community_pictures/photo9.JPG`,
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  // Navigation for cycling through images
  const navigate = (direction) => {
    if (direction === "left") {
      setActiveImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setActiveImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="relative">
        <Image
          src={images[activeImageIndex]}
          alt={`Main Image ${activeImageIndex}`}
          className="w-full h-auto rounded-lg"
          width={500}
          height={500}
        />

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-1 shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={() => navigate("left")}
          aria-label="Previous Image"
        >
          &#8249; {/* Left Arrow */}
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-1 shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={() => navigate("right")}
          aria-label="Next Image"
        >
          &#8250; {/* Right Arrow */}
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer ${
              index === activeImageIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              width={100}
              height={100}
              className="h-24 w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
