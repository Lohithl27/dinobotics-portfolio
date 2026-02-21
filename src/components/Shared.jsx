import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export const accents = {
    red: "#ff4d4d",
    blue: "#4da3ff",
    yellow: "#ffd84d",
};

export const glow = (color) => ({
    boxShadow: `0 0 24px ${color}55, inset 0 0 12px ${color}30`,
});

export const Section = ({ id, title, icon, children, className = "", bgGif }) => (
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

export const Badge = ({ children, tone = "blue" }) => (
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

export const Skill = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
        <span className="opacity-90"><Icon className="w-4 h-4 text-neutral-300" /></span>
        <span className="text-neutral-200 text-sm">{label}</span>
    </div>
);

export const ProjectCard = ({ project }) => (
    <motion.a
        href={project.link || "#"}
        target={project.link ? "_blank" : undefined}
        rel={project.link ? "noreferrer" : undefined}
        whileHover={{ y: -4 }}
        className="group flex flex-col rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden relative z-10"
        style={glow(accents.yellow)}
    >
        <div className="aspect-video w-full bg-neutral-900/80 grid place-items-center relative overflow-hidden">
            {project.images && project.images.length > 0 ? (
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            ) : (
                <project.icon className="w-14 h-14 text-neutral-300 group-hover:scale-110 transition-transform" />
            )}
        </div>
        <div className="p-5 flex-1 flex flex-col gap-3 relative z-20 bg-gradient-to-t from-neutral-900 to-transparent">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <ExternalLink className="w-4 h-4 text-neutral-400" />
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed flex-1 line-clamp-3">{project.desc}</p>
            <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((t) => (
                    <Badge key={t} tone={"blue"}>{t}</Badge>
                ))}
            </div>
        </div>
    </motion.a>
);
