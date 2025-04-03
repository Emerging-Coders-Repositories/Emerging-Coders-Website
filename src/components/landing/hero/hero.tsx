import HeroCodeEditor from '@/components/landing/hero/hero-code-editor';
import Link from 'next/link';

export default function Hero() {
  return (
    <main className='flex-1 flex flex-col items-center px-2 sm:px-4 relative mb-24 sm:mb-48'>
      <div className='w-full max-w-[113rem] h-auto mx-auto py-8 sm:py-18 mt-4 sm:mt-8 pb-4 sm:pb-8'>
        <div className='bg-gradient-to-br from-indigo-900 via-fuchsia-500 via-70% to-sky-400 rounded-xl relative overflow-hidden'>
          <div className='text-center px-4 sm:px-6 mb-6 sm:mb-10'>
            <h1 className='py-12 sm:py-30 text-5xl sm:text-[clamp(4.125rem,1.6250rem+_8.3333vw,_9.625rem)] font-semibold -tracking-4 text-balance !leading-[0.9] sm:!leading-[0.85] md:!leading-[clamp(4.563rem,3.0289rem+_5.1136vw,_7.938rem)] text-white'>
              Emerging Coders
            </h1>
            <p className='text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto font-mono -mt-6 sm:-mt-20'>
              Northwestern University&apos;s Community of First-Generation and
              Low-Income Technologists
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='https://groupme.com/join_group/89417887/c1x6DI3U'
                target='_blank'
                className='bg-white text-indigo-900 hover:bg-white/90 rounded-md text-lg px-4 py-2'
              >
                Join Today
              </Link>
            </div>
          </div>
          <HeroCodeEditor />
        </div>
      </div>
    </main>
  );
}
