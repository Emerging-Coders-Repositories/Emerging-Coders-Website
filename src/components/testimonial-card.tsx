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
    <div className="relative my-1 p-8 rounded-xl border border-zinc-800 bg-neutral-950  hover:bg-gradient-to-br hover:from-purple-600 hover:via-purple-500/50 hover:to-fuchsia-500/40 transition-colors duration-300 w-full">
      <div className="flex flex-col h-full justify-between min-h-[250px]">
        <p className="text-base text-white leading-relaxed font-mono mb-6">
          {body}
        </p>

        <div className="flex items-center gap-2 mt-auto">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={img}
              alt={`${name}'s avatar`}
              style={{ objectFit: "cover", objectPosition: "center" }}
              fill
            />
          </div>
          <div>
            <p className="text-xl font-mono font-medium text-white">{name}</p>
            <p className="text-base font-mono text-gray-500">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
