import React from 'react';
import { motion } from 'framer-motion';
import Background from './components/Background';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import AdelBot from './components/AdelBot';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen text-white font-grotesk overflow-hidden selection:bg-cyan-500/30">
      {/* Dynamic Liquid Background */}
      <Background />

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-8 pt-20 pb-32 w-full max-w-7xl mx-auto">
            {/* Hero Section */}
            <Hero />
            
            {/* Countdown Section */}
            <div className="mt-12 w-full flex justify-center">
                <Countdown targetDate="2026-06-01T00:00:00" />
            </div>

            {/* Bot Interface - Now in flow under countdown */}
            <div className="mt-16 w-full flex justify-center">
                <AdelBot />
            </div>
        </main>

        {/* Floating Context Elements (Decoration) */}
        <FloatingTechStack />
      </div>
    </div>
  );
};

const FloatingTechStack: React.FC = () => {
    const techs = [
        { name: "LLM", x: "10%", y: "20%", delay: 0 },
        { name: "Neural Networks", x: "85%", y: "15%", delay: 2 },
        { name: "Computer Vision", x: "15%", y: "70%", delay: 4 },
        { name: "NLP", x: "80%", y: "65%", delay: 1 },
        { name: "Deep Learning", x: "50%", y: "85%", delay: 3 },
    ];

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {techs.map((t, i) => (
                <motion.div
                    key={i}
                    className="absolute px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-xs text-white/40 font-mono tracking-widest uppercase"
                    style={{ left: t.x, top: t.y }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: t.delay,
                        ease: "easeInOut",
                    }}
                >
                    {t.name}
                </motion.div>
            ))}
        </div>
    );
};

export default App;