export default function CodeEditorFileSection() {
  return (
    <>
      <div className="flex items-center py-1 px-2 rounded bg-purple-800/20 text-white/90 mb-1 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        src
      </div>
      <div className="flex items-center py-1 px-2 rounded text-white/70 hover:bg-white/5 text-sm ml-4">
        components
      </div>
      <div className="flex items-center py-1 px-2 rounded text-white/70 hover:bg-white/5 text-sm ml-4">
        pages
      </div>
      <div className="flex items-center py-1 px-2 rounded text-white/70 hover:bg-white/5 text-sm ml-4">
        styles
      </div>
      <div className="flex items-center py-1 px-2 rounded text-white/70 hover:bg-white/5 text-sm">
        public
      </div>
    </>
  );
}
