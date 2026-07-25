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
    role: "Agentic AI Developer",
    org: "Bitzsol Digital · Rawalpindi, Punjab, Pakistan · Hybrid",
    date: "11/2025 – 06/2026",
    type: "Full-time",
    bullets: [
      "Designed and deployed agentic AI systems using LangChain and the OpenAI API, enabling autonomous multi-step task execution across client workflows.",
      "Built and orchestrated tool-using AI agents integrated with n8n and CRM platforms to automate lead handling, data lookups, and customer follow-ups.",
      "Implemented RAG-based knowledge retrieval for agents to ground responses in company-specific documentation, improving response accuracy.",
      "Collaborated with cross-functional teams to translate business requirements into agent workflows, reducing manual intervention in repetitive processes.",
    ],
  },
  {
    role: "AI Automation Specialist",
    org: "Oraion · Ireland · Remote",
    date: "09/2025 – 12/2025",
    type: "Contract",
    bullets: [
      "Built multi-step AI automation workflows using n8n and Make.ai, reducing manual processing time by 60% for client onboarding pipelines.",
      "Developed a RAG-based internal Q&A chatbot using LangChain and the OpenAI API, enabling teams to query 500+ documents in natural language.",
      "Integrated Vapi voice AI into a customer support workflow, cutting average call handling time by 35%.",
      "Created Power BI dashboards to track KPIs from structured and unstructured data sources for weekly business reviews.",
    ],
  },
  {
    role: "Virtual Assistant",
    org: "NSOL · Rawalpindi, Punjab, Pakistan · On-site",
    date: "09/2024 – 10/2025",
    type: "Full-time",
    bullets: [
      "Managed and optimized GoHighLevel (GHL) CRM workflows, including pipelines, automations, website development, IDX integration, and client communication sequences.",
      "Conducted lead generation activities including prospect research, list building, and outreach coordination.",
      "Supported WordPress site maintenance and multi-platform social media marketing campaigns.",
    ],
  },
  {
    role: "Data Analyst",
    org: "Goldbar Tech Pvt Ltd · PWD, Rawalpindi · On-site",
    date: "07/2024 – 09/2024",
    type: "Internship",
    bullets: [
      "Cleaned and transformed 200K+ row datasets using Pandas and NumPy, improving model input quality by 30%.",
      "Built and tuned XGBoost classification models achieving 91% accuracy on a customer churn prediction task.",
      "Automated weekly reporting pipelines in Python and collaborated with senior data scientists on NLP tasks including text classification and sentiment analysis.",
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
