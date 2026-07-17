import React from "react";
import {
  Workflow, Bot, Phone, Users, LineChart, BarChart3, Plug, Terminal,
} from "lucide-react";
import { SectionHeading, Reveal, Card } from "./Shared.jsx";

const services = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    text: "End-to-end automation workflows that connect business applications and remove repetitive tasks — processing information, updating databases, notifying teams, and triggering actions automatically.",
    tags: ["n8n workflow development", "Make automation scenarios", "Zapier integrations", "Webhook implementation", "REST API integrations", "Automated notifications", "Data synchronization", "Document processing", "Client onboarding automation", "Lead management automation", "Reporting automation"],
  },
  {
    icon: Bot,
    title: "AI Agents and LLM Applications",
    text: "AI-powered systems that understand business information, answer questions, process documents, and assist teams or customers using OpenAI, LangChain, RAG, and vector databases.",
    tags: ["RAG-based knowledge assistants", "Internal company chatbots", "Customer support assistants", "Document Q&A systems", "AI lead qualification agents", "Prompt engineering", "AI-powered workflow decisions", "Knowledge base automation"],
  },
  {
    icon: Phone,
    title: "AI Voice Agents",
    text: "Conversational voice agents that handle customer calls, qualify leads, answer common questions, schedule appointments, and update CRM records — integrated with Vapi, n8n, webhooks, and APIs.",
    tags: ["Customer support", "Appointment booking", "Lead qualification", "Sales follow-ups", "Customer verification", "FAQs", "CRM data collection", "Call routing & escalation"],
  },
  {
    icon: Users,
    title: "CRM and Lead Automation",
    text: "Automated CRM workflows that organize contacts, manage pipelines, and maintain consistent communication so leads never slip through the cracks.",
    tags: ["GoHighLevel workflow setup", "Lead pipeline automation", "Lead capture integrations", "Automated email & SMS sequences", "Appointment booking workflows", "Contact segmentation", "Lead status updates", "Follow-up automation", "CRM reporting", "Website-to-CRM integrations"],
  },
  {
    icon: LineChart,
    title: "Data Science and Machine Learning",
    text: "Data-driven solutions that help businesses identify patterns, predict outcomes, and make better decisions — from data cleaning to predictive modeling and evaluation.",
    tags: ["Data cleaning & preparation", "Exploratory data analysis", "Predictive modeling", "Customer churn prediction", "Classification models", "Sentiment analysis", "Text classification", "Feature engineering", "Model evaluation", "Business data interpretation"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence and Dashboards",
    text: "Transforming business data into clear dashboards that help teams track performance and understand important trends.",
    tags: ["Power BI dashboards", "Tableau dashboards", "Automated KPI reporting", "Executive business reports", "Operational performance dashboards", "Financial trend analysis", "Customer behavior analysis", "Data aggregation pipelines", "Real-time business insights"],
  },
  {
    icon: Plug,
    title: "API and Systems Integration",
    text: "Integrations that let the platforms your business already runs on securely exchange data and trigger automated actions.",
    tags: ["REST API integrations", "Webhook development", "Database integrations", "CRM integrations", "AI API integrations", "Payment workflow integrations", "Cross-platform synchronization", "Third-party connections", "Custom Python scripts"],
  },
  {
    icon: Terminal,
    title: "DevOps and Technical Operations",
    text: "Supporting the reliable delivery and operation of automation applications, data solutions, and AI systems — from environments to deployments.",
    tags: ["Git & GitHub workflows", "Bash scripting", "Environment setup", "Automation deployment support", "API testing & monitoring", "Database configuration", "Workflow troubleshooting", "Technical documentation", "Version control", "Process improvement"],
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-5xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
      <SectionHeading index="02" title="Services" />
      <Reveal>
        <p className="text-inkrose-500 dark:text-blush-100/70 max-w-2xl mb-10">
          AI automation and technical solutions designed around your business.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <Card className="p-6 h-full">
              <div className="w-11 h-11 rounded-xl bg-blush-100 dark:bg-blush-500/15 text-blush-500 dark:text-blush-300 flex items-center justify-center mb-4">
                <s.icon size={20} />
              </div>
              <div className="font-display font-semibold text-base text-inkrose-900 dark:text-white mb-2">
                {s.title}
              </div>
              <p className="text-sm text-inkrose-500 dark:text-blush-100/70 leading-relaxed mb-4">
                {s.text}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="font-label text-[11px] px-2.5 py-1 rounded-full bg-blush-50 dark:bg-inkrose-900 text-blush-500 dark:text-blush-200 border border-blush-100 dark:border-blush-500/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
