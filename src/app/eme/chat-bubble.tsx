import { Message } from "@/constants/eme"
export function ChatBubble({ msg, index }: {msg: Message, index: number}) {
    return (
        <div
            key={`${msg.id}-${index}`}
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
    )
}