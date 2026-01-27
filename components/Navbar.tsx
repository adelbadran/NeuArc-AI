import React, { useState } from 'react';
import { Network, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [lockedMessage, setLockedMessage] = useState<string | null>(null);

    const handleNavClick = (e: React.MouseEvent, item: string) => {
        e.preventDefault();
        setLockedMessage(`عادل قافلني دلوقتي 🥶`);
        setTimeout(() => setLockedMessage(null), 2000);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 backdrop-blur-sm bg-black/0">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="relative p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500 ice-border">
                        <Network className="w-6 h-6 text-cyan-200" />
                        <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-widest leading-none text-cyan-50">NeuArc</span>
                        <span className="text-[10px] text-cyan-200/50 tracking-[0.2em] leading-none">Artificial Inteligence</span>
                    </div>
                </div>

                {/* Navigation tabs removed as requested */}
                
                <button 
                    onClick={(e) => handleNavClick(e, 'Join')}
                    className="px-5 py-2 rounded-full bg-cyan-900/10 border border-cyan-500/30 text-xs tracking-wider hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-md text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                >
                    JOIN WAITLIST
                </button>
            </nav>

            {/* Frozen Locked Toast */}
            <AnimatePresence>
                {lockedMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="fixed top-24 right-6 md:right-12 z-[60] px-6 py-4 rounded-2xl frost-glass flex items-center gap-3 text-cyan-50 shadow-2xl"
                    >
                        <Lock className="w-5 h-5 text-cyan-300" />
                        <span className="font-cairo font-bold">{lockedMessage}</span>
                        <div className="absolute inset-0 rounded-2xl border border-cyan-200/20 pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;