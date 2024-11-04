import React from "react";

export default function PastEventsGrid() {
  const basePath =
    process.env.NODE_ENV === "production" ? "/Emerging-Coders-Website" : "";

  const images = [
    "/Apple.JPG",
    "/EmergingLeetCoders.JPG",
    "/IceCreamSocial.JPG",
    "/ProfHeadshot.JPG",
    "/ResumeWorkshop.JPG",
    "/ScavengerHunt.JPG",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${basePath}${image}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
