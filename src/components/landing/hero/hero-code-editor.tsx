import CodeEditorChatSection from "@/components/landing/hero/code-editor-chat-section";
import CodeEditorCodeSection from "@/components/landing/hero/code-editor-code-section";
import CodeEditorFileSection from "@/components/landing/hero/code-editor-file-section";
export default function HeroCodeEditor() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <div className="relative w-full max-w-7xl min-h-[40rem] px-2 mx-auto rounded-t-xl overflow-hidden shadow-2xl border-t border-l border-r border-white/10">
        <div className="absolute top-0 left-0 right-0 bg-zinc-900 h-8 flex items-center px-4 gap-2 z-10">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-white/60 text-xs">
            emerging-coders-website.js
          </div>
        </div>
        <div className="absolute inset-0 pt-8">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-2 bg-zinc-950 border-r border-white/10 flex flex-col p-2">
              <div className="text-white/70 text-xs mb-3">PROJECT</div>
              <CodeEditorFileSection />
            </div>
            <CodeEditorCodeSection />
            <CodeEditorChatSection />
          </div>
        </div>
      </div>
    </div>
  );
}
