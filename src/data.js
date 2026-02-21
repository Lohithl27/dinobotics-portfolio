import { Cpu, Bot, Drone, Wrench, Rocket } from "lucide-react";

export const profileData = {
    name: "Lohith M R",
    brand: "Rinobotics",
    title: "Robotics & Automation Engineer · Founder of Rinobotics",
    headline: "Building Intelligent Machines",
    subHeadline: "Drones • AMRs • Automation • AI",
    aboutText: "Robotics & Automation Engineer (Class of 2025) with hands-on experience in AMRs, drone systems, control, and full-stack prototyping. I build practical robots that ship—fast. Rinobotics is my personal R&D effort where I combine software and hardware.",
    dinoboticsText: "At Rinobotics, I focus on building next-generation mobile robots and drones. It’s my playground for hardware design, advanced control systems, and autonomy.",
    email: "mrlohithmdy@gmail.com",
    socials: {
        github: "https://github.com/",
        linkedin: "https://www.linkedin.com/",
    },
    resumeLink: "/assets/Lohith_M_D_Resume.pdf"
};

export const skillsData = [
    { icon: Cpu, label: "Embedded & Control" },
    { icon: Bot, label: "Autonomy & AI" },
    { icon: Drone, label: "UAV Design (Pixhawk)" },
    { icon: Wrench, label: "CAD · CAM · FEA" },
];

export const educationData = [
    {
        degree: "B.E. Robotics & Automation",
        year: "Graduated 2025"
    }
];

export const experienceData = [
    {
        company: "Conceptia Software Technology",
        desc: "3DEXPERIENCE, SolidWorks, Implementation"
    },
    {
        company: "Rinobotics (Founder)",
        desc: "Prototyping, Drone/AMR projects, CV & control"
    }
];

export const highlightsData = [
    "Air Ambulance Drone – ducted rotors, Pixhawk",
    "AMR for Warehouses – path following",
    "Line Follower (3/7 IR) + Obstacle Avoid",
    "Bird Deterrent Drone – detection + deterrent"
];

// ---- GOOGLE DRIVE HELPER ----
// Use this function to convert a standard Google Drive "Copy Link" URL into a direct image URL.
export const formatDriveImage = (url) => {
    if (!url) return "";
    const driveRegex = /\/file\/d\/(.*?)\//;
    const match = url.match(driveRegex);
    if (match && match[1]) {
        return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url; // Return original if it doesn't match standard Drive share format
};

export const achievementsData = [
    {
        title: "Kavacha 2024 - Hackathon Finalist",
        desc: "Participated and reached the finals of the national-level cybersecurity and robotics hackathon Kavacha.",
        date: "March 2024",
        link: "#",
        // Example of how to add an image from Google Drive:
        // image: formatDriveImage("https://drive.google.com/file/d/YOUR_DRIVE_ID/view?usp=sharing")
    }
];

export const allProjects = [
    {
        id: "air-ambulance-drone",
        title: "Air Ambulance Drone",
        desc: "4 ducted rotors (future hex), Pixhawk flight controller, medical payload with removable stretcher module.",
        tags: ["Pixhawk", "CV", "Aerial"],
        icon: Drone,
        type: "Drones",
        link: "#",
        images: []
    },
    {
        id: "amr-warehouse",
        title: "AMR – Warehouse",
        desc: "Autonomous Mobile Robot with path planning, telemetry dashboard, ROS2 nodes and safety sensors.",
        tags: ["ROS2", "Mapping", "AMR"],
        icon: Bot,
        type: "Robotics",
        link: "#",
        images: []
    },
    {
        id: "rinobotics-amr-platform",
        title: "Rinobotics AMR Platform",
        desc: "Custom-built Autonomous Mobile Robot capable of SLAM and dynamic obstacle avoidance. Fully built from scratch using ROS2 and depth cameras.",
        tags: ["ROS2", "SLAM", "Navigation", "Hardware"],
        icon: Bot,
        type: "Robotics",
        link: "#",
        images: []
    },
    {
        id: "line-follower",
        title: "Line Follower + Obstacle Avoid",
        desc: "Switchable 3/7 IR sensor array, TB6612FNG driver, PID tuning, and mode toggle UI.",
        tags: ["Arduino", "PID", "Sensors"],
        icon: Cpu,
        type: "Automation",
        link: "#",
        images: []
    },
    {
        id: "bird-deterrent-drone",
        title: "Bird Deterrent Drone",
        desc: "Camera-based bird detection, deterrent activation logic, and mission planner integration.",
        tags: ["Vision", "Mission", "Drone"],
        icon: Rocket,
        type: "Drones",
        link: "#",
        images: []
    },
];
