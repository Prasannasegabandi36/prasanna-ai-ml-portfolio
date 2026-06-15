import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const profile = {
  name: "Segabandi Prasanna Rani",
  shortName: "Prasanna Rani",
  role: "AI/ML & Data Science Intern Aspirant",
  email: "prasannasegabandi@gmail.com",
  github: "https://github.com/Prasannasegabandi36",
  linkedin: "https://www.linkedin.com/in/segabandi-prasanna-rani-5828a42ba/",
  medium: "https://medium.com/@prasannasegabandi",
  resume: "/resume/Prasanna_Rani_Resume.pdf",
  image: "/images/profile.jpg"
};

const themeMap = {
  home: "theme-cyan",
  about: "theme-purple",
  education: "theme-blue",
  experience: "theme-pink",
  skills: "theme-green",
  research: "theme-orange",
  projects: "theme-cyan",
  certificates: "theme-purple",
  contact: "theme-pink"
};

const typingSentences = [
  "I design AI tools that are practical, simple, and useful.",
  "I convert ML ideas into deployed Streamlit and web applications.",
  "I explore Data Science, GenAI, Agentic AI, and healthcare AI solutions.",
  "I am open to AI/ML, Data Science, and GenAI internship opportunities."
];

const education = [
  {
    degree: "BSc (Hons) - Data Science and Artificial Intelligence",
    institute: "Indian Institute of Technology, Guwahati",
    score: "CGPA: 7.53",
    year: "2023 - Present",
    note: "Building a strong foundation in mathematics, computing, machine learning, and applied AI."
  },
  {
    degree: "Senior Secondary",
    institute: "Board of Intermediate Education, Andhra Pradesh",
    score: "90.0%",
    year: "2021",
    note: "Focused on science fundamentals and problem-solving."
  },
  {
    degree: "Secondary",
    institute: "Board of Secondary Education, Andhra Pradesh",
    score: "93.0%",
    year: "2019",
    note: "Developed academic discipline and consistent learning habits."
  }
];

const experience = [
  {
    role: "Data Science Intern",
    company: "Unified Mentor",
    year: "2026 - Present",
    highlight: "Analytics dashboards, KPI insights, and business decision support.",
    points: [
      "Worked on business analytics projects where raw data was converted into dashboards, KPIs, and visual insights.",
      "Created Streamlit-based dashboards for customer retention, shipping performance, order trends, and operational analysis.",
      "Practiced the complete data workflow: cleaning, exploration, visualization, storytelling, and deployment."
    ]
  },
  {
    role: "AI/ML Intern",
    company: "Micro Information Technology Services",
    year: "2025",
    highlight: "NLP sentiment classification and real-time ML web interface.",
    points: [
      "Built an NLP sentiment analysis application to classify user text into meaningful sentiment categories.",
      "Applied preprocessing, feature extraction, model prediction, and Streamlit deployment for a usable ML interface.",
      "Strengthened my understanding of how ML models can be presented as simple applications for end users."
    ]
  }
];

const skillGroups = [
  {
    title: "Programming & Databases",
    icon: "💻",
    items: ["Python", "SQL", "Java Basics", "C Basics", "C++ Basics", "SQLite", "MySQL"]
  },
  {
    title: "Data Science",
    icon: "📊",
    items: ["Pandas", "NumPy", "EDA", "Data Cleaning", "Matplotlib", "Seaborn", "Plotly", "Excel"]
  },
  {
    title: "Machine Learning & NLP",
    icon: "🧠",
    items: ["Scikit-learn", "Classification", "Regression", "Model Evaluation", "NLTK", "TextBlob", "Sentiment Analysis"]
  },
  {
    title: "Generative AI",
    icon: "🤖",
    items: ["LLM Basics", "Prompt Engineering", "RAG Basics", "LangChain", "CrewAI", "Groq API", "Gemini API"]
  },
  {
    title: "Development & Deployment",
    icon: "🚀",
    items: ["Streamlit", "Streamlit Cloud", "Vercel", "Git", "GitHub", "VS Code", "Jupyter", "Google Colab"]
  },
  {
    title: "Professional Strengths",
    icon: "✨",
    items: ["Project Building", "Dashboard Thinking", "AI Curiosity", "Problem Solving", "Learning Mindset", "Communication"]
  }
];

const researchDomains = [
  {
    icon: "🏥",
    title: "Healthcare AI",
    desc: "AI tools for medicine awareness, OCR prescription reading, and patient-friendly explanations."
  },
  {
    icon: "🧬",
    title: "Medical Imaging",
    desc: "Deep learning ideas for MRI, X-ray, and disease screening support systems."
  },
  {
    icon: "🛒",
    title: "AI Commerce",
    desc: "Agentic shopping assistants, recommendation workflows, and product search automation."
  },
  {
    icon: "📈",
    title: "Business Analytics",
    desc: "Dashboards that explain churn, shipping performance, KPIs, and operational decisions."
  },
  {
    icon: "📝",
    title: "NLP & Content AI",
    desc: "Sentiment analysis, LinkedIn post generation, text classification, and writing assistants."
  },
  {
    icon: "🤝",
    title: "Agentic AI",
    desc: "Multi-agent workflows for resume analysis, job matching, skill planning, and guidance."
  }
];

const visualStrip = [
  { icon: "🧠", title: "ML Models" },
  { icon: "📊", title: "Dashboards" },
  { icon: "🤖", title: "AI Agents" },
  { icon: "🏥", title: "Health AI" },
  { icon: "📝", title: "NLP Apps" },
  { icon: "🚀", title: "Deployments" },
  { icon: "🔎", title: "RAG Basics" },
  { icon: "🛒", title: "Shopping AI" }
];

const projects = [
  {
    title: "AI Medicine Safety Assistant",
    category: "Healthcare AI",
    year: "2026",
    image: "💊",
    tech: ["Python", "Streamlit", "OCR", "AI Summary"],
    desc: "A healthcare awareness app that helps users understand medicine uses, precautions, safety notes, and prescription content in simple language.",
    impact: "Focused on making medicine information easier to understand for non-technical users.",
    github: "https://github.com/Prasannasegabandi36/ai-medicine-safety-assistant",
    live: "https://ai-medicine-safety-assistant.streamlit.app/"
  },
  {
    title: "Multi-Agent AI Career Assistant",
    category: "Agentic AI",
    year: "2026",
    image: "🤝",
    tech: ["CrewAI", "Groq API", "Streamlit"],
    desc: "A multi-agent career guidance system that analyzes resumes, matches jobs, finds skill gaps, and generates interview preparation guidance.",
    impact: "Shows my interest in agentic AI and practical workflow automation.",
    github: "https://github.com/Prasannasegabandi36/multi-agent-ai-career-assistant",
    live: "https://multi-agent-ai-career-assistant-rerompyd6ykpxbknrkdisb.streamlit.app/"
  },
  {
    title: "AI Shopping Assistant",
    category: "GenAI",
    year: "2026",
    image: "🛒",
    tech: ["LangChain", "Groq API", "SQLite", "Streamlit"],
    desc: "An AI-powered shopping assistant for product search, image-based queries, review lookup, and checkout simulation.",
    impact: "Combines GenAI with a real shopping workflow experience.",
    github: "https://github.com/Prasannasegabandi36/AI-Shopping-Assistant",
    live: "#"
  },
  {
    title: "LinkedIn Post Generator",
    category: "GenAI",
    year: "2025",
    image: "✍️",
    tech: ["LangChain", "Groq API", "Streamlit"],
    desc: "A content automation tool that generates professional LinkedIn posts from selected or custom topics using LLM prompts.",
    impact: "Useful for students and professionals who want quick content drafts.",
    github: "https://github.com/Prasannasegabandi36/linkedin-post-generator",
    live: "https://linkedin-post-generator-4r24kesjtr6cwqrogdwlrv.streamlit.app/"
  },
  {
    title: "NLP Sentiment Analysis App",
    category: "ML",
    year: "2025",
    image: "💬",
    tech: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    desc: "A real-time NLP application that classifies text sentiment as positive, negative, or neutral.",
    impact: "Demonstrates ML pipeline understanding from preprocessing to deployment.",
    github: "https://github.com/Prasannasegabandi36/NLP-Sentiment-Analysis-Streamlit",
    live: "https://nlp-sentiment-analysis-app-ltibii22sappryq93zfxnfq.streamlit.app/"
  },
  {
    title: "Nassau Candy Distributor Analytics",
    category: "Data Science",
    year: "2025",
    image: "📦",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    desc: "A business analytics dashboard for shipping cost, factory allocation, order trends, and regional performance insights.",
    impact: "Shows my ability to convert business data into decision-ready dashboards.",
    github: "https://github.com/Prasannasegabandi36/Nassau-Candy-Distributor",
    live: "https://candy-shipping-analysis.streamlit.app/"
  }
];

const certificates = [
  "Machine Learning",
  "Deep Learning",
  "Sequence Models",
  "Convolutional Neural Networks",
  "Generative AI with LangChain and Hugging Face",
  "Data Analysis with Python",
  "Prompt Engineering"
];

const courses = [
  "Linear Algebra",
  "Probability",
  "Statistics",
  "Multivariable Calculus",
  "Introduction to Computing",
  "Data Structures and Algorithms",
  "Recommendation System Design Using Deep Learning",
  "Pattern Recognition and Machine Learning"
];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [theme, setTheme] = useState("theme-cyan");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const categories = ["All", "GenAI", "Agentic AI", "Healthcare AI", "ML", "Data Science"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const changeTheme = (section) => {
    setTheme(themeMap[section] || "theme-cyan");
  };

  const handleContact = (event) => {
    event.preventDefault();

    const subject = `Portfolio message from ${form.name || "Visitor"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const currentSentence = typingSentences[sentenceIndex];
    let charIndex = 0;

    const typing = setInterval(() => {
      setTypedText(currentSentence.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentSentence.length) {
        clearInterval(typing);
        setTimeout(() => {
          setSentenceIndex((prev) => (prev + 1) % typingSentences.length);
        }, 1700);
      }
    }, 52);

    return () => clearInterval(typing);
  }, [sentenceIndex]);

  return (
    <div className={`app ${theme}`}>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={() => changeTheme("home")}>PR</a>

        <div className="navLinks">
          <a href="#about" onClick={() => changeTheme("about")}>About</a>
          <a href="#education" onClick={() => changeTheme("education")}>Education</a>
          <a href="#experience" onClick={() => changeTheme("experience")}>Experience</a>
          <a href="#skills" onClick={() => changeTheme("skills")}>Skills</a>
          <a href="#research" onClick={() => changeTheme("research")}>Research</a>
          <a href="#projects" onClick={() => changeTheme("projects")}>Projects</a>
          <a href="#contact" onClick={() => changeTheme("contact")}>Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="heroContent">
          <div className="badge">✨ AI/ML • Data Science • GenAI • Internship Ready</div>

          <h1>
            Hi, I am <span>{profile.name}</span>
          </h1>

          <h2>{profile.role}</h2>

          <div className="typingBox premiumTyping">
            <span>{typedText}</span>
            <b>|</b>
          </div>

          <div className="animatedWords">
            <span>Machine Learning</span>
            <span>Data Science</span>
            <span>Generative AI</span>
            <span>Agentic AI</span>
            <span>Healthcare AI</span>
          </div>

          <p>
            I am pursuing BSc (Hons) in Data Science and Artificial Intelligence
            at IIT Guwahati. I enjoy building AI projects that are not only
            technical, but also useful, understandable, and deployable.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="primaryBtn" onClick={() => changeTheme("projects")}>
              View Projects
            </a>
            <a href={profile.resume} className="secondaryBtn" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>

          <div className="socialLinks">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.medium} target="_blank" rel="noreferrer">Medium</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>

        <div className="profilePanel">
          <div className="profileFrame">
            <img src={profile.image} alt="Prasanna Rani profile" />
          </div>

          <div className="profileInfoCard">
            <h3>{profile.shortName}</h3>
            <p>AI/ML • Data Science • GenAI</p>

            <div className="statsGrid">
              <div>
                <strong>7.53</strong>
                <span>CGPA</span>
              </div>
              <div>
                <strong>6+</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Internships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="scrollingStrip">
        <div className="stripTrack">
          {[...visualStrip, ...visualStrip].map((item, index) => (
            <div className="stripCard" key={index}>
              <span>{item.icon}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="section">
        <div className="sectionHeader">
          <span>About Me</span>
          <h2>Building practical AI solutions with curiosity and purpose</h2>
        </div>

        <div className="aboutBento">
          <div className="aboutBox bigBox">
            <h3>Who I Am</h3>
            <p>
              I am an AI/ML and Data Science learner who likes turning ideas
              into working applications. I focus on creating projects that are
              simple to use, visually clear, and useful for real problems.
            </p>
          </div>

          <div className="aboutBox">
            <h3>How I Build</h3>
            <p>
              I start with a problem, design a small workflow, build the model
              or AI logic, and deploy it as a web app so others can test it.
            </p>
          </div>

          <div className="aboutBox">
            <h3>Current Direction</h3>
            <p>
              My focus areas are GenAI tools, ML dashboards, NLP applications,
              healthcare AI awareness, and agentic workflows.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="sectionHeader">
          <span>Education</span>
          <h2>Academic Journey</h2>
        </div>

        <div className="educationGrid">
          {education.map((edu, index) => (
            <div className="educationCard" key={index}>
              <div className="educationYear">{edu.year}</div>
              <h3>{edu.degree}</h3>
              <p>{edu.institute}</p>
              <strong>{edu.score}</strong>
              <small>{edu.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="sectionHeader">
          <span>Experience</span>
          <h2>Internship Work</h2>
        </div>

        <div className="experienceGrid">
          {experience.map((item, index) => (
            <div className="experienceCard" key={index}>
              <div className="experienceTop">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <span>{item.year}</span>
              </div>

              <div className="experienceHighlight">{item.highlight}</div>

              {item.points.map((point, i) => (
                <p className="expPoint" key={i}>— {point}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="sectionHeader">
          <span>Skills</span>
          <h2>Skill Stack</h2>
        </div>

        <div className="skillsGrid">
          {skillGroups.map((skill, index) => (
            <div className="skillCard" key={index}>
              <div className="skillIcon">{skill.icon}</div>
              <h3>{skill.title}</h3>

              <div className="skillTags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="section">
        <div className="sectionHeader">
          <span>Research Interests</span>
          <h2>Domains I Want to Explore</h2>
        </div>

        <div className="researchGrid">
          {researchDomains.map((domain, index) => (
            <div className="researchCard" key={index}>
              <div className="researchIcon">{domain.icon}</div>
              <h3>{domain.title}</h3>
              <p>{domain.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionHeader">
          <span>Projects</span>
          <h2>Featured Work</h2>
        </div>

        <div className="filterBox">
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

        <div className="projectsGrid">
          {filteredProjects.map((project, index) => (
            <div className="projectCard" key={index}>
              <div className="projectVisual">{project.image}</div>

              <div className="projectTop">
                <span>{project.category}</span>
                <small>{project.year}</small>
              </div>

              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="impactBox">{project.impact}</div>

              <div className="techTags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="projectLinks">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className="section">
        <div className="sectionHeader">
          <span>Certificates & Courses</span>
          <h2>Relevant Learning</h2>
        </div>

        <div className="certificateWrapper">
          <div className="certificateBox">
            <h3>Online MOOCs / Certifications</h3>
            <div className="certificateTags">
              {certificates.map((cert) => (
                <span key={cert}>{cert}</span>
              ))}
            </div>
          </div>

          <div className="certificateBox">
            <h3>Key Courses Taken</h3>
            <div className="certificateTags">
              {courses.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="sectionHeader">
          <span>Contact</span>
          <h2>Let’s build something meaningful</h2>
        </div>

        <div className="contactLayout">
          <form className="terminalContact" onSubmit={handleContact}>
            <div className="terminalTop">
              <span></span>
              <span></span>
              <span></span>
              <p>prasanna@portfolio:~</p>
            </div>

            <label>
              <small>~/name</small>
              <input
                type="text"
                placeholder="your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>

            <label>
              <small>~/email</small>
              <input
                type="email"
                placeholder="you@domain.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>

            <label>
              <small>~/message</small>
              <textarea
                placeholder="echo 'hello prasanna...'"
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </label>

            <button type="submit">send_message.sh</button>
          </form>

          <div className="contactSide">
            <h3>Find me online</h3>
            <p>
              I am open to internship opportunities, project collaboration,
              portfolio feedback, and AI/ML learning discussions.
            </p>

            <div className="contactLinks">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={profile.medium} target="_blank" rel="noreferrer">Medium</a>
              <a href={`mailto:${profile.email}`}>Mail</a>
              <a href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 {profile.name}. Designed for AI/ML internship opportunities.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
