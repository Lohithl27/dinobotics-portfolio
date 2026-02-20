import { Cpu, Bot, Drone, Wrench, Rocket } from "lucide-react";

export const profileData = {
    name: "Lohith M R",
    brand: "Dinobotics",
    title: "Robotics & Automation Engineer · Founder of Dinobotics",
    headline: "Building Intelligent Machines",
    subHeadline: "Drones · AMRs · Automation · AI",
    aboutText: "Robotics & Automation Engineer (Class of 2025) with hands‑on experience in AMRs, drone systems, control, and full‑stack prototyping. I build practical robots that ship—fast.",
    dinoboticsText: "Dinobotics is my studio for building intelligent machines—rapid prototyping to pilot‑ready demos. From drone-based medical logistics to warehouse AMRs, we design, simulate, and deploy.",
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
        company: "Dinobotics (Founder)",
        desc: "Prototyping, Drone/AMR projects, CV & control"
    }
];

export const highlightsData = [
    "Air Ambulance Drone – ducted rotors, Pixhawk",
    "AMR for Warehouses – path following",
    "Line Follower (3/7 IR) + Obstacle Avoid",
    "Bird Deterrent Drone – detection + deterrent"
];

export const allProjects = [
    {
        title: "Air Ambulance Drone",
        desc: "4 ducted rotors (future hex), Pixhawk flight controller, medical payload with removable stretcher module.",
        tags: ["Pixhawk", "CV", "Aerial"],
        icon: Drone,
        type: "Drones",
        link: "#",
    },
    {
        title: "AMR – Warehouse",
        desc: "Autonomous Mobile Robot with path planning, telemetry dashboard, ROS2 nodes and safety sensors.",
        tags: ["ROS2", "Mapping", "AMR"],
        icon: Bot,
        type: "Robotics",
        link: "#",
    },
    {
        title: "Line Follower + Obstacle Avoid",
        desc: "Switchable 3/7 IR sensor array, TB6612FNG driver, PID tuning, and mode toggle UI.",
        tags: ["Arduino", "PID", "Sensors"],
        icon: Cpu,
        type: "Automation",
        link: "#",
    },
    {
        title: "Bird Deterrent Drone",
        desc: "Camera-based bird detection, deterrent activation logic, and mission planner integration.",
        tags: ["Vision", "Mission", "Drone"],
        icon: Rocket,
        type: "Drones",
        link: "#",
    },
];
