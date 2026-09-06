"use client";

export default function Home() {
  const projects = [
    {
      id: 1,
      name: "CloudShift Simulator",
      description:
        "A simulated cloud engineering workday with 80 tickets. Every ticket has a tempting wrong answer — it grades the judgment call, not whether you created the resource. A practical interview prep tool.",
      skills: ["AWS", "JavaScript", "Cloud Architecture", "Problem-solving"],
      link: "https://github.com/jamil3424-bit/cloudshift-simulator",
      highlight: true,
    },
    {
      id: 2,
      name: "Ninth Employee",
      description:
        "AI agency for lead generation and operations. Multi-product platform: marketing site, lead-generation engine scanning Google Places & Yelp for businesses without AI adoption, and internal ops console with AI trend research and ad-copy agent teams.",
      skills: ["Next.js", "TypeScript", "Prisma", "AI Agents", "Full-stack"],
      link: "https://github.com/jamil3424-bit/ninth-employee-website",
      highlight: true,
    },
    {
      id: 3,
      name: "Banking Fraud Detection Pipeline",
      description:
        "Event-driven architecture on AWS with Lambda + DynamoDB Streams. Dual-architecture: rules-based scoring + automated plain-English fraud explanations. Built with least-privilege IAM and Python/boto3.",
      skills: ["AWS Lambda", "DynamoDB", "Python", "Security", "Event-driven"],
      link: "https://github.com/jamil3424-bit/banking-fraud-detection-dashboard",
    },
    {
      id: 4,
      name: "Multi-AZ AWS VPC with Terraform",
      description:
        "Production-grade infrastructure as code. Reusable modules, NAT gateway, least-privilege security groups, and S3/DynamoDB remote state management. Demonstrates infrastructure best practices.",
      skills: ["Terraform", "AWS", "IaC", "Security", "DevOps"],
      link: "https://github.com/jamil3424-bit/skyhigh-portfolio-project-02",
    },
    {
      id: 5,
      name: "Healthcare CI/CD Pipeline",
      description:
        "AWS CodePipeline → CodeBuild → CodeDeploy to EC2. The build refuses to produce non-working artifacts; deployment fails unless the new revision answers on /health and serves the page.",
      skills: ["CI/CD", "CodePipeline", "CodeBuild", "AWS", "Automation"],
      link: "https://github.com/jamil3424-bit/healthcare-cicd-pipeline",
    },
    {
      id: 6,
      name: "Linux EC2 Security Hardening",
      description:
        "Deployed and hardened a production-style Linux web server on AWS EC2. SSH key auth, firewall configuration, and automated security hardening via Bash scripting.",
      skills: ["Linux", "AWS EC2", "Security", "Bash", "System Admin"],
      link: "https://github.com/jamil3424-bit/linux-ec2-webserver",
    },
  ];

  const aboutText = `I'm a Cloud & AI Engineer based in Framingham, MA, focused on building infrastructure that's secure, scalable, and production-ready. My path here wasn't traditional — I spent six years in banking operations, most recently as an Assistant Branch Manager, before making the shift into cloud engineering. That background shapes how I work: I think in terms of risk, process, and accountability, and it also taught me how to lead, communicate clearly, and work well with people at every level.

I'm driven by a genuine love of learning. Cloud and AI move fast, and I treat that as the fun part of the job, not a burden. I'm constantly building, breaking, and rebuilding projects to understand systems at a deeper level. Whether working independently or collaborating with a team, I bring the same motivation: show up prepared, communicate clearly, and take ownership of the outcome.

My hands-on portfolio spans the full AWS stack — from foundational projects like static site hosting, EC2 hardening, and least-privilege IAM audits, to advanced builds like Kubernetes-based APIs with CI/CD and monitoring, multi-agent AWS operations systems, and healthcare architecture with RDS and Bedrock. I also build AI into my infrastructure work — RAG pipelines, AI agents, and observability projects designed to catch and troubleshoot real failure modes.

Every project includes documentation, architecture diagrams, and a breakdown of what broke and how I fixed it, because understanding a system deeply matters more than just standing it up.`;

  const skills = [
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
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Jamil</h1>
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">
              About
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">
              Skills
            </a>
            <a
              href="https://github.com/jamil3424-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        <section className="py-20">
          <h2 className="text-5xl font-bold mb-6">Cloud & AI Engineer</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
            Framingham, MA • Open to work (Recruiters only)
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Building secure, scalable, production-ready infrastructure with a focus on AWS, CI/CD, and AI infrastructure.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
            Targeting: Cloud Engineer, DevOps, AI Infrastructure/MLOps roles • Growth path: Cloud Engineer → Platform Engineer → AI Infrastructure Engineer
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/jamil3424-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View on GitHub
            </a>
            <a
              href="https://linkedin.com/in/jamil-lyons-77261777"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/30 -mx-6 px-6">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold mb-8">About Me</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {aboutText.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
          <div className="grid gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-lg border transition hover:shadow-lg ${
                  project.highlight
                    ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900"
                    : "bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold">{project.name}</h4>
                  {project.highlight && (
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Featured</span>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20">
          <h3 className="text-3xl font-bold mb-12">Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold mb-4">Let&apos;s work together</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Looking for a cloud engineer or full-stack developer? Interested in AI-powered solutions?
          </p>
          <a
            href="mailto:jamil3424@gmail.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get in touch
          </a>
        </section>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 py-8 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© 2026 Jamil Azeez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
