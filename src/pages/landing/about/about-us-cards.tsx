"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";

export default function AboutUsCards() {
  const features = [
    {
      title: "Mentorship",
      description:
        "We aim to provide mentorship and support opportunities for underrepresented groups within the Northwestern Computer Science community and beyond. We are welcoming of all majors and backgrounds, and we hope to provide a safe space for students to learn and grow together.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Technical Development",
      description:
        "We strive to provide accessible and inclusive technical development opportunities for all of our members by hosting workshops, speaker events, and other events to help our members learn and grow as developers, engineers, designers, product managers, and more.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      ),
    },
    {
      title: "Establish Community",
      description:
        "We want to provide a safe, welcoming, and inclusive community for all of our members. We hope that we can all lean on one another for support and guidance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6h0"></path>
          <path d="M18 8a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6v-2"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 bg-black">
      <Card className="relative overflow-hidden border-none bg-gradient-to-r from-black to-gray-900 text-white">
        <ShineBorder
          borderWidth={3}
          duration={8}
          shineColor={["#6366F1", "#8B5CF6", "#EC4899"]}
        />
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tighter mb-2 text-white">
            What We Do At Emerging Coders
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3 py-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-900 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-4 p-2 rounded-full bg-indigo-900/50 text-indigo-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
