import { Button } from "@/components/ui/button";
import HeroCodeEditor from "@/pages/landing/hero/hero-code-editor";
export default function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center px-4 py-24">
      <div className="w-full max-w-[1808px] h-svh min-h-[20rem] md:max-h-[min(80rem,300vw)] md:min-h-[48rem] mx-auto">
        <div className="bg-gradient-to-br from-indigo-900 via-purple-600 via-30% via-fuchsia-500 via-60% via-violet-600 via-70% to-sky-400 rounded-xl relative overflow-hidden">
          <div className="text-center px-6 mb-10">
            <h1 className="py-16 text-[clamp(4.125rem,_1.6250rem_+_8.3333vw,_9.625rem)] font-semibold -tracking-4 text-balance !leading-[0.85] md:!leading-[clamp(4.563rem,_3.0289rem_+_5.1136vw,_7.938rem)] text-white">
              Emerging Coders
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto">
              Northwestern University's Community of First-Generation and
              Low-Income Technologists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-900 hover:bg-white/90 rounded-md text-lg px-8 py-6">
                Join Emerging Coders
              </Button>
            </div>
          </div>
          <HeroCodeEditor />
        </div>
      </div>
    </main>
  );
}
