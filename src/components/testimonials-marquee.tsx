import { Marquee } from "@/components/ui/marquee";
import { createColumns } from "@/utils/create-marquee-columns";
import TestimonialCard from "@/components/testimonial-card";

export default function EmergingCodersTestimonials(): React.ReactElement {
  const columns = createColumns();

  return (
    <div className="w-full 4xl:max-w-8/12 mx-auto h-[150vh] text-white">
      <div className="h-full flex flex-col w-full 3xl:mx-auto">
        <div className="text-center py-6">
          <h2 className="text-5xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-400 pb-12">
            We're building the largest community for first-generation and
            low-income students in technology at Northwestern University.
          </p>
        </div>

        <div className="relative flex-1 flex justify-between w-full px-2 min-h-0">
          {columns.map((column, i) => (
            <div key={`col-${i}`} className="max-w-md">
              <Marquee
                className={`h-full [--gap:0.5rem] [--duration:85s]`}
                pauseOnHover
                vertical
                reverse={i % 2 === 1}
              >
                {column.map((item, j) => (
                  <TestimonialCard
                    key={`card-${i}-${j}`}
                    name={item.name}
                    company={item.company}
                    body={item.body}
                    img={item.img}
                  />
                ))}
                {column.map((item, j) => (
                  <TestimonialCard
                    key={`card-dup-${i}-${j}`}
                    name={item.name}
                    company={item.company}
                    body={item.body}
                    img={item.img}
                  />
                ))}
              </Marquee>
            </div>
          ))}

          <div className="pointer-events-none absolute inset-0 z-10">
            {/* Left gradient */}
            <div className="absolute inset-y-0 left-0 w-90 bg-gradient-to-r from-black via-black to-transparent"></div>
            {/* Right gradient */}
            <div className="absolute inset-y-0 right-0 w-90 bg-gradient-to-l from-black via-black to-transparent"></div>
            {/* Top gradient */}
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black"></div>
            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-84 bg-gradient-to-t from-black via-black to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
