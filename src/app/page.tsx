import Hero from "@/components/landing/hero/hero";
import AboutusPhotoGrid from "@/components/landing/about/about-us-photos";
import AboutusCards from "@/components/landing/about/about-us-cards";
import PastEventsSection from "@/components/landing/about/past-events";
import MeetTheExec from "@/components/landing/meet-the-exec/meet-the-exec";
import EmergingCodersTestimonials from "@/components/testimonials-marquee";
import LandingPageFAQ from "@/components/landing/faq/landing-page-faq";
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <AboutusPhotoGrid />
      <AboutusCards />
      <PastEventsSection />
      <MeetTheExec />
      {/* <EmergingCodersTestimonials /> */}
      <LandingPageFAQ />
    </div>
  );
}
