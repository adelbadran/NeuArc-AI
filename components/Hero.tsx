import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center z-10 w-full max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
            >
                {/* Decorative Pill - Frozen Status */}
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/10 border border-cyan-200/20 backdrop-blur-md mx-auto shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                    <span className="text-sm"></span>
                    <span className="text-[10px] md:text-xs font-mono text-cyan-100/80 tracking-widest uppercase">
                        System Status: FROZEN
                    </span>
                </div>

                {/* Main Arabic Text */}
                <h1 
                    className="font-cairo font-black text-6xl md:text-8xl lg:text-9xl leading-tight md:leading-snug tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-50 to-cyan-200/60 drop-shadow-[0_0_30px_rgba(165,243,252,0.15)]"
                    dir="rtl"
                >
                    قاعد ببني ليكو <span className="text-cyan-400 inline-block relative glitch-text" data-text="2050">2050</span>
                </h1>
                
                {/* Subtitle removed for mystery */}
                <motion.div 
                    className="mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />
            </motion.div>
        </div>
    );
};

export default Hero;