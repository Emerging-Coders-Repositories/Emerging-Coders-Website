import React from "react";
import Image from "next/image";

export default function PastEventsGrid() {
  const images = [
    "/events/Emerged_coders_fall_2024.jpg",
    "/events/Google_technical_prep.jpg",
    "/events/ice_cream_social.jpg",
    "/events/Internship_panel_2024.jpg",
    "/events/Leetcode_chill_fall_2024.jpg",
    "/events/Underclassmen_guide.jpg",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={`${image}`}
            alt={`${image} event image`}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
