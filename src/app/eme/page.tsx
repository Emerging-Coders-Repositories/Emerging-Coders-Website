"use client"
import { useState } from "react";
import { Message, thinkingMessage } from "@/constants/eme";
import { fetchEmeResponse, fetchEmeHealth } from "./fetch-eme";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChatBubble }  from "./chat-bubble";

export default function emePage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)

  const isHealthCheck = false;

  const submitPrompt = async (e: React.FormEvent) => {
    e.preventDefault();

    if(isHealthCheck) {
      healthCheck();
      return;
    }

    if (isLoading || prompt.trim() === "") return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: prompt,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);
    setPrompt("");

    try {
      const stream = await fetchEmeResponse(prompt);
      const reader = stream.getReader();
      const decoder = new TextDecoder();
      
      let botResponse = '';
      const botMsg: Message = {
        id: Date.now().toString(),
        text: '',
        sender: "bot",
        timestamp: new Date(),
      };
      
      setIsStreaming(true);
      setMessages(prev => [...prev, botMsg]);
      setIsLoading(false);
      
      while (true) {
        const { done, value} = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true});
        botResponse += chunk;

        // Update message with accumulated text
        setMessages((prev) =>
          prev.map((msg) => (msg.id === botMsg.id ? { ...msg, text: botResponse } : msg)),
        );
      }
    } catch (error) {
      console.error("Error retrieving eme output:", error);

      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  }

  const healthCheck = async () => {
    try {
      const response = await fetchEmeHealth();
      console.log("Health is: ", response);
    } catch(error) {
      console.error("Error retrieving eme health: ", error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center px-30 py-40 space-y-4">
      <h1 className="text-white text-center md:text-left text-5xl md:text-7xl font-bold tracking-tight leading-tight ">
        eme  
      </h1>
      <Popover>
        <PopoverTrigger asChild className="text-m leading-relaxed text-gray-400 font-mono text-center">
          <Button>About</Button>
        </PopoverTrigger>
        <PopoverContent
          className="flex flex-col items-center justify-center w-[clamp(22rem,70vw,40rem)] border-gray-800 z-50 bg-black/95 shadow-xl p-6 outline-none"
        >
          <div className="z-50 outline-none flex flex-col space-y-10 w-full">
            <p className="text-m leading-relaxed text-gray-400 font-mono text-center">
              eme is the EMCO chatbot that answers your questions about navigating CS at Northwestern. We hope it can be another point of reference for underclass students getting started. 
            </p>
            <p className="text-m leading-relaxed text-gray-400 font-mono text-center">
              Answers are based on historical EMCO GroupMe messages. eme uses {" "}
              <a href="https://en.wikipedia.org/wiki/Retrieval-augmented_generation" className="underline">
                RAG
              </a> 
              {" "} to pull relevant messages into its context. 
            </p>
            <p className="text-m leading-relaxed text-gray-400 font-mono text-center">
              NOTE: eme can make mistakes. Emerging Coders, its affiliated members and Executive Board do not endorse its messages.
            </p>
          </div>
        </PopoverContent>
      </Popover>

      <div className="bg-[#202020] py-6 px-10 rounded w-3/4">
        <div className="w-full space-y-3">
          <div className="flex flex-col">
            {messages.length === 0 && 
              <p className="text-m leading-relaxed text-gray-400 font-mono text-center py-20">
                Ask me something like "should I take CS214 and CS211 at the same time?"
              </p>
            }
          </div>
          {messages.map((msg, i) => (
            <ChatBubble key={msg.id} msg={msg} index={i} />
          ))}
          {isLoading && 
            <ChatBubble 
              msg={thinkingMessage}
              index={messages.length + 1} 
            />
          }
        </div>

        <div className="flex flex-col w-full my-6">
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