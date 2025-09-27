"use client"
import { useState, useEffect } from "react";
import { Message, botDummy, userDummy } from "@/constants/eme";

export default function emePage() {
  const [messages, setMessages] = useState<Message[]>([userDummy, botDummy, userDummy, botDummy, userDummy, botDummy])
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

  }, [])

  const submitPrompt = async (e: React.FormEvent) => {
    if (isLoading || prompt == "") 
      return;

  }

  return (
    <div className="flex flex-col items-center px-50 py-40 bg-pink-200 space-y-4">
      <h1 className="text-center md:text-left text-5xl md:text-7xl font-bold tracking-tight leading-tight">
        eme  
      </h1>
      <p className="mt-5 text-m leading-relaxed text-gray-400 font-mono max-w-md text-center">
        eme is the Emerging Coders chatbot that answers your questions about navigating CS at Northwestern. Answers are based on EMCO GroupMe messages.
      </p>
      
      <div className="w-full min-h-[200px] bg-green-200 space-y-3 p-4">
        {messages.map((msg, i) => (
          <div
            key={`${msg.id}-${i}`}
            className={`flex py-1 ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={
                "rounded-2xl p-3 text-sm md:text-base max-w-[80%] " +
                (msg.sender === 'bot'
                  ? "bg-neutral-950 border-2 border-zinc-800 text-white shadow-sm"
                  : "bg-white/90 border border-zinc-300 text-black shadow-sm")
              }
              role="article"
              aria-label={msg.sender === 'bot' ? 'Bot message' : 'User message'}
            >
              <div className="whitespace-pre-wrap leading-relaxed">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full">
        <form 
          onSubmit={submitPrompt}
          className="flex flex-row bg-yellow-200 "
        >
          <input 
            type="text"
            value={prompt}
            placeholder="Ask eme a question..."
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-black border-zinc-800 text-white focus-visible:ring-purple-500/30 px-5 py-2"
          />
          <button 
            type="submit"
            className="bg-white text-black font-bold text-base font-mono py-4 px-6 rounded-md hover:bg-gray-200 transition-colors flex items-center mx-auto md:mx-0"
          >
            Ask
          </button>
        </form>
      </div>
    </div>
  )
}