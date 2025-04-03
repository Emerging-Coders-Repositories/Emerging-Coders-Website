import AboutusCards from '@/components/landing/about/about-us-cards';
import AboutusPhotoGrid from '@/components/landing/about/about-us-photos';
import PastEventsSection from '@/components/landing/about/past-events';
import LandingPageFAQ from '@/components/landing/faq/landing-page-faq';
import Hero from '@/components/landing/hero/hero';
import MeetTheExec from '@/components/landing/meet-the-exec/meet-the-exec';
import EmergingCodersTestimonials from '@/components/testimonials-marquee';

export default function Page() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Hero />
      <AboutusPhotoGrid />
      <AboutusCards />
      <PastEventsSection />
      <MeetTheExec />
      <EmergingCodersTestimonials />
      <LandingPageFAQ />
    </div>
  );
}
