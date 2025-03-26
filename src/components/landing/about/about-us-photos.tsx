import Image from "next/image";
import { images } from "@/constants/about-us-image-gallery";

export default function AboutusPhotoGrid() {
  const getImageSize = (aspectRatio: string) => {
    if (aspectRatio === "portrait") {
      return "col-span-1 row-span-2";
    } else if (aspectRatio === "landscape") {
      return "col-span-2 row-span-1";
    } else if (aspectRatio === "landscape-short") {
      return "col-span-2 row-span-1";
    } else {
      return "col-span-1 row-span-1";
    }
  };

  return (
    <div className="bg-black py-24 sm:py-32 min-h-screen">
      <div className="max-w-[110rem] mx-auto px-8">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-32">
          <div className="lg:w-6/12 mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-8 flex flex-col">
              <h2 className="text-5xl font-semibold -tracking-4 mb-6 text-white">
                About Emerging Coders
              </h2>
              <p className="font-mono text-sm leading-relaxed text-zinc-400 mb-4">
                Emerging Coders is a community for FGLI (First-generation,
                Low-income) students who are interested in Tech. Our purpose is
                to enable students in the club improve their skills (e.g.,
                coding projects, networking etc.), provide mentorship and
                resources throughout your college experience, and to create
                meaningful projects.
              </p>
              <p className="font-mono text-sm leading-relaxed text-zinc-400 mb-6">
                We host workshops, networking events, and provide resources to
                help students succeed in their tech careers. Join us to connect
                with peers who share similar backgrounds and aspirations.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 w-full">
            <div className="flex flex-col gap-4 lg:hidden">
              {images.slice(0, 4).map((image) => (
                <div
                  key={`mobile-${image.id}`}
                  className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 group"
                  style={{
                    height:
                      image.aspectRatio === "portrait" ? "500px" : "300px",
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
                      <p className="text-white font-medium">Image {image.id}</p>
                      <p className="text-zinc-300 text-sm font-mono">
                        {image.aspectRatio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:grid grid-cols-4 auto-rows-[200px] gap-4">
              {images.map((image) => (
                <div
                  key={`desktop-${image.id}`}
                  className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 group ${getImageSize(
                    image.aspectRatio
                  )}`}
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
          </div>
        </div>
      </div>
    </div>
  );
}
