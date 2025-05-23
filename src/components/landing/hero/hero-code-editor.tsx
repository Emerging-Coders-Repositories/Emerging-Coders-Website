import CodeEditorChatSection from '@/components/landing/hero/code-editor-chat-section';
import CodeEditorCodeSection from '@/components/landing/hero/code-editor-code-section';
import CodeEditorFileSection from '@/components/landing/hero/code-editor-file-section';

export default function HeroCodeEditor() {
  return (
    <div className='w-full px-2 sm:px-4 md:px-8 lg:px-12'>
      <div className='relative w-full max-w-7xl min-h-[30rem] sm:min-h-[40rem] px-1 sm:px-2 mx-auto rounded-t-xl overflow-hidden shadow-2xl border-t border-l border-r border-white/10'>
        <div className='absolute top-0 left-0 right-0 bg-zinc-900 h-8 flex items-center px-4 gap-2 z-10'>
          <div className='w-3 h-3 rounded-full bg-red-500'></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
          <div className='w-3 h-3 rounded-full bg-green-500'></div>
          <div className='ml-4 text-white/60 text-xs'>
            emerging-coders-website.js
          </div>
        </div>
        <div className='absolute inset-0 pt-8'>
          <div className='grid grid-cols-12 h-full'>
            <div className='col-span-12 md:col-span-2 bg-zinc-950 border-r border-white/10 flex-col p-2 hidden md:flex'>
              <div className='text-white/70 text-xs mb-3'>PROJECT</div>
              <CodeEditorFileSection />
            </div>
            <div className='col-span-12 md:col-span-7 bg-zinc-900 overflow-hidden'>
              <CodeEditorCodeSection />
            </div>
            <div className='col-span-3 bg-zinc-950 border-l border-white/10 hidden md:flex flex-col'>
              <CodeEditorChatSection />
            </div>
            <div className='md:hidden fixed bottom-4 right-4 flex space-x-2'>
              <button className='bg-purple-600 text-white rounded-full p-3 shadow-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
