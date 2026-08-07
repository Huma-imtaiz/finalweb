import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Phone, X } from "lucide-react";

const projects = [
  {
    no: "01",
    title: "HR AI Job Posting & Evaluation",
    blurb: "Scores incoming candidates against the role and CV, then schedules screening interviews automatically for the candidates who qualify.",
    tools: "n8n · AI scoring · Airtable · Google Calendar",
    tone: "coral",
    visual: "hr",
  },
  {
    no: "02",
    title: "Client Onboarding Automation",
    blurb: "A single form submission creates the brief, Drive structure, Trello board, Slack alert, welcome email, and kickoff meeting — in about 30 seconds.",
    tools: "Make · OpenRouter · Drive · Trello · Slack",
    tone: "sky",
    visual: "make",
  },
  {
    no: "03",
    title: "AI Lead Capture & Follow-Up",
    blurb: "Captures a lead, creates the Airtable contact, uses Gemini to write a tailored response, and alerts the sales rep with full context.",
    tools: "n8n · Gemini · Airtable · Gmail · Sheets",
    tone: "grass",
    visual: "lead",
  },
  {
    no: "04",
    title: "AI Client Onboarding System",
    blurb: "Two AI agents work in parallel: one sends a personalized welcome email while the other records every client detail in Google Sheets.",
    tools: "n8n · OpenAI · Gmail · Google Sheets",
    tone: "sun",
    visual: "onboarding",
  },
  {
    no: "05",
    title: "RAG Business Knowledge Assistant",
    blurb: "A grounded internal assistant that lets teams search and question more than 500 business documents using natural language.",
    tools: "LangChain · OpenAI · Pinecone · Python",
    tone: "cream",
    visual: "rag",
  },
  {
    no: "06",
    title: "Customer Churn Intelligence",
    blurb: "An XGBoost model trained on roughly 100,000 telecom records, paired with a Tableau dashboard to support retention decisions.",
    tools: "Python · XGBoost · Pandas · Tableau",
    tone: "lilac",
    visual: "data",
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

function Wave({ fill = "var(--cream)", className = "" }) {
  return <svg className={`wave ${className}`} viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90 L0 52 C120 12 240 12 360 44 C480 76 600 76 720 44 C840 12 960 12 1080 44 C1200 76 1320 76 1440 48 L1440 90Z" fill={fill}/></svg>;
}

function WorkflowVisual({ type }) {
  const configs = {
    hr: ["CV", "Drive", "AI score", "Shortlist", "Calendar"],
    make: ["Form", "Parser", "Drive", "Trello", "Slack", "Gmail"],
    lead: ["Sheets", "Airtable", "Gemini", "Parse", "Gmail"],
    onboarding: ["Form", "AI agent", "OpenAI", "Gmail", "Sheets"],
    rag: ["Docs", "Embeddings", "Vector DB", "LLM", "Answer"],
    data: ["Dataset", "Clean", "XGBoost", "91%", "Tableau"],
  };
  const nodes = configs[type];
  return (
    <div className={`workflow workflow-${type}`} aria-label={`${type} workflow preview`}>
      <div className="workflow-top"><span></span><span></span><span></span><small>{type === "make" ? "AUTOMATION SCENARIO" : "WORKFLOW / PUBLISHED"}</small></div>
      <div className="nodes">
        {nodes.map((node, i) => <React.Fragment key={node}>
          <motion.div className={`node node-${i}`} initial={{ scale: .75, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
            <span>{node.slice(0,1)}</span><small>{node}</small>
          </motion.div>
          {i < nodes.length - 1 && (
            <motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: .08 + i * .08 }}/>
          )}
        </React.Fragment>)}
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
  return <section id="top" className="hero">
    <div className="hero-copy">
      <motion.h1 initial={{ y: 110 }} animate={{ y: 0 }} transition={{ duration: .95, ease: [0.2,.8,.2,1] }}>HUMA&nbsp; IMTIAZ</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>AI automation specialist & data science engineer</motion.p>
      <motion.small initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }}>Intelligent systems that move business forward</motion.small>
    </div>
    <div className="deck" aria-hidden="true">
      <motion.div className="deck-ring" style={{ rotate: smoothRotate }}>
        {[...projects, ...projects].map((p, i) => <div className={`deck-card tone-${p.tone}`} style={{ "--angle": `${i * 30}deg` }} key={`${p.no}-${i}`}><WorkflowVisual type={p.visual}/></div>)}
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
        {[['1','Brief'],['2','Design'],['3','Build'],['4','Review'],['5','Ship']].map((s,i)=><div key={s[0]} className={`station s${i}`}><b>{s[0]} · {s[1]}</b><small>{['Business goal','Architecture','AI-assisted','Test & refine','Measure impact'][i]}</small></div>)}
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
              <div className="project-visual"><WorkflowVisual type={p.visual}/></div>
              <div className="project-copy"><small>{p.no} / PROJECT</small><h3>{p.title}</h3><p>{p.blurb}</p><span>{p.tools}</span></div>
            </motion.article>)}
          </div>
        </section>
        <Wave fill="var(--grass)"/>
        <section id="skills" className="skills">
          <div className="wrap"><p className="eyebrow"><i/>CAPABILITIES</p><h2>The stack changes. The goal stays simple: make the system work.</h2>
            <div className="skill-list">{skills.map((s,i)=><motion.div key={s[0]} initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{once:true}} transition={{delay:i*.08}}><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p><ArrowDownRight/></motion.div>)}</div>
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
