import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profileImg from "./PROFILE.jpeg";
import Chatbot from "./components/Chatbot";
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code2,
    Server,
    Database,
    Brain,
    Rocket,
    GraduationCap,
    Menu,
    X,
    ArrowRight,
    Award,
    CheckCircle2,
    Sparkles,
    Send,
} from "lucide-react";
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

export default function PortfolioWebsite() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const rafRef = useRef(null);

    // Feedback form state
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/mlgzdeeb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed to send feedback.");
            }
        } catch (error) {
            alert("Something went wrong.");
        }
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        const updateMousePos = () => {
            setMousePos(prev => ({
                x: prev.x + (mouseRef.current.x - prev.x) * 0.08,
                y: prev.y + (mouseRef.current.y - prev.y) * 0.08,
            }));
            rafRef.current = requestAnimationFrame(updateMousePos);
        };
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        rafRef.current = requestAnimationFrame(updateMousePos);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const navItems = ["Home", "About", "Skills", "Projects", "Journey", "Certifications", "Contact"];

    const skills = [
        {
            title: "Frontend Development",
            icon: <Code2 className="h-7 w-7" />,
            items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive UI"],
        },
        {
            title: "Backend Development",
            icon: <Server className="h-7 w-7" />,
            items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Middleware", "Scalable Routes"],
        },
        {
            title: "Database & Tools",
            icon: <Database className="h-7 w-7" />,
            items: ["MongoDB", "Mongoose", "Git", "GitHub", "Vercel", "Render"],
        },
        {
            title: "AI Integration",
            icon: <Brain className="h-7 w-7" />,
            items: ["AI Chatbot", "API Integration", "Resume Analyzer", "Smart Dashboard", "Health Assistant"],
        },
    ];

    const projects = [
        {
            name: "AI Health Assistant",
            type: "AI + Web App",
            desc: "An AI-powered assistant that provides basic health guidance, symptom-based suggestions, and future scope for tracking and personalization.",
            tech: ["React", "AI API", "JavaScript", "Tailwind"],
            status: "Live / In Progress",
            link: "https://ai-integrated-health-assistant-app.vercel.app",
        },
        {
            name: "College ERP System",
            type: "Full Stack MERN Project",
            desc: "A scalable college ERP concept for students, admins, accounts, attendance, smart AI tools, resume analysis, CGPA calculator, and dashboards.",
            tech: ["MongoDB", "Express", "React", "Node", "JWT"],
            status: "Building",
            link: "https://example.com",
        },
        {
            desc: "A modern weather platform with dashboard UI, API integration, forecast cards, smart highlights, and premium glassmorphism design.",
            name: "AI Weather Intelligence Platform",
            type: "API-Based Project",
            tech: ["React", "Weather API", "Tailwind", "Vite"],
            status: "Deployed / Improving",
            link: "https://ai-powered-weather-app-ldu5-dusky.vercel.app/",
        },
    ];

    const journey = [
        "Started with HTML, CSS and JavaScript",
        "Built API-based frontend projects",
        "Learning backend with Node.js and Express",
        "Moving toward complete MERN stack development",
        "Building scalable college-level real-world projects",
    ];

    const certifications = [
        {
            title: "React Frontend Development",
            org: "Frontend / React",
            date: "2025",
            image: "/certificates/react.png",
            desc: "Built modern responsive UI using React, hooks, Tailwind CSS and component architecture.",
        },
        {
            title: "MERN Stack Development",
            org: "Full Stack",
            date: "2025",
            image: "/certificates/mern.png",
            desc: "Learning MongoDB, Express, React, Node with authentication and scalable backend structure.",
        },
        {
            title: "AI Project Integration",
            org: "AI + Web Apps",
            date: "2025",
            image: "/certificates/ai.png",
            desc: "Integrated AI into projects like chatbot, health assistant and smart dashboards.",
        },
        {
            title: "API Based Projects",
            org: "JavaScript / APIs",
            date: "2025",
            image: "/certificates/api.png",
            desc: "Worked with real APIs like weather systems and dynamic UI dashboards.",
        },
        {
            title: "College ERP System",
            org: "Major Project",
            date: "2026",
            image: "/certificates/erp.png",
            desc: "Building scalable ERP with multiple roles, dashboards, and AI tools.",
        },
        {
            title: "GitHub & Deployment",
            org: "Developer Tools",
            date: "2025",
            image: "/certificates/github.png",
            desc: "Using Git, GitHub, Vercel and Render for deployment and version control.",
        },
    ];

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-dark-bg text-white">
            {/* CLEAN PREMIUM BACKGROUND */}
            <div className="fixed inset-0 -z-10 bg-[#020617] overflow-hidden">

                {/* Gradient Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.12),transparent_40%)]" />

                {/* Glow Orbs */}
                <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />

                {/* Mouse Glow */}
                <div
                    className="hidden md:block pointer-events-none absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full"
                    style={{
                        transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`
                    }}
                />
            </div>

            {/* ===== NAVBAR ===== */}
            <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-dark-bg/50 backdrop-blur-2xl">
                <nav className="section-container flex items-center justify-between py-4">
                    <a href="#home" className="flex items-center gap-2 text-xl font-black tracking-tight">
                        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue text-dark-bg shadow-neon-cyan-sm">
                            KC
                        </span>
                        <span className="text-glow hidden sm:inline">Kunal.dev</span>
                    </a>

                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="nav-glow-link text-sm font-medium text-slate-300">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <button
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({ title: "Kunal.dev Portfolio", text: "Check out Kunal's MERN Stack Developer Portfolio", url: window.location.href });
                                } else {
                                    navigator.clipboard.writeText(window.location.href);
                                    alert("Portfolio link copied!");
                                }
                            }}
                            className="btn-outline-glow text-sm"
                        >
                            Share
                        </button>
                        <a
                            href="mailto:kunalchakraborti5@gmail.com"
                            className="btn-glow text-sm"
                        >
                            Hire Me
                        </a>
                    </div>

                    <button
                        className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 backdrop-blur-sm transition hover:border-neon-cyan/50 hover:text-neon-cyan md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </nav>

                {menuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="border-t border-white/10 bg-dark-bg/95 px-6 py-4 backdrop-blur-2xl md:hidden">
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="mobile-menu-link">
                                {item}
                            </a>
                        ))}

                        <button
                            onClick={async () => {
                                const shareData = {
                                    title: "Kunal.dev Portfolio",
                                    text: "Check out Kunal's MERN Stack Developer Portfolio 🚀",
                                    url: window.location.href,
                                };

                                try {
                                    if (navigator.share) {
                                        await navigator.share(shareData);
                                    } else {
                                        await navigator.clipboard.writeText(window.location.href);
                                        alert("Portfolio link copied!");
                                    }

                                    setMenuOpen(false);
                                } catch (error) {
                                    console.log("Share cancelled or failed:", error);
                                }
                            }}
                            className="btn-glow mt-4 w-full justify-center text-sm"
                        >
                            Share Portfolio
                        </button>
                        <a
                            href="mailto:kunalchakraborti5@gmail.com"
                            className="mt-3 flex w-full items-center justify-center rounded-xl border border-neon-cyan/40 bg-neon-cyan/10 px-5 py-3 text-sm font-bold text-neon-cyan shadow-[0_0_10px_rgba(0,242,255,0.2)] transition hover:bg-neon-cyan hover:text-dark-bg hover:shadow-[0_0_20px_rgba(0,242,255,0.5)]"
                        >
                            Hire Me
                        </a>
                    </motion.div>
                )}
            </header>

            <main className="relative z-10">
                {/* ===== HERO ===== */}
                <section id="home" className="section-container grid min-h-screen items-center gap-10 pt-28 pb-16 md:grid-cols-2 md:gap-12 md:pt-32">
                    <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/25 bg-neon-cyan/5 px-4 py-2 text-sm text-neon-cyan shadow-neon-cyan-sm">
                            <Sparkles className="h-4 w-4" /> MERN Stack Developer in Progress
                        </div>
                        <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent text-glow">
                                Kunal
                            </span>
                            .
                            <br />
                            <span className="text-glow">I build AI-powered web products.</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                            I'm a Computer Science student and MERN stack developer focused on building real-world projects like AI Health Assistant, College ERP, Weather Intelligence Platform, and scalable dashboards.
                        </p>
                        <p className="mt-3 text-sm text-neon-cyan">
                            Open to internships, freelance work, and MERN + AI collaborations.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">

                            <a href="#projects" className="btn-glow">
                                View Projects <ArrowRight className="h-5 w-5" />
                            </a>

                            <a href="#contact" className="btn-outline-glow">
                                Contact Me
                            </a>

                            {/* NEW BUTTON */}
                            <a href="/resume.pdf" download className="btn-glow flex items-center gap-2">
                                Download Resume
                                <Download className="h-5 w-5" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="relative">
                        <div className="neon-border-wrapper">
                            <div className="neon-box-content p-6 sm:p-8">
                                <div className="mb-6 flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                                    <span className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                                </div>
                                <pre className="overflow-hidden text-xs leading-7 text-slate-400 sm:text-sm">
                                    <code>{`const developer = {
  name: "Kunal Chakraborti",
  focus: ["React", "Node", "MongoDB", "AI"],
  role: "MERN Stack Developer",
  mindset: "Comeback stronger",
  goal: "Build scalable real-world apps"
};`}</code>
                                </pre>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <div className="section-divider relative overflow-hidden h-[1px] bg-white/10">
                    <span className="absolute inset-0 bg-neon-cyan/30"></span>

                    <span className="absolute top-0 left-[-50%] h-full w-1/2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-divider-sweep"></span>
                </div>

                {/* ===== ABOUT ===== */}
                <section id="about" className="section-container py-20 md:py-28">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid items-center gap-12 md:grid-cols-2">
                        <motion.div variants={fadeInUp} className="flex justify-center">
                            <div className="profile-ring h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]">
                                <img src={profileImg} loading="lazy" alt="Kunal" />
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <p className="section-label">About Me</p>
                            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl mb-6 text-glow">
                                A developer building with purpose.
                            </h2>
                            <div className="neon-border glass-card rounded-2xl p-6 text-base leading-8 text-slate-400 sm:text-lg">
                                I am not just creating small projects. I am learning by building practical solutions that can be used by real people. My current focus is becoming job-ready as a MERN stack developer by creating scalable, clean, and impressive web applications.
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                <div className="section-divider relative overflow-hidden h-[1px] bg-white/10">
                    <span className="absolute inset-0 bg-neon-cyan/30"></span>

                    <span className="absolute top-0 left-[-50%] h-full w-1/2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-divider-sweep"></span>
                </div>

                {/* ===== SKILLS ===== */}
                <section id="skills" className="section-container py-20 md:py-28">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center">
                        <p className="section-label">Skills</p>
                        <h2 className="mb-12 text-3xl font-black sm:text-4xl md:text-5xl text-glow">
                            My Development Stack
                        </h2>
                    </motion.div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative mx-auto max-w-4xl"
                    >
                        {/* soft background glow */}
                        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_55%)]" />

                        {/* center line */}
                        <div className="absolute left-1/2 top-3 hidden h-[calc(100%-1.5rem)] w-[1.5px] -translate-x-1/2 bg-gradient-to-b from-transparent via-neon-cyan/70 to-transparent lg:block" />

                        <div className="space-y-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    variants={fadeInUp}
                                    key={skill.title}
                                    className={`relative flex items-center ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                                        }`}
                                >
                                    {/* node */}
                                    <div className="absolute left-1/2 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neon-cyan bg-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.7)] lg:block">
                                        <div className="absolute inset-1 rounded-full bg-neon-cyan/80" />
                                    </div>

                                    {/* connector */}
                                    <div
                                        className={`absolute top-1/2 hidden h-[1.5px] w-14 -translate-y-1/2 
                                                ${index % 2 === 0
                                                ? "left-1/2 -translate-x-full bg-gradient-to-r from-transparent to-neon-cyan/80"
                                                : "left-1/2 bg-gradient-to-r from-neon-cyan/80 to-transparent"
                                            } lg:block`}
                                    />

                                    {/* card */}
                                    <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] sm:w-[350px]">

                                        {/* top shine */}
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/70 to-transparent" />

                                        {/* corner glow */}
                                        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-neon-cyan/10 blur-2xl transition-all duration-300 group-hover:bg-neon-cyan/20" />

                                        <div className="relative mb-2 flex items-center gap-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neon-cyan/20 bg-neon-cyan/10 text-neon-cyan shadow-[0_0_18px_rgba(34,211,238,0.18)]">
                                                {skill.icon}
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-black tracking-wide text-white sm:text-base">
                                                    {skill.title}
                                                </h3>
                                                <p className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan/70">
                                                    Stack Module
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative space-y-1">
                                            {skill.items.slice(0, 2).map((item) => (
                                                <p
                                                    key={item}
                                                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-2 py-1 text-[11px] text-slate-300"
                                                >
                                                    <CheckCircle2 className="h-3 w-3 shrink-0 text-neon-cyan" />
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                <div className="section-divider relative overflow-hidden h-[1px] bg-white/10">
                    <span className="absolute inset-0 bg-neon-cyan/30"></span>

                    <span className="absolute top-0 left-[-50%] h-full w-1/2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-divider-sweep"></span>
                </div>

                {/* ===== PROJECTS ===== */}
                <section id="projects" className="section-container py-20 md:py-28">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <p className="section-label">Projects</p>
                            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl text-glow">Featured Work</h2>
                        </div>
                        <p className="max-w-md text-sm text-slate-500 sm:text-base">
                            These projects show my direction: AI integration, full-stack systems, API usage, dashboard design, and scalable product thinking.
                        </p>
                    </motion.div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <motion.article variants={fadeInUp} key={project.name} className="glass-card neon-border glow-hover group rounded-3xl p-6 sm:p-7">
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="rounded-full bg-neon-purple/10 px-3 py-1 text-xs font-bold text-neon-purple border border-neon-purple/20 shadow-neon-purple">
                                        {project.type}
                                    </span>
                                    <a
                                        href={project.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open ${project.name}`}
                                    >
                                        <ExternalLink className="h-5 w-5 text-slate-500 transition hover:text-neon-cyan hover:drop-shadow-[0_0_5px_rgba(0,242,255,0.4)]" />
                                    </a>
                                </div>
                                <h3 className="mb-4 text-xl font-black sm:text-2xl group-hover:text-glow transition">
                                    {project.name}
                                </h3>
                                <p className="mb-6 text-sm leading-7 text-slate-400 sm:text-base">{project.desc}</p>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <p className="status-badge">{project.status}</p>
                            </motion.article>
                        ))}
                    </motion.div>
                </section>

                <div className="section-divider relative overflow-hidden h-[1px] bg-white/10">
                    <span className="absolute inset-0 bg-neon-cyan/30"></span>

                    <span className="absolute top-0 left-[-50%] h-full w-1/2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-divider-sweep"></span>
                </div>

                {/* ===== JOURNEY ===== */}
                <section id="journey" className="section-container py-20 md:py-28">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="mb-12 text-center">
                            <p className="section-label">Journey</p>
                            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl text-glow">
                                My Growth Roadmap
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                                A step-by-step flow of how I am growing from frontend basics to scalable MERN + AI projects.
                            </p>
                        </div>

                        <div className="relative mx-auto max-w-5xl">
                            {/* Center glowing line */}
                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.4, ease: "easeInOut" }}
                                className="absolute left-6 top-0 hidden h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple shadow-neon-cyan md:left-1/2 md:block"
                            />

                            <div className="space-y-10">
                                {journey.map((step, index) => (
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-80px" }}
                                        transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
                                        className={`relative flex items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                            }`}
                                    >
                                        {/* Number circle */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.15 }}
                                            className="absolute left-0 z-20 grid h-12 w-12 place-items-center rounded-full border border-neon-cyan/40 bg-dark-bg text-lg font-black text-neon-cyan shadow-neon-cyan md:left-1/2 md:-translate-x-1/2"
                                        >
                                            {index + 1}
                                        </motion.div>

                                        {/* Card */}
                                        <div
                                            className={`ml-20 w-[calc(100%-5rem)] md:ml-0 md:w-[42%] ${index % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                                                }`}
                                        >
                                            <div className="glass-card neon-border glow-hover rounded-3xl p-6">
                                                <div className="mb-4 flex items-center gap-3">
                                                    <div className="rounded-xl bg-neon-cyan/10 p-2 text-neon-cyan">
                                                        <Rocket className="h-5 w-5" />
                                                    </div>
                                                    <h3 className="text-lg font-black text-white">
                                                        Step 0{index + 1}
                                                    </h3>
                                                </div>

                                                <p className="text-sm leading-7 text-slate-400">{step}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                <div className="section-divider relative overflow-hidden h-[1px] bg-white/10">
                    <span className="absolute inset-0 bg-neon-cyan/30"></span>

                    <span className="absolute top-0 left-[-50%] h-full w-1/2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-divider-sweep"></span>
                </div>

                {/* ===== CERTIFICATIONS ===== */}
                <section id="certifications" className="section-container py-20 md:py-28">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-14 text-center"
                    >
                        <p className="section-label">Certifications</p>

                        <h2 className="text-3xl font-black sm:text-4xl md:text-5xl text-glow">
                            My Credentials
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                            Certifications and learning milestones that show my growth in frontend,
                            backend, AI, and full-stack development.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
                            >
                                {/* IMAGE */}
                                <div className="relative h-44 w-full overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                                    {/* Date */}
                                    <span className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                                        {cert.date}
                                    </span>
                                </div>

                                {/* CONTENT */}
                                <div className="p-5">
                                    <h3 className="text-lg font-black text-white group-hover:text-neon-cyan transition">
                                        {cert.title}
                                    </h3>

                                    <p className="mt-1 text-xs font-bold text-neon-cyan">
                                        {cert.org}
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        {cert.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <div className="section-divider relative overflow-hidden h-[1px] bg-white/10">
                    <span className="absolute inset-0 bg-neon-cyan/30"></span>

                    <span className="absolute top-0 left-[-50%] h-full w-1/2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-divider-sweep"></span>
                </div>

                {/* ===== CONTACT ===== */}
                <section id="contact" className="section-container py-16 md:py-24">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mx-auto max-w-5xl"
                    >
                        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-white/[0.05] p-6 shadow-[0_0_45px_rgba(0,242,255,0.10)] backdrop-blur-xl md:p-8 lg:p-10">
                            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
                            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

                            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                                {/* LEFT SIDE */}
                                <motion.div
                                    initial={{ opacity: 0, x: -35 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true }}
                                    className="lg:pr-8"
                                >
                                    <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-neon-cyan">
                                        <GraduationCap className="h-9 w-9" />
                                    </div>

                                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-neon-cyan">
                                        Contact Me
                                    </p>

                                    <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                                        Let’s build something
                                        <span className="block bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                                            meaningful.
                                        </span>
                                    </h2>

                                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                                        I’m open to internships, freelance work, collaborations, and real-world MERN stack projects.
                                    </p>

                                    <div className="mt-7 space-y-4">
                                        <a
                                            href="mailto:kunalchakraborti5@gmail.com"
                                            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                                        >
                                            <span className="rounded-xl bg-cyan-400/10 p-3 text-neon-cyan">
                                                <Mail className="h-5 w-5" />
                                            </span>
                                            <div>
                                                <p className="text-xs text-slate-400">Email</p>
                                                <p className="text-sm font-bold text-white group-hover:text-cyan-300 sm:text-base">
                                                    kunalchakraborti5@gmail.com
                                                </p>
                                            </div>
                                        </a>

                                        <div className="grid gap-3 sm:grid-cols-2">
                                            <a
                                                href="https://github.com/KUNAL-CHAKRABORTI"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 font-bold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
                                            >
                                                <Github className="h-5 w-5" /> GitHub
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/kunal-chakraborti-79b884273"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-4 font-bold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
                                            >
                                                <Linkedin className="h-5 w-5" /> LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* RIGHT SIDE */}
                                <motion.div
                                    initial={{ opacity: 0, x: 35 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.15 }}
                                    viewport={{ once: true }}
                                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 sm:p-6"
                                >
                                    <div className="mb-6">
                                        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-neon-cyan">
                                            Feedback
                                        </p>
                                        <h3 className="text-2xl font-black text-white">
                                            Send me a message
                                        </h3>
                                    </div>

                                    {submitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex min-h-[300px] flex-col items-center justify-center gap-4 text-center"
                                        >
                                            <CheckCircle2 className="h-12 w-12 text-neon-cyan" />
                                            <p className="text-xl font-black text-white">Thank you!</p>
                                            <p className="text-sm text-slate-400">Your message has been received.</p>
                                            <button
                                                onClick={() => setSubmitted(false)}
                                                className="mt-2 rounded-full border border-cyan-300/30 px-5 py-3 font-bold text-cyan-300 transition hover:bg-cyan-300/10"
                                            >
                                                Send another message
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                        >
                                            <motion.input
                                                variants={fadeInUp}
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
                                            />

                                            <motion.input
                                                variants={fadeInUp}
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your email"
                                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
                                            />

                                            <motion.textarea
                                                variants={fadeInUp}
                                                name="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message..."
                                                className="min-h-[120px] w-full resize-y rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
                                            />

                                            <motion.button
                                                variants={fadeInUp}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-black text-slate-950 transition hover:bg-white"
                                            >
                                                <Send className="h-5 w-5" /> Send Message
                                            </motion.button>
                                        </motion.form>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <Chatbot />
            </main>


            {/* ===== FOOTER ===== */}
            <footer className="footer-glow relative px-6 py-8 text-center text-sm text-slate-500">
                <p>&copy; 2026 Kunal Chakraborty. Built with React, Tailwind CSS, and a comeback mindset.</p>
            </footer>
        </div>
    );
}
