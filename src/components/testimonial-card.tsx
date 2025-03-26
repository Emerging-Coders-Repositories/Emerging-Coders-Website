"use client";

import Image from "next/image";

interface TestimonialCardProps {
  img: string;
  name: string;
  company: string;
  body: string;
}

export default function TestimonialCard({
  img,
  name,
  company,
  body,
}: TestimonialCardProps) {
  return (
    <div className="relative my-1 p-6 rounded-xl border border-zinc-800 bg-neutral-950 hover:bg-gradient-to-br hover:from-purple-900/40 hover:via-purple-600/30 hover:to-fuchsia-500/40 transition-colors duration-300 w-full">
      <div className="flex flex-col h-full justify-between">
        <p className="text-md text-white/80 leading-relaxed font-mono mb-6">
          {body}
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={img}
              alt={`${name}'s avatar`}
              style={{ objectFit: "cover", objectPosition: "center" }}
              fill
            />
          </div>
          <div>
            <p className="text-lg font-mono font-medium text-white">{name}</p>
            <p className="text-sm font-mono text-gray-500">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
