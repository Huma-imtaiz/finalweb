import React from "react";
import { ArrowRight, Database, Brain, Workflow, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Blobs, SparkleField, Eyebrow, Reveal } from "./Shared.jsx";

const stack = ["Python", "n8n", "Make", "OpenAI", "LangChain", "Vapi", "GHL", "SQL", "Power BI"];

export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden pt-20 pb-16">
      <Blobs />
      <SparkleField count={16} />

      <div className="max-w-4xl mx-auto px-6 relative">
        <Reveal>
          <Eyebrow>AI Automation Specialist · Data Science Engineer · DevOps-Focused Developer</Eyebrow>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl leading-tight text-inkrose-900 dark:text-white">
            AI Automation That{" "}
            <span
              className="bg-gradient-to-r from-blush-600 via-blush-400 to-blush-600 dark:from-blush-300 dark:via-blush-100 dark:to-blush-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
            >
              Moves Your Business Forward
            </span>
          </h1>
        </Reveal>

        <Reveal delay={170}>
          <p className="mt-6 text-inkrose-500 dark:text-blush-100/70 text-lg max-w-xl leading-relaxed">
            I design intelligent automation systems, AI-powered applications, data
            solutions, and reliable technical workflows that help businesses reduce
            manual work, respond faster, and make better decisions — from workflow
            automation and AI voice agents to machine learning models and business
            intelligence dashboards.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 14px 30px -8px rgba(244,80,143,0.5)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blush-500 text-white font-label font-semibold shadow-lg shadow-blush-200 dark:shadow-none hover:bg-blush-600 transition-colors"
            >
              Discuss Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="px-6 py-3 rounded-full border-2 border-blush-300 dark:border-blush-500/40 text-blush-600 dark:text-blush-200 font-label font-semibold hover:bg-blush-50 dark:hover:bg-blush-500/10 transition-colors"
            >
              View My Work
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={330}>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="font-label text-xs px-3 py-1 rounded-full bg-blush-50 dark:bg-inkrose-800 text-blush-500 dark:text-blush-200 border border-blush-100 dark:border-blush-500/20"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12 flex items-center gap-3 md:gap-6 overflow-x-auto pb-2">
            {[
              { icon: Database, label: "Data" },
              { icon: Brain, label: "Model" },
              { icon: Workflow, label: "Automate" },
              { icon: Rocket, label: "Ship" },
            ].map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <motion.div
                    animate={i === 3 ? { scale: [1, 1.08, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-14 h-14 rounded-full bg-white dark:bg-inkrose-800 border-2 border-blush-300 dark:border-blush-500/40 flex items-center justify-center text-blush-500 dark:text-blush-200"
                  >
                    <step.icon size={22} />
                  </motion.div>
                  <span className="font-label text-xs text-inkrose-400 dark:text-blush-100/50">
                    {step.label}
                  </span>
                </div>
                {i < 3 && (
                  <div className="h-[2px] w-8 md:w-14 bg-blush-200 dark:bg-blush-500/20 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}
