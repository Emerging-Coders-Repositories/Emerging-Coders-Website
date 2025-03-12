import { Marquee } from "@/components/ui/marquee";
import { createColumns } from "@/utils/create-marquee-columns";
import TestimonialCard from "@/components/testimonial-card";

const EmergingCodersTestimonials: React.FC = () => {
  const columns = createColumns();

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden">
      <div className="h-full flex flex-col w-full 3xl:mx-auto">
        <div className="text-center py-6">
          <h2 className="text-5xl font-bold mb-1">Loved by NU students</h2>
          <p className="text-xl text-gray-400">
            Building community for First-Generation and Low-Income students in
            tech
          </p>
        </div>

        <div className="relative flex-1 flex justify-between w-full px-4">
          {columns.map((column, i) => (
            <div key={`col-${i}`} className="w-96 lg:w-[420px]">
              <Marquee
                className={`h-full [--gap:1rem] [--duration:40s]`}
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

          <div className="pointer-events-none absolute inset-y-0 left-0 w-80 bg-gradient-to-r from-black via-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-80 bg-gradient-to-l from-black via-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black"></div>
        </div>
      </div>
    </div>
  );
};

export default EmergingCodersTestimonials;
