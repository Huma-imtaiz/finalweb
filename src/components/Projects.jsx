import React from "react";
import { Bot, Car, BookOpenText, BarChart3, Wand2, LineChart, Webhook } from "lucide-react";
import { SectionHeading, Reveal, Card } from "./Shared.jsx";

const projects = [
  {
    icon: Bot,
    title: "AI Voice Agent",
    subtitle: "Automated Customer Conversations at Scale",
    text: "Conversational AI voice agents for customer service, appointment scheduling, and lead qualification — designed to interact naturally, collect relevant information, and pass structured data into business systems.",
    tech: ["Vapi", "n8n", "Webhooks", "REST APIs", "CRM integrations"],
    impact: ["Faster customer response", "Reduced pressure on human support teams", "Consistent lead qualification", "Automated customer data collection"],
  },
  {
    icon: Car,
    title: "Automotive AI Customer Support Bot",
    subtitle: "Voice and Text-Based Sales Automation",
    text: "An end-to-end AI sales assistant for an automotive business that communicates through voice and text, qualifies requirements, schedules appointments, and updates CRM records automatically.",
    tech: ["Vapi", "n8n", "CRM"],
    impact: ["Lead response cut from hours to under 2 minutes", "78% lead qualification accuracy in testing", "Improved consistency across lead follow-up"],
  },
  {
    icon: BookOpenText,
    title: "RAG-Based Business Knowledge Assistant",
    subtitle: "Instant Answers From Internal Documents",
    text: "An internal AI assistant that let team members search and question more than 500 documents through natural language, using retrieval-augmented generation to find relevant information before responding.",
    tech: ["LangChain", "OpenAI API", "Pinecone", "Python", "Vector search"],
    impact: ["Faster access to internal knowledge", "Reduced time spent manually searching documents", "Improved team productivity", "More consistent information retrieval"],
  },
  {
    icon: BarChart3,
    title: "Automated Business Intelligence Dashboard",
    subtitle: "Real-Time Insights for Startups and SMEs",
    text: "A Python-powered data aggregation and visualization solution collecting information from news, social media, financial, and business sources, transformed into useful market and financial insights.",
    tech: ["Python", "Data aggregation", "Visualization"],
    impact: ["Faster business decision-making", "Centralized market information", "Automated data collection", "Clear visualization of important trends"],
  },
  {
    icon: Wand2,
    title: "AI-Driven Recruitment Automation",
    subtitle: "Smarter Candidate Screening and Hiring Workflows",
    text: "Automated workflows for job distribution, candidate screening, and applicant evaluation, reducing repetitive recruitment tasks and organizing candidate information.",
    tech: ["Automation", "AI screening"],
    impact: ["Automated job distribution", "Candidate data collection", "AI-assisted screening", "Applicant evaluation", "Recruitment workflow notifications"],
  },
  {
    icon: LineChart,
    title: "Customer Churn Prediction Dashboard",
    subtitle: "Identifying Customers at Risk of Leaving",
    text: "A machine learning system built on ~100,000 records of telecom data. The XGBoost model predicted churn with 91% accuracy, paired with an interactive Tableau dashboard supporting retention strategy.",
    tech: ["Python", "XGBoost", "Pandas", "Tableau"],
    impact: ["91% prediction accuracy", "Churn-risk visualization", "Supported retention strategy"],
  },
  {
    icon: Webhook,
    title: "n8n and Webhooks Toolkit",
    subtitle: "Reusable Components for Faster Automation Development",
    text: "Reusable workflow templates for common business processes, including payments, notifications, data transfers, and application integrations — built once, reused across projects.",
    tech: ["n8n", "Webhooks"],
    impact: ["Faster automation development", "Reliable reusable templates"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
      <SectionHeading index="04" title="Featured Projects" />
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <Card className="p-6 h-full flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-blush-100 dark:bg-blush-500/15 text-blush-500 dark:text-blush-300 flex items-center justify-center mb-4">
                <p.icon size={20} />
              </div>
              <div className="font-display font-semibold text-base text-inkrose-900 dark:text-white">{p.title}</div>
              <div className="font-label text-xs text-blush-500 dark:text-blush-300 mt-1 mb-3">{p.subtitle}</div>
              <p className="text-sm text-inkrose-500 dark:text-blush-100/70 leading-relaxed mb-4">{p.text}</p>

              <div className="mt-auto space-y-3">
                <div>
                  <div className="font-label text-[10px] uppercase tracking-wide text-inkrose-300 dark:text-blush-100/40 mb-1.5">Technologies</div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="font-label text-[11px] px-2.5 py-1 rounded-full bg-blush-50 dark:bg-inkrose-900 text-blush-500 dark:text-blush-200 border border-blush-100 dark:border-blush-500/15">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-label text-[10px] uppercase tracking-wide text-inkrose-300 dark:text-blush-100/40 mb-1.5">Business Impact</div>
                  <ul className="text-xs text-inkrose-500 dark:text-blush-100/70 space-y-1 list-disc list-inside marker:text-blush-400">
                    {p.impact.map((im) => (
                      <li key={im}>{im}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
