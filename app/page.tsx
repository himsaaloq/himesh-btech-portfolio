"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BookOpen, BriefcaseBusiness, Check,
  Code2, Download, ExternalLink, Github, GraduationCap, Instagram, Linkedin, Mail,
  Menu, Monitor, Play, Rocket, Send, Sparkles, Wrench, X, Youtube, Database, Heart,
  Layers3, Lightbulb, Users, CalendarDays, FileText, Globe, Video
} from "lucide-react";

const navItems = [
  ["Home", "home"], ["About", "about"], ["Journey", "journey"], ["Skills", "skills"],
  ["Projects", "projects"], ["Experience", "experience"], ["Certificates", "certificates"],
  ["Creative", "creative"], ["Resume", "resume"], ["Contact", "contact"]
];

const journey = [
  { year: "2025", title: "Started B.Tech", color: "blue", items: ["Joined college", "Learned programming basics", "Explored web development", "Continued video editing"] },
  { year: "2026", title: "Projects & Growth", color: "green", items: ["Team project contributions", "GitHub practice", "Univ-Geeks PYQ platform", "Growing technical skills"] },
  { year: "2027", title: "Internships & Experience", color: "purple", items: ["Target internships", "Build real-world projects", "Improve portfolio", "Strengthen fundamentals"] },
  { year: "2028", title: "Career & Beyond", color: "orange", items: ["Prepare for placements", "Build advanced projects", "Explore professional opportunities"] },
];

const skillGroups = [
  { icon: Code2, title: "Programming", tags: ["C", "Python"] },
  { icon: Globe, title: "Web Development", tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { icon: Database, title: "Backend & Database", tags: ["Java", "Spring Boot", "MongoDB", "REST APIs"] },
  { icon: Wrench, title: "Tools", tags: ["Git", "GitHub", "VS Code", "ImageKit"] },
  { icon: Video, title: "Creative", tags: ["Premiere Pro", "CapCut", "Video Editing"] },
  { icon: BookOpen, title: "Currently Learning", tags: ["Problem-solving", "Advanced web development", "Data fundamentals"], featured: true },
];

const projects = [
  {
    title: "Univ-Geeks PYQ Platform",
    desc: "A team-based educational platform focused on organizing and presenting previous-year question papers.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Java", "Spring Boot", "MongoDB", "ImageKit"],
    kind: "univ",
    icon: GraduationCap,
    label: "Education platform",
    primary: "Add Live URL",
    secondary: "GitHub"
  },
  {
    title: "Editor Himsaa",
    desc: "My creative video-editing page featuring short-form edits, transitions, and visual storytelling.",
    tags: ["CapCut", "Premiere Pro", "Editing"],
    kind: "editor",
    icon: Video,
    label: "Creative portfolio",
    primary: "View Instagram",
    secondary: "View Work"
  },
  {
    title: "Personal Portfolio",
    desc: "A personal website documenting my B.Tech journey, technical skills, projects, and growth.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    kind: "portfolio",
    icon: Monitor,
    label: "Personal website",
    primary: "Live Demo",
    secondary: "GitHub"
  },
];

const experience = [
  { icon: Layers3, title: "Univ-Geeks Team Project", text: "Contributing to a PYQ platform and learning team-based development workflows." },
  { icon: Github, title: "GitHub & Personal Projects", text: "Practising version control and building projects to strengthen practical skills." },
  { icon: GraduationCap, title: "College Projects", text: "Applying classroom concepts through assignments and academic work." },
  { icon: Video, title: "Creative Work — Editor Himsaa", text: "Creating video edits and developing a visual storytelling style." },
];


const socials = [
  {
    label: "GitHub",
    value: "github.com/himsaaloq",
    icon: Github,
    href: "https://github.com/himsaaloq",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/himesh-vaishnav-205875368",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/himesh-vaishnav-205875368/",
  },
  {
    label: "Instagram",
    value: "@editorhimsaa",
    icon: Instagram,
    href: "https://www.instagram.com/editorhimsaa/",
  },
  {
    label: "YouTube",
    value: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/",
  },
];




function SectionHeading({ eyebrow, title, desc }: { eyebrow?: string; title: React.ReactNode; desc?: string }) {

  return <div className="section-heading">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {desc && <p>{desc}</p>}
  </div>;
}

const certificates = [
  {
    title: "Industrial Training",
    organization: "Univ SVH",
    date: "2026",
    file: "/images/CERTIFICATES/univ-svh-certificate.png",
    type: "image",
  },
  // Add your next certificate here when ready
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

 
async function submitMessage(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setSent(false);

  try {
    const result = await emailjs.send(
      "service_uy0sp56",
      "template_awgarjk",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      {
        publicKey: "jNu1gA6vQ3NCCi6eD",
      }
    );

    if (result.status === 200) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }
  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Message send nahi hua. Please try again.");
  }
}

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Himesh home"><span className="brand-mark"><Code2 size={23}/></span> HIMESH<span className="brand-dot">.</span></a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
      <a className="button button-small header-cta" href="#contact">
  Let’s Connect <ArrowUpRight size={15}/>
</a>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <span className="pill"><Sparkles size={13}/> B.Tech Student <span>•</span> Developer <span>•</span> Creator</span>
          <h1>Hi, I’m<br/><span>Himesh Vaishnav</span></h1>
          <p className="hero-lead">Building useful things, learning new technologies, and turning ideas into real-world projects.</p>
          <div className="hero-actions">
            <a className="button" href="#journey">View My Journey <ArrowRight size={16}/></a>
            <a className="button button-outline" href="#projects">View Projects</a>
          </div>
         
<div className="social-row">
  {socials.map(({ label, icon: Icon, href }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={`Open ${label}`}
    >
      <Icon />
    </a>
  ))}
</div>

        </div>
        <div className="hero-visual">
          <div className="portrait-backdrop"></div>
         
<div className="portrait-placeholder">
  <img
    src="/images/himesh.jpg"
    alt="Himesh Vaishnav"
    className="profile-photo"
  />
</div>

          <div className="hand-note">Better Skills<br/>Bigger Dreams <ArrowDown size={18}/></div>
          <div className="floating-chip"><span className="status-dot"></span> Always learning</div>
        </div>
        <aside className="currently-card">
          <h3><span className="spark-icon"><Sparkles size={16}/></span> Currently</h3>
          <div className="current-item"><span className="current-icon blue"><GraduationCap/></span><div><b>Studying</b><small>B.Tech · 2nd Year · AI & DS</small></div></div>
          <div className="current-item"><span className="current-icon cyan"><Layers3/></span><div><b>Building</b><small>Univ-Geeks PYQ Platform</small></div></div>
          <div className="current-item"><span className="current-icon purple"><BookOpen/></span><div><b>Learning</b><small>Web development & problem-solving</small></div></div>
          <div className="current-item"><span className="current-icon orange"><Video/></span><div><b>Creating</b><small>Video editing · Editor Himsaa</small></div></div>
        </aside>
      </section>

      <section className="about section-shell section-pad" id="about">
        <div className="about-main">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious mind. <span>Builder’s mindset.</span></>} />
          <p className="body-copy">I’m Himesh Vaishnav, a B.Tech student passionate about technology, web development, programming, and creative work. I enjoy exploring new tools, solving problems, and turning ideas into practical projects. Every project is a chance to learn something new and improve.</p>
          <div className="trait-grid">
            <div className="trait"><Lightbulb/><b>Problem Solver</b><span>Enjoying challenges and learning through practice.</span></div>
            <div className="trait"><BookOpen/><b>Continuous Learner</b><span>Exploring tools and technologies step by step.</span></div>
            <div className="trait"><Users/><b>Team Player</b><span>Collaborating, sharing ideas, and growing together.</span></div>
          </div>
        </div>
        <aside className="goals-card">
          <span className="mini-label"><Rocket size={14}/> MY GOALS</span>
          <h3>Small steps.<br/><span>Big goals.</span></h3>
          <ul>
            <li><Check/> Build a strong technical foundation</li>
            <li><Check/> Gain internship experience</li>
            <li><Check/> Create meaningful projects</li>
            <li><Check/> Grow throughout my B.Tech journey</li>
          </ul>
          <div className="quote">“Consistency turns learning into progress.”</div>
        </aside>
      </section>

      <section className="section-shell section-pad" id="journey">
        <SectionHeading eyebrow="THE ROAD SO FAR" title={<>My B.Tech <span>Journey</span></>} desc="A work in progress — learning, building, and growing one step at a time."/>
        <div className="journey-grid">
          {journey.map((item, i) => <article className={`journey-card ${item.color}`} key={item.year}>
            <div className="journey-top"><span className="journey-icon">{i === 0 ? <GraduationCap/> : i === 1 ? <Rocket/> : i === 2 ? <BriefcaseBusiness/> : <Award/>}</span><span className="year">{item.year}</span></div>
            <h3>{item.title}</h3>
            <ul>{item.items.map(text => <li key={text}><span className="bullet-check"><Check size={12}/></span>{text}</li>)}</ul>
          </article>)}
        </div>
        <div className="timeline-track"><span/><span/><span/><span/></div>
      </section>

      <section className="section-shell section-pad" id="skills">
        <SectionHeading eyebrow="WHAT I WORK WITH" title={<>Skills & <span>Tools</span></>} desc="A growing toolkit built through practice, projects, and curiosity."/>
        <div className="skills-grid">
          {skillGroups.map(({ icon: Icon, title, tags, featured }) => <article className={`skill-card ${featured ? "skill-featured" : ""}`} key={title}>
            <div className="skill-icon"><Icon size={20}/></div><h3>{title}</h3>
            <div className="tag-list">{tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
          </article>)}
        </div>
      </section>

      <section className="section-shell section-pad" id="projects">
        <div className="section-heading-row"><SectionHeading eyebrow="SELECTED WORK" title={<>Projects I’m <span>Building</span></>} desc="Projects that help me learn, experiment, and create useful things."/><a className="text-link" href="#contact">Have a project idea? <ArrowUpRight size={15}/></a></div>
        <div className="projects-grid">
          {projects.map(({ title, desc, tags, kind, icon: Icon, label, primary, secondary }) => <article className="project-card" key={title}>
            <div className={`project-art ${kind}`}>
              <div className="project-art-top"><span className="project-mark"><Icon size={23}/></span><span className="project-label">{label}</span></div>
              {kind === "univ" ? <div className="mock-window"><div className="mock-window-bar"><i/><i/><i/></div><div className="mock-window-content"><div className="mock-sidebar"></div><div className="mock-lines"><span/><span/><span/><div className="mock-paper-row"><b>Physics</b><b>Chemistry</b></div></div></div></div> :
               kind === "editor" ? <div className="editor-art"><span>EDITOR<br/><b>HIMSAA</b></span><Play size={35} fill="currentColor"/></div> :
               <div className="portfolio-art"><div className="portfolio-lines"><span/><span/><span/></div><div className="portfolio-mini-card">MY<br/>PORTFOLIO</div></div>}
            </div>
            <div className="project-content"><h3>{title}</h3><p>{desc}</p><div className="tag-list">{tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              <div className="project-actions"><a href="#contact" className="button button-mini">{primary} <ArrowUpRight size={14}/></a><a href="#contact" className="button button-outline button-mini">{secondary}</a></div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="section-shell section-pad experience-section" id="experience">
        <div className="experience-intro"><SectionHeading eyebrow="LEARNING BY DOING" title={<>Experience & <span>Contributions</span></>} desc="The projects, practice, and creative work shaping my journey so far."/></div>
        <div className="experience-list">
          {experience.map(({ icon: Icon, title, text }, i) => <article className="experience-item" key={title}><span className="experience-icon"><Icon size={18}/></span><div><h3>{title}</h3><p>{text}</p></div><span className="experience-index">0{i + 1}</span></article>)}
        </div>
      </section>

      <section className="section-shell section-pad lower-grid" id="certificates">
        <div className="certificate-panel">
          <SectionHeading eyebrow="MILESTONES" title={<>My <span>Certificates</span></>} desc="One step in my learning journey."/>
          
{certificates.map((cert) => (
  <article className="certificate-card" key={cert.title}>
    <div className="certificate-preview">
      <a
        href={cert.file}
        target="_blank"
        rel="noopener noreferrer"
        title="View certificate"
      >
        {cert.type === "image" ? (
          <img
            src={cert.file}
            alt={`${cert.organization} ${cert.title} certificate`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <span>PDF Certificate</span>
        )}
      </a>
    </div>

    <div className="certificate-info">
      <span className="completed-pill">✓ Completed</span>
      <h3>{cert.organization}</h3>
      <p>{cert.title}</p>
      <small>{cert.date}</small>

      <div style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        marginTop: "14px"
      }}>
        <a
          className="text-link"
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate ↗
        </a>

        <a
          className="text-link"
          href={cert.file}
          download
        >
          Download ↓
        </a>
      </div>
    </div>
  </article>
))}

        </div>
        <div className="creative-panel" id="creative">
          <SectionHeading eyebrow="MY CREATIVE SIDE" title={<>Beyond Code — <span>Editor Himsaa</span></>} desc="Video editing since 2025 · Premiere Pro · CapCut"/>
         
<div className="creator-card">
 
<div className="creator-logo">
  <img
    src="/images/editor-himsaa.png"
    alt="Editor Himsaa"
    className="creator-photo"
  />
</div>


  <div className="creator-info">
    <span className="eyebrow">MY CREATIVE SIDE</span>
    <h3>Editor Himsaa</h3>
    <p>
      Video editing, creative storytelling, and visual experiments.
      Turning ideas into engaging content.
    </p>

    <div className="tag-list">
      <span className="tag">Premiere Pro</span>
      <span className="tag">CapCut</span>
      <span className="tag">Video Editing</span>
    </div>

    <a
      className="button"
      href="https://www.instagram.com/editorhimsaa/"
      target="_blank"
      rel="noreferrer"
    >
      Visit Instagram ↗
    </a>
  </div>
</div>

        </div>
      </section>

      <section className="section-shell section-pad resume-contact">
        <div className="resume-panel" id="resume">
          <div className="resume-copy"><span className="mini-label"><FileText size={14}/> KEEP IT HANDY</span><h2>My <span>Resume</span></h2><p>Want the quick overview? Add your latest resume PDF here when it’s ready.</p>
<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
  <a
    className="button"
    href="/images/Resume/himesh-resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Resume <ArrowRight size={15}/>
  </a>

  <a
    className="button"
    href="/images/Resume/himesh-resume.pdf"
    download="Himesh-Vaishnav-Resume.pdf"
  >
    Download Resume ↓
  </a>
</div>
</div>
          <div className="resume-illustration"><FileText size={72}/><span className="resume-check"><Check/></span></div>
        </div>
        <div className="contact-panel" id="contact">
          <SectionHeading eyebrow="SAY HELLO" title={<>Let’s <span>Connect</span></>} desc="Open to learning opportunities, collaboration, and good ideas."/>
          <div className="contact-links">
           
{socials.slice(0, 3).map(({ label, value, icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="contact-link"
    key={label}
  >
    <span><Icon size={18} /></span>
    <div>
      <b>{label}</b>
      <small>{value}</small>
    </div>
    <ArrowUpRight size={14} />
  </a>
))}

            <a href="#contact-form" className="contact-link"><span><Mail size={18}/></span><div><b>Email</b><small>himeshloq@gmail.com</small></div><ArrowUpRight size={14}/></a>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad contact-form-section" id="contact-form">
        <div><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let’s make something <span>meaningful.</span></h2><p>Send a message and let’s start a conversation.</p></div>
        <form className="contact-form" onSubmit={submitMessage}>
          <div className="form-row"><label>Name<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Your name"/></label><label>Email<input required type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@example.com"/></label></div>
          <label>Message<textarea required rows={3} value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Tell me a little about it..."/></label>
          <button className="button" type="submit">Send Message <Send size={15}/></button>
          {sent && <small className="form-note">Your email app should open. Update YOUR_EMAIL@example.com in app/page.tsx first.</small>}
        </form>
      </section>

      <footer className="footer section-shell">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Code2 size={22}/></span> HIMESH<span className="brand-dot">.</span></a>
        <p>B.Tech Student <span>•</span> Developer <span>•</span> Creator</p>
        <div className="footer-nav">{navItems.filter(([label]) => ["Home","About","Journey","Skills","Projects","Contact"].includes(label)).map(([label,id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div>
        <small>© {new Date().getFullYear()} Himesh Vaishnav. Built with curiosity.</small>
      </footer>

      {activeVideo !== null && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Creative work preview" onClick={() => setActiveVideo(null)}><div className="video-modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveVideo(null)} aria-label="Close"><X/></button><Play size={38}/><h3>{["Storytelling","Transitions","Visual mood","Creative cuts"][activeVideo]}</h3><p>Add your own reel or video URL to replace this preview.</p><button className="button button-outline" onClick={() => setActiveVideo(null)}>Close preview</button></div></div>}
    </main>
  );
}
