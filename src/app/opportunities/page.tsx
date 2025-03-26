import Link from "next/link";
import { opportunitiesPageList } from "@/constants/opportunities-page-list";

export const metadata = {
  title: "Opportunities | Emerging Coders",
  description:
    "Curated list of internships, new graduate positions, and career development programs for FGLI students in technology.",
};

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <header className="mb-16">
          <h1 className="text-7xl font-bold mb-6">Opportunities</h1>
          <p className="text-lg text-zinc-500 max-w-2xl font-mono">
            Curated list of internships, new graduate positions, and career
            development programs for FGLI students in technology.
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunitiesPageList.map((category) => (
              <Link key={category.id} href={category.route} className="group">
                <div className="h-full relative rounded-xl border border-zinc-800 bg-neutral-950 hover:bg-gradient-to-br hover:from-purple-600 hover:via-purple-500/50 hover:to-fuchsia-500/40 transition-colors duration-300 cursor-pointer">
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-900/30 text-purple-300 mb-4">
                        {category.type}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">
                        {category.title}
                      </h3>
                      <p className="text-white/80 font-mono">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-sm font-mono text-zinc-500">
                        {category.postedDate}
                      </div>
                      <div className="text-sm font-mono text-purple-400 group-hover:text-white transition-colors">
                        {category.totalListings}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Resources & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-zinc-800 bg-neutral-950 p-6">
              <h3 className="text-xl font-bold mb-4">
                Technical Interview Prep
              </h3>
              <p className="text-white/80 mb-4 font-mono">
                Get access to our technical interview preparation resources,
                practice problems, and mock interview opportunities.
              </p>
              <Link
                href="/blog/technical-interviews"
                className="text-purple-400 hover:text-purple-300 font-mono text-sm"
              >
                View Resources →
              </Link>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-neutral-950 p-6">
              <h3 className="text-xl font-bold mb-4">Mentorship Program</h3>
              <p className="text-white/80 mb-4 font-mono">
                Connect with experienced mentors who can guide you through your
                internship search and career development.
              </p>
              <Link
                href="/mentorship"
                className="text-purple-400 hover:text-purple-300 font-mono text-sm"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
