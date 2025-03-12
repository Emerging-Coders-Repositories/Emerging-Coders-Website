import Hero from "@/pages/landing/hero/hero";
import AboutUsCards from "@/pages/landing/about/about-us-cards";
import MeetTheExec from "@/pages/landing/meet-the-exec/meet-the-exec";
import EmergingCodersTestimonials from "@/components/testimonials-marquee";
export default function Page() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Hero />
      <AboutUsCards />
      <MeetTheExec />
      <EmergingCodersTestimonials />
    </div>
  );
}
