import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            <TimeUnit value={timeLeft.days} label="DAYS" />
            <TimeUnit value={timeLeft.hours} label="HOURS" />
            <TimeUnit value={timeLeft.minutes} label="MINUTES" />
            <TimeUnit value={timeLeft.seconds} label="SECONDS" />
        </div>
    );
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    return (
        <motion.div 
            className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-glass-bg border border-glass-border backdrop-blur-2xl shadow-xl relative overflow-hidden group"
            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
            
            {/* Gloss shine effect */}
            <div className="absolute -top-full -left-full w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/5 to-transparent transform rotate-45 transition-transform duration-1000 group-hover:translate-y-1/2 group-hover:translate-x-1/2" />

            <AnimatePresence mode="popLayout">
                <motion.span
                    key={value}
                    initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: "anticipate" }}
                    className="text-4xl md:text-6xl font-grotesk font-bold text-white relative z-10"
                >
                    {value < 10 ? `0${value}` : value}
                </motion.span>
            </AnimatePresence>
            
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-white/40 mt-2 font-mono relative z-10">
                {label}
            </span>
        </motion.div>
    );
};

export default Countdown;