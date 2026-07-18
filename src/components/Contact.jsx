import React, { useState } from "react";
import { Mail, Phone, Linkedin, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Blobs, Reveal } from "./Shared.jsx";

const services = [
  "AI Workflow Automation",
  "AI Agents & LLM Applications",
  "AI Voice Agents",
  "CRM & Lead Automation",
  "Data Science & Machine Learning",
  "Business Intelligence & Dashboards",
  "API & Systems Integration",
  "DevOps & Technical Operations",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: services[0],
    details: "",
    timeline: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `Project inquiry from ${form.name || "website"}`,
          from_name: form.name,
          "Full Name": form.name,
          "Business Email": form.email,
          "Company Name": form.company,
          "Service Required": form.service,
          "Estimated Timeline": form.timeline,
          "Project Details": form.details,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", company: "", service: services[0], details: "", timeline: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-blush-100 dark:border-blush-500/10 py-16">
      <Blobs />
      <div className="max-w-5xl mx-auto px-6 relative">
        <Reveal>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-inkrose-900 dark:text-white mb-3">
            Let's Build a Smarter Way to Work
          </h2>
          <p className="text-inkrose-500 dark:text-blush-100/70 max-w-2xl mb-10">
            Whether you need to automate a repetitive process, build an AI agent,
            connect business applications, develop a machine learning solution, or
            create a decision-making dashboard, I would be happy to discuss your
            requirements.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8">
          <Reveal className="md:col-span-2" delay={80}>
            <div className="space-y-4 font-label text-sm">
              <a href="mailto:hijefff24@gmail.com" className="flex items-center gap-3 text-inkrose-700 dark:text-blush-50 hover:text-blush-600 dark:hover:text-blush-300 hover:translate-x-1 transition-all duration-200">
                <Mail size={16} className="text-blush-500" /> hijefff24@gmail.com
              </a>
              <a href="tel:+923249146814" className="flex items-center gap-3 text-inkrose-700 dark:text-blush-50 hover:text-blush-600 dark:hover:text-blush-300 hover:translate-x-1 transition-all duration-200">
                <Phone size={16} className="text-blush-500" /> +92 324 9146814
              </a>
              <a href="https://linkedin.com/in/huma-imtiaz-3381a5313" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-inkrose-700 dark:text-blush-50 hover:text-blush-600 dark:hover:text-blush-300 hover:translate-x-1 transition-all duration-200">
                <Linkedin size={16} className="text-blush-500" /> linkedin.com/in/huma-imtiaz
              </a>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3" delay={140}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={update("name")}
                  className="w-full px-4 py-2.5 rounded-xl border border-blush-200 dark:border-blush-500/25 bg-white dark:bg-inkrose-800 text-sm text-inkrose-900 dark:text-white placeholder:text-inkrose-300 dark:placeholder:text-blush-100/30 focus:outline-none focus:ring-2 focus:ring-blush-300"
                />
                <input
                  required
                  type="email"
                  placeholder="Business Email"
                  value={form.email}
                  onChange={update("email")}
                  className="w-full px-4 py-2.5 rounded-xl border border-blush-200 dark:border-blush-500/25 bg-white dark:bg-inkrose-800 text-sm text-inkrose-900 dark:text-white placeholder:text-inkrose-300 dark:placeholder:text-blush-100/30 focus:outline-none focus:ring-2 focus:ring-blush-300"
                />
              </div>
              <input
                placeholder="Company Name"
                value={form.company}
                onChange={update("company")}
                className="w-full px-4 py-2.5 rounded-xl border border-blush-200 dark:border-blush-500/25 bg-white dark:bg-inkrose-800 text-sm text-inkrose-900 dark:text-white placeholder:text-inkrose-300 dark:placeholder:text-blush-100/30 focus:outline-none focus:ring-2 focus:ring-blush-300"
              />
              <select
                value={form.service}
                onChange={update("service")}
                className="w-full px-4 py-2.5 rounded-xl border border-blush-200 dark:border-blush-500/25 bg-white dark:bg-inkrose-800 text-sm text-inkrose-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blush-300"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <textarea
                required
                placeholder="Project Details"
                rows={4}
                value={form.details}
                onChange={update("details")}
                className="w-full px-4 py-2.5 rounded-xl border border-blush-200 dark:border-blush-500/25 bg-white dark:bg-inkrose-800 text-sm text-inkrose-900 dark:text-white placeholder:text-inkrose-300 dark:placeholder:text-blush-100/30 focus:outline-none focus:ring-2 focus:ring-blush-300 resize-none"
              />
              <input
                placeholder="Estimated Timeline"
                value={form.timeline}
                onChange={update("timeline")}
                className="w-full px-4 py-2.5 rounded-xl border border-blush-200 dark:border-blush-500/25 bg-white dark:bg-inkrose-800 text-sm text-inkrose-900 dark:text-white placeholder:text-inkrose-300 dark:placeholder:text-blush-100/30 focus:outline-none focus:ring-2 focus:ring-blush-300"
              />
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.04, boxShadow: "0 12px 28px -8px rgba(244,80,143,0.55)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blush-500 text-white font-label font-semibold hover:bg-blush-600 transition-colors shadow-md shadow-blush-200 dark:shadow-none disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Discuss My Project
                  </>
                )}
              </motion.button>
              {status === "sent" && (
                <p className="text-xs text-blush-500 dark:text-blush-300 font-label">
                  Thanks! Your message has been sent — I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-500 font-label">
                  Something went wrong sending your message. Please email hijefff24@gmail.com directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
