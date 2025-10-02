export const EME_API_BASE_URL = 'https://eme-yr7i.onrender.com'

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const botDummyMessage: Message = {
    id: Date.now().toString(),
    text: "CS336 is generally considered to be a challenging course. Students have mentioned that it involves a mix of coding and proofs, which can make it harder compared to other classes. However, many also note that if you engage with the material and focus on understanding concepts like greedy algorithms and dynamic programming, you can gain a solid grasp of these important topics. It's recommended to take it if you're looking to prepare for technical interviews, but be prepared for the workload and complexity. If you're unsure, you might want to ask others about their specific experiences or tips for succeeding in the course.",
    sender: 'bot',
    timestamp: new Date()
};

export const userDummyMessage: Message = {
    id: Date.now().toString(),
    text: "Is CS336 a difficult course?",
    sender: 'user',
    timestamp: new Date()
};

export const thinkingMessage: Message = {
    id: Date.now().toString(),
    text: "eme is thinking...",
    sender: 'bot',
    timestamp: new Date()
};