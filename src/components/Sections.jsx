import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Briefcase,
  Calendar,
  ExternalLink,
  Send,
  ChevronRight,
  Download,
} from "lucide-react";

export default function Sections() {
  return (
    <main className="max-w-6xl mx-auto px-6 w-full">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section
  id="about"
  className="relative overflow-hidden pt-28 pb-24 border-b border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-slate-100"
>
  {/* Background Glow */}
<div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-3xl"></div>
<div className="absolute top-20 right-0 h-[350px] w-[350px] rounded-full bg-cyan-200/20 blur-3xl"></div>
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-gradient-to-r from-blue-100 via-slate-100 to-white px-4 py-2 text-sm text-slate-600">
            <span className="h-px w-8 bg-slate-300"></span>
            Enterprise AI Applications
          </div>

          <div className="space-y-6">
            {/* <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              I architect intelligent backend systems
              <span className="block text-blue-600">that scale with real business impact.</span>
            </h1> */}
            <div className="space-y-2">
              <p className="text-lg font-medium text-slate-500">
                Hi, I'm
              </p>

              <h1 className="text-6xl md:text-7xl font-black tracking-tight text-slate-900">
                KRISHI SHAH
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                AI & Backend Developer
              </h2>
            </div>
            {/* <p className="max-w-2xl text-lg leading-8 text-slate-600">
              I build production-ready platforms with FastAPI, realtime WebSockets, and RAG-powered search.
              My focus is strong reliability, clean architecture, and polished experiences for every user.
            </p> */}
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              I build scalable AI-powered applications using Python,
              FastAPI, Large Language Models (LLMs), Retrieval-Augmented
              Generation (RAG), and real-time WebSockets.

              My focus is clean architecture, reliable backend systems,
              and practical AI solutions that solve real business problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/Krishi_Shah_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-700 hover:to-cyan-600"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
            
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

  <div className="flex items-center justify-between">
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-blue-600">
        CURRENTLY WORKING WITH 
      </p>

      <h3 className="mt-2 text-2xl font-bold text-slate-900">
        Building AI-Powered Backend Systems
      </h3>
    </div>

    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
      KS
    </div>
  </div>

  <div className="mt-8 flex flex-wrap gap-3">
  {[
    "Python",
    "FastAPI",
    "LLMs",
    "RAG",
    "WebSockets",
    "Supabase",
  ].map((tech) => (
    <span
      key={tech}
      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
    >
      {tech}
    </span>
  ))}
</div>

  <div className="mt-8 grid grid-cols-2 gap-4">

    <div className="rounded-2xl bg-slate-50 p-4 text-center">
      <p className="text-3xl font-bold text-slate-900">
        3+
      </p>

      <p className="mt-1 text-sm text-slate-500">
        Featured Projects
      </p>
    </div>

    <div className="rounded-2xl bg-slate-50 p-4 text-center">
      <p className="text-3xl font-bold text-slate-900">
        6+
      </p>

      <p className="mt-1 text-sm text-slate-500">
        Months Experience
      </p>
    </div>

  </div>

  <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">

  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
    Current Role
  </p>

  <h4 className="mt-2 text-lg font-semibold text-slate-900">
    AI Developer Intern
  </h4>

  <p className="mt-1 text-slate-600">
    We3Vision Pvt. Ltd.
  </p>

</div>
</div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillGroups = [
    {
      title: "Core Languages",
      skills: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      title: "AI & Data",
      skills: ["LLMs", "RAG", "NLP","Prompt Engineering", "Scikit-Learn", "Pandas"],
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "REST APIs", "WebSockets"],
    },
    {
      title: "Dev Tools",
      skills: ["Supabase", "PostgreSQL", "Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-24 border-b border-slate-200/80">
      <div className="mb-10 max-w-3xl space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-blue-600">Expertise</p>
        <h2 className="text-3xl font-extrabold text-slate-900">Technical strengths that drive results</h2>
        <p className="text-base leading-7 text-slate-600">
          I combine engineering discipline with AI expertise to deliver systems that are both robust and easy to maintain.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="aesthetic-card rounded-3xl border border-slate-200 p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      role: "AI Developer Intern",
      company: "We3Vision Pvt. Ltd.",
      location: "Surat, India",
      period: "Jan 2026 - Present",
      highlights: [
        "Migrated backend services from Flask to FastAPI, improving API structure, scalability, and maintainability.",
        "Implemented real-time AI response streaming using WebSockets.",
        "Developed Retrieval-Augmented Generation (RAG) workflows using enterprise documents and embeddings.",
        "Designed a plug-and-play AI architecture enabling dynamic provider/model switching and resilient fallback mechanisms.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 border-b border-slate-200/80">
      <div className="mb-10 max-w-3xl space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-blue-600">Experience</p>
        <h2 className="text-3xl font-extrabold text-slate-900">Where I have delivered value</h2>
        <p className="text-base leading-7 text-slate-600">
          I focus on roles where AI and backend systems intersect, delivering practical solutions with strong business impact.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <div key={experience.role} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold text-slate-900">{experience.role}</p>
                <p className="text-sm text-slate-600 font-medium">{experience.company}</p>
              </div>
              <div className="text-sm text-slate-500">
                <span>{experience.period}</span>
                <span className="hidden sm:inline"> · </span>
                <span>{experience.location}</span>
              </div>
            </div>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {experience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-600"></span>

                    <p className="flex-1 text-sm leading-7 text-slate-600">
                      {highlight}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
    title: "Webugmate",
    subtitle: "Enterprise AI Resolution Platform",
    description:
      "AI-powered enterprise platform that enables intelligent workplace assistance using LLMs, RAG, and a scalable FastAPI backend.",
    stack: ["Python", "FastAPI", "LLMs", "RAG", "Supabase"],
    link: "",
    context: "We3Vision Internship",
    private: true,
    },
    {
      title: "ResumeRadar",
      subtitle: "Job-Ready Resume AI Mentor",
      description: "An AI tool that analyzes resumes, compares them to job descriptions, and highlights skill gaps.",
      stack: ["Python", "Flask", "Google Gemini API"],
      link: "https://resumeradar-insight-strikers.vercel.app",
      context: "GDG Solution Challenge 2025",
    },
    {
      title: "SmartShipAI",
      subtitle: "Ship Fuel & Emissions Predictor",
      description: "A sustainability-focused ML solution to estimate fuel consumption and CO2 emissions for ships.",
      stack: ["Python", "Scikit-Learn", "Data Analytics"],
      link: "https://smartshipai.onrender.com",
      context: "Shell India & GTU",
    },
  
  ];

  return (
    <section id="projects" className="py-24 border-b border-slate-200/80">
      <div className="mb-10 max-w-3xl space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-blue-600">Projects</p>
        <h2 className="text-3xl font-extrabold text-slate-900">Featured work with measurable outcomes</h2>
        <p className="text-base leading-7 text-slate-600">
          These projects showcase practical applications of AI, backend systems, and user-first product design.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="aesthetic-card rounded-3xl border border-slate-200 p-6 hover:-translate-y-1 transition-transform bg-gradient-to-br from-white via-slate-50 to-slate-100">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500">{project.context}</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-2 text-sm text-blue-600">{project.subtitle}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
            {project.private ? (
            <span className="mt-6 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              Enterprise Project • Private
            </span>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all fields before sending.");
      return;
    }
    // Basic config check
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage(
        "Email service not configured. Create a .env file with VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY."
      );
      return;
    }

    setIsSending(true);
    setStatusMessage("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      subject: `New portfolio message from ${formData.name}`,
    };

    // Debug info for developer (check browser console)
    // eslint-disable-next-line no-console
    console.log("EmailJS sending", { serviceId, templateId, /* publicKey removed from logs for safety */ templateParams });

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log("EmailJS response:", response);
        setSubmitted(true);
        setStatusMessage("Message sent successfully. I’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("EmailJS error:", error);
        setStatusMessage(
          "Sorry, something went wrong sending the message. Check console for details or verify your EmailJS settings."
        );
      })
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setSubmitted(false), 3000);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="mb-10 max-w-3xl space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-blue-600">Contact</p>
        <h2 className="text-3xl font-extrabold text-slate-900">Let's build something meaningful</h2>
        <p className="text-base leading-7 text-slate-600">
          Have an idea or a collaboration in mind? Drop a message and I'll respond quickly.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr]">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-600">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-600">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate-600">
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 resize-none"
            />
          </label>
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? "Sending..." : submitted ? "Message Sent ✓" : "Send Message"}
            {!isSending && !submitted && <Send className="w-4 h-4" />}
          </button>
          {statusMessage && (
            <p className="mt-3 text-sm text-slate-500">{statusMessage}</p>
          )}
        </form>

        <div className="space-y-4">
          {[
            {
              title: "Email",
              value: "krishi7104@gmail.com",
              icon: <Mail className="w-5 h-5 text-blue-600" />,
              href: "mailto:krishi7104@gmail.com",
            },
            {
              title: "LinkedIn",
              value: "Connect on LinkedIn",
              icon: (
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              ),
              href: "https://linkedin.com/in/krishi-shah-",
            },
            {
              title: "GitHub",
              value: "View GitHub Profile",
              icon: (
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              ),
              href: "https://github.com/Krishishah7",
            },
            {
              title: "Location",
              value: "Surat, Gujarat, India",
              icon: <MapPin className="w-5 h-5 text-blue-600" />,
              href: "#contact",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="group block rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white p-3 shadow-sm">{item.icon}</div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-900 group-hover:text-blue-600">{item.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
