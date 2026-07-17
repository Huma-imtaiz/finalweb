import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles as SparkleIcon } from "lucide-react";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }) {
  return (
    <span className="font-label text-xs px-3 py-1 rounded-full border border-blush-300 text-blush-600 dark:border-blush-500/40 dark:text-blush-300">
      {children}
    </span>
  );
}

export function SectionHeading({ index, title }) {
  return (
    <Reveal className="flex items-baseline gap-3 mb-10">
      <Eyebrow>{index}</Eyebrow>
      <h2 className="font-display font-semibold text-2xl md:text-3xl text-inkrose-900 dark:text-white">
        {title}
      </h2>
    </Reveal>
  );
}

export function Blobs({ variant = "default" }) {
  const positions = useMemo(
    () => [
      { size: 300, top: "-60px", left: "-60px", delay: 0 },
      { size: 320, top: "20px", right: "-90px", delay: 3 },
      { size: 260, bottom: "-70px", left: "30%", delay: 6 },
    ],
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {positions.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl animate-floatBlob bg-blush-200/70 dark:bg-blush-500/20"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function SparkleField({ count = 14 }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 9,
        duration: 8 + Math.random() * 6,
        size: 8 + Math.random() * 10,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="absolute animate-sparkleUp"
          style={{
            left: `${s.left}%`,
            bottom: "-20px",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          <SparkleIcon
            size={s.size}
            className="text-blush-400 dark:text-blush-300"
            strokeWidth={1.5}
          />
        </span>
      ))}
    </div>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-blush-100 dark:border-blush-500/15 bg-white dark:bg-inkrose-800/60 shadow-sm hover:shadow-lg hover:shadow-blush-200/40 dark:hover:shadow-blush-500/10 hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function Chip({ children, className = "" }) {
  return (
    <span
      className={`font-label text-xs px-3.5 py-1.5 rounded-full border transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 ${className}`}
    >
      {children}
    </span>
  );
}
