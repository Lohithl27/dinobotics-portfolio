import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownToLine, Download, Mail, User, Building2, Sparkles, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { DinoIcon } from "../icons";
import {
    profileData,
    skillsData,
    educationData,
    experienceData,
    highlightsData,
} from "../data";
import { accents, glow, Section, Badge, Skill } from "../components/Shared";

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
                    <Link to="/projects" className="rounded-xl px-5 py-3 font-medium text-white border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 flex items-center gap-2" style={glow(accents.blue)}>
                        Explore Projects <ArrowRight className="w-4 h-4" />
                    </Link>
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

export default function Home() {
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
        <div className="relative">
            <AnimatePresence>
                {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
            >
                <Hero />
                <About />
                <Resume />
                <Rinobotics />
                <Contact />
            </motion.div>
        </div>
    );
}
