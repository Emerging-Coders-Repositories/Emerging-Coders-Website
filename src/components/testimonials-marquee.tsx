'use client';

import { useEffect, useState } from 'react';

import TestimonialCard from '@/components/testimonial-card';
import { Marquee } from '@/components/ui/marquee';
import { createColumns } from '@/utils/create-marquee-columns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function EmergingCodersTestimonials(): React.ReactElement {
  const columns = createColumns();
  const allTestimonials = columns.flat();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);
  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? allTestimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === allTestimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const renderCarousel = () => {
    return (
      <div className='relative w-full px-4 py-8'>
        <div className='relative overflow-hidden rounded-xl'>
          <div className='relative w-full'>
            <TestimonialCard
              key={`carousel-card-${currentIndex}`}
              name={allTestimonials[currentIndex].name}
              company={allTestimonials[currentIndex].company}
              body={allTestimonials[currentIndex].body}
              img={allTestimonials[currentIndex].img}
            />
          </div>
          <button
            className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 focus:outline-none z-20'
            onClick={goToPrevious}
            aria-label='Previous testimonial'
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 focus:outline-none z-20'
            onClick={goToNext}
            aria-label='Next testimonial'
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className='flex justify-center mt-4 space-x-2'>
          {allTestimonials.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-purple-600' : 'bg-zinc-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };
  const renderMarquee = () => {
    return (
      <div className='relative flex-1 flex justify-between w-full px-2 min-h-0'>
        {columns.map((column, i) => (
          <div key={`col-${i}`} className='max-w-md'>
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

        <div className='pointer-events-none absolute inset-0 z-10'>
          <div className='absolute inset-y-0 left-0 w-90 bg-gradient-to-r from-black via-black to-transparent'></div>
          <div className='absolute inset-y-0 right-0 w-90 bg-gradient-to-l from-black via-black to-transparent'></div>
          <div className='absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black'></div>
          <div className='absolute inset-x-0 bottom-0 h-84 bg-gradient-to-t from-black via-black to-transparent'></div>
        </div>
      </div>
    );
  };

  return (
    <div className='w-full 4xl:max-w-8/12 mx-auto md:h-[150vh] h-auto text-white'>
      <div className='md:h-full flex flex-col w-full 3xl:mx-auto'>
        <div className='text-center py-6'>
          <h2 className='text-3xl md:text-5xl font-bold mb-4'>
            What Our Members Say
          </h2>
          <p className='text-lg md:text-xl text-gray-400 pb-6 md:pb-12 px-4'>
            We&apos;re building the largest community for first-generation and
            low-income students in technology at Northwestern University.
          </p>
        </div>
        {isMobile ? renderCarousel() : renderMarquee()}
      </div>
    </div>
  );
}
