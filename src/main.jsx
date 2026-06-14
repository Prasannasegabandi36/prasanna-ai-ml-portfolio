import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Github,
  Link,
  Mail,
  ExternalLink,
  Download,
  Sparkles,
  Brain,
  Database,
  Bot,
  Code2,
  Award,
  Rocket,
  Filter,
} from "lucide-react";
import "./style.css";

const profile = {
  name: "Segabandi Prasanna Rani",
  role: "AI/ML & Data Science Intern Aspirant",
  tagline:
    "Building practical AI, ML, Data Science, and GenAI solutions through real-world projects.",
  email: "your-email@example.com",
  github: "https://github.com/Prasannasegabandi36",
  linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
  resume: "#",
};

const projects = [
  {
    title: "AI Medicine Safety Assistant",
    category: "GenAI",
    year: "2026",
    tech: ["Python", "Streamlit", "Groq API", "OCR", "Drug API"],
    desc: "AI-powered medicine safety app to search medicine details, usage, safety information, and generate simple AI summaries.",
    github: "https://github.com/Prasannasegabandi36/ai-medicine-safety-assistant",
    live: "https://ai-medicine-safety-assistant.streamlit.app/",
  },
  {
    title: "Multi-Agent AI Career Assistant",
    category: "GenAI",
    year: "2026",
    tech: ["CrewAI", "LangChain", "Groq", "Streamlit"],
    desc: "Built a multi-agent system for resume analysis, job matching, skill gap planning, interview preparation, and career reports.",
    github: "https://github.com/Prasannasegabandi36/multi-agent-ai-career-assistant",
    live: "https://multi-agent-ai-career-assistant-rerompyd6ykpxbknrkdisb.streamlit.app/",
  },
  {
    title: "LinkedIn Post Generator",
    category: "GenAI",
    year: "2026",
    tech: ["LangChain", "Groq API", "Streamlit", "Prompt Engineering"],
    desc: "Generated professional LinkedIn posts using LLM prompts for students, professionals, and project updates.",
    github: "https://github.com/Prasannasegabandi36/linkedin-post-generator",
    live: "https://linkedin-post-generator-4r24kesjtr6cwqrogdwlrv.streamlit.app/",
  },
  {
    title: "AI Shopping Assistant",
    category: "GenAI",
    year: "2026",
    tech: ["Streamlit", "Groq API", "Image Search", "Text Search"],
    desc: "AI shopping assistant that helps users find product suggestions using image and text-based inputs.",
    github: "https://github.com/Prasannasegabandi36/AI-Shopping-Assistant",
    live: "#",
  },
  {
    title: "NLP Sentiment Analysis App",
    category: "ML",
    year: "2025",
    tech: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    desc: "Developed an NLP app to classify text sentiment as positive, negative, or neutral with real-time prediction.",
    github: "https://github.com/Prasannasegabandi36/NLP-Sentiment-Analysis-Streamlit",
    live: "https://nlp-sentiment-analysis-app-ltibii22sappryq93zfxnfq.streamlit.app/",
  },
  {
    title: "Nassau Candy Distributor Analytics",
    category: "Data Science",
    year: "2025",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    desc: "Data analytics dashboard for shipping analysis, factory allocation, regional performance, and business insights.",
    github: "https://github.com/Prasannasegabandi36/Nassau-Candy-Distributor",
    live: "https://candy-shipping-analysis.streamlit.app/",
  },
];

const skills = [
  {
    icon: <Code2 />,
    title: "Programming",
    items: ["Python", "SQL", "Git", "GitHub"],
  },
  {
    icon: <Database />,
    title: "Data Science",
    items: ["Pandas", "NumPy", "EDA", "Matplotlib", "Seaborn"],
  },
  {
    icon: <Brain />,
    title: "Machine Learning",
    items: ["Scikit-learn", "NLP", "Model Building", "Evaluation"],
  },
  {
    icon: <Bot />,
    title: "GenAI",
    items: ["LangChain", "CrewAI", "Groq API", "Gemini API", "Prompt Engineering"],
  },
  {
    icon: <Rocket />,
    title: "Deployment",
    items: ["Streamlit", "Streamlit Cloud", "Vercel", "VS Code"],
  },
];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "GenAI", "ML", "Data Science"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">PR</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <Sparkles size={16} />
            Open to AI/ML, Data Science & GenAI Internships
          </div>

          <h1>
            Hi, I am <span>{profile.name}</span>
          </h1>

          <h2>{profile.role}</h2>

          <p>{profile.tagline}</p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
              <ExternalLink size={18} />
            </a>

            <a href={profile.resume} className="secondary-btn">
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={20} />
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Link size={20} />
            </a>

            <a href={`mailto:${profile.email}`}>
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-glow"></div>
          <div className="ai-orbit">
            <div className="orbit-circle one"></div>
            <div className="orbit-circle two"></div>
            <div className="orbit-center">
              <Brain size={48} />
            </div>
          </div>

          <h3>AI Portfolio System</h3>
          <p>Projects • Skills • Growth • Internship Readiness</p>

          <div className="stats-grid">
            <div>
              <strong>6+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>4+</strong>
              <span>Live Apps</span>
            </div>
            <div>
              <strong>GenAI</strong>
              <span>Focus</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-header">
          <span>About Me</span>
          <h2>Internship-focused AI/ML Portfolio</h2>
        </div>

        <div className="about-box">
          <p>
            I am an AI/ML and Data Science learner with hands-on experience in
            building real-world projects using Python, Machine Learning, NLP,
            Streamlit, LangChain, CrewAI, and Groq API. I enjoy creating useful
            AI applications, analytics dashboards, and GenAI tools that solve
            practical problems.
          </p>

          <p>
            I am actively looking for internship opportunities in AI/ML, Data
            Science, and GenAI where I can apply my project experience, improve
            my technical skills, and contribute to meaningful real-world
            solutions.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-header">
          <span>Skills</span>
          <h2>Technical Stack</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-header">
          <span>Projects</span>
          <h2>Featured Work</h2>
        </div>

        <div className="filter-box">
          <Filter size={18} />
          {categories.map((category) => (
            <button
              key={category}
              className={activeFilter === category ? "active" : ""}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-top">
                <span>{project.category}</span>
                <small>{project.year}</small>
              </div>

              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github size={17} />
                  GitHub
                </a>

                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-header">
          <span>Experience</span>
          <h2>Learning & Growth Timeline</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div>
              <h3>Data Science Internship Projects</h3>
              <p>
                Worked on analytics dashboards, business insights, and
                data-driven decision support projects using Python and
                Streamlit.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div>
              <h3>GenAI Project Development</h3>
              <p>
                Built LLM-based apps using LangChain, CrewAI, Groq API, and
                Streamlit for content generation, career assistance, and AI
                assistants.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div>
              <h3>AI/ML Internship Preparation</h3>
              <p>
                Creating strong portfolio projects, improving resume quality,
                practicing interview explanations, and learning real-world AI
                system design basics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="section-header">
          <span>Why Hire Me?</span>
          <h2>What I Bring as an Intern</h2>
        </div>

        <div className="why-grid">
          <div>
            <Award />
            <h3>Project-Based Learning</h3>
            <p>
              I build and deploy complete projects, not just notebooks, so
              recruiters can see my practical work.
            </p>
          </div>

          <div>
            <Rocket />
            <h3>Deployment Mindset</h3>
            <p>
              I use Streamlit Cloud, GitHub, and Vercel to turn ideas into live
              applications.
            </p>
          </div>

          <div>
            <Sparkles />
            <h3>AI Curiosity</h3>
            <p>
              I actively explore GenAI, agents, prompt engineering, and ML
              applications for real-world use cases.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <h2>Let’s Connect</h2>

          <p>
            I am open to AI/ML, Data Science, and GenAI internship opportunities.
            Feel free to contact me for internships, projects, or collaboration.
          </p>

          <div className="contact-buttons">
            <a href={`mailto:${profile.email}`} className="primary-btn">
              <Mail size={18} />
              Email Me
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-btn">
              <Github size={18} />
              GitHub
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="secondary-btn">
              <Link size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 {profile.name}. Built with React for AI/ML internships.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
