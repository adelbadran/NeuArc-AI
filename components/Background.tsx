import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
    return (
        <div className="fixed inset-0 w-full h-full bg-[#020203] z-0 overflow-hidden">
            {/* Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

            {/* Glowing Orb 1 (Top Left) */}
            <motion.div
                className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/20 blur-[120px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Glowing Orb 2 (Bottom Right) */}
            <motion.div
                className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-900/20 blur-[130px]"
                animate={{
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Center Pulse */}
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-indigo-900/10 blur-[100px] mix-blend-screen"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1, 0.8]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        </div>
    );
};

export default Background;