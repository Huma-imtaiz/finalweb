import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, Reveal } from "./Shared.jsx";

const faqs = [
  { q: "What type of businesses do you work with?", a: "I work with startups, agencies, professional service companies, customer support teams, recruitment businesses, automotive companies, and other organizations looking to improve their operations using AI, automation, and data." },
  { q: "What processes can you automate?", a: "I can automate client onboarding, lead management, CRM updates, appointment booking, reporting, notifications, document processing, customer support, data synchronization, and many other repetitive business processes." },
  { q: "Which automation platforms do you use?", a: "I work with n8n, Make, Zapier, GoHighLevel, Vapi, webhooks, REST APIs, and custom Python solutions." },
  { q: "Can you build a custom AI chatbot?", a: "Yes. I can build AI assistants that answer customer questions or search internal business information using technologies such as OpenAI, LangChain, RAG, Pinecone, and private knowledge bases." },
  { q: "Can you build an AI voice agent?", a: "Yes. I can create voice agents for lead qualification, customer support, appointment scheduling, and CRM data collection using Vapi and automation platforms." },
  { q: "Do you provide data science services?", a: "Yes. I provide data cleaning, analysis, predictive modeling, machine learning development, customer churn analysis, NLP solutions, and business intelligence dashboards." },
  { q: "Can you integrate my existing business software?", a: "Yes. I can connect compatible platforms through REST APIs, webhooks, database integrations, and automation tools." },
  { q: "Can you create business dashboards?", a: "Yes. I develop Power BI, Tableau, and Python-based dashboards for performance reporting, operational monitoring, financial trends, and customer analysis." },
  { q: "Do you provide ongoing technical support?", a: "Ongoing support can be provided for workflow monitoring, troubleshooting, optimization, documentation, and future improvements." },
  { q: "Are you available for remote opportunities?", a: "Yes. I am available for remote AI automation, data science, technical integration, and DevOps-focused opportunities." },
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-blush-100 dark:border-blush-500/10 py-4">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="font-display font-semibold text-sm md:text-base text-inkrose-900 dark:text-white">
          {q}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} className="text-blush-500 dark:text-blush-300 shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-inkrose-500 dark:text-blush-100/70 leading-relaxed pt-3 pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
      <SectionHeading index="11" title="Frequently Asked Questions" />
      <Reveal>
        <div>
          {faqs.map((f, i) => (
            <FAQItem
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
