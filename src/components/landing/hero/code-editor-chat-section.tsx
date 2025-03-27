export default function CodeEditorChatSection() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-3 sm:p-4 border-b border-white/10 flex-1 overflow-y-auto">
        <div className="text-white font-medium mb-4">EMCO AI</div>
        <div className="flex flex-col space-y-4 sm:space-y-6">
          <div className="flex justify-end">
            <div className="bg-purple-600 rounded-lg rounded-tr-none p-2 text-xs text-white max-w-[85%]">
              How do I join Emerging Coders as a new FGLI student?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-zinc-800 rounded-lg rounded-tl-none p-2 text-xs text-white/90 max-w-[85%]">
              You can join by joining our GroupMe and following our Instagram.
              We&apos;re an open community of over 400 members focused on
              empowering FGLI students in tech.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-purple-600 rounded-lg rounded-tr-none p-2 text-xs text-white max-w-[85%]">
              What events are coming up this week?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-zinc-800 rounded-lg rounded-tl-none p-2 text-xs text-white/90 max-w-[85%]">
              Emerging Coders have weekly events on Thursdays from 5:30-6:30 PM.
              Check our Instagram or subscribe to our ListServ for updates. All
              events include networking, learning, and free food!
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto p-3 sm:p-4 border-t border-white/10">
        <div className="bg-zinc-800 rounded-lg p-2 flex items-center">
          <input
            type="text"
            placeholder="Ask about Emerging Coders..."
            className="bg-transparent text-white/80 text-xs w-full outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-purple-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
