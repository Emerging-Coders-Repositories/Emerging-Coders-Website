"use client";
import React from "react";

export default function CTA() {
  return (
    <div className="w-full bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 md:max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              Join Emerging Coders Today
            </h1>
            <div className="mt-10">
              <button className="bg-white text-black font-bold text-base font-mono py-4 px-6 rounded-md hover:bg-gray-200 transition-colors flex items-center">
                <span className="mr-3 w-6 h-6 bg-gray-800 inline-block"></span>
                JOIN NOW
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/5 lg:w-1/3 mt-10 md:mt-0 flex items-center justify-center">
            <svg
              className="w-full max-w-md h-auto ml-auto"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M140 40 L60 160"
                strokeWidth="16"
                strokeLinecap="round"
                stroke="#7B42F6"
                fill="none"
              />

              <path
                d="M60 40 L60 80 L40 100 L60 120 L60 160"
                strokeWidth="16"
                strokeLinecap="round"
                stroke="#7B42F6"
                fill="none"
              />

              <path
                d="M140 40 L140 80 L160 100 L140 120 L140 160"
                strokeWidth="16"
                strokeLinecap="round"
                stroke="#7B42F6"
                fill="none"
              />

              <circle cx="140" cy="40" r="12" fill="#7B42F6" />

              <circle cx="60" cy="160" r="12" fill="#7B42F6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
