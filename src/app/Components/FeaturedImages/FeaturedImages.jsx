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
            src={`${basePath}/Photo3.png`}
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${basePath}/Photo8.png`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${basePath}/Photo5.png`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${basePath}/Photo1.png`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${basePath}/Photo4.png`}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={`${basePath}/Photo6.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
