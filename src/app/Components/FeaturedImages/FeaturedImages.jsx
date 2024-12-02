import React from "react";

export default function FeaturedImage() {
  const basePath =
    process.env.NODE_ENV === "production" ? "/Emerging-Coders-Website" : "";

  return (
    <div className="max-w-xl">
      <div className="grid gap-5">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${basePath}/community_pictures/photo1.jpg`}
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${basePath}/photo3.png`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${basePath}/community_pictures/photo7.JPG`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${basePath}/community_pictures/photo9.JPG`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${basePath}/community_pictures/photo5.JPG`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${basePath}/community_pictures/photo11.jpg`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
