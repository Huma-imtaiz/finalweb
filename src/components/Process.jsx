import React from "react";
import { SectionHeading, Reveal, Card } from "./Shared.jsx";

const steps = [
  { n: "01", title: "Discovery", text: "I review your current workflow, software, business requirements, and operational challenges." },
  { n: "02", title: "Solution Design", text: "I map the complete process and determine which tools, integrations, and AI capabilities are required." },
  { n: "03", title: "Development", text: "I build the workflows, integrations, dashboards, agents, or machine learning components." },
  { n: "04", title: "Testing", text: "I test the complete system using real-world scenarios and handle possible errors or exceptions." },
  { n: "05", title: "Deployment", text: "I help launch the solution and connect it with the required business environment." },
  { n: "06", title: "Optimization", text: "I review performance and improve the system based on business results and user feedback." },
];

export default function Process() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
      <SectionHeading index="09" title="How I Work" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 60}>
            <Card className="p-5 h-full">
              <div className="font-display font-semibold text-2xl text-blush-300 dark:text-blush-500/40 mb-2">{s.n}</div>
              <div className="font-display font-semibold text-sm text-inkrose-900 dark:text-white mb-1.5">{s.title}</div>
              <p className="text-xs text-inkrose-400 dark:text-blush-100/60 leading-relaxed">{s.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
