import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Cpu, Snowflake } from 'lucide-react';
import { ChatMessage } from '../types';

const AdelBot: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    // Initial state empty - Bot is silent
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const newUserMsg: ChatMessage = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newUserMsg]);
        setInputValue('');
        setIsTyping(true);

        // The "Ekko Logic"
        setTimeout(() => {
            setIsTyping(false);
            const botResponse: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: "عادل قالي متكلمش دلوقتي 🥶",
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
            
        }, 2000); 
    };

    return (
        // Changed container to relative/w-full to fit in flow under countdown
        <div className="w-full max-w-xl mx-auto flex flex-col items-center">
            
            <div className="w-full">
                
                <AnimatePresence>
                    {messages.length > 0 && (
                        <motion.div 
                            className="mb-4 space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar px-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                        >
                            {messages.map((msg) => ( 
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div 
                                        className={`
                                            max-w-[85%] px-5 py-3 rounded-2xl text-base font-cairo leading-relaxed shadow-lg
                                            ${msg.sender === 'user' 
                                                ? 'bg-cyan-900/40 border border-cyan-500/30 text-cyan-50 rounded-br-none' 
                                                : 'bg-white/5 border border-white/10 backdrop-blur-2xl text-white rounded-bl-none frost-glass'}
                                        `}
                                        dir="rtl"
                                    >
                                        {msg.sender === 'bot' && (
                                            <div className="flex items-center gap-2 mb-1.5 text-[11px] text-cyan-200/60 font-mono uppercase tracking-widest">
                                                <Cpu size={12} /> Ekko
                                            </div>
                                        )}
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="px-5 py-4 rounded-2xl rounded-bl-none bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-1.5 frost-glass">
                                        <span className="w-1.5 h-1.5 bg-cyan-200 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 bg-cyan-200 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 bg-cyan-200 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Chat Input */}
                <motion.form 
                    onSubmit={handleSendMessage}
                    className="relative group w-full"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative flex items-center gap-3 p-2 bg-[#0a0a0c]/80 border border-white/10 backdrop-blur-2xl rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-cyan-500/30 transition-colors duration-300 ring-1 ring-white/5">
                        <div className="pl-4 pr-2 text-cyan-200/40">
                            <Snowflake size={20} className="animate-[spin_10s_linear_infinite]" />
                        </div>
                        <input 
                            ref={inputRef}
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask Ekko regarding the future..."
                            className="flex-grow bg-transparent border-none outline-none text-white font-grotesk placeholder-white/30 text-base h-11 w-full"
                        />
                        <button 
                            type="submit"
                            disabled={!inputValue.trim() || isTyping}
                            className={`
                                p-3 rounded-full transition-all duration-300 flex items-center justify-center
                                ${!inputValue.trim() || isTyping ? 'bg-white/5 text-white/20' : 'bg-cyan-400 text-black hover:bg-cyan-300 hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)]'}
                            `}
                        >
                            <Send size={18} className={!inputValue.trim() ? "ml-0" : "ml-0.5"} />
                        </button>
                    </div>
                </motion.form>
            </div>
        </div>
    );
};

export default AdelBot;