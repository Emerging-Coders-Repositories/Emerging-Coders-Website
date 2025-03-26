"use client";

import React from "react";
import { BorderBeam } from "@/components/ui/border-beam";

export default function AboutusCards() {
  const features = [
    {
      title: "Mentorship",
      description:
        "We provide mentorship and support for underrepresented groups within Northwestern's Computer Science community. Our inclusive space welcomes students of all majors and backgrounds to learn and grow together.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      gradient: "from-violet-500/20 to-fuchsia-500/20",
      iconClass: "text-violet-500",
    },
    {
      title: "Technical Development",
      description:
        "We deliver accessible and inclusive technical opportunities through workshops, speaker events, and collaborative projects that help our members grow as developers, engineers, designers, and product managers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
        >
          <path d="M8 9h8"></path>
          <path d="M8 13h6"></path>
          <path d="M18 2a3 3 0 0 1 2.995 2.824L21 5v14a3 3 0 0 1-2.824 2.995L18 22H6a3 3 0 0 1-2.995-2.824L3 19V5a3 3 0 0 1 2.824-2.995L6 2h12z"></path>
        </svg>
      ),
      gradient: "from-blue-500/20 to-sky-500/20",
      iconClass: "text-blue-500",
    },
    {
      title: "Establish Community",
      description:
        "We foster a safe, welcoming, and inclusive community where members can lean on one another for support and guidance through their academic and professional journeys.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6"
        >
          <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 4.97 6 12 6 12s6-7.03 6-12Z"></path>
          <path d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
        </svg>
      ),
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconClass: "text-emerald-500",
    },
  ];

  return (
    <div className="w-full text-white py-28 px-4" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            What We Do At Emerging Coders
          </h2>
          <p className="text-xl text-white/70 font-mono">
            Creating a community of diverse technologists through mentorship,
            education, and support.
          </p>
          <div className="mt-8">
            <button className="font-mono bg-white text-black font-medium py-3 px-6 rounded-md hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
              JOIN OUR COMMUNITY
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.01] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]"
            >
              <div
                className={`absolute inset-0 opacity-20 bg-gradient-to-br ${feature.gradient}`}
              />
              <BorderBeam className="opacity-40" />

              <div className="relative h-full p-8 flex flex-col">
                <div
                  className={`w-12 h-12 mb-6 rounded-lg bg-white/10 flex items-center justify-center ${feature.iconClass}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-mono">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-base mb-6 flex-grow">
                  {feature.description}
                </p>
                {/* add these later, for now, we don't need them */}
                {/* <div className="mt-auto">
                  <button className="text-white/60 hover:text-white font-medium text-sm flex items-center gap-1 transition-colors group-hover:text-white/90">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
