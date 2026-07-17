import React from "react";
import { Search, PenTool, Hammer, TrendingUp } from "lucide-react";
import { SectionHeading, Reveal, Card } from "./Shared.jsx";

const approach = [
  { icon: Search, title: "Understand", text: "I begin by understanding the current business process, technical environment, and operational challenges." },
  { icon: PenTool, title: "Design", text: "I create a structured solution that connects the right tools, data sources, workflows, and AI capabilities." },
  { icon: Hammer, title: "Build", text: "I develop and integrate the system using reliable technologies and maintainable architecture." },
  { icon: TrendingUp, title: "Optimize", text: "I monitor the results, improve performance, and help the solution scale with the business." },
];

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
      <SectionHeading index="01" title="About Me" />

      <Reveal>
        <p className="text-inkrose-500 dark:text-blush-100/70 leading-relaxed max-w-3xl">
          I am Huma Imtiaz, a Data Science and AI Automation Specialist based in
          Islamabad, Pakistan. I specialize in designing AI-powered applications,
          business automation workflows, machine learning solutions, voice agents,
          data pipelines, and business intelligence dashboards.
        </p>
        <p className="text-inkrose-500 dark:text-blush-100/70 leading-relaxed max-w-3xl mt-4">
          My experience includes working with Python, SQL, n8n, Make, Zapier,
          GoHighLevel, Vapi, LangChain, OpenAI APIs, Power BI, Tableau, and modern
          database technologies — building automation systems that reduced manual
          processing time, RAG-based chatbots capable of searching hundreds of
          internal documents, AI voice agents for customer support and lead
          qualification, and machine learning models for customer churn prediction.
        </p>
        <p className="text-inkrose-500 dark:text-blush-100/70 leading-relaxed max-w-3xl mt-4">
          I approach every project from a business perspective. Before building a
          solution, I focus on understanding the process, identifying operational
          gaps, and determining where automation or AI can create the greatest
          measurable impact.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {approach.map((a, i) => (
          <Reveal key={a.title} delay={i * 80}>
            <Card className="p-5 h-full">
              <div className="w-10 h-10 rounded-xl bg-blush-100 dark:bg-blush-500/15 text-blush-500 dark:text-blush-300 flex items-center justify-center mb-3">
                <a.icon size={18} />
              </div>
              <div className="font-display font-semibold text-sm text-inkrose-900 dark:text-white mb-1.5">
                {a.title}
              </div>
              <p className="text-xs text-inkrose-400 dark:text-blush-100/60 leading-relaxed">
                {a.text}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
