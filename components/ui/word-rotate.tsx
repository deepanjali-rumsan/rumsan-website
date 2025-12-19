"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: React.ReactNode[];
  duration?: number;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  className,
}: WordRotateProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span className={cn("inline-block relative overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-normal"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
