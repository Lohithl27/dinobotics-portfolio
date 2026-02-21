import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, GitCommit } from "lucide-react";
import { motion } from "framer-motion";

import { allProjects } from "../data";
import { accents, glow, Badge, Section } from "../components/Shared";

export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Find internal project
        window.scrollTo(0, 0);
        const found = allProjects.find((p) => p.id === id);
        if (found) {
            setProject(found);
        }
    }, [id]);

    if (!project) {
        return (
            <div className="pt-32 pb-24 px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold mb-4 text-white">Project Not Found</h2>
                <Link to="/projects" className="text-neutral-400 hover:text-white flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-24 max-w-4xl mx-auto px-4 w-full">
            <Link to="/projects" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition group mb-8">
                <span className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:bg-neutral-800 transition"><ArrowLeft className="w-4 h-4" /></span>
                Back to all projects
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="flex flex-wrap gap-2 mb-4">
                    <Badge tone="yellow">{project.type}</Badge>
                    {project.tags.map(tag => (
                        <Badge key={tag} tone="blue">{tag}</Badge>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {project.title}
                </h1>

                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
                    {project.desc}
                </p>

                {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-white border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 mb-12" style={glow(accents.blue)}>
                        <ExternalLink className="w-4 h-4" /> View Live Project
                    </a>
                )}

                {project.images && project.images.length > 0 && (
                    <div className="space-y-8 mt-8">
                        <h2 className="text-2xl font-semibold text-white border-b border-neutral-800 pb-2 mb-6">Gallery / Media</h2>
                        {project.images.map((imgUrl, i) => (
                            <img key={i} src={imgUrl} alt={`${project.title} screenshot ${i + 1}`} className="w-full rounded-2xl border border-neutral-800 shadow-2xl object-cover bg-neutral-900" style={{ maxHeight: '600px' }} />
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}
