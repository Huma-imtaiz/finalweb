import React from "react";
import { GraduationCap, Award, Target, Layers, Sparkles as SparklesIcon, LineChart, MessagesSquare, RefreshCw } from "lucide-react";
import { SectionHeading, Reveal, Card } from "./Shared.jsx";

const why = [
  { icon: Target, title: "Business-Focused Thinking", text: "Every solution begins with the business problem rather than the technology." },
  { icon: Layers, title: "End-to-End Development", text: "I can support a project from initial workflow design through implementation, integration, testing, and optimization." },
  { icon: SparklesIcon, title: "Practical AI Implementation", text: "I focus on AI solutions that provide measurable value instead of adding unnecessary complexity." },
  { icon: LineChart, title: "Data-Driven Decisions", text: "My data science background helps me design systems that collect, process, and use information effectively." },
  { icon: MessagesSquare, title: "Clear Communication", text: "I explain technical concepts in straightforward business language throughout the project." },
  { icon: RefreshCw, title: "Continuous Improvement", text: "After launch, I analyze performance and identify opportunities to improve accuracy, speed, and reliability." },
];

const industries = [
  "Professional services", "Real estate", "Automotive businesses", "Recruitment companies",
  "Customer support teams", "E-commerce businesses", "Marketing agencies", "Startups",
  "Small and medium-sized businesses", "Data-driven organizations",
];

export default function EducationWhy() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal>
            <Card className="p-6 h-full bg-gradient-to-br from-blush-50 to-white dark:from-inkrose-800 dark:to-inkrose-900">
              <div className="flex items-center gap-2 text-blush-500 dark:text-blush-300 font-display font-semibold text-sm mb-4">
                <GraduationCap size={18} /> Education
              </div>
              <p className="text-sm font-semibold text-inkrose-900 dark:text-white">Bachelor of Science in Data Science</p>
              <p className="text-sm text-inkrose-500 dark:text-blush-100/70">Air University, Islamabad, Pakistan</p>
              <p className="text-xs text-inkrose-400 dark:text-blush-100/50 mt-3 leading-relaxed">
                My academic background in data science has provided a strong foundation in
                programming, statistics, machine learning, data analysis, artificial
                intelligence, and problem-solving.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card className="p-6 h-full bg-gradient-to-br from-blush-50 to-white dark:from-inkrose-800 dark:to-inkrose-900">
              <div className="flex items-center gap-2 text-blush-500 dark:text-blush-300 font-display font-semibold text-sm mb-4">
                <Award size={18} /> Certifications
              </div>
              <ul className="text-sm text-inkrose-500 dark:text-blush-100/70 space-y-1.5 list-disc list-inside marker:text-blush-400">
                <li>Python for Data Science, AI and Development — IBM</li>
                <li>Machine Learning — IBM</li>
                <li>DataFest Volunteer Experience</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
        <SectionHeading index="07" title="More Than Technical Implementation" />
        <Reveal>
          <p className="text-inkrose-500 dark:text-blush-100/70 max-w-2xl mb-10">
            A successful automation project requires understanding the business
            process, identifying the right automation opportunities, handling
            data correctly, creating reliable workflows, and ensuring the final
            system is practical for the people using it.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <Card className="p-5 h-full">
                <div className="w-10 h-10 rounded-xl bg-blush-100 dark:bg-blush-500/15 text-blush-500 dark:text-blush-300 flex items-center justify-center mb-3">
                  <w.icon size={18} />
                </div>
                <div className="font-display font-semibold text-sm text-inkrose-900 dark:text-white mb-1.5">{w.title}</div>
                <p className="text-xs text-inkrose-400 dark:text-blush-100/60 leading-relaxed">{w.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-blush-100 dark:border-blush-500/10">
        <SectionHeading index="08" title="Solutions for Different Business Environments" />
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <span
                key={ind}
                className="font-label text-xs px-3.5 py-1.5 rounded-full bg-blush-50 dark:bg-inkrose-800 text-blush-600 dark:text-blush-200 border border-blush-200 dark:border-blush-500/20"
              >
                {ind}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
