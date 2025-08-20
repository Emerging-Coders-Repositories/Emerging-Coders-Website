import { testimonials } from '@/constants/testimonial-marquee';
import type { Testimonial } from '@/types/testimonials-marquee';

export const createColumns = (): Testimonial[][] => {
  const columns: Testimonial[][] = [[], [], [], [], []];
  testimonials.forEach((testimonial, index) => {
    columns[index % 5].push(testimonial);
  });
  return columns;
};
