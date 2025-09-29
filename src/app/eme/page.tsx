"use client"
import { useState, useEffect } from "react";
import { Message, botDummy, userDummy } from "@/constants/eme";
import { fetchEme } from "./fetch-eme";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function emePage() {
  const [messages, setMessages] = useState<Message[]>([userDummy, botDummy, userDummy, botDummy, userDummy, botDummy])
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {

  // }, [])

  const submitPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || prompt.trim() === "") return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: prompt,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);
    setPrompt("")

    try {
      const { generation } = await fetchEme(prompt);
      const botMsg: Message = {
        id: Date.now().toString(),
        text: generation,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Error retrieving eme output:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center px-30 py-40 space-y-4">
      <h1 className="text-white text-center md:text-left text-5xl md:text-7xl font-bold tracking-tight leading-tight ">
        eme  
      </h1>
      <p className="text-m leading-relaxed text-gray-400 font-mono text-center">
        Ask me something like "should I take CS214 and CS211 at the same time?"
      </p>
      <Popover>
        <PopoverTrigger asChild className="text-m leading-relaxed text-gray-400 font-mono text-center">
          <Button>About</Button>
        </PopoverTrigger>
        <PopoverContent className="border-gray-800 z-50 bg-black/95 shadow-xl p-4 w-230 outline-none">
          <div className="z-50 outline-none">
            <p className="text-m leading-relaxed text-gray-400 font-mono text-center">
              eme is the EMCO chatbot that answers your questions about navigating CS at Northwestern.
            </p>
            <p className="text-m leading-relaxed text-gray-400 font-mono text-center">
              Answers are based on historical EMCO GroupMe messages.
            </p>
          </div>
        </PopoverContent>
      </Popover>
      <div className="bg-[#202020] py-6 px-10 rounded max-w-[1600px]">
        <div className="w-full min-h-[200px] space-y-3">
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

        <div className="flex flex-col w-full my-14">
          <form 
            onSubmit={submitPrompt}
            className="flex flex-row space-x-4"
            >
            <input 
              type="text"
              value={prompt}
              placeholder="Ask eme a question..."
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-black border-zinc-800 text-white focus-visible:ring-purple-500/30 px-5 py-2 rounded focus:outline-none"
              disabled={isLoading}
              />
            <button 
              type="submit"
              className="bg-white text-black font-bold text-base font-mono py-4 px-6 rounded-md hover:bg-gray-200 transition-colors flex items-center mx-auto md:mx-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              disabled={!prompt.trim() || isLoading}
              >
              Ask
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}