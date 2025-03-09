import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/pages/landing/hero/hero";
export default function Page() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full py-6 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
            Emerging Coders
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/board"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Board
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/sponsors"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Sponsors
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex border-white/20 text-white hover:bg-white/10 text-sm"
          >
            Join Us
          </Button>
          <Button variant="ghost" className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <Hero />

      {/* About Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            About Emerging Coders
          </h2>
          <p className="text-lg text-white/80 text-center max-w-3xl mx-auto">
            Emerging Coders is a community for FGLI (First-generation,
            Low-income) students who are interested in Tech. Our purpose is to
            enable students in the club improve their skills (e.g., coding
            projects, networking etc.), provide mentorship and resources
            throughout your college experience, and to create meaningful
            projects.
          </p>
        </div>
      </section>
    </div>
  );
}
