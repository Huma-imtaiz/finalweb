import React from "react";
import { SectionHeading, Reveal, Card } from "./Shared.jsx";

const results = [
  { num: "60%", label: "Reduction in Manual Processing", text: "Created multi-step automation workflows for client onboarding processes, significantly reducing repetitive manual work." },
  { num: "500+", label: "Documents Searchable Through AI", text: "Developed a RAG-based internal assistant that enabled teams to search and question hundreds of documents using natural language." },
  { num: "35%", label: "Faster Call Handling", text: "Integrated an AI voice system into a customer support workflow to improve response efficiency." },
  { num: "<2min", label: "Lead Response Time", text: "Developed an automotive sales assistant that qualified leads, scheduled appointments, and updated CRM records automatically." },
  { num: "91%", label: "Machine Learning Accuracy", text: "Built and optimized an XGBoost customer churn prediction model using large-scale telecom data." },
  { num: "200K+", label: "Rows Processed", text: "Cleaned, transformed, and prepared large datasets using Python, Pandas, and NumPy." },
];

export default function Results() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
      <SectionHeading index="03" title="Measurable Results" />
      <Reveal>
        <p className="text-inkrose-500 dark:text-blush-100/70 max-w-2xl mb-10">
          Automation built around business outcomes.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map((r, i) => (
          <Reveal key={r.label} delay={i * 60}>
            <Card className="p-5 h-full bg-gradient-to-br from-blush-50 to-white dark:from-inkrose-800 dark:to-inkrose-900">
              <div className="font-display font-semibold text-3xl text-blush-500 dark:text-blush-300">{r.num}</div>
              <div className="font-label text-sm font-semibold text-inkrose-900 dark:text-white mt-2">{r.label}</div>
              <p className="text-xs text-inkrose-400 dark:text-blush-100/60 mt-2 leading-relaxed">{r.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
