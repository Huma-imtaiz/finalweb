import React from "react";
import { SectionHeading, Reveal, Chip } from "./Shared.jsx";

const groups = [
  { cat: "AI & Automation", items: ["OpenAI API", "LangChain", "RAG", "n8n", "Make", "Vapi", "GoHighLevel"] },
  { cat: "Machine Learning & Data", items: ["Python", "SQL", "scikit-learn", "XGBoost", "Pandas", "NumPy"] },
  { cat: "Business Intelligence", items: ["Power BI", "Tableau", "KPI Dashboards"] },
  { cat: "Tools & Infrastructure", items: ["PostgreSQL", "MongoDB", "REST APIs", "Git", "GitHub"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
      <SectionHeading index="05" title="Technical Expertise" />
      <div className="space-y-6">
        {groups.map((g, i) => (
          <Reveal key={g.cat} delay={i * 50}>
            <div>
              <div className="font-label text-xs uppercase tracking-wide text-inkrose-400 dark:text-blush-100/50 mb-2.5">{g.cat}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Chip
                    key={it}
                    className="bg-blush-50 dark:bg-inkrose-800 text-blush-600 dark:text-blush-200 border-blush-200 dark:border-blush-500/20"
                  >
                    {it}
                  </Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
