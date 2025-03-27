import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sponsors | Emerging Coders",
  description:
    "Partner with Northwestern University's community of First-Generation and Low-Income technologists.",
};

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden mb-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(79,70,229,0.3),rgba(0,0,0,0)_70%)] opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_100%,rgba(192,38,211,0.25),rgba(0,0,0,0)_65%)] opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_100%,rgba(56,189,248,0.25),rgba(0,0,0,0)_65%)] opacity-90"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-t from-indigo-900/30 to-transparent blur-xl"></div>
      <div className="container mx-auto px-4 py-2 flex flex-col items-center justify-between min-h-screen relative z-10">
        <div className="flex-1 flex flex-col items-center text-center max-w-10/12 mx-auto">
          <h1 className="mt-24 sm:py-30 text-6xl sm:text-[clamp(4.125rem,4.6250rem+_6.3333vw,_6.625rem)] font-semibold -tracking-4 text-balance !leading-[0.9] sm:!leading-[0.85] md:!leading-[clamp(4.563rem,3.0289rem+_5.1136vw,_7.938rem)] text-white">
            Support the future of
            <br />
            Technology
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-10 -mt-6 sm:-mt-20 font-mono">
            Partner with Northwestern University&apos;s community of
            First-Generation and Low-Income technologists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/sponsorship_packet.pdf"
              target="_blank"
              className="px-6 py-3 bg-white/90 text-black rounded-md hover:bg-gray-200 transition-colors font-mono"
            >
              BECOME A SPONSOR
            </Link>
          </div>
          <div className="w-full relative z-10 mt-16">
            <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
              COMPANIES WE&apos;VE WORKED WITH
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
              <div className="h-12 w-48 flex items-center justify-center">
                <Image
                  src="/logos/google.svg"
                  alt="Google"
                  width={140}
                  height={46}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="h-12 w-48 flex items-center justify-center">
                <Image
                  src="/logos/adobe.svg"
                  alt="Google"
                  width={140}
                  height={46}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="h-12 w-48 flex items-center justify-center">
                <Image
                  src="/logos/duolingo.svg"
                  alt="Google"
                  width={140}
                  height={46}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="h-12 w-48 flex items-center justify-center">
                <Image
                  src="/logos/deloitte.svg"
                  alt="Google"
                  width={140}
                  height={46}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
