import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

import { achievementsData } from "../data";
import { accents, glow, Section, Badge } from "../components/Shared";

const AchievementCard = ({ item }) => (
    <motion.div
        whileHover={{ y: -4 }}
        className="group flex flex-col rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden relative z-10"
        style={glow(accents.blue)}
    >
        {item.image && (
            <div className="aspect-video w-full bg-neutral-900/80 relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
            </div>
        )}
        <div className="p-5 flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition">
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Calendar className="w-4 h-4 text-neutral-500" />
                <span>{item.date}</span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed flex-1 mt-2">{item.desc}</p>
        </div>
    </motion.div>
);

export default function Achievements() {
    return (
        <div className="pt-8 pb-24 min-h-screen">
            <Section id="achievements" title="Achievements & Certificates" icon={<Award className="w-5 h-5 text-white" />}>
                <p className="text-neutral-400 mb-8 max-w-2xl">
                    A collection of my participation in events, hackathons, certifications, and other significant milestones in my robotics and engineering journey.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    <AnimatePresence mode="popLayout">
                        {achievementsData && achievementsData.length > 0 ? achievementsData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                            >
                                <AchievementCard item={item} />
                            </motion.div>
                        )) : (
                            <p className="text-neutral-500 col-span-full">Additional achievements will be posted here soon!</p>
                        )}
                    </AnimatePresence>
                </div>
            </Section>
        </div>
    );
}
