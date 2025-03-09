"use client";

import React from "react";
import { StaticBorder } from "@/components/ui/static-shine-border";

export default function FeatureCards() {
  const features = [
    {
      title: "Mentorship",
      description:
        "We aim to provide mentorship and support opportunities for underrepresented groups within the Northwestern Computer Science community and beyond. We are welcoming of all majors and backgrounds, and we hope to provide a safe space for students to learn and grow together.",
      image: (
        <div className="w-48 h-48 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="20" fill="#6366F1" />
                <circle cx="70" cy="30" r="20" fill="#8B5CF6" />
                <path d="M50 60 L30 85 L70 85 Z" fill="#EC4899" />
                <path
                  d="M20 50 C20 70, 80 70, 80 50"
                  stroke="#6366F1"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-10 h-10 bg-gray-800 rounded-md transform rotate-0 translate-x-4 translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-gray-800 rounded-md transform rotate-0 translate-x-4 translate-y-0"></div>
        </div>
      ),
      borderColors: ["#6366F1", "#8B5CF6", "#EC4899"],
      gradientAngle: 45,
    },
    {
      title: "Technical Development",
      description:
        "We strive to provide accessible and inclusive technical development opportunities for all of our members by hosting workshops, speaker events, and other events to help our members learn and grow as developers, engineers, designers, product managers, and more.",
      image: (
        <div className="w-48 h-48 relative flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2">
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 18h.01"></path>
                <path d="M8 21h8"></path>
                <path d="M12 15v3"></path>
                <path d="M17 3a2 2 0 0 1 2 2v1.55A6 6 0 0 1 22 12v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a6 6 0 0 1 3-5.45V5a2 2 0 0 1 2-2h10Z"></path>
              </svg>
            </div>
            <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <line x1="3" x2="21" y1="9" y2="9"></line>
                <line x1="3" x2="21" y1="15" y2="15"></line>
                <line x1="9" x2="9" y1="9" y2="21"></line>
                <line x1="15" x2="15" y1="9" y2="21"></line>
              </svg>
            </div>
            <div className="w-12 h-12 bg-gradient-to-tr from-orange-500 to-red-500 rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 15V9h3v6H4z"></path>
                <path d="M10 4v16h3V4h-3z"></path>
                <path d="M17 10v10h3V10h-3z"></path>
              </svg>
            </div>
            <div className="w-12 h-12 bg-gradient-to-tr from-green-500 to-teal-500 rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <path d="m3 9 18-6"></path>
                <path d="m3 21 18-6"></path>
              </svg>
            </div>
            <div className="w-12 h-12 bg-gradient-to-tr from-yellow-500 to-amber-500 rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div className="w-12 h-12 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="m10 14 11-11"></path>
              </svg>
            </div>
          </div>
        </div>
      ),
      borderColors: ["#3B82F6", "#10B981", "#F59E0B"],
      gradientAngle: 135,
    },
    {
      title: "Establish Community",
      description:
        "We want to provide a safe, welcoming, and inclusive community for all of our members. We hope that we can all lean on one another for support and guidance.",
      image: (
        <div className="w-48 h-48 relative flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gray-800 rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#community-gradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <defs>
                  <linearGradient
                    id="community-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-0 border-2 border-purple-500 opacity-30 rounded-full w-36 h-36 m-auto animate-pulse"></div>
            <div
              className="absolute inset-0 border border-pink-500 opacity-20 rounded-full w-44 h-44 m-auto animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      ),
      borderColors: ["#8B5CF6", "#EC4899", "#F43F5E"],
      gradientAngle: 225,
    },
  ];

  return (
    <div className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">
            What We Do At Emerging Coders
          </h1>
          <p className="text-xl font-mono">
            Creating a community of diverse technologists through mentorship,
            education, and support.
          </p>
          <div className="mt-8">
            <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
              JOIN OUR COMMUNITY
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-gray-800 p-6"
            >
              <StaticBorder
                borderWidth={2}
                borderColor={feature.borderColors}
                gradientAngle={feature.gradientAngle}
              />

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-6 font-mono text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image moved to the bottom */}
              <div className="h-56 flex items-center justify-center">
                {feature.image}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
