import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

import { DinoIcon, RhinoIcon } from "../icons";
import { profileData } from "../data";
import { accents, glow } from "../components/Shared";

const NavLink = ({ href, children }) => (
    <a
        href={href}
        className="text-sm md:text-base px-3 py-2 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800/60 transition"
    >
        {children}
    </a>
);

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
            />
        </motion.div>

        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 h-16 flex items-center justify-between relative z-10 mx-auto">
            <Link to="/" className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-neutral-900 grid place-items-center border border-neutral-800" style={glow(accents.red)}>
                    <DinoIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-semibold tracking-tight">{profileData.brand} · {profileData.name}</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
                <NavLink href="/#about">About</NavLink>
                <NavLink href="/#rinobotics">{profileData.brand}</NavLink>
                <NavLink href="/#resume">Career Path</NavLink>
                <Link to="/projects" className="text-sm md:text-base px-3 py-2 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800/60 transition">Projects</Link>
                <Link to="/achievements" className="text-sm md:text-base px-3 py-2 rounded-xl text-neutral-200 hover:text-white hover:bg-neutral-800/60 transition">Achievements</Link>
                <NavLink href="/#contact">Contact</NavLink>
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

const Footer = () => (
    <footer className="border-t border-neutral-900 py-8 mt-16 relative z-10">
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mx-auto text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
            <span>© {new Date().getFullYear()} {profileData.brand} · Built with React</span>
            <span className="flex items-center gap-2"><DinoIcon className="w-4 h-4" /> & <RhinoIcon className="w-4 h-4" /></span>
        </div>
    </footer>
);

export default function Layout() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-neutral-800 relative flex flex-col">
            <Header />
            <main className="flex-1">
                <AnimatePresence mode="wait">
                    <Outlet />
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}
