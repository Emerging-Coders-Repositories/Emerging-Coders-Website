import Hero from "@/components/landing/hero/hero";
import FeatureCards from "@/components/landing/about/about-us-cards";
import MeetTheExec from "@/components/landing/meet-the-exec/meet-the-exec";
import EmergingCodersTestimonials from "@/components/testimonials-marquee";
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <FeatureCards />
      <MeetTheExec />
      <EmergingCodersTestimonials />
    </div>
  );
}
