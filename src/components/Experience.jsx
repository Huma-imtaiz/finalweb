import React from "react";
import { motion } from "framer-motion";
import { SectionHeading, Reveal, Card } from "./Shared.jsx";

const experience = [
  {
    role: "Actively job hunting",
    org: "Seeking full-time AI Automation Engineer roles",
    date: "06/2026 – Present",
    type: "Open to work",
    active: true,
    bullets: [],
  },
  {
    role: "AI Automation Specialist",
    org: "Oraion · Remote",
    date: "01/2026 – 05/2026",
    type: "Contract",
    bullets: [
      "Designed and implemented multi-step AI automation workflows using n8n and Make.",
      "Built a RAG-powered internal question-answering assistant using LangChain and the OpenAI API.",
      "Connected AI voice technology with customer support workflows using Vapi.",
      "Created business intelligence dashboards for structured and unstructured data.",
      "Improved operational efficiency by automating client onboarding and reducing manual processing time.",
    ],
  },
  {
    role: "Virtual Assistant and CRM Automation Support",
    org: "Niku Solutions – NSOL · Rawalpindi, Pakistan",
    date: "07/2025 – 12/2025",
    type: "Full-time",
    bullets: [
      "Managed GoHighLevel CRM pipelines, workflow automations, and communication sequences.",
      "Supported lead generation through prospect research, list building, and outreach coordination.",
      "Maintained WordPress websites and supported digital marketing activities.",
      "Assisted with social media campaign management across multiple platforms.",
      "Helped improve the organization of customer communication and lead management processes.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Goldbar Tech Pvt Ltd · Rawalpindi, Pakistan",
    date: "07/2024 – 10/2024",
    type: "Internship",
    bullets: [
      "Processed and transformed datasets containing more than 200,000 records.",
      "Built and optimized an XGBoost customer churn model with 91% accuracy.",
      "Automated recurring business reports using Python.",
      "Supported NLP tasks, including sentiment analysis and text classification.",
      "Worked with senior data scientists to improve data quality and ML performance.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
      <SectionHeading index="04" title="Professional Experience" />

      <div className="relative pl-9">
        <div className="absolute left-[9px] top-2 bottom-2 w-[3px] bg-gradient-to-b from-blush-300 dark:from-blush-500/50 via-blush-200 dark:via-blush-500/20 to-transparent rounded-full" />
        {experience.map((e, i) => (
          <Reveal key={e.role} delay={i * 90} className="relative mb-9 last:mb-0">
            <div
              className={`absolute -left-9 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white dark:bg-inkrose-900 ${
                e.active ? "border-blush-500" : "border-blush-300 dark:border-blush-500/40"
              }`}
            >
              <motion.div
                animate={e.active ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-2 h-2 rounded-full ${e.active ? "bg-blush-500" : "bg-blush-300 dark:bg-blush-500/50"}`}
              />
            </div>
            <Card className="p-6">
              <div className="flex flex-wrap justify-between gap-2 mb-1">
                <div>
                  <div className="font-display font-semibold text-lg text-inkrose-900 dark:text-white">{e.role}</div>
                  <div className="text-blush-500 dark:text-blush-300 text-sm mt-0.5">{e.org}</div>
                </div>
                <div className="font-label text-xs text-inkrose-400 dark:text-blush-100/50 whitespace-nowrap">{e.date}</div>
              </div>
              <div className="font-label text-[11px] uppercase tracking-wide text-blush-300 dark:text-blush-500/60 mb-2">{e.type}</div>
              {e.bullets.length > 0 && (
                <ul className="mt-2 space-y-2 text-sm text-inkrose-500 dark:text-blush-100/70 leading-relaxed list-disc list-inside marker:text-blush-400">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
