import type { Testimonial } from "@/types/testimonials-marquee";
import { testimonials } from "@/constants/testimonial-marquee";

export const createColumns = (): Testimonial[][] => {
  const columns: Testimonial[][] = [[], [], [], [], []];
  testimonials.forEach((testimonial, index) => {
    columns[index % 5].push(testimonial);
  });
  return columns;
};
