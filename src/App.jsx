import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, Linkedin, Lock, Mail, Menu, Phone, X } from "lucide-react";

const projects = [
  {
    title: "AI Ops Approval & Reporting Bot",
    short: "A Telegram-native assistant that classifies incoming requests, auto-approves the clear-cut ones and escalates the rest to a manager, calculates leave balances on demand, and emails a GPT-written summary every month.",
    tools: "Telegram · n8n · OpenAI · Sheets · Gmail",
    image: "/work/ops-approval-bot.jpg",
    color: "#f57962",
  },
  {
    title: "AI-Powered Lead Capture & Follow-Up",
    short: "A webhook intake validates and scores every lead with OpenAI, routes hot, warm, and cold prospects into HubSpot, fires a personalized sales email, alerts the team on Slack, and logs the full trail to Sheets.",
    tools: "n8n · OpenAI · HubSpot · Slack · Sheets",
    image: "/work/lead-qualification.jpg",
    color: "#b9dc52",
  },
  {
    title: "RAG Knowledge Assistant",
    short: "Lets teams search and question 500+ internal documents using grounded natural-language answers. Built for a client's internal knowledge base — the interface can't be displayed here, as it's covered under an NDA.",
    tools: "LangChain · OpenAI · Pinecone · Python",
    color: "#cdb9e7",
  },
  {
    title: "Customer Churn Intelligence",
    short: "An AI-powered customer risk and retention platform built on a LightGBM model (84% ROC-AUC). One interactive workspace covers risk scoring, model performance, threshold tuning, and explainability.",
    tools: "Python · LightGBM · Pandas · React",
    image: "/work/churn-intelligence.jpg",
    color: "#7cc9bd",
  },
];

const toolGroups = [
  { name: "AI & LLM", color: "#2c9df4", tools: ["OpenAI", "GPT", "Gemini", "Claude", "Llama", "Prompt engineering", "Tool calling"] },
  { name: "Agents & retrieval", color: "#f1d900", tools: ["RAG pipelines", "LangChain", "LangGraph", "Langflow", "Ollama", "Qdrant", "Sub-agents", "MCP", "Vector search"] },
  { name: "Automation", color: "#c8a7e8", tools: ["n8n", "Make.com", "Vapi", "GoHighLevel", "Zapier", "Webhooks", "Connectors", "Workflow automation"] },
  { name: "Languages & data", color: "#86d45e", tools: ["Python", "JavaScript", "TypeScript", "SQL", "Pandas", "NumPy", "XGBoost", "scikit-learn"] },
  { name: "Backend & cloud", color: "#ff6b5d", tools: ["FastAPI", "Node.js", "REST APIs", "WebSockets", "Firebase", "PostgreSQL", "MongoDB", "Google Cloud", "Vercel"] },
  { name: "Frontend", color: "#f1d900", tools: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js"] },
  { name: "BI & ops", color: "#2c9df4", tools: ["Power BI", "Tableau", "Git", "GitHub", "GitHub Actions", "Domains & DNS", "Search Console"] },
  { name: "AI coding", color: "#f57962", tools: ["Claude Code", "Codex", "Antigravity", "Canva", "Technical documentation"] },
];

const experience = [
  {
    role: "Data Analyst",
    company: "Goldbar Tech",
    place: "Rawalpindi · On-site",
    date: "2024",
    note: "Cleaned 200K+ rows and built a 91%-accuracy customer churn model.",
    color: "#9dcced",
  },
  {
    role: "Virtual Assistant",
    company: "NSOL",
    place: "Rawalpindi · On-site",
    date: "2024 — 2025",
    note: "Managed GoHighLevel pipelines, automations, lead generation, and digital operations.",
    color: "#f5c948",
  },
  {
    role: "AI Automation Specialist",
    company: "Oraion",
    place: "Ireland · Remote",
    date: "2025",
    note: "Delivered n8n and Make workflows, voice AI, RAG assistants, and BI reporting.",
    color: "#f57962",
  },
  {
    role: "Agentic AI Developer",
    company: "Bitzsol Digital",
    place: "Rawalpindi · Hybrid",
    date: "2025 — 2026",
    note: "Built tool-using AI agents, RAG systems, and connected CRM workflows.",
    color: "#ffffff",
  },
  {
    role: "CRM Automation Specialist",
    company: "Open to the next team",
    place: "Islamabad or worldwide · Remote",
    date: "NOW",
    note: "Ready to build practical AI, CRM, and operations systems that create measurable value.",
    color: "#cdb9e7",
  },
];

function Wave({ fill = "var(--cream)", flip = false }) {
  return <svg className={`wave ${flip ? "flip" : ""}`} viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90V54C150 7 260 12 385 46c132 36 255 37 390 0 172-47 284-45 410-7 96 29 171 23 255 2v49Z" fill={fill}/></svg>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="nav">
    <a href="#top" className="brand">HUMA IMTIAZ</a>
    <nav className={open ? "nav-links open" : "nav-links"} aria-label="Site navigation">
      {["work", "method", "toolbox", "experience", "about", "contact"].map((item) => (
        <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>{item}</a>
      ))}
    </nav>
    <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
  </header>;
}

function Hero() {
  return <section id="top" className="hero">
    <div className="hero-copy">
      <div className="hero-name-mask"><motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .9, ease: [.2,.8,.2,1] }}>HUMA IMTIAZ</motion.h1></div>
      <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .52 }}>AI automation specialist & data science engineer</motion.p>
      <motion.small initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .72 }}>Intelligent systems that move business forward</motion.small>
    </div>
    <span className="scroll-cue">Scroll to explore <i/></span>
  </section>;
}

function Intro() {
  return <section className="intro wrap">
    <p className="eyebrow"><i/>AI AUTOMATION · DATA SCIENCE · ISLAMABAD & REMOTE</p>
    <motion.h2 initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }}>I build AI systems that turn slow, repetitive processes into reliable operations.</motion.h2>
    <div className="cta-row">
      <a className="pill primary" href="#work"><span>See the work</span><i/></a>
      <a className="pill secondary" href="#method"><span>How I ship</span><i/></a>
    </div>
    <div className="stats">
      {[["60%", "less manual processing", "#86d45e"], ["500+", "documents searchable with RAG", "#2c9df4"], ["91%", "churn prediction accuracy", "#ff6b5d"]].map((stat, i) => (
        <motion.div key={stat[0]} initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12 }}>
          <span className="stat-ring" style={{ "--ring": stat[2] }}><strong>{stat[0]}</strong><svg viewBox="0 0 220 150" preserveAspectRatio="none"><motion.path d="M30 96C12 62 44 22 106 16c62-6 102 24 100 58-2 36-50 62-106 60-48-2-78-20-74-46 3-18 18-30 36-34" fill="none" stroke="var(--ring)" strokeWidth="7" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: .2 + i * .12 }}/></svg></span>
          <p>{stat[1]}</p>
        </motion.div>
      ))}
    </div>
  </section>;
}

function MethodStation({ step, index, progress }) {
  const start = index * .17;
  const opacity = useTransform(progress, [start, start + .12], [.18, 1]);
  const scale = useTransform(progress, [start, start + .12], [.82, 1]);
  return <div className={`station s${index}`}><motion.div className="station-pill" style={{ opacity, scale }}><b>{step[0]} · {step[1]}</b><small>{step[2]}</small></motion.div></div>;
}

function Method() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 85, damping: 24 });
  const steps = [
    ["1", "Brief", "Requirements, and the taste bar"],
    ["2", "Spec", "Architecture, data model, constraints"],
    ["3", "Build", "Implementation, AI-assisted"],
    ["4", "Review", "Read the diff, run it, fix it"],
    ["5", "Ship", "Deploy, domain, DNS, indexing"],
  ];
  return <section id="method" className="method" ref={ref}>
    <div className="method-sticky wrap">
      <p className="eyebrow light"><i/>HOW I SHIP</p>
      <h2>I build with AI. Nothing ships that I haven’t read, run, and understood.</h2>
      <div className="road">
        <svg viewBox="0 0 1200 520" preserveAspectRatio="none" fill="none">
          <path d="M90 140C190 140 230 380 330 380S500 140 600 140 770 380 870 380 1010 140 1110 140" stroke="#33372f" strokeWidth="10" strokeLinecap="round"/>
          <motion.path d="M90 140C190 140 230 380 330 380S500 140 600 140 770 380 870 380 1010 140 1110 140" stroke="var(--grass)" strokeWidth="10" strokeLinecap="round" style={{ pathLength }}/>
        </svg>
        {steps.map((step, i) => <MethodStation step={step} index={i} progress={scrollYProgress} key={step[0]}/>)}
      </div>
      <div className="method-tools">{["n8n · WORKFLOWS", "MAKE.COM · SCENARIOS", "OPENAI · AGENTS", "PYTHON · DATA", "VAPI · VOICE"].map((item) => <span key={item}><i/>{item}</span>)}</div>
    </div>
  </section>;
}

function WorkCard({ project }) {
  return <article className="work-card" style={{ "--project": project.color }}>
    <div className="work-card-media">
      {project.image ? <img src={project.image} alt={project.title} loading="lazy"/> : (
        <div className="work-card-nda"><Lock size={26}/><b>CAN'T DISPLAY</b><small>DUE TO NDA</small></div>
      )}
    </div>
    <div className="work-card-copy"><div><h3>{project.title}</h3><p>{project.short}</p></div><span>{project.tools}</span></div>
  </article>;
}

function Work() {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const trackX = useMotionValue(0);
  const smoothX = useSpring(trackX, { stiffness: 170, damping: 28, mass: .6 });

  const paginate = (dir) => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    if (!slider || !track) return;
    const firstCard = track.children[0];
    const gap = parseFloat(getComputedStyle(track).columnGap) || 18;
    const amount = (firstCard?.getBoundingClientRect().width || 380) + gap;
    const maxScroll = Math.max(0, track.scrollWidth - slider.clientWidth);
    trackX.set(Math.min(0, Math.max(-maxScroll, trackX.get() - dir * amount)));
  };

  return <section id="work" className="work">
    <div className="type-wall" aria-hidden="true"><span>WORK WORK WORK WORK</span><span>PROJECTS PROJECTS PROJECTS</span><span>BUILD BUILD BUILD BUILD</span></div>
    <div className="work-label"><i/>THE WORK · {projects.length} FEATURED BUILDS</div>
    <div className="work-row">
      <button className="work-nav prev" onClick={() => paginate(-1)} aria-label="Previous project"><ChevronLeft/></button>
      <div className="work-slider" ref={sliderRef}>
        <motion.div className="work-track" ref={trackRef} style={{ x: smoothX }} drag="x" dragConstraints={sliderRef} dragElastic={.08}>
          {projects.map((project) => <WorkCard project={project} key={project.title}/>)}
        </motion.div>
      </div>
      <button className="work-nav next" onClick={() => paginate(1)} aria-label="Next project"><ChevronRight/></button>
    </div>
    <p className="work-hint">Drag, swipe, or use the arrows to explore</p>
  </section>;
}

function Toolbox() {
  return <section id="toolbox" className="toolbox">
    <div className="wrap toolbox-head"><p className="eyebrow"><i/>RECOGNITION THROUGH THE WORK</p><h2>The toolbox.</h2><svg viewBox="0 0 250 18"><motion.path d="M4 10c22-13 40 8 61 0s40 8 61 0 41 8 62 0 38 7 58-1" fill="none" stroke="#2c9df4" strokeWidth="5" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}/></svg><p>I choose tools around the workflow—not the other way around. AI agents, automations, data systems, and dashboards all live in one practical stack.</p></div>
    <div className="tool-categories wrap">{toolGroups.map((group) => <span key={group.name}><i style={{ background: group.color }}/>{group.name}</span>)}</div>
    <div className="tool-cloud wrap">{toolGroups.flatMap((group) => group.tools.map((tool, i) => <motion.span key={tool} style={{ "--tool-color": group.color, "--tilt": `${((i % 3) - 1) * 2}deg` }} initial={{ opacity: 0, y: 35, rotate: -5 }} whileInView={{ opacity: 1, y: 0, rotate: ((i % 3) - 1) * 2 }} viewport={{ once: true }} transition={{ delay: i * .025, type: "spring" }} whileHover={{ y: -8, scale: 1.06, rotate: 0 }}><i/>{tool}</motion.span>))}</div>
  </section>;
}

function Experience() {
  return <section id="experience" className="experience">
    <div className="wrap"><p className="eyebrow"><i/>EXPERIENCE</p><h2>From data and operations to intelligent CRM automation.</h2>
      <div className="experience-stack">{experience.map((item, i) => <motion.article key={item.role} className="experience-card" style={{ "--card": item.color, "--stack-index": i }} initial={{ opacity: 0, y: 120, rotate: i % 2 ? 3 : -3 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .65, delay: i * .08, ease: [.2,.8,.2,1] }}>
        <div><span className="experience-no">0{i + 1}</span><span className="date">{item.date}</span></div><h3>{item.role}</h3><div className="experience-meta"><p><b>{item.company}</b><small>{item.place}</small></p><p>{item.note}</p></div>
      </motion.article>)}</div>
    </div>
  </section>;
}

function About() {
  return <section id="about" className="about wrap">
    <div><p className="eyebrow"><i/>ABOUT</p><h2>AI automation specialist based in Islamabad, building for teams anywhere.</h2></div>
    <div className="about-list">
      <div><p><b>AI Automation & Data Science</b><span>Independent specialist</span></p><em>ISLAMABAD · REMOTE</em></div>
      <div><p><b>Agentic AI Developer</b><span>Bitzsol Digital</span></p><em>RAWALPINDI · HYBRID</em></div>
      <div><p><b>AI Automation Specialist</b><span>Oraion</span></p><em>IRELAND · REMOTE</em></div>
      <div><p><b>CRM & Operations</b><span>NSOL</span></p><em>RAWALPINDI</em></div>
    </div>
  </section>;
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => { await navigator.clipboard.writeText("hijefff24@gmail.com"); setCopied(true); setTimeout(() => setCopied(false), 1800); };
  return <section id="contact" className="contact">
    <div className="contact-inner wrap">
      <p className="availability"><i/>OPEN TO WORK · ISLAMABAD OR REMOTE FROM ANYWHERE IN THE WORLD</p>
      <h2>Let’s build.</h2>
      <svg className="contact-squiggle" viewBox="0 0 280 22"><motion.path d="M5 12c30-13 48 8 76 0s49 8 77 0 46 8 74 0 26 3 43-1" fill="none" stroke="var(--grass)" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1 }}/></svg>
      <div className="email-row"><a href="mailto:hijefff24@gmail.com">hijefff24@gmail.com <i/></a><button onClick={copy} aria-label="Copy email">{copied ? "Copied" : "Copy"}</button></div>
      <div className="socials"><a href="tel:+923249146814" aria-label="Phone"><Phone/></a><a href="mailto:hijefff24@gmail.com" aria-label="Email"><Mail/></a><a href="https://linkedin.com/in/huma-imtiaz-3381a5313" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href="https://github.com/Huma-imtaiz" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a></div>
    </div>
  </section>;
}

export default function App() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const move = (event) => { if (dot) dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`; };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <>
    <div className="cursor-dot"/>
    <Nav/>
    <main>
      <Hero/>
      <div className="sheet"><Wave/><Intro/><Wave fill="var(--night)"/><Method/><Wave fill="var(--cream)"/><Work/><Wave fill="var(--cream)"/><Toolbox/><Wave fill="var(--grass)"/><Experience/><Wave fill="var(--cream)"/><About/><Wave fill="var(--night)"/><Contact/></div>
    </main>
  </>;
}
