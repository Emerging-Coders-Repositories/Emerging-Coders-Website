import Image from "next/image";
import { eventImages } from "@/constants/about-us-image-gallery";

export default function EventsSection() {
  const getPositionClass = (size: string) => {
    switch (size) {
      case "large-right":
        return "lg:col-start-2 lg:col-span-2 lg:row-span-2";
      case "medium-left":
        return "lg:col-start-1 lg:col-span-1 lg:row-span-1";
      case "medium-right":
        return "lg:col-start-3 lg:col-span-1 lg:row-span-1";
      case "small-left":
        return "lg:col-start-1 lg:col-span-1 lg:row-span-1";
      case "small-right":
        return "lg:col-start-3 lg:col-span-1 lg:row-span-1";
      default:
        return "lg:col-span-1 lg:row-span-1";
    }
  };

  return (
    <div className="bg-black py-12 sm:py-32 min-h-11/12 max-w-7xl mx-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <div className="lg:top-8 flex justify-center flex-col">
              <h2 className="text-5xl font-semibold -tracking-4 mb-6 text-white">
                What We've Done
              </h2>
              <p className="font-mono text-sm leading-relaxed text-zinc-400 mb-4">
                We've hosted a variety of event types ranging from social events
                to professional development events. Our events are open to all
                Northwestern students and we encourage you to attend our events
                to learn more about Emerging Coders and the FGLI community at
                Northwestern.
              </p>
            </div>
          </div>
          <div className="lg:w-7/12">
            <div className="flex flex-col gap-4 lg:hidden">
              {eventImages.map((image) => (
                <div
                  key={`mobile-${image.id}`}
                  className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 group aspect-square"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white font-medium">{image.alt}</p>
                      <p className="text-zinc-300 text-sm font-mono">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 lg:auto-rows-[minmax(150px,auto)] gap-4">
              {eventImages.map((image) => {
                const isLarge = image.size === "large-right";

                return (
                  <div
                    key={`desktop-${image.id}`}
                    className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 group ${getPositionClass(
                      image.size
                    )} ${isLarge ? "" : "aspect-square"}`}
                    style={{
                      transform: `translateY(${Math.random() * 20 - 10}px)`, // Random slight offset for visual interest
                      ...(isLarge && { aspectRatio: "1/1" }), // Ensure large images maintain square aspect ratio
                    }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <p className="text-white font-medium">{image.alt}</p>
                        <p className="text-zinc-300 text-sm font-mono">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
