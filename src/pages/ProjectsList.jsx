import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Github } from "lucide-react";

import { RhinoIcon } from "../icons";
import { allProjects } from "../data";
import { accents, glow, Section, ProjectCard } from "../components/Shared";

export default function ProjectsList() {
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
        <div className="pt-8 pb-24">
            <Section id="projects" title="All Projects" icon={<RhinoIcon className="w-5 h-5 text-white" />} bgGif="/original-b09a92b1dc085511e7fe96ceb34c5a80.gif">
                {/* Running Rhino Animation */}
                <motion.div
                    className="absolute top-10 right-0 opacity-20 pointer-events-none z-0"
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
                                layout
                            >
                                <ProjectCard project={p} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </Section>
        </div>
    );
}
