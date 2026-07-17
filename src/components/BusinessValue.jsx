import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Shared.jsx";

const outcomes = [
  "Reduce repetitive manual work",
  "Respond to leads and customers faster",
  "Connect disconnected business applications",
  "Improve reporting and decision-making",
  "Build scalable AI-powered workflows",
  "Create more reliable business operations",
];

export default function BusinessValue() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Reveal>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-inkrose-900 dark:text-white mb-4">
            Technology Should Make Your Business Simpler
          </h2>
          <p className="text-inkrose-500 dark:text-blush-100/70 leading-relaxed mb-4">
            Many businesses lose valuable time because of repetitive processes,
            disconnected software, slow lead response, and manual reporting.
          </p>
          <p className="text-inkrose-500 dark:text-blush-100/70 leading-relaxed mb-4">
            I help solve these problems by building intelligent systems that
            connect your applications, automate daily operations, organize
            business data, and improve customer communication.
          </p>
          <p className="text-inkrose-500 dark:text-blush-100/70 leading-relaxed">
            My focus is not simply to introduce AI into a business. My goal is
            to build solutions that are practical, measurable, secure, and
            aligned with the way the business actually operates.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-blush-100 dark:border-blush-500/15 bg-gradient-to-br from-blush-50 to-white dark:from-inkrose-800 dark:to-inkrose-900 p-6">
            <h3 className="font-label text-xs uppercase tracking-wide text-blush-500 dark:text-blush-300 mb-4">
              What My Solutions Help You Achieve
            </h3>
            <ul className="space-y-3">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm text-inkrose-700 dark:text-blush-50">
                  <CheckCircle2 size={17} className="text-blush-500 dark:text-blush-300 mt-0.5 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
