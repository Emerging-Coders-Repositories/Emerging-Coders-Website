"use client";

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
    <div className="relative my-2 p-8 rounded-xl border border-zinc-800 bg-neutral-950 hover:bg-gradient-to-br hover:from-purple-900/40 hover:via-purple-600/30 hover:to-fuchsia-500/40 transition-colors duration-300 w-full">
      <div className="flex flex-col h-full justify-between">
        <p className="text-base text-white leading-relaxed font-mono mb-8">
          {body}
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={img}
              alt={`${name}'s avatar`}
              sizes="48px"
              style={{ objectFit: "cover" }}
              onError={(e) => {
                const imgElement = e.target as HTMLImageElement;
                imgElement.src = "https://via.placeholder.com/48";
                imgElement.srcset = "";
              }}
            />
          </div>
          <div>
            <p className="text-base font-mono font-medium text-white">{name}</p>
            <p className="text-sm font-mono text-gray-500">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
