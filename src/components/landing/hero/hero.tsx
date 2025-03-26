import { Button } from "@/components/ui/button";

import HeroCodeEditor from "@/components/landing/hero/hero-code-editor";
export default function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center px-4 relative ">
      <div className="w-full max-w-[113rem] h-auto mx-auto py-18 mt-8 pb-8">
        <div className="bg-gradient-to-br from-indigo-900 via-fuchsia-500  via-70% to-sky-400 rounded-xl relative overflow-hidden">
          <div className="text-center px-6 mb-10">
            <h1 className="py-30 text-[clamp(4.125rem,1.6250rem+_8.3333vw,_9.625rem)] font-semibold -tracking-4 text-balance !leading-[0.85] md:!leading-[clamp(4.563rem,3.0289rem+_5.1136vw,_7.938rem)] text-white">
              Emerging Coders
            </h1>
            <p className="text-xl md:text-xl text-white/90 mb-6 max-w-2xl mx-auto font-mono -mt-20">
              Northwestern University's Community of First-Generation and
              Low-Income Technologists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-900 hover:bg-white/90 rounded-md text-lg px-4 py-2">
                Join Today
              </Button>
            </div>
          </div>{" "}
          <HeroCodeEditor />
        </div>
      </div>
    </main>
  );
}
