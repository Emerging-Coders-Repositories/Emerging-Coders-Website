import Hero from "@/pages/landing/hero/hero";
import AboutUsCards from "@/pages/landing/about/about-us-cards";
import CursorTestimonials from "@/components/testimonials-marquee";
export default function Page() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Hero />
      <AboutUsCards />
      <CursorTestimonials />
    </div>
  );
}
