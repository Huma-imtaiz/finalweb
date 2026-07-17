import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-inkrose-950/80 backdrop-blur-md border-b border-blush-100 dark:border-blush-500/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-semibold text-lg text-blush-600 dark:text-blush-300"
        >
          Huma Imtiaz
        </a>

        <div className="hidden md:flex gap-7 font-label text-sm text-inkrose-500 dark:text-blush-100/70">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-blush-600 dark:hover:text-blush-300 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            whileHover={{ scale: 1.12, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-blush-200 dark:border-blush-500/30 text-blush-500 dark:text-blush-300 hover:bg-blush-50 dark:hover:bg-blush-500/10 hover:border-blush-400 dark:hover:border-blush-300 transition-colors"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -8px rgba(244,80,143,0.55)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="hidden sm:inline-flex font-label text-sm px-4 py-2 rounded-full bg-blush-500 text-white hover:bg-blush-600 transition-colors shadow-sm"
          >
            Discuss Your Project
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center border border-blush-200 dark:border-blush-500/30 text-blush-500 dark:text-blush-300"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </motion.button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 font-label text-sm text-inkrose-500 dark:text-blush-100/70 bg-white dark:bg-inkrose-950 border-b border-blush-100 dark:border-blush-500/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-1.5 hover:text-blush-600 dark:hover:text-blush-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
