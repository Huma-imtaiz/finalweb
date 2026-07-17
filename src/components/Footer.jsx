import React from "react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const coreServices = [
  "AI Automation", "AI Voice Agents", "RAG Applications", "CRM Automation",
  "Machine Learning", "Business Intelligence", "API Integration", "Technical Operations",
];

export default function Footer() {
  return (
    <footer className="border-t border-blush-100 dark:border-blush-500/10 bg-white dark:bg-inkrose-950 py-14">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-display font-semibold text-lg text-blush-600 dark:text-blush-300 mb-3">
              Huma Imtiaz
            </div>
            <p className="text-xs text-inkrose-400 dark:text-blush-100/50 leading-relaxed">
              AI Automation Specialist and Data Science Engineer helping businesses
              automate operations, integrate intelligent systems, and make better
              decisions using data.
            </p>
          </div>
          <div>
            <div className="font-label text-xs uppercase tracking-wide text-inkrose-400 dark:text-blush-100/40 mb-3">Quick Links</div>
            <ul className="space-y-1.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-inkrose-500 dark:text-blush-100/70 hover:text-blush-600 dark:hover:text-blush-300 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-label text-xs uppercase tracking-wide text-inkrose-400 dark:text-blush-100/40 mb-3">Core Services</div>
            <ul className="space-y-1.5 text-sm">
              {coreServices.map((s) => (
                <li key={s} className="text-inkrose-500 dark:text-blush-100/70">{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-blush-100 dark:border-blush-500/10 text-center text-xs text-inkrose-300 dark:text-blush-100/30 font-label">
          © 2026 Huma Imtiaz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
