interface ImageProps {
  id: number;
  src: string;
  alt: string;
  order: number;
  aspectRatio: string;
  description?: string;
}

export const images: ImageProps[] = [
  {
    id: 1,
    src: "/about-us-photos/photo-1.jpg",
    alt: "Leetcode & Chill",
    order: 1,
    aspectRatio: "landscape",
    description: "Fall Quarter 2024",
  },
  {
    id: 2,
    src: "/about-us-photos/photo-2.jpeg",
    alt: "Emerging Coders x WiC Ice Cream Social",
    order: 2,
    aspectRatio: "landscape",
    description: "Spring Quarter 2024",
  },
  {
    id: 3,
    src: "/about-us-photos/photo-12.jpeg",
    alt: "JEB Gingerbread House Competition",
    order: 3,
    aspectRatio: "protrait",
    description: "Winter Quarter 2025",
  },
  {
    id: 5,
    src: "/about-us-photos/photo-6.jpeg",
    alt: "Emerging Coders x WiC Ice Cream Social",
    order: 5,
    aspectRatio: "landscape",
    description: "Spring Quarter 2024",
  },
  {
    id: 6,
    src: "/about-us-photos/photo-7.jpeg",
    alt: "Junior Executive Board Gingerbread House Competition",
    order: 6,
    aspectRatio: "portrait",
    description: "Winter Quarter 2025",
  },
  {
    id: 7,
    src: "/about-us-photos/photo-8.jpeg",
    alt: "Emerging Coders x Duoling",
    order: 7,
    aspectRatio: "portrait",
    description: "Winter Quarter 2025",
  },
  {
    id: 8,
    src: "/about-us-photos/photo-10.jpeg",
    alt: "Junior Executive Board Gingerbread House Competition",
    order: 8,
    aspectRatio: "landscape",
    description: "Winter Quarter 2025",
  },
  {
    id: 9,
    src: "/about-us-photos/photo-11.jpeg",
    alt: "Junior Executive Board Gingerbread House Competition",
    order: 9,
    aspectRatio: "protrait",
    description: "Winter Quarter 2025",
  },
  {
    id: 8,
    src: "/about-us-photos/photo-4.jpeg",
    alt: "Emerging Coders x WiC Ice Cream Social",
    order: 8,
    aspectRatio: "landscape",
    description: "Spring Quarter 2024",
  },
];
