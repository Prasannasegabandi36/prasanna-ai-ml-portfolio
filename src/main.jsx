import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Mail, ExternalLink, Download, Sparkles, Brain, Database, Bot, Code2, Award, Rocket, Filter } from 'lucide-react';
import './style.css';

const profile = {
  name: 'Segabandi Prasanna Rani',
  shortName: 'Prasanna Rani',
  role: 'AI/ML & Data Science Intern Aspirant',
  tagline: 'Building practical AI, ML, analytics, and GenAI solutions through real-world deployed projects.',
  email: 'your-email@example.com',
  github: 'https://github.com/Prasannasegabandi36',
  linkedin: 'https://www.linkedin.com/in/your-linkedin-profile',
  resume: '#',
};

const skills = [
  { group: 'Programming', icon: Code2, items: ['Python', 'SQL', 'GitHub', 'VS Code'] },
  { group: 'Data Science', icon: Database, items: ['Pandas', 'NumPy', 'EDA', 'Matplotlib', 'Seaborn', 'Scikit-learn'] },
  { group: 'Machine Learning', icon: Brain, items: ['Classification', 'Regression', 'NLP', 'Model Evaluation', 'Feature Engineering'] },
  { group: 'GenAI', icon: Bot, items: ['LangChain', 'CrewAI', 'Groq API', 'Gemini API', 'Prompt Engineering', 'RAG Basics'] },
];

const projects = [
  {
    title: 'AI Medicine Safety Assistant',
    category: 'GenAI',
    impact: 'Healthcare AI assistant for safer medicine understanding',
    description: 'Searches drug details, explains usage, summarizes safety information, and supports prescription image reading for educational guidance.',
    tech: ['Python', 'Streamlit', 'Groq API', 'OCR', 'Drug API'],
    github: 'https://github.com/Prasannasegabandi36/ai-medicine-safety-assistant',
    live: 'https://ai-medicine-safety-assistant.streamlit.app/',
    featured: true,
  },
  {
    title: 'Multi-Agent AI Career Assistant',
    category: 'Agentic AI',
    impact: 'Personal career guidance using multiple AI agents',
    description: 'Built agents for resume analysis, job matching, skill gap planning, interview coaching, LinkedIn content, and final report generation.',
    tech: ['CrewAI', 'LangChain', 'Groq API', 'Streamlit'],
    github: 'https://github.com/Prasannasegabandi36/multi-agent-ai-career-assistant',
    live: 'https://multi-agent-ai-career-assistant-rerompyd6ykpxbknrkdisb.streamlit.app/',
    featured: true,
  },
  {
    title: 'LinkedIn Post Generator',
    category: 'GenAI',
    impact: 'Automates professional content creation',
    description: 'Generates LinkedIn posts from custom topics using prompt engineering and LLM integration for students and professionals.',
    tech: ['LangChain', 'Groq API', 'Streamlit'],
    github: 'https://github.com/Prasannasegabandi36/linkedin-post-generator',
    live: 'https://linkedin-post-generator-4r24kesjtr6cwqrogdwlrv.streamlit.app/',
    featured: false,
  },
  {
    title: 'AI Shopping Assistant',
    category: 'GenAI',
    impact: 'Smart product discovery using text and image input',
    description: 'Helps users find product suggestions through text or image-based search with AI-powered product understanding.',
    tech: ['Streamlit', 'Groq API', 'Image Search', 'Python'],
    github: 'https://github.com/Prasannasegabandi36/AI-Shopping-Assistant',
    live: '#',
    featured: false,
  },
  {
    title: 'Nassau Candy Distributor Analytics',
    category: 'Data Analytics',
    impact: 'Business dashboard for shipping and factory decisions',
    description: 'Analyzed shipping, product demand, region performance, and factory allocation through a Streamlit analytics dashboard.',
    tech: ['Python', 'Pandas', 'Streamlit', 'Matplotlib'],
    github: 'https://github.com/Prasannasegabandi36/Nassau-Candy-Distributor',
    live: 'https://candy-shipping-analysis.streamlit.app/',
    featured: true,
  },
  {
    title: 'NLP Sentiment Analysis App',
    category: 'Machine Learning',
    impact: 'Real-time sentiment classifier for text',
    description: 'Classifies positive, negative, and neutral text using NLP preprocessing, model prediction, and Streamlit deployment.',
    tech: ['Python', 'NLP', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/Prasannasegabandi36/NLP-Sentiment-Analysis-Streamlit',
    live: 'https://nlp-sentiment-analysis-app-ltibii22sappryq93zfxnfq.streamlit.app/',
    featured: false,
  },
];

const metrics = [
  { value: '10+', label: 'Deployed Projects' },
  { value: '4', label: 'Core Domains' },
  { value: '16', label: 'AI Courses Completed' },
  { value: '2027', label: 'Graduation Year' },
];

function App() {
  const [active, setActive] = useState('All');
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const filteredProjects = useMemo(() => active === 'All' ? projects : projects.filter((p) => p.category === active), [active]);

  return (
    <main>
      <nav className="nav">
        <a href="#home" className="brand"><Sparkles size={18} /> PR AI</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Open to AI/ML • Data Science • GenAI Internships</p>
            <h1>{profile.shortName}</h1>
            <h2>{profile.role}</h2>
            <p className="hero-text">{profile.tagline}</p>
            <div className="actions">
              <a className="btn primary" href="#projects"><Rocket size={18}/> Explore Projects</a>
              <a className="btn" href={profile.resume}><Download size={18}/> Resume</a>
              <a className="btn ghost" href={profile.github} target="_blank"><Github size={18}/> GitHub</a>
            </div>
          </div>

          <div className="ai-card">
            <div className="orb"></div>
            <div className="avatar">PR</div>
            <h3>AI Project Builder</h3>
            <p>Machine Learning • NLP • GenAI • Analytics Dashboards</p>
            <div className="mini-terminal">
              <span>&gt; analyzing resume...</span>
              <span>&gt; matching internship skills...</span>
              <span>&gt; deploying real-world apps...</span>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics">
        {metrics.map((item) => (
          <div className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section id="about" className="section split">
        <div>
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">I build internship-ready AI projects, not only notebooks.</h2>
        </div>
        <p className="about-text">
          I am an AI/ML and Data Science enthusiast focused on creating practical applications using Python, Streamlit, Machine Learning, NLP, LangChain, CrewAI, and Groq. I enjoy converting project ideas into deployed apps with clean UI, useful outputs, and strong explanations for interviews and resumes.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="eyebrow">Skill Stack</p>
        <h2 className="section-title">Tools I use to build real projects</h2>
        <div className="skills-grid">
          {skills.map(({ group, icon: Icon, items }) => (
            <div className="skill-card" key={group}>
              <Icon />
              <h3>{group}</h3>
              <div className="chips">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2 className="section-title">Project Lab</h2>
          </div>
          <div className="filters">
            <Filter size={16}/>
            {categories.map((cat) => (
              <button className={active === cat ? 'active' : ''} onClick={() => setActive(cat)} key={cat}>{cat}</button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className={project.featured ? 'project-card featured' : 'project-card'} key={project.title}>
              <div className="project-top">
                <span>{project.category}</span>
                {project.featured && <b>Featured</b>}
              </div>
              <h3>{project.title}</h3>
              <p className="impact">{project.impact}</p>
              <p>{project.description}</p>
              <div className="chips small">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank"><Github size={17}/> Code</a>
                <a href={project.live} target="_blank"><ExternalLink size={17}/> Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <p className="eyebrow">Growth Timeline</p>
        <h2 className="section-title">My learning path for internships</h2>
        <div className="timeline">
          <div><span>2025</span><p>Built NLP and ML projects with Streamlit deployment.</p></div>
          <div><span>2026</span><p>Added GenAI projects using LangChain, CrewAI, Groq, and agentic workflows.</p></div>
          <div><span>Now</span><p>Preparing for AI/ML, Data Science, and GenAI internship roles.</p></div>
        </div>
      </section>

      <section className="section why">
        <Award />
        <h2>Why hire me as an intern?</h2>
        <p>I can learn fast, build end-to-end projects, deploy applications, explain my work clearly, and improve products with AI, data, and simple user-focused design.</p>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Let’s connect for internship opportunities</h2>
        <p>I am actively looking for AI/ML, Data Science, and GenAI internship opportunities.</p>
        <div className="actions center">
          <a className="btn primary" href={`mailto:${profile.email}`}><Mail size={18}/> Email Me</a>
          <a className="btn" href={profile.linkedin} target="_blank"><Linkedin size={18}/> LinkedIn</a>
          <a className="btn" href={profile.github} target="_blank"><Github size={18}/> GitHub</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
