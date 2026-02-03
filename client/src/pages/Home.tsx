import { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, Code2, ExternalLink } from 'lucide-react';
import avatarImage from '@/assets/avatar.png';

const projects = [
  {
    id: 1,
    title: "Natwest Calculation Rule Engine",
    description: "Optimized internal calculation rule engine reducing errors by 30% and ensuring consistent credit charge & interest rate calculations across multiple banking brands.",
    tech: ["React.js", "TypeScript", "Micro-Frontends", "CI/CD"],
    impact: "Improved development efficiency by 25%",
    github: "",
    live: "https://www.natwestgroup.com/"
  },
  {
    id: 2,
    title: "Cerebellum Ed-Tech Platform",
    description: "Scalable React Native app for educational content delivery with analytics integration.",
    tech: ["React Native", "Google Analytics", "Mailchimp"],
    impact: "Improved customer retention by 40%",
    github: "https://github.com/vikramatter/cerebellumAcademy",
    live: "https://www.cerebellumacademy.com/"
  },
  {
    id: 3,
    title: "Pollinate Arts NFT Platform",
    description: "React Native app integrating Google Maps & Ethereum blockchain for NFT art marketplace for a US based Client.",
    tech: ["React Native", "Google Maps", "Ethereum", "Blockchain"],
    impact: "Enabled global NFT art marketplace",
    github: "",
    live: "https://www.pollinate.co/"
  },
  {
    id: 4,
    title: "Ai-Job-Interviewer",
    description: "Ai-Job-Interviewer is a platform that allows you to interview candidates for a job.",
    tech: ["React.js", "TypeScript", "Design Systems"],
    impact: "Established Job platform for interviewers",
    github: "https://github.com/vikramatter/ai-india-jobs",
    live: "https://ai-interview-india-jobs.vercel.app/"
  },
  {
    id: 5,
    title: "CI/CD Pipeline Automation",
    description: "Implemented GitHub Actions and Jenkins pipelines for automated deployment and reduced manual interventions using SonarQube and Teamcity.",
    tech: ["GitHub Actions", "Jenkins", "CI/CD"],
    impact: "Enhanced deployment efficiency by 20%",
    github: "",
    live: ""
  },
  {
    id: 6,
    title: "SchoolMind",
    description: "SchoolMind is a platform that allows you to manage your school's data for student,teacher,parents and admin.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Express.js", "Langchain", "Python", "CI/CD"],
    impact: "Enhanced deployment efficiency by 20%",
    github: "https://github.com/vikramatter/schoolmind",
    live: "https://www.schoolmind.co/"
  },
  {
    id: 7,
    title: "Resource Fashion",
    description: "E-commerce platform  that allows you to get latest brand Wearables and Accessories",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Express.js"],
    impact: "Enhanced deployment efficiency by 20%",
    github: "https://github.com/vikramatter/resource-fashion",
    live: "https://www.resourcefashion.co/"
  }
];

const skills = {
  languages: ["JavaScript", "TypeScript", "Python"],
  frameworks: ["React.js", "React Native", "Next.js", "Tailwind CSS"],
  tools: ["Redux", "Micro-Frontends", "Figma", "A/B Testing"],
  backend: ["Node.js", "MongoDB", "AWS", "Sentry"],
  devops: ["CI/CD", "Jenkins", "GitHub Actions", "Docker"]
};

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      setCurrentTime(`${timeStr} • ${dateStr}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-lg font-bold">Vikram</div>
          <div className="flex gap-8 items-center">
            <a href="#home" className="text-sm hover:text-accent transition">Home</a>
            <a href="#projects" className="text-sm hover:text-accent transition">Projects</a>
            <a href="#resume" className="text-sm hover:text-accent transition">Resume</a>
            <a href="#skills" className="text-sm hover:text-accent transition">Skills</a>
            <a href="#contact" className="text-sm hover:text-accent transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section id="home" className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-2">Bawa Vikram</h1>
              <p className="text-accent text-lg mb-4">Senior Frontend Engineer</p>
              <p className="text-sm text-muted-foreground mb-6">{currentTime}</p>

              <p className="text-base leading-relaxed mb-4">
                Results-driven Senior Frontend Engineer with <strong>5+ years</strong> of experience in designing and scaling high-performance web and mobile applications. Expertise in React.js, TypeScript, Next.js, Micro-Frontends, and CI/CD pipelines.
              </p>

              <p className="text-base leading-relaxed mb-4">
                Proven ability to lead global teams, drive performance optimizations, and deliver scalable and secure applications. Passionate about building user-centric products and streamlining development workflows to accelerate delivery timelines.
              </p>

              <p className="text-base leading-relaxed">
                <strong>tldr;</strong> I architect scalable frontend systems and lead engineering teams. I'm passionate about clean code, performance optimization, and building products that matter.
              </p>
            </div>

            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent/20">
              <img
                src={avatarImage}
                alt="Bawa Vikram"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">~ Presence on the internet ~</h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/vikramatter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition">
              <Github size={18} /> GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition">
              <Twitter size={18} /> Twitter
            </a>
            <a href="https://www.linkedin.com/in/bawa-vikram/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="mailto:bawavikram1998@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition">
              <Mail size={18} /> Email
            </a>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">~ Work Experience ~</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-accent pl-6">
              <h3 className="text-xl font-bold">Natwest Group (RBS)</h3>
              <p className="text-accent">Senior Frontend Engineer</p>
              <p className="text-sm text-muted-foreground">Feb 2023 – Present</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <h3 className="text-xl font-bold">Hcode Technologies</h3>
              <p className="text-accent">Frontend Developer</p>
              <p className="text-sm text-muted-foreground">Feb 2021 – Jan 2023</p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <h3 className="text-xl font-bold">OnePixel Technologies</h3>
              <p className="text-accent">UI Developer</p>
              <p className="text-sm text-muted-foreground">Sept 2020 – Jan 2021</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">~ Stack I use ~</h2>
          <div className="space-y-6 font-mono text-sm">
            <div>
              <p className="text-accent mb-2">$ ls languages/</p>
              <div className="flex flex-wrap gap-2 ml-4">
                {skills.languages.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded bg-accent/10 text-accent">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-accent mb-2">$ ls frameworks/</p>
              <div className="flex flex-wrap gap-2 ml-4">
                {skills.frameworks.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded bg-accent/10 text-accent">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-accent mb-2">$ ls tools/</p>
              <div className="flex flex-wrap gap-2 ml-4">
                {skills.tools.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded bg-accent/10 text-accent">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-accent mb-2">$ ls backend/</p>
              <div className="flex flex-wrap gap-2 ml-4">
                {skills.backend.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded bg-accent/10 text-accent">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-accent mb-2">$ ls devops/</p>
              <div className="flex flex-wrap gap-2 ml-4">
                {skills.devops.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded bg-accent/10 text-accent">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">~ Resume ~</h2>
          <div className="border border-border/80 rounded-2xl bg-background/60 shadow-sm backdrop-blur-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
            <div className="flex-1 space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent/80">
                resume.pdf
              </p>
              <h3 className="text-xl font-semibold">Senior Frontend Engineer · 5+ years</h3>
              <p className="text-sm text-muted-foreground">
                A concise one-pager with my experience, tech stack, and impact across banking, ed-tech and product startups.
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Lead frontend engineer across Natwest, SchoolMind, and AI-first products.</li>
                <li>Deep experience in React, TypeScript, Micro-Frontends, and CI/CD.</li>
                <li>Focused on performance, design systems, and engineering leadership.</li>
              </ul>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/20 transition w-full md:w-auto"
              >
                <Code2 size={16} />
                <span>View Resume</span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-accent/60 hover:bg-accent/5 transition w-full md:w-auto"
              >
                <ExternalLink size={16} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">~ Things I've built ~</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => (
              <div key={project.id} className="border border-border rounded-lg p-6 hover:border-accent/50 transition">
                <div className="text-accent font-bold text-lg mb-2">0{project.id}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-accent/10 text-accent">{t}</span>
                  ))}
                </div>
                <p className="text-sm text-accent font-semibold mb-4">{project.impact}</p>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Designed & Made with ❤️</p>
          <p>© 2025 Bawa Vikram. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
