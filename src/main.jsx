import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const profile = {
  name: "Segabandi Prasanna Rani",
  shortName: "Prasanna Rani",
  role: "AI, ML & Data Science Enthusiast",
  email: "prasannasegabandi@gmail.com",
  github: "https://github.com/Prasannasegabandi36",
  linkedin: "https://www.linkedin.com/in/segabandi-prasanna-rani-5828a42ba/",
  medium: "https://medium.com/@prasannasegabandi",
  resume: "/resume/Prasanna_Rani_Resume.pdf",
  image: "/images/profile.jpg",
};

const typingSentences = [
  "Engineering practical AI systems from data to decisions.",
  "Building ML, NLP, GenAI, Agriculture AI, and analytics projects.",
  "Exploring healthcare AI, farmer-friendly AI, and agentic workflows.",
  "Turning real problems into simple, useful, and deployed AI applications.",
];

const education = [
  {
    degree: "BSc (Hons) - Data Science and Artificial Intelligence",
    institute: "Indian Institute of Technology, Guwahati",
    score: "CGPA: 7.53",
    year: "2023 - Present",
    note: "Learning mathematics, computing, data science, machine learning, deep learning, and applied AI.",
  },
  {
    degree: "Senior Secondary",
    institute: "Board of Intermediate Education, Andhra Pradesh",
    score: "90.0%",
    year: "2021",
    note: "Built strong academic fundamentals and analytical thinking.",
  },
  {
    degree: "Secondary",
    institute: "Board of Secondary Education, Andhra Pradesh",
    score: "93.0%",
    year: "2019",
    note: "Developed consistency, discipline, and curiosity toward learning.",
  },
];

const experience = [
  {
    role: "Data Science Work",
    company: "Unified Mentor",
    year: "2026 - Present",
    color: "expBlue",
    highlight: "Business dashboards, KPI storytelling, and analytics deployment.",
    points: [
      "Converted raw business datasets into dashboards that explain customer behavior, shipping trends, and operational performance.",
      "Built Streamlit analytics applications using Python, Pandas, Matplotlib, and Plotly.",
      "Practiced data cleaning, exploration, visualization, insight writing, and deployment.",
    ],
    learned: [
      "Python",
      "Pandas",
      "EDA",
      "Streamlit",
      "Plotly",
      "Dashboards",
      "KPIs",
      "Business Analytics",
    ],
  },
  {
    role: "AI/ML Project Work",
    company: "Micro Information Technology Services",
    year: "2025",
    color: "expPink",
    highlight: "NLP sentiment analysis and real-time ML web application.",
    points: [
      "Created an NLP sentiment analysis app to classify user text into positive, negative, and neutral categories.",
      "Used text preprocessing, feature extraction, model prediction, and Streamlit interface development.",
      "Learned how machine learning models can be converted into simple usable applications.",
    ],
    learned: [
      "NLP",
      "Scikit-learn",
      "NLTK",
      "TextBlob",
      "Classification",
      "Model Evaluation",
      "Streamlit",
    ],
  },
];

const skillGroups = [
  {
    title: "Programming & Databases",
    icon: "💻",
    items: ["Python", "SQL", "Java Basics", "C Basics", "C++ Basics", "SQLite", "MySQL"],
  },
  {
    title: "Data Science & Analytics",
    icon: "📊",
    items: [
      "Pandas",
      "NumPy",
      "EDA",
      "Data Cleaning",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Excel",
      "KPI Dashboards",
    ],
  },
  {
    title: "Machine Learning & NLP",
    icon: "🧠",
    items: [
      "Scikit-learn",
      "Classification",
      "Regression",
      "Model Evaluation",
      "NLTK",
      "TextBlob",
      "Sentiment Analysis",
    ],
  },
  {
    title: "Generative AI & Agents",
    icon: "🤖",
    items: [
      "LLM Basics",
      "Prompt Engineering",
      "RAG Basics",
      "LangChain",
      "CrewAI",
      "Groq API",
      "Gemini API",
      "AI Agents",
    ],
  },
  {
    title: "AI Applications",
    icon: "🚀",
    items: [
      "Healthcare AI",
      "Agriculture AI",
      "Voice Assistant",
      "Image AI",
      "OCR",
      "AI Chatbot",
      "Research Prototype",
    ],
  },
  {
    title: "Development & Deployment",
    icon: "🌐",
    items: [
      "Streamlit",
      "Streamlit Cloud",
      "React",
      "Vite",
      "Vercel",
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "Google Colab",
    ],
  },
];

const researchDomains = [
  {
    icon: "🌾",
    title: "Agriculture AI",
    desc: "Smart farming assistants with crop recommendation, voice support, image AI, fertilizer guidance, irrigation advice, and farmer-friendly explanations.",
  },
  {
    icon: "🏥",
    title: "Healthcare AI",
    desc: "AI tools for medicine awareness, prescription reading, and simple health explanations.",
  },
  {
    icon: "🧠",
    title: "Medical Imaging",
    desc: "Deep learning ideas for MRI, X-ray, and disease screening support systems.",
  },
  {
    icon: "🛒",
    title: "AI Commerce",
    desc: "Shopping assistants, product recommendations, and product search automation.",
  },
  {
    icon: "📊",
    title: "Business Analytics",
    desc: "Dashboards for churn, shipping performance, KPIs, and business decisions.",
  },
  {
    icon: "✍️",
    title: "NLP & Content AI",
    desc: "Sentiment analysis, LinkedIn post generation, text classification, and writing tools.",
  },
  {
    icon: "🤖",
    title: "Agentic AI",
    desc: "Multi-agent workflows for resume analysis, job matching, and skill planning.",
  },
];

const visualStrip = [
  { icon: "🤖", title: "AI Agents" },
  { icon: "🌾", title: "Farming AI" },
  { icon: "🏥", title: "Health AI" },
  { icon: "📊", title: "Dashboards" },
  { icon: "🧠", title: "ML Models" },
  { icon: "💬", title: "Chatbots" },
  { icon: "🔊", title: "Voice AI" },
  { icon: "🖼️", title: "Image AI" },
  { icon: "🚀", title: "Deployments" },
  { icon: "⚙️", title: "Automation" },
];

const aiTopics = [
  "Data",
  "EDA",
  "ML",
  "NLP",
  "GenAI",
  "RAG",
  "Agents",
  "Voice AI",
  "Image AI",
  "Deploy",
];

const projects = [
  {
    title: "AgriVision AI Smart Farming Assistant",
    category: "Agriculture AI",
    year: "2026",
    image: "🌾",
    tech: ["Python", "Streamlit", "Pillow", "Pandas", "Plotly", "Groq API", "Voice AI"],
    desc: "A multimodal smart farming assistant for farmers with image-based farming reports, voice-friendly Q&A, crop recommendation, fertilizer guidance, irrigation advice, crop calendar, and research dashboard.",
    impact:
      "Built for low-literacy farmers using simple answers, voice support, browser text-to-speech, and farmer-friendly guidance.",
    github: "https://github.com/Prasannasegabandi36/agrivision-ai-smart-farming-assistant",
    live: "#",
  },
  {
    title: "AI Medicine Safety Assistant",
    category: "Healthcare AI",
    year: "2026",
    image: "💊",
    tech: ["Python", "Streamlit", "OCR", "AI Summary"],
    desc: "A healthcare awareness app that explains medicine uses, precautions, safety notes, and prescription content in simple language.",
    impact: "Built to make medicine information easier for non-technical users.",
    github: "https://github.com/Prasannasegabandi36/ai-medicine-safety-assistant",
    live: "https://ai-medicine-safety-assistant.streamlit.app/",
  },
  {
    title: "Multi-Agent AI Career Assistant",
    category: "Agentic AI",
    year: "2026",
    image: "🤖",
    tech: ["CrewAI", "Groq API", "Streamlit"],
    desc: "A career guidance system that uses agents for resume review, job matching, skill gap planning, and interview guidance.",
    impact: "Shows practical agentic AI workflow design.",
    github: "https://github.com/Prasannasegabandi36/multi-agent-ai-career-assistant",
    live: "https://multi-agent-ai-career-assistant-rerompyd6ykpxbknrkdisb.streamlit.app/",
  },
  {
    title: "AI Shopping Assistant",
    category: "GenAI",
    year: "2026",
    image: "🛒",
    tech: ["LangChain", "Groq API", "SQLite", "Streamlit"],
    desc: "An AI shopping assistant for product search, image-based queries, review lookup, and checkout simulation.",
    impact: "Connects GenAI with a shopping workflow.",
    github: "https://github.com/Prasannasegabandi36/AI-Shopping-Assistant",
    live: "#",
  },
  {
    title: "LinkedIn Post Generator",
    category: "GenAI",
    year: "2025",
    image: "✍️",
    tech: ["LangChain", "Groq API", "Streamlit"],
    desc: "A content automation tool that generates professional LinkedIn posts from selected or custom topics.",
    impact: "Useful for students and professionals who need quick content drafts.",
    github: "https://github.com/Prasannasegabandi36/linkedin-post-generator",
    live: "https://linkedin-post-generator-4r24kesjtr6cwqrogdwlrv.streamlit.app/",
  },
  {
    title: "NLP Sentiment Analysis App",
    category: "ML",
    year: "2025",
    image: "💬",
    tech: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    desc: "A real-time NLP application that classifies text sentiment as positive, negative, or neutral.",
    impact: "Demonstrates ML workflow from preprocessing to deployment.",
    github: "https://github.com/Prasannasegabandi36/NLP-Sentiment-Analysis-Streamlit",
    live: "https://nlp-sentiment-analysis-app-ltibii22sappryq93zfxnfq.streamlit.app/",
  },
  {
    title: "Nassau Candy Distributor Analytics",
    category: "Data Science",
    year: "2025",
    image: "📦",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    desc: "A business analytics dashboard for shipping cost, factory allocation, order trends, and regional performance.",
    impact: "Shows how data can be converted into decision-ready dashboards.",
    github: "https://github.com/Prasannasegabandi36/Nassau-Candy-Distributor",
    live: "https://candy-shipping-analysis.streamlit.app/",
  },
];

const certificates = [
  "Machine Learning",
  "Deep Learning",
  "Sequence Models",
  "Convolutional Neural Networks",
  "Generative AI with LangChain",
  "Data Analysis with Python",
  "Prompt Engineering",
];

const courses = [
  "Linear Algebra",
  "Probability",
  "Statistics",
  "Multivariable Calculus",
  "Introduction to Computing",
  "Data Structures and Algorithms",
  "Recommendation System Design Using Deep Learning",
  "Pattern Recognition and Machine Learning",
];

const chatbotKnowledge = [
  {
    keywords: ["about", "who", "prasanna", "profile", "introduce", "yourself"],
    replies: [
      "Prasanna Rani is a Data Science and Artificial Intelligence student at IIT Guwahati. She builds practical AI, ML, GenAI, NLP, healthcare, agriculture, and analytics projects.",
      "Prasanna focuses on building useful AI projects that can be deployed and explained clearly, not only notebook-based experiments.",
    ],
  },
  {
    keywords: ["skill", "skills", "tools", "technology", "tech stack", "languages"],
    replies: [
      "Her skills include Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Scikit-learn, NLTK, TextBlob, Streamlit, React, Vite, LangChain, CrewAI, Groq API, Gemini API, Git, GitHub, and Vercel.",
      "Prasanna's main skill areas are AI/ML, Data Science, GenAI, NLP, Streamlit apps, React portfolio development, AI chatbots, dashboards, and project deployment.",
    ],
  },
  {
    keywords: ["project", "projects", "built", "portfolio", "apps", "work"],
    replies: [
      "Her major projects include AgriVision AI Smart Farming Assistant, AI Medicine Safety Assistant, Multi-Agent AI Career Assistant, AI Shopping Assistant, LinkedIn Post Generator, NLP Sentiment Analysis App, and Nassau Candy Analytics.",
      "Prasanna has built projects in Agriculture AI, Healthcare AI, Agentic AI, GenAI, NLP, Data Science dashboards, and Streamlit deployment.",
    ],
  },
  {
    keywords: ["agriculture", "farming", "farmer", "crop", "seed", "plant", "fertilizer", "irrigation", "agrivision"],
    replies: [
      "AgriVision AI is a smart farming assistant that supports image-based farming reports, farmer voice Q&A, crop recommendation, fertilizer guidance, irrigation advice, crop calendar, and research dashboard.",
      "The AgriVision AI project is built for farmers, especially low-literacy users, with simple explanations, voice-friendly interaction, and browser text-to-speech support.",
    ],
  },
  {
    keywords: ["medicine", "medical", "health", "patient", "tablet", "drug", "prescription"],
    replies: [
      "The AI Medicine Safety Assistant helps users understand medicine uses, precautions, safety notes, and prescription content in simple language.",
      "Her healthcare AI work focuses on patient awareness, OCR-based prescription reading, medicine explanations, and simple AI summaries.",
    ],
  },
  {
    keywords: ["multi agent", "multi-agent", "agent", "crewai", "career assistant"],
    replies: [
      "The Multi-Agent AI Career Assistant uses different AI agents for resume review, job matching, skill gap planning, interview guidance, and LinkedIn content support.",
      "This project is strong for interviews because it shows agentic AI workflow design using CrewAI and Groq API.",
    ],
  },
  {
    keywords: ["education", "study", "college", "iit", "degree", "cgpa"],
    replies: [
      "Prasanna is pursuing BSc (Hons) in Data Science and Artificial Intelligence at IIT Guwahati with a CGPA of 7.53.",
      "Her academic path includes Data Science, AI, Mathematics, Machine Learning, Deep Learning, Statistics, and Computing fundamentals.",
    ],
  },
  {
    keywords: ["internship", "experience", "company", "unified mentor"],
    replies: [
      "Prasanna worked on Data Science projects with Unified Mentor, including dashboards, KPI analysis, data cleaning, visualizations, and insight writing.",
      "Her experience includes business analytics dashboards, shipping analysis, sentiment analysis, and Streamlit-based ML applications.",
    ],
  },
  {
    keywords: ["research", "domain", "interest", "future", "paper"],
    replies: [
      "Her research interests include Healthcare AI, Agriculture AI, Medical Imaging, NLP, Business Analytics, AI Commerce, Content AI, and Agentic AI.",
      "Prasanna is interested in building AI systems that solve real problems, especially in healthcare, farming, education, and career guidance.",
    ],
  },
  {
    keywords: ["contact", "email", "github", "linkedin", "medium", "reach"],
    replies: [
      "You can contact Prasanna through email at prasannasegabandi@gmail.com, GitHub at Prasannasegabandi36, LinkedIn at Segabandi Prasanna Rani, and Medium at @prasannasegabandi.",
      "Prasanna is available through her portfolio contact form, GitHub, LinkedIn, Medium, and email.",
    ],
  },
  {
    keywords: ["resume", "cv", "hire"],
    replies: [
      "Prasanna's resume highlights AI/ML, Data Science, GenAI, Agriculture AI, Healthcare AI, Streamlit projects, and internship-based analytics work.",
      "Her resume is project-focused, showing deployed applications, dashboards, AI assistants, and real-world problem-solving.",
    ],
  },
];

function getBotReply(message) {
  const text = message.toLowerCase();
  let bestMatch = null;
  let highestScore = 0;

  chatbotKnowledge.forEach((item) => {
    let score = 0;

    item.keywords.forEach((keyword) => {
      if (text.includes(keyword)) {
        score += 1;
      }
    });

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  });

  if (bestMatch) {
    const randomIndex = Math.floor(Math.random() * bestMatch.replies.length);
    return bestMatch.replies[randomIndex];
  }

  return "I can answer questions about Prasanna's skills, projects, AgriVision AI farming assistant, healthcare AI work, education, experience, research interests, resume, and contact details. Try asking: What skills does Prasanna have?";
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Hi, I am Ask Prasanna AI. You can ask me about Prasanna's projects, skills, education, experience, AgriVision AI, healthcare AI, or contact details.",
    },
  ]);

  const categories = [
    "All",
    "GenAI",
    "Agentic AI",
    "Healthcare AI",
    "Agriculture AI",
    "ML",
    "Data Science",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typing);
  }, [sentenceIndex]);

  const handleContact = (event) => {
    event.preventDefault();

    const subject = `Portfolio message from ${form.name || "Visitor"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleChatSubmit = (event) => {
    event.preventDefault();

    if (!chatInput.trim()) return;

    const userMessage = { sender: "user", text: chatInput };
    const botMessage = { sender: "bot", text: getBotReply(chatInput) };

    setChatMessages((prev) => [...prev, userMessage, botMessage]);
    setChatInput("");
  };

  const quickAsk = (question) => {
    const userMessage = { sender: "user", text: question };
    const botMessage = { sender: "bot", text: getBotReply(question) };

    setChatMessages((prev) => [...prev, userMessage, botMessage]);
  };

  return (
    <div className="site-shell">
      <nav className="navbar">
        <button className="brand" onClick={() => setActiveSection("home")}>
          PR
        </button>

        <div className="nav-links">
          {["about", "education", "experience", "skills", "aiLab", "research", "projects", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
                onClick={() => setActiveSection(section)}
              >
                {section === "aiLab"
                  ? "AI Lab"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            )
          )}
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="terminal-line">$ whoami</p>
          <h1>{profile.shortName}</h1>
          <h2>{profile.role}</h2>
          <p className="typing-text">
            {typedText}
            <span>|</span>
          </p>

          <div className="hero-tags">
            <span>Machine Learning</span>
            <span>Data Science</span>
            <span>Generative AI</span>
            <span>Agriculture AI</span>
            <span>Healthcare AI</span>
          </div>

          <p className="hero-description">
            I am pursuing BSc Honours in Data Science and Artificial Intelligence at IIT Guwahati.
            I enjoy building AI projects that are useful, understandable, and deployable.
          </p>

          <div className="hero-buttons">
            <a href="#projects">View Projects</a>
            <a href={profile.resume} download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-ring">
            <img src={profile.image} alt={profile.name} />
          </div>
          <h3>AI Portfolio System</h3>
          <p>Data Science • GenAI • Practical Projects</p>
        </div>
      </section>

      <div className="visual-strip">
        {[...visualStrip, ...visualStrip].map((item, index) => (
          <div className="strip-item" key={`${item.title}-${index}`}>
            <span>{item.icon}</span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <section id="about" className="section">
        <p className="section-label">About Me</p>
        <h2>Building practical AI solutions with curiosity and purpose</h2>

        <div className="about-grid">
          <div className="glass-card">
            <h3>Who I Am</h3>
            <p>
              I am Prasanna Rani, a Data Science and Artificial Intelligence student at IIT Guwahati.
              I enjoy learning by building projects in AI/ML, GenAI, NLP, agriculture, healthcare awareness,
              and analytics dashboards.
            </p>
          </div>

          <div className="glass-card">
            <h3>How I Build</h3>
            <p>
              I start with a problem, understand the user need, design the AI or data workflow,
              build the logic, and deploy it using tools like Streamlit, GitHub, React, and Vercel.
            </p>
          </div>

          <div className="glass-card">
            <h3>Current Direction</h3>
            <p>
              I am focusing on stronger GenAI projects, agriculture AI, healthcare AI, agentic workflows,
              practical dashboards, and research-oriented real-world applications.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <p className="section-label">Education</p>
        <h2>Academic Journey</h2>

        <div className="timeline">
          {education.map((edu) => (
            <div className="timeline-card" key={edu.degree}>
              <span className="year-pill">{edu.year}</span>
              <h3>{edu.degree}</h3>
              <h4>{edu.institute}</h4>
              <p>
                <strong>{edu.score}</strong> — {edu.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <p className="section-label">Experience</p>
        <h2>Work I Practiced Through Real Projects</h2>

        <div className="experience-grid">
          {experience.map((item) => (
            <div className={`experience-card ${item.color}`} key={item.company}>
              <h3>{item.company}</h3>
              <p className="role-line">
                {item.role} • {item.year}
              </p>
              <p>{item.highlight}</p>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mini-tags">
                {item.learned.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <p className="section-label">Skills</p>
        <h2>Skill Stack</h2>

        <div className="skills-grid">
          {skillGroups.map((skill) => (
            <div className="skill-card" key={skill.title}>
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

      <section id="aiLab" className="section ai-lab-section">
        <p className="section-label">AI Lab</p>
        <h2>Ideas moving through an AI universe</h2>

        <div className="ai-universe">
          <div className="ai-glow-ring ring-one"></div>
          <div className="ai-glow-ring ring-two"></div>
          <div className="ai-glow-ring ring-three"></div>

          <div className="ai-core">
            <span>AI</span>
            <small>Prasanna Lab</small>
          </div>

          {aiTopics.map((topic, index) => (
            <span
              className="orbit-topic"
              key={topic}
              style={{ "--i": index, "--total": aiTopics.length }}
            >
              {topic}
            </span>
          ))}

          <div className="spark spark-one">✦</div>
          <div className="spark spark-two">✧</div>
          <div className="spark spark-three">✦</div>
        </div>

        <div className="lab-note">
          <h3>From raw data to useful intelligence</h3>
          <p>
            My project style follows a simple loop: understand the problem, prepare the data or prompt flow,
            build the model or AI workflow, deploy it, and improve based on user experience.
          </p>
        </div>
      </section>

      <section id="research" className="section">
        <p className="section-label">Research Interests</p>
        <h2>Domains I Want to Explore</h2>

        <div className="research-grid">
          {researchDomains.map((domain) => (
            <div className="research-card" key={domain.title}>
              <div>{domain.icon}</div>
              <h3>{domain.title}</h3>
              <p>{domain.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">Projects</p>
        <h2>Featured Work</h2>

        <div className="filter-row">
          {categories.map((category) => (
            <button
              key={category}
              className={activeFilter === category ? "filter-active" : ""}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-icon">{project.image}</div>
              <p className="project-category">
                {project.category} • {project.year}
              </p>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <p className="impact-text">{project.impact}</p>

              <div className="mini-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className="section">
        <p className="section-label">Certificates & Courses</p>
        <h2>Learning Blocks That Shape My AI Path</h2>

        <div className="cert-grid">
          <div className="glass-card">
            <h3>Online MOOCs / Certifications</h3>
            <div className="skill-tags">
              {certificates.map((cert) => (
                <span key={cert}>{cert}</span>
              ))}
            </div>
          </div>

          <div className="glass-card">
            <h3>Key Courses Taken</h3>
            <div className="skill-tags">
              {courses.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <p className="section-label">Contact</p>
        <h2>Let’s connect and build something useful</h2>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleContact}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button type="submit">Send Message</button>
          </form>

          <div className="contact-links">
            <h3>Find me online</h3>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.medium} target="_blank" rel="noreferrer">
              Medium
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.resume} download>
              Resume PDF
            </a>
          </div>
        </div>
      </section>

      {chatOpen && (
        <div className="chatbot-card">
          <div className="chatbot-header">
            <div>
              <h3>Ask Prasanna AI</h3>
              <p>Resume-aware portfolio assistant</p>
            </div>

            <button onClick={() => setChatOpen(false)}>×</button>
          </div>

          <div className="chatbot-quick">
            <button onClick={() => quickAsk("Tell me about Prasanna")}>About</button>
            <button onClick={() => quickAsk("What are Prasanna's skills?")}>Skills</button>
            <button onClick={() => quickAsk("What projects has Prasanna built?")}>Projects</button>
            <button onClick={() => quickAsk("Explain AgriVision AI farming project")}>
              AgriVision AI
            </button>
            <button onClick={() => quickAsk("Tell me about Prasanna's healthcare AI projects")}>
              Healthcare AI
            </button>
            <button onClick={() => quickAsk("How can I contact Prasanna?")}>Contact</button>
          </div>

          <div className="chatbot-messages">
            {chatMessages.map((msg, index) => (
              <div className={`chat-row ${msg.sender}`} key={`${msg.sender}-${index}`}>
                <div className={`chat-message ${msg.sender}`}>{msg.text}</div>
              </div>
            ))}
          </div>

          <form className="chat-input-row" onSubmit={handleChatSubmit}>
            <input
              type="text"
              placeholder="Ask about skills, projects, AgriVision..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      <button className="chat-float" onClick={() => setChatOpen(!chatOpen)}>
        {chatOpen ? "×" : "💬 Ask AI"}
      </button>

      <footer>© 2026 Prasanna Rani — built with data, curiosity & neural sparks.</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
