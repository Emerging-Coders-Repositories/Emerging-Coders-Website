'use client';

import { useEffect, useState } from 'react';

import { images } from '@/constants/about-us-image-gallery';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

export default function AboutusPhotoGrid() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    trackMouse: true,
  });

  const getImageSize = (aspectRatio: string) => {
    if (aspectRatio === 'portrait') {
      return 'col-span-1 row-span-2';
    } else if (
      aspectRatio === 'landscape' ||
      aspectRatio === 'landscape-short'
    ) {
      return 'col-span-2 row-span-1';
    } else {
      return 'col-span-1 row-span-1';
    }
  };

  return (
    <div className='bg-black py-24 sm:py-32 min-h-screen' id='about'>
      <div className='max-w-[110rem] mx-auto px-8'>
        <div className='flex flex-col items-center justify-center lg:flex-row lg:gap-32'>
          <div className='lg:w-6/12 mb-10 lg:mb-0'>
            <div className='lg:sticky lg:top-8 flex flex-col'>
              <h2 className='text-5xl font-semibold -tracking-4 mb-6 text-white'>
                About Emerging Coders
              </h2>
              <p className='font-mono text-sm leading-relaxed text-zinc-400 mb-4'>
                Emerging Coders is a community for FGLI (First-generation,
                Low-income) students who are interested in Tech. Our purpose is
                to enable students in the club improve their skills (e.g.,
                coding projects, networking etc.), provide mentorship and
                resources throughout your college experience, and to create
                meaningful projects.
              </p>
              <p className='font-mono text-sm leading-relaxed text-zinc-400 mb-6'>
                We host workshops, networking events, and provide resources to
                help students succeed in their tech careers. Join us to connect
                with peers who share similar backgrounds and aspirations.
              </p>
            </div>
          </div>
          <div className='lg:w-6/12 w-full'>
            {isMobile ? (
              <div className='relative w-full px-4 py-8'>
                <div
                  {...swipeHandlers}
                  className='relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 group mx-auto w-full max-w-xs h-[350px] touch-pan-x'
                >
                  <Image
                    src={images[currentIndex].src || '/placeholder.svg'}
                    alt={images[currentIndex].alt}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                    <div className='p-4 w-full'>
                      <p className='text-white font-medium'>
                        {images[currentIndex].alt}
                      </p>
                      <p className='text-zinc-300 text-sm font-mono'>
                        {images[currentIndex].description}
                      </p>
                    </div>
                  </div>
                  <button
                    className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 z-20'
                    onClick={goToPrevious}
                    aria-label='Previous image'
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 z-20'
                    onClick={goToNext}
                    aria-label='Next image'
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                <div className='flex justify-center mt-4 space-x-2'>
                  {images.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-purple-600' : 'bg-zinc-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              // Desktop Grid
              <div className='hidden lg:grid grid-cols-4 auto-rows-[200px] gap-4'>
                {images.map((image, id) => (
                  <div
                    key={`desktop-${id}`}
                    className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 group ${getImageSize(
                      image.aspectRatio
                    )}`}
                  >
                    <Image
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      fill
                      className='object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                      <div className='p-4 w-full'>
                        <p className='text-white font-medium'>{image.alt}</p>
                        <p className='text-zinc-300 text-sm font-mono'>
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
