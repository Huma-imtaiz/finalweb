import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Phone, X,
  Bot, Car, BookOpenText, BarChart3, Wand2, LineChart, Webhook, UserPlus,
  FolderKanban, Lock,
} from "lucide-react";

const projects = [
  {
    no: "01",
    title: "AI Voice Agent",
    subtitle: "Automated Customer Conversations at Scale",
    blurb: "Conversational AI voice agents for customer service, appointment scheduling, and lead qualification — designed to interact naturally, collect relevant information, and pass structured data into business systems.",
    tools: "Vapi · n8n · Webhooks · REST APIs · CRM",
    tone: "coral",
    status: "Freelance",
    Icon: Bot,
  },
  {
    no: "02",
    title: "Automotive AI Customer Support Bot",
    subtitle: "Voice & Text Sales Automation",
    blurb: "An end-to-end AI sales assistant for an automotive business that communicates through voice and text, qualifies requirements, schedules appointments, and updates CRM records automatically.",
    tools: "Vapi · n8n · CRM",
    tone: "sky",
    status: "Delivered",
    Icon: Car,
  },
  {
    no: "03",
    title: "RAG Business Knowledge Assistant",
    subtitle: "Instant Answers From Internal Documents",
    blurb: "An internal AI assistant that lets teams search and question more than 500 business documents through natural language, using retrieval-augmented generation to ground every response.",
    tools: "LangChain · OpenAI · Pinecone · Python",
    tone: "grass",
    status: "Delivered",
    Icon: BookOpenText,
  },
  {
    no: "04",
    title: "Automated Business Intelligence Dashboard",
    subtitle: "Real-Time Insights for Startups & SMEs",
    blurb: "A Python-powered data aggregation and visualization solution collecting information from news, social media, financial, and business sources, transformed into clear market and financial insight.",
    tools: "Python · Data aggregation · Visualization",
    tone: "sun",
    status: "Delivered",
    Icon: BarChart3,
  },
  {
    no: "05",
    title: "HR AI Job Posting & Evaluation",
    subtitle: "Automated Resume Screening & Scheduling",
    blurb: "An end-to-end hiring automation that scores incoming candidates against the job description and CV, then automatically schedules screening interviews for the ones who qualify.",
    tools: "n8n · Airtable · AI scoring · Google Calendar",
    tone: "cream",
    status: "Delivered",
    Icon: Wand2,
  },
  {
    no: "06",
    title: "Customer Churn Prediction Dashboard",
    subtitle: "Identifying Customers at Risk of Leaving",
    blurb: "A machine learning system trained on roughly 100,000 telecom records. The XGBoost model predicted churn with 91% accuracy, paired with an interactive Tableau dashboard supporting retention strategy.",
    tools: "Python · XGBoost · Pandas · Tableau",
    tone: "lilac",
    status: "Delivered",
    Icon: LineChart,
  },
  {
    no: "07",
    title: "n8n & Webhooks Toolkit",
    subtitle: "Reusable Automation Components",
    blurb: "Reusable workflow templates for common business processes — payments, notifications, data transfers, and application integrations — built once and reused across client projects.",
    tools: "n8n · Webhooks",
    tone: "rose",
    status: "Reusable",
    Icon: Webhook,
  },
  {
    no: "08",
    title: "AI Lead Capture & Auto Follow-Up",
    subtitle: "Personalized Responses in Seconds, Not Hours",
    blurb: "A lead-response system that fires the moment a form is submitted — logging the lead in Airtable, using Gemini to draft a personalized follow-up, and alerting the sales rep with full context.",
    tools: "n8n · Gemini · Airtable · Gmail · Sheets",
    tone: "teal",
    status: "Delivered",
    Icon: UserPlus,
  },
  {
    no: "09",
    title: "AI Client Onboarding System",
    subtitle: "Automated Welcome Emails & CRM Logging",
    blurb: "An onboarding system that triggers the moment a client submits a form. Two AI agents fire in parallel — one sends a personalized welcome email, the other logs every detail to Google Sheets.",
    tools: "n8n · OpenAI · Gmail · Sheets",
    tone: "coral",
    status: "Delivered",
    Icon: Mail,
  },
  {
    no: "10",
    title: "AI Client Onboarding Automation",
    subtitle: "Form Submission to Kickoff in 30 Seconds",
    blurb: "A single Google Form submission triggers a full onboarding chain: an AI-generated brief, Drive folders, a Trello board, a Slack alert, a welcome email, and an auto-scheduled kickoff call.",
    tools: "Make · OpenRouter · Drive · Trello · Slack",
    tone: "sky",
    status: "Delivered",
    Icon: FolderKanban,
  },
  {
    no: "11",
    title: "Enterprise CRM Automation",
    subtitle: "Details Protected Under NDA",
    blurb: "A custom CRM automation project built for a client under a signed non-disclosure agreement. Specific implementation details, tools, and outcomes are shared on request only.",
    tools: "CRM · API integrations · Automation",
    tone: "grass",
    status: "NDA",
    Icon: Lock,
  },
];

const skills = [
  ["AI & automation", "OpenAI API, LangChain, RAG, n8n, Make, Vapi, GoHighLevel"],
  ["Data & machine learning", "Python, SQL, scikit-learn, XGBoost, Pandas, NumPy"],
  ["Business intelligence", "Power BI, Tableau, KPI dashboards, data pipelines"],
  ["Systems", "REST APIs, webhooks, PostgreSQL, MongoDB, Git, GitHub"],
];

const experience = [
  ["2025 — 2026", "Agentic AI Developer", "Bitzsol Digital", "Built autonomous, tool-using AI agents, RAG systems, and connected CRM workflows."],
  ["2025", "AI Automation Specialist", "Oraion · Remote", "Delivered n8n and Make workflows, voice AI, internal knowledge assistants, and BI reporting."],
  ["2024 — 2025", "Virtual Assistant", "NSOL", "Managed GoHighLevel pipelines, automations, lead generation, and digital operations."],
  ["2024", "Data Analyst", "Goldbar Tech", "Prepared 200K+ row datasets and built an XGBoost churn model with 91% accuracy."],
];

// Real, measurable outcomes — replaces a "competition/awards" band with results from actual client work.
const highlights = [
  ["2025", "60% reduction", "Client onboarding automation cut manual processing time at Oraion."],
  ["2025", "500+ documents", "RAG assistant let teams query internal knowledge in natural language."],
  ["2025", "35% faster", "Vapi voice AI cut average customer support call handling time."],
  ["2025", "30 seconds", "Make.com onboarding chain replaced a 30–60 minute manual process."],
  ["2025", "78% accuracy", "Automotive AI sales bot qualified leads in under 2 minutes."],
  ["2024", "91% accuracy", "XGBoost churn model trained on 100K+ telecom records at Goldbar Tech."],
];

const tickerItems = [
  "AI AUTOMATION", "DATA SCIENCE", "WORKFLOW ENGINEERING",
  "MACHINE LEARNING", "BUSINESS INTELLIGENCE", "PAKISTAN & REMOTE", "11 PROJECTS SHIPPED",
];

function Wave({ fill = "var(--cream)", className = "" }) {
  return <svg className={`wave ${className}`} viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90 L0 52 C120 12 240 12 360 44 C480 76 600 76 720 44 C840 12 960 12 1080 44 C1200 76 1320 76 1440 48 L1440 90Z" fill={fill}/></svg>;
}

function Marquee() {
  const loop = [...tickerItems, ...tickerItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => <span key={`${t}-${i}`}>{t}<i/></span>)}
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="nav">
    <a href="#top" className="brand">HUMA IMTIAZ</a>
    <nav className={open ? "nav-links open" : "nav-links"} aria-label="Site navigation">
      {["work", "method", "skills", "about", "contact"].map(x => <a key={x} href={`#${x}`} onClick={() => setOpen(false)}>{x}</a>)}
    </nav>
    <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
  </header>;
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, .22], [0, 110]);
  const smoothRotate = useSpring(rotate, { stiffness: 70, damping: 20 });
  const deck = [...projects, ...projects];
  const step = 360 / deck.length;
  return <section id="top" className="hero">
    <div className="hero-copy">
      <motion.h1 initial={{ y: 110 }} animate={{ y: 0 }} transition={{ duration: .95, ease: [0.2,.8,.2,1] }}>HUMA&nbsp; IMTIAZ</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>AI automation specialist & data science engineer</motion.p>
      <motion.small initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }}>Intelligent systems that move business forward</motion.small>
    </div>
    <div className="deck" aria-hidden="true">
      <motion.div className="deck-ring" style={{ rotate: smoothRotate }}>
        {deck.map((p, i) => (
          <div className={`deck-card tone-${p.tone}`} style={{ "--angle": `${i * step}deg` }} key={`${p.no}-${i}`}>
            <p.Icon size={28} strokeWidth={1.6} />
          </div>
        ))}
      </motion.div>
    </div>
    <div className="hero-count">11 builds · AI, automation & data</div>
  </section>;
}

function Method() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const path = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  return <section id="method" ref={ref} className="method">
    <div className="method-sticky wrap">
      <p className="eyebrow light"><i/>HOW I BUILD</p>
      <h2>I use AI to move fast. Nothing ships until it is tested, understood, and useful.</h2>
      <div className="road">
        <svg viewBox="0 0 1200 520" preserveAspectRatio="none" fill="none">
          <path d="M90 140 C190 140 230 380 330 380 S500 140 600 140 S770 380 870 380 S1010 140 1110 140" stroke="#343a31" strokeWidth="10" strokeLinecap="round"/>
          <motion.path d="M90 140 C190 140 230 380 330 380 S500 140 600 140 S770 380 870 380 S1010 140 1110 140" stroke="var(--grass)" strokeWidth="10" strokeLinecap="round" style={{ pathLength: path }}/>
        </svg>
        {[['1','Brief'],['2','Spec'],['3','Build'],['4','Review'],['5','Ship']].map((s,i)=><div key={s[0]} className={`station s${i}`}><b>{s[0]} · {s[1]}</b><small>{['Business goal','Architecture','AI-assisted','Test & refine','Measure impact'][i]}</small></div>)}
      </div>
    </div>
  </section>;
}

function App() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot');
    const move = e => { cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);
  return <>
    <div className="cursor-dot"/>
    <Nav/>
    <main>
      <Hero/>
      <Marquee/>
      <div className="sheet">
        <Wave/>
        <section className="intro wrap">
          <p className="eyebrow"><i/>AI AUTOMATION · DATA SCIENCE · PAKISTAN & REMOTE</p>
          <motion.h2 initial={{ opacity:0, y:50 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true, amount:.5 }}>I turn repetitive work into reliable systems — connecting AI, data, and the tools your business already uses.</motion.h2>
          <div className="cta-row"><a className="pill green" href="#work">See the work <span/></a><a className="pill" href="#contact">Start a project <span/></a></div>
          <div className="stats">
            {[['60%','less manual processing'],['500+','documents searchable with RAG'],['91%','churn prediction accuracy']].map((s,i)=><motion.div key={s[0]} initial={{ opacity:0,y:35 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*.12 }}><strong>{s[0]}</strong><span>{s[1]}</span></motion.div>)}
          </div>
        </section>
        <Wave fill="var(--night)"/>
        <Method/>
        <Wave fill="var(--cream)"/>
        <section id="work" className="work wrap">
          <p className="eyebrow"><i/>SELECTED WORK</p>
          <h2>Systems built to do the work — not just demo well.</h2>
          <div className="projects">
            {projects.map((p,i)=><motion.article className={`project tone-${p.tone}`} key={p.title} initial={{ opacity:0,y:70 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true, margin:'-10%' }} transition={{ duration:.65 }}>
              <div className="project-visual">
                <span className="project-badge">{p.status}</span>
                <div className="project-icon"><p.Icon size={38} strokeWidth={1.5}/></div>
              </div>
              <div className="project-copy"><small>{p.no} / PROJECT</small><h3>{p.title}</h3><p className="project-subtitle">{p.subtitle}</p><p>{p.blurb}</p><span>{p.tools}</span></div>
            </motion.article>)}
          </div>
        </section>
        <Wave fill="var(--grass)"/>
        <section id="skills" className="skills">
          <div className="wrap"><p className="eyebrow"><i/>CAPABILITIES</p><h2>The stack changes. The goal stays simple: make the system work.</h2>
            <div className="skill-list">{skills.map((s,i)=><motion.div key={s[0]} initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{once:true}} transition={{delay:i*.08}}><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p><ArrowDownRight/></motion.div>)}</div>
          </div>
        </section>
        <Wave fill="var(--sun)"/>
        <section className="highlights wrap">
          <p className="eyebrow"><i/>RESULTS, NOT DEMOS</p>
          <h2>Numbers from real client work — measured, not estimated.</h2>
          <div className="highlight-list">
            {highlights.map((h,i)=><motion.div className="highlight-row" key={h[1]} initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{once:true}} transition={{delay:i*.07}}>
              <span>{h[0]}</span><strong>{h[1]}</strong><p>{h[2]}</p>
            </motion.div>)}
          </div>
        </section>
        <Wave fill="var(--cream)"/>
        <section id="about" className="about wrap">
          <div><p className="eyebrow"><i/>ABOUT HUMA</p><h2>Technical enough to build it. Business-minded enough to build the right thing.</h2></div>
          <div className="about-copy"><p>I’m Huma Imtiaz, an AI Automation Specialist and Data Science Engineer. I design AI-powered applications, workflow automations, voice agents, data pipelines, machine learning solutions, and business intelligence dashboards.</p><p>I start with the process and the operational gap, then choose the right tools. The result is practical, maintainable technology with measurable business value.</p><a href="mailto:hijefff24@gmail.com">Let’s work together <ArrowUpRight/></a></div>
        </section>
        <section className="experience wrap"><p className="eyebrow"><i/>EXPERIENCE</p>{experience.map(e=><div className="experience-row" key={e[1]}><span>{e[0]}</span><div><h3>{e[1]}</h3><b>{e[2]}</b></div><p>{e[3]}</p></div>)}</section>
        <Wave fill="var(--night)"/>
        <section id="contact" className="contact">
          <div className="wrap"><p className="eyebrow light"><i/>LET’S TALK</p><h2>Have a process that should run smarter?</h2><a className="big-email" href="mailto:hijefff24@gmail.com">hijefff24@gmail.com <ArrowUpRight/></a>
            <div className="contact-bottom"><p>Available for full-time roles, freelance automation builds, AI systems, and data projects.</p><div className="socials"><a href="tel:+923249146814" aria-label="Phone"><Phone/></a><a href="mailto:hijefff24@gmail.com" aria-label="Email"><Mail/></a><a href="https://linkedin.com/in/huma-imtiaz-3381a5313" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href="https://github.com/Huma-imtaiz" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a></div></div>
          </div>
        </section>
      </div>
    </main>
    <footer><Wave fill="var(--sun)"/><div className="footer-inner wrap"><b><i/>Huma Imtiaz</b><nav><a href="#work">Work</a><a href="#method">Method</a><a href="#about">About</a></nav><small>© 2026 Huma Imtiaz · Pakistan</small></div></footer>
  </>;
}

export default App;
