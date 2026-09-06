"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeNav, setActiveNav] = useState("home");

  const projects = [
    {
      name: "CloudShift Simulator",
      description: "A simulated cloud engineering workday with 80 tickets. Every ticket has a tempting wrong answer — it grades the judgment call, not whether you created the resource.",
      image: "🚀",
    },
    {
      name: "Ninth Employee",
      description: "AI agency for lead generation and operations. Multi-product platform: marketing site, lead-generation engine, and internal ops console.",
      image: "🤖",
    },
    {
      name: "Banking Fraud Detection",
      description: "Event-driven architecture on AWS with Lambda + DynamoDB Streams. Dual-architecture for fraud detection and explanations.",
      image: "🔒",
    },
    {
      name: "Multi-AZ AWS VPC",
      description: "Production-grade infrastructure as code. Reusable Terraform modules with least-privilege security groups.",
      image: "☁️",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="flex h-screen">
        {/* SIDEBAR */}
        <div className="w-80 bg-gradient-to-b from-slate-900 to-black border-r border-slate-800 p-8 flex flex-col fixed left-0 top-0 h-screen overflow-y-auto">
          {/* Avatar */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative mb-6">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-lg opacity-50"></div>
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 border-2 border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Jamil"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold">Jamil Lyons</h1>
            <p className="text-xs text-slate-400 mt-2 tracking-widest">PORTFOLIO</p>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 mb-8 px-3 py-2 bg-green-500/10 border border-green-500/30 rounded-full w-fit text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-300 text-xs">Available for work</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                  activeNav === item.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Links */}
          <div className="border-t border-slate-800 pt-6 space-y-2 text-xs">
            <a href="https://github.com/jamil3424-bit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition">
              <span>→</span> GitHub
            </a>
            <a href="https://linkedin.com/in/jamil-lyons-77261777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition">
              <span>→</span> LinkedIn
            </a>
            <a href="mailto:jamil3424@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition">
              <span>→</span> Email
            </a>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="ml-80 flex-1 overflow-y-auto bg-black">
          {/* HOME */}
          {activeNav === "home" && (
            <section className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black flex items-center px-16">
              <div className="grid grid-cols-2 gap-20 w-full max-w-6xl">
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h1 className="text-8xl font-black leading-tight">
                      <span className="block text-slate-500 text-6xl mb-2">Hi, I'm</span>
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Jamil Lyons
                      </span>
                    </h1>
                  </div>
                  <p className="text-lg text-slate-400 max-w-lg">Cloud & AI Engineer building secure, scalable infrastructure. Specialized in AWS, Infrastructure as Code, and DevOps.</p>
                  <div className="flex gap-4 pt-2">
                    <a href="https://github.com/jamil3424-bit" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition font-semibold text-sm">
                      View GitHub
                    </a>
                    <a href="mailto:jamil3424@gmail.com" className="px-8 py-3 border border-slate-600 rounded-lg hover:border-blue-400 transition font-semibold text-sm">
                      Contact
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30"></div>
                    <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-2 border-gradient-to-br from-blue-500 to-purple-600 bg-gradient-to-br from-blue-600 to-purple-700">
                      <Image src="/profile.jpg" alt="Jamil" width={320} height={320} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ABOUT */}
          {activeNav === "about" && (
            <section className="min-h-screen bg-black px-16 py-24">
              <div className="max-w-3xl space-y-6">
                <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">About Me</h2>
                <p className="text-slate-300 text-lg leading-relaxed">I'm a Cloud & AI Engineer based in Framingham, MA, building secure, scalable infrastructure. I spent six years in banking operations before shifting into cloud engineering. That background shapes how I work: I think in terms of risk, process, and accountability.</p>
                <p className="text-slate-300 text-lg leading-relaxed">Cloud and AI move fast, and I treat that as the fun part of the job. I'm constantly building, breaking, and rebuilding projects to understand systems deeply.</p>
                <p className="text-slate-300 text-lg leading-relaxed">My hands-on portfolio spans the full AWS stack — from foundational projects to advanced builds like Kubernetes APIs, multi-agent AWS operations, and healthcare architecture with RDS and Bedrock.</p>
                <p className="text-blue-400 text-lg pt-4">Targeting: Cloud Engineer, DevOps, AI Infrastructure/MLOps roles</p>
              </div>
            </section>
          )}

          {/* PROJECTS */}
          {activeNav === "projects" && (
            <section className="min-h-screen bg-black px-16 py-24">
              <div className="max-w-4xl">
                <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">Featured Projects</h2>
                <div className="grid gap-6">
                  {projects.map((project, i) => (
                    <div key={i} className="group p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-slate-900/80 hover:to-blue-950/30 transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <span className="text-4xl">{project.image}</span>
                        <div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition">{project.name}</h3>
                          <p className="text-slate-400">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* SKILLS */}
          {activeNav === "skills" && (
            <section className="min-h-screen bg-black px-16 py-24">
              <div className="max-w-4xl">
                <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">Skills & Technologies</h2>
                <div className="grid grid-cols-2 gap-4">
                  {["AWS (EC2, Lambda, VPC, CodePipeline, DynamoDB)", "Cloud Architecture", "Terraform/IaC", "CI/CD Pipelines", "Kubernetes", "Python & Bash", "JavaScript/TypeScript", "Next.js", "Linux Admin", "AI/ML Infrastructure", "Monitoring & Observability", "Event-driven Architecture", "Security & IAM", "Process Design", "Leadership"].map((skill, i) => (
                    <div key={i} className="p-4 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-lg hover:border-blue-500/50 transition">
                      <p className="text-slate-200 font-medium text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      name: "CloudShift Simulator",
      description: "A simulated cloud engineering workday with 80 tickets. Every ticket has a tempting wrong answer — it grades the judgment call, not whether you created the resource.",
      link: "https://github.com/jamil3424-bit/cloudshift-simulator",
    },
    {
      name: "Ninth Employee",
      description: "AI agency for lead generation and operations. Multi-product platform: marketing site, lead-generation engine, and internal ops console with AI agent teams.",
      link: "https://github.com/jamil3424-bit/ninth-employee-website",
    },
    {
      name: "Banking Fraud Detection Pipeline",
      description: "Event-driven architecture on AWS with Lambda + DynamoDB Streams. Dual-architecture: rules-based scoring + automated plain-English fraud explanations.",
      link: "https://github.com/jamil3424-bit/banking-fraud-detection-dashboard",
    },
    {
      name: "Multi-AZ AWS VPC with Terraform",
      description: "Production-grade infrastructure as code. Reusable modules, NAT gateway, least-privilege security groups, and S3/DynamoDB remote state management.",
      link: "https://github.com/jamil3424-bit/skyhigh-portfolio-project-02",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-in {
          animation: slideInUp 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-72 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black border-r border-gray-200 dark:border-gray-800 fixed left-0 top-0 h-screen flex flex-col p-8 overflow-y-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Jamil"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-center">Jamil</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Cloud & AI Engineer</p>
          </div>

          <nav className="flex-1 space-y-6">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-gray-300 dark:border-gray-700 space-y-3">
            <a
              href="https://github.com/jamil3424-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jamil-lyons-77261777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jamil3424@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Email
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-72 flex-1">
          {/* Hero Section */}
          {activeSection === "home" && (
            <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-black dark:via-gray-900 dark:to-purple-950 flex items-center justify-center px-12">
              <div className="grid grid-cols-2 gap-16 w-full max-w-6xl">
                <div className="flex flex-col justify-center animate-slide-in">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                      ● Available for work
                    </span>
                  </div>
                  <h2 className="text-7xl font-bold mb-6 leading-tight">
                    <span className="block">Hi, I'm</span>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Jamil Lyons
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Cloud & AI Engineer building secure, scalable infrastructure. Specialized in AWS, CI/CD, and AI infrastructure.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/jamil3424-bit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition"
                    >
                      View GitHub
                    </a>
                    <a
                      href="mailto:jamil3424@gmail.com"
                      className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition"
                    >
                      Get in touch
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center animate-fade-in">
                  <div className="relative w-80 h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl opacity-20 blur-3xl"></div>
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                      <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-black flex items-center justify-center">
                        <Image
                          src="/profile.jpg"
                          alt="Jamil"
                          width={320}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* About Section */}
          {activeSection === "about" && (
            <section className="min-h-screen py-20 px-12 bg-white dark:bg-black animate-slide-in">
              <div className="max-w-4xl">
                <h2 className="text-5xl font-bold mb-12">About Me</h2>
                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm a Cloud & AI Engineer based in Framingham, MA, focused on building infrastructure that's secure, scalable, and production-ready. My path here wasn't traditional — I spent six years in banking operations, most recently as an Assistant Branch Manager, before making the shift into cloud engineering.
                  </p>
                  <p>
                    That background shapes how I work: I think in terms of risk, process, and accountability, and it taught me how to lead, communicate clearly, and work well with people at every level — skills I carry directly into engineering teams today.
                  </p>
                  <p>
                    I'm driven by a genuine love of learning. Cloud and AI move fast, and I treat that as the fun part of the job. I'm constantly building, breaking, and rebuilding projects to understand systems at a deeper level.
                  </p>
                  <p>
                    My hands-on portfolio spans the full AWS stack — from foundational projects like EC2 hardening and least-privilege IAM, to advanced builds like Kubernetes APIs with CI/CD, multi-agent AWS operations systems, and healthcare architecture with RDS and Bedrock.
                  </p>
                  <p>
                    Currently targeting: Cloud Engineer, DevOps, AI Infrastructure/MLOps roles. Growth path: Cloud Engineer → Platform Engineer → AI Infrastructure Engineer.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === "projects" && (
            <section className="min-h-screen py-20 px-12 bg-white dark:bg-black animate-slide-in">
              <div className="max-w-4xl">
                <h2 className="text-5xl font-bold mb-12">Featured Projects</h2>
                <div className="grid gap-8">
                  {projects.map((project, i) => (
                    <a
                      key={i}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20 border border-gray-200 dark:border-gray-800 rounded-2xl hover:shadow-xl transition"
                    >
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <section className="min-h-screen py-20 px-12 bg-white dark:bg-black animate-slide-in">
              <div className="max-w-4xl">
                <h2 className="text-5xl font-bold mb-12">Skills & Technologies</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "AWS (EC2, Lambda, VPC, CodePipeline, DynamoDB, S3, RDS, Bedrock)",
                    "Cloud Architecture & Design",
                    "Infrastructure as Code (Terraform, CloudFormation)",
                    "CI/CD Pipelines (CodePipeline, CodeBuild, CodeDeploy)",
                    "Kubernetes & Container Orchestration",
                    "Python & Bash Scripting",
                    "JavaScript/TypeScript",
                    "Next.js & Full-stack Development",
                    "Linux Administration & Security Hardening",
                    "AI/ML Infrastructure (RAG, AI Agents)",
                    "Monitoring & Observability (Prometheus, Grafana)",
                    "Event-driven Architecture",
                    "Least-privilege IAM & Security",
                    "Risk Assessment & Process Design",
                    "Team Leadership & Communication",
                  ].map((skill, i) => (
                    <div
                      key={i}
                      className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-purple-900/30 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
