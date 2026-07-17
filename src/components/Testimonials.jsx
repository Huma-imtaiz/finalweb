import React from "react";
import { Quote } from "lucide-react";
import { SectionHeading, Reveal, Card } from "./Shared.jsx";

const quotes = [
  "Add a testimonial describing how Huma improved a business workflow, reduced manual work, or communicated effectively during a project.",
  "Add a testimonial from a manager or client highlighting reliability, technical skills, and problem-solving ability.",
  "Add a testimonial about an AI automation, dashboard, CRM, or data science project.",
];

export default function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
      <SectionHeading index="10" title="What Clients and Teams Value" />
      <div className="grid md:grid-cols-3 gap-5">
        {quotes.map((q, i) => (
          <Reveal key={i} delay={i * 80}>
            <Card className="p-6 h-full">
              <Quote size={20} className="text-blush-300 dark:text-blush-500/50 mb-3" />
              <p className="text-sm italic text-inkrose-400 dark:text-blush-100/60 leading-relaxed">
                “{q}”
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
