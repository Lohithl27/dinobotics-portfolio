import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownToLine, Download, Mail, ExternalLink, Filter, FileText, User, Building2, Sparkles, Github } from "lucide-react";

import { DinoIcon, RhinoIcon } from "./icons";
import {
  profileData,
  skillsData,
  educationData,
  experienceData,
  highlightsData,
  allProjects,
} from "./data";

// ---- THEME ----
const accents = {
  red: "#ff4d4d",
  blue: "#4da3ff",
  yellow: "#ffd84d",
};

const glow = (color) => ({
  boxShadow: `0 0 24px ${color}55, inset 0 0 12px ${color}30`,
});

// ---- LOADING SCREEN ----
const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/1049ed74597569.5c44ad56a1409.gif"
          alt="Realistic Running T-Rex"
          className="w-72 md:w-96 h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute bottom-20 text-neutral-400 font-mono text-sm tracking-widest"
      >
        INITIALIZING SYSTEM...
      </motion.div>
    </motion.div>
  );
};

// ---- SHARED COMPONENTS ----
const Section = ({ id, title, icon, children, className = "", bgGif }) => (
  <section id={id} className={`scroll-mt-24 py-16 md:py-24 relative overflow-hidden ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mx-auto relative z-10"
    >
      <div className="flex items-center gap-3 mb-8 relative overflow-hidden rounded-2xl bg-neutral-900/40 p-3 border border-neutral-800/50 w-fit">
        <span className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 relative z-10" style={glow(accents.blue)}>
          {icon}
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white relative z-10 mr-2">
          {title}
        </h2>
        {bgGif && (
          <img src={bgGif} className="h-10 md:h-12 w-auto object-contain relative z-10" alt="Title Animation GIF" />
        )}
      </div>
      {children}
    </motion.div>
  </section>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm md:text-base px-3 py-2 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800/60 transition"
  >
    {children}
  </a>
);

const Badge = ({ children, tone = "blue" }) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border`}
    style={{
      borderColor: accents[tone],
      color: accents[tone],
      boxShadow: `0 0 12px ${accents[tone]}33`,
    }}
  >
    {children}
  </span>
);

const Skill = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
    <span className="opacity-90"><Icon className="w-4 h-4 text-neutral-300" /></span>
    <span className="text-neutral-200 text-sm">{label}</span>
  </div>
);

const ProjectCard = ({ project }) => (
  <motion.a
    href={project.link || "#"}
    target={project.link ? "_blank" : undefined}
    rel={project.link ? "noreferrer" : undefined}
    whileHover={{ y: -4 }}
    className="group flex flex-col rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden relative z-10"
    style={glow(accents.yellow)}
  >
    <div className="aspect-video w-full bg-neutral-900/80 grid place-items-center">
      <project.icon className="w-14 h-14 text-neutral-300 group-hover:scale-110 transition-transform" />
    </div>
    <div className="p-5 flex-1 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <ExternalLink className="w-4 h-4 text-neutral-400" />
      </div>
      <p className="text-sm text-neutral-300 leading-relaxed flex-1">{project.desc}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tags.map((t) => (
          <Badge key={t} tone={"blue"}>{t}</Badge>
        ))}
      </div>
    </div>
  </motion.a>
);

// ---- SECTIONS ----
const Header = () => (
  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-neutral-900 overflow-hidden">
    {/* Running Dino Animation */}
    <motion.div
      className="absolute top-0 left-0 h-1 z-0 opacity-30 pointer-events-none"
      initial={{ x: "-10%" }}
      animate={{ x: "110vw" }}
      transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
    >
      <img
        src="/3goiqtx2dmb31.gif"
        alt="Running T-Rex"
        className="h-16 w-auto object-contain -mt-14"
        style={{ filter: "drop-shadow(0 0 10px rgba(255, 77, 77, 0.5))" }}
      />
    </motion.div>

    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 h-16 flex items-center justify-between relative z-10 mx-auto">
      <a href="#home" className="flex items-center gap-2">
        <div className="size-8 rounded-xl bg-neutral-900 grid place-items-center border border-neutral-800" style={glow(accents.red)}>
          <DinoIcon className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-semibold tracking-tight">{profileData.brand} · {profileData.name}</span>
      </a>
      <nav className="hidden md:flex items-center gap-1">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#rinobotics">{profileData.brand}</NavLink>
        <NavLink href="#resume">Resume</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
      <a
        href={profileData.resumeLink}
        className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium border border-neutral-800 bg-neutral-900 text-white hover:bg-neutral-800"
        style={glow(accents.blue)}
      >
        <Download className="w-4 h-4" /> Resume
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: accents.blue }} />
      <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: accents.red }} />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: accents.yellow }} />
    </div>

    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 pt-20 md:pt-28 pb-16 md:pb-24 relative z-10 mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm text-neutral-200 border-neutral-800 bg-neutral-900/80" style={glow(accents.yellow)}>
          <Sparkles className="w-4 h-4" /> {profileData.title}
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {profileData.headline}
          <span className="block text-transparent bg-clip-text mt-2" style={{ backgroundImage: `linear-gradient(90deg, ${accents.red}, ${accents.blue}, ${accents.yellow})` }}>
            {profileData.subHeadline}
          </span>
        </h1>
        <p className="mt-4 md:mt-6 text-neutral-300 max-w-2xl leading-relaxed">
          {profileData.aboutText.split(profileData.brand)[0]}<span className="text-white font-medium">{profileData.brand}</span>{profileData.aboutText.split(profileData.brand)[1]}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="rounded-xl px-5 py-3 font-medium text-white border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" style={glow(accents.blue)}>
            Explore Projects
          </a>
          <a href="#contact" className="rounded-xl px-5 py-3 font-medium text-black" style={{ background: accents.yellow }}>
            Contact Me
          </a>
          <a href={profileData.resumeLink} className="inline-flex items-center gap-2 rounded-xl px-4 py-3 font-medium text-white border border-neutral-800 hover:bg-neutral-800">
            <ArrowDownToLine className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" title="About Me" icon={<User className="w-5 h-5 text-white" />} bgGif="/clip-transparent-dinosaur-gif-0.gif">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <p className="text-neutral-300 leading-relaxed">
          {profileData.aboutText}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge tone="red">{profileData.brand}</Badge>
          <Badge tone="blue">Pixhawk</Badge>
          <Badge tone="yellow">ROS2</Badge>
          <Badge tone="blue">Fusion 360</Badge>
          <Badge tone="red">Arduino/STM32</Badge>
          <Badge tone="yellow">Computer Vision</Badge>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skillsData.map((s) => (
          <Skill key={s.label} icon={s.icon} label={s.label} />
        ))}
      </div>
    </div>
  </Section>
);

const Rinobotics = () => (
  <Section id="rinobotics" title={profileData.brand} icon={<Building2 className="w-5 h-5 text-white" />}>
    <div className="rounded-2xl p-6 border border-neutral-800 bg-neutral-900" style={glow(accents.red)}>
      <p className="text-neutral-300 leading-relaxed">
        <span className="text-white font-medium">{profileData.brand}</span> {profileData.dinoboticsText.substring(profileData.brand.length + 4)}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge tone="red">R&D</Badge>
        <Badge tone="blue">Prototyping</Badge>
        <Badge tone="yellow">Field Testing</Badge>
      </div>
    </div>
  </Section>
);

const Resume = () => (
  <Section id="resume" title="Career Path" icon={<FileText className="w-5 h-5 text-white" />} bgGif="/original-0fd7929018a90d2e1f6e8b0a610780c7.gif">
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="rounded-2xl p-6 border border-neutral-800 bg-neutral-900" style={glow(accents.blue)}>
        <h3 className="text-white font-semibold mb-2">Education</h3>
        <ul className="space-y-4 text-neutral-300 text-sm">
          {educationData.map((e, i) => (
            <li key={i}>
              <div className="font-medium text-white text-base">{e.degree}</div>
              <div className="text-neutral-400 mt-1">{e.year}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl p-6 border border-neutral-800 bg-neutral-900" style={glow(accents.yellow)}>
        <h3 className="text-white font-semibold mb-2">Experience</h3>
        <ul className="space-y-4 text-neutral-300 text-sm">
          {experienceData.map((e, i) => (
            <li key={i}>
              <div className="font-medium text-white text-base">{e.company}</div>
              <div className="text-neutral-400 mt-1">{e.desc}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl p-6 border border-neutral-800 bg-neutral-900" style={glow(accents.red)}>
        <h3 className="text-white font-semibold mb-2">Highlights</h3>
        <ul className="space-y-2 text-neutral-300 text-sm list-disc pl-5">
          {highlightsData.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <a
          href={profileData.resumeLink}
          className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-neutral-800 text-white hover:bg-neutral-800 transition"
        >
          <Download className="w-4 h-4" /> Download PDF
        </a>
      </div>
    </div>
  </Section>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [githubProjects, setGithubProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Lohithl27/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const mapped = data.map(repo => ({
            title: repo.name,
            desc: repo.description || "No description provided.",
            tags: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language || "GitHub"],
            icon: Github,
            type: "GitHub",
            link: repo.html_url,
          }));
          setGithubProjects(mapped);
        }
      })
      .catch(err => console.error("Error fetching GitHub repos:", err));
  }, []);

  const combinedProjects = useMemo(() => [...allProjects, ...githubProjects], [githubProjects]);

  const categories = ["All", "Robotics", "Drones", "Automation", "GitHub"];
  const filtered = useMemo(
    () => (filter === "All" ? combinedProjects : combinedProjects.filter((p) => p.type === filter)),
    [filter, combinedProjects]
  );

  return (
    <Section id="projects" title="Projects" icon={<RhinoIcon className="w-5 h-5 text-white" />} bgGif="/original-b09a92b1dc085511e7fe96ceb34c5a80.gif">
      {/* Running Rhino Animation */}
      <motion.div
        className="absolute bottom-10 right-0 opacity-20 pointer-events-none z-0"
        initial={{ x: "10%" }}
        animate={{ x: "-110vw" }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <RhinoIcon className="w-16 h-16 text-yellow-500" />
      </motion.div>

      <div className="mb-6 flex flex-wrap items-center gap-2 relative z-10">
        <span className="inline-flex items-center gap-2 text-neutral-400 text-sm font-medium mr-2"><Filter className="w-4 h-4" /> Filter:</span>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === c ? "bg-neutral-800 text-white border-transparent" : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white"
              } border hover:bg-neutral-800`}
            style={filter === c ? glow(accents.blue) : undefined}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

const Contact = () => (
  <Section id="contact" title="Contact" icon={<Mail className="w-5 h-5 text-white" />} bgGif="/56ef36af62e3066754128d43a190df52.gif">
    <div className="grid md:grid-cols-2 gap-6 relative z-10">
      <form
        className="rounded-2xl p-6 border border-neutral-800 bg-neutral-900 space-y-4"
        style={glow(accents.blue)}
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          const body = `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`;
          window.location.href = `mailto:${profileData.email}?subject=${profileData.brand}%20Inquiry&body=${encodeURIComponent(body)}`;
        }}
      >
        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1.5">Name</label>
          <input name="name" required className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1.5">Email</label>
          <input name="email" type="email" required className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1.5">Message</label>
          <textarea name="message" rows={5} required className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition resize-none" placeholder="How can we help you?" />
        </div>
        <button className="inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 font-medium bg-white text-black hover:bg-neutral-200 transition mt-2" type="submit">
          <Mail className="w-4 h-4" /> Send Message
        </button>
      </form>
      <div className="rounded-2xl p-6 border border-neutral-800 bg-neutral-900 flex flex-col justify-between" style={glow(accents.yellow)}>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Let's Connect</h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex flex-col gap-4">
            <a className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition group" href={profileData.socials.github} target="_blank" rel="noreferrer">
              <span className="p-2 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition"><DinoIcon className="w-4 h-4" /></span> GitHub
            </a>
            <a className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition group" href={profileData.socials.linkedin} target="_blank" rel="noreferrer">
              <span className="p-2 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition"><User className="w-4 h-4" /></span> LinkedIn
            </a>
            <a className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition group" href={`mailto:${profileData.email}`}>
              <span className="p-2 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 transition"><Mail className="w-4 h-4" /></span> Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default function DinoboticsPortfolio() {
  const [loading, setLoading] = useState(true);

  // Prevent scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-neutral-800 relative">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease-in" }}>
        <Header />
        <Hero />
        <About />
        <Resume />
        <Rinobotics />
        <Projects />
        <Contact />
        <footer className="border-t border-neutral-900 py-8 mt-16 relative z-10">
          <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mx-auto text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
            <span>© {new Date().getFullYear()} {profileData.brand} · Built with React</span>
            <span className="flex items-center gap-2"><DinoIcon className="w-4 h-4" /> & <RhinoIcon className="w-4 h-4" /></span>
          </div>
        </footer>
      </div>
    </div>
  );
}
