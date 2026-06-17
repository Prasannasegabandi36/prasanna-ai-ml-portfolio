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
  image: "/images/profile.jpg"
};

const themeMap = {
  home: "theme-cyan",
  about: "theme-purple",
  education: "theme-blue",
  experience: "theme-pink",
  skills: "theme-red",
  aiLab: "theme-violet",
  research: "theme-orange",
  projects: "theme-green",
  certificates: "theme-cyan",
  contact: "theme-gold"
};

const typingSentences = [
  "Engineering practical AI systems from data to decisions.",
  "Building ML, NLP, GenAI, and analytics projects that can be deployed.",
  "Creating smart farming, healthcare AI, and real-world assistant applications.",
  "Exploring healthcare AI, agentic workflows, agriculture AI, and intelligent dashboards.",
  "Turning ideas into simple, useful, and real-world AI applications."
];

const education = [
  {
    degree: "BSc (Hons) - Data Science and Artificial Intelligence",
    institute: "Indian Institute of Technology, Guwahati",
    score: "CGPA: 7.53",
    year: "2023 - Present",
    note: "Learning mathematics, computing, data science, machine learning, deep learning, and applied AI."
  },
  {
    degree: "Senior Secondary",
    institute: "Board of Intermediate Education, Andhra Pradesh",
    score: "90.0%",
    year: "2021",
    note: "Built strong academic fundamentals and analytical thinking."
  },
  {
    degree: "Secondary",
    institute: "Board of Secondary Education, Andhra Pradesh",
    score: "93.0%",
    year: "2019",
    note: "Developed consistency, discipline, and curiosity toward learning."
  }
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
      "Practiced data cleaning, exploration, visualization, insight writing, and deployment."
    ],
    learned: ["Python", "Pandas", "EDA", "Streamlit", "Plotly", "Dashboards", "KPIs", "Business Analytics"]
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
      "Learned how machine learning models can be converted into simple usable applications."
    ],
    learned: ["NLP", "Scikit-learn", "NLTK", "TextBlob", "Classification", "Model Evaluation", "Streamlit"]
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
    title: "Creative Strengths",
    icon: "✨",
    items: ["Project Building", "Dashboard Thinking", "AI Curiosity", "Problem Solving", "Learning Mindset", "Communication"]
  }
];

const researchDomains = [
  {
    icon: "🌾",
    title: "Agriculture AI",
    desc: "Smart farming assistants for crop support, irrigation guidance, fertilizer awareness, and farmer-friendly voice tools."
  },
  {
    icon: "🏥",
    title: "Healthcare AI",
    desc: "AI tools for medicine awareness, prescription reading, and simple health explanations."
  },
  {
    icon: "🧬",
    title: "Medical Imaging",
    desc: "Deep learning ideas for MRI, X-ray, and disease screening support systems."
  },
  {
    icon: "🛒",
    title: "AI Commerce",
    desc: "Shopping assistants, product recommendations, and product search automation."
  },
  {
    icon: "📈",
    title: "Business Analytics",
    desc: "Dashboards for churn, shipping performance, KPIs, and business decisions."
  },
  {
    icon: "📝",
    title: "NLP & Content AI",
    desc: "Sentiment analysis, LinkedIn post generation, text classification, and writing tools."
  },
  {
    icon: "🤝",
    title: "Agentic AI",
    desc: "Multi-agent workflows for resume analysis, job matching, and skill planning."
  }
];

const visualStrip = [
  { icon: "🧠", title: "ML Models" },
  { icon: "📊", title: "Dashboards" },
  { icon: "🤖", title: "AI Agents" },
  { icon: "🌾", title: "Farming AI" },
  { icon: "🏥", title: "Health AI" },
  { icon: "📝", title: "NLP Apps" },
  { icon: "🚀", title: "Deployments" },
  { icon: "🔎", title: "RAG Basics" },
  { icon: "🛒", title: "Shopping AI" },
  { icon: "🧪", title: "AI Research" },
  { icon: "⚙️", title: "Automation" },
  { icon: "💡", title: "Prompt Design" },
  { icon: "📦", title: "Data Products" }
];

const aiTopics = [
  "Data",
  "Clean",
  "EDA",
  "Model",
  "Prompt",
  "Agent",
  "RAG",
  "Vision",
  "Voice",
  "Deploy",
  "Monitor",
  "Learn"
];

const projects = [
  {
    title: "AgriVision AI Smart Farming Assistant",
    category: "Agriculture AI",
    year: "2026",
    image: "🌾",
    tech: ["Python", "Streamlit", "Pandas", "Plotly", "Pillow", "Groq API"],
    desc: "A smart farming assistant website for farmers with crop recommendation, fertilizer guidance, irrigation advice, image-based farming reports, crop calendar, and farmer-friendly AI support.",
    impact: "Built to help farmers understand crop health, soil needs, fertilizer use, and irrigation decisions in a simple way.",
    github: "https://github.com/Prasannasegabandi36/agrivision-ai-smart-farming-assistant",
    live: "#"
  },
  {
    title: "AgriVision AI Smart Farming Assistant",
    category: "Agriculture AI",
    year: "2026",
    image: "🌾",
    tech: ["Python", "Streamlit", "Pandas", "Plotly", "Pillow", "Groq API"],
    desc: "A multimodal smart farming assistant for farmers with image-based crop reports, voice-friendly Q&A, crop recommendation, fertilizer guidance, irrigation advice, crop calendar, and research dashboard.",
    impact: "Designed for low-literacy farmers using simple farmer mode, browser text-to-speech, and practical crop decision support.",
    github: "https://github.com/Prasannasegabandi36/agrivision-ai-smart-farming-assistant",
    live: "#"
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
    live: "https://ai-medicine-safety-assistant.streamlit.app/"
  },
  {
    title: "Multi-Agent AI Career Assistant",
    category: "Agentic AI",
    year: "2026",
    image: "🤝",
    tech: ["CrewAI", "Groq API", "Streamlit"],
    desc: "A career guidance system that uses agents for resume review, job matching, skill gap planning, and interview guidance.",
    impact: "Shows practical agentic AI workflow design.",
    github: "https://github.com/Prasannasegabandi36/multi-agent-ai-career-assistant",
    live: "https://multi-agent-ai-career-assistant-rerompyd6ykpxbknrkdisb.streamlit.app/"
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
    live: "#"
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
    live: "https://linkedin-post-generator-4r24kesjtr6cwqrogdwlrv.streamlit.app/"
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
    live: "https://nlp-sentiment-analysis-app-ltibii22sappryq93zfxnfq.streamlit.app/"
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

const chatbotKnowledge = {
  about:
    "Prasanna Rani is a Data Science and Artificial Intelligence student at IIT Guwahati. She builds practical AI, ML, Data Science, NLP, GenAI, agriculture AI, healthcare AI, and analytics projects.",
  education:
    "Prasanna is pursuing BSc (Hons) in Data Science and Artificial Intelligence at IIT Guwahati with a current CGPA of 7.53. She completed Senior Secondary with 90.0% and Secondary with 93.0%.",
  skills:
    "Her skills include Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Scikit-learn, NLTK, TextBlob, Streamlit, LangChain, CrewAI, Groq API, RAG basics, Git, GitHub, VS Code, Jupyter, and Google Colab.",
  projects:
    "Her major projects include AgriVision AI Smart Farming Assistant, AI Medicine Safety Assistant, Multi-Agent AI Career Assistant, AI Shopping Assistant, LinkedIn Post Generator, NLP Sentiment Analysis App, and Nassau Candy Distributor Analytics.",
  farming:
    "AgriVision AI Smart Farming Assistant is a multimodal farming project for farmers. It supports image-based crop reports, voice-friendly farmer Q&A, crop recommendation, fertilizer guidance, irrigation advice, crop calendar, research dashboard, simple farmer mode, and text-to-speech answers.",
  experience:
    "She worked on Data Science work with Unified Mentor and AI/ML project work with Micro Information Technology Services. Her work includes dashboards, KPI analysis, sentiment analysis, and Streamlit-based ML applications.",
  contact:
    "You can contact Prasanna through email at prasannasegabandi@gmail.com, GitHub at Prasannasegabandi36, LinkedIn at Segabandi Prasanna Rani, and Medium at @prasannasegabandi.",
  research:
    "Her interest domains include Agriculture AI, Healthcare AI, Medical Imaging, NLP, Content AI, Business Analytics, AI Commerce, Agentic AI, and practical AI tools."
};

function getBotReply(message) {
  const text = message.toLowerCase();

  if (
    text.includes("farm") ||
    text.includes("farming") ||
    text.includes("agri") ||
    text.includes("agriculture") ||
    text.includes("crop") ||
    text.includes("farmer") ||
    text.includes("agrivision")
  ) {
    return chatbotKnowledge.farming;
  }

  if (text.includes("about") || text.includes("who") || text.includes("prasanna")) {
    return chatbotKnowledge.about;
  }

  if (text.includes("education") || text.includes("study") || text.includes("college") || text.includes("iit")) {
    return chatbotKnowledge.education;
  }

  if (text.includes("skill") || text.includes("tools") || text.includes("technology") || text.includes("tech")) {
    return chatbotKnowledge.skills;
  }

  if (text.includes("project") || text.includes("work") || text.includes("built")) {
    return chatbotKnowledge.projects;
  }

  if (text.includes("experience") || text.includes("company")) {
    return chatbotKnowledge.experience;
  }

  if (text.includes("contact") || text.includes("email") || text.includes("linkedin") || text.includes("github")) {
    return chatbotKnowledge.contact;
  }

  if (text.includes("research") || text.includes("domain") || text.includes("interest")) {
    return chatbotKnowledge.research;
  }

  return "I can answer questions about Prasanna’s education, skills, projects, experience, research interests, farming AI project, and contact details. Try asking: What projects has Prasanna built?";
}

function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" className="realIcon">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 24 24" className="realIcon">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.85c0-1.87-.03-4.28-2.6-4.28-2.6 0-3 2.03-3 4.14V23h-4V8z" />
    </svg>
  );
}

function MediumLogo() {
  return (
    <svg viewBox="0 0 24 24" className="realIcon">
      <path d="M4.5 6.5c0-.55-.21-1.03-.62-1.42L3.42 4.6V4h5.2l4.02 8.82L16.18 4H21v.6l-.39.37c-.33.25-.49.62-.47 1.1v11.86c-.02.48.14.85.47 1.1l.39.37v.6h-6.8v-.6l.4-.38c.39-.38.39-.49.39-1.1V8.34L10.7 20h-1.1L4.6 8.34v8.06c-.1.9.2 1.78.82 2.43l.54.57v.6H1v-.6l.54-.57c.6-.65.86-1.53.78-2.43V6.5h2.18z" />
    </svg>
  );
}

function MailLogo() {
  return (
    <svg viewBox="0 0 24 24" className="realIcon">
      <path d="M3 5h18c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm9 8.2L3.6 7.4V17h16.8V7.4L12 13.2zm0-2.4L19.2 7H4.8L12 10.8z" />
    </svg>
  );
}

function ResumeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="realIcon">
      <path d="M6 2h9l5 5v15H6V2zm8 1.8V8h4.2L14 3.8zM8 11h8v2H8v-2zm0 4h8v2H8v-2z" />
    </svg>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [theme, setTheme] = useState("theme-cyan");
  const [activeSection, setActiveSection] = useState("home");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Hi, I am Ask Prasanna AI. You can ask me about Prasanna’s projects, skills, education, experience, research interests, farming AI project, or contact details."
    }
  ]);

  const categories = ["All", "Agriculture AI", "GenAI", "Agentic AI", "Healthcare AI", "ML", "Data Science"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const changeTheme = (section) => {
    setTheme(themeMap[section] || "theme-cyan");
    setActiveSection(section);
  };

  const handleContact = (event) => {
    event.preventDefault();

    const subject = `Portfolio message from ${form.name || "Visitor"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChatSubmit = (event) => {
    event.preventDefault();

    if (!chatInput.trim()) return;

    const userMessage = {
      sender: "user",
      text: chatInput
    };

    const botMessage = {
      sender: "bot",
      text: getBotReply(chatInput)
    };

    setChatMessages((prev) => [...prev, userMessage, botMessage]);
    setChatInput("");
  };

  const quickAsk = (question) => {
    const userMessage = {
      sender: "user",
      text: question
    };

    const botMessage = {
      sender: "bot",
      text: getBotReply(question)
    };

    setChatMessages((prev) => [...prev, userMessage, botMessage]);
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
      <div className="starsLayer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="navbar">
        <a href="#home" className="logo" onClick={() => changeTheme("home")}>
          PR
        </a>

        <div className="navLinks">
          <a className={activeSection === "about" ? "activeNav" : ""} href="#about" onClick={() => changeTheme("about")}>About</a>
          <a className={activeSection === "education" ? "activeNav" : ""} href="#education" onClick={() => changeTheme("education")}>Education</a>
          <a className={activeSection === "experience" ? "activeNav" : ""} href="#experience" onClick={() => changeTheme("experience")}>Experience</a>
          <a className={activeSection === "skills" ? "activeNav" : ""} href="#skills" onClick={() => changeTheme("skills")}>Skills</a>
          <a className={activeSection === "aiLab" ? "activeNav" : ""} href="#aiLab" onClick={() => changeTheme("aiLab")}>AI Lab</a>
          <a className={activeSection === "research" ? "activeNav" : ""} href="#research" onClick={() => changeTheme("research")}>Research</a>
          <a className={activeSection === "projects" ? "activeNav" : ""} href="#projects" onClick={() => changeTheme("projects")}>Projects</a>
          <a className={activeSection === "contact" ? "activeNav" : ""} href="#contact" onClick={() => changeTheme("contact")}>Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="heroContent">
          <div className="terminalIntro">
            <span>$ whoami</span>
            <h1>{profile.shortName}</h1>
            <h2>{profile.role} | From DATA to Decisions</h2>
            <p>&gt; Engineering practical AI systems</p>
          </div>

          <div className="typingBox premiumTyping">
            <span>{typedText}</span>
            <b>|</b>
          </div>

          <div className="animatedWords">
            <span>Machine Learning</span>
            <span>Data Science</span>
            <span>Generative AI</span>
            <span>Agentic AI</span>
            <span>Agriculture AI</span>
            <span>Healthcare AI</span>
          </div>

          <p>
            I am pursuing BSc (Hons) in Data Science and Artificial Intelligence
            at IIT Guwahati. I enjoy building AI projects that are useful,
            understandable, and deployable.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="primaryBtn" onClick={() => changeTheme("projects")}>
              View Projects
            </a>
            <a href={profile.resume} className="secondaryBtn" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>
        </div>

        <div className="profilePanel cleanProfilePanel">
          <div className="profileFrame">
            <img src={profile.image} alt="Prasanna Rani profile" />
          </div>

          <div className="profileCaption">
            <p>Data Science • GenAI • Practical Projects</p>
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

      <section className="quoteSection">
        <p>
          "First make it work, then make it intelligent."
          <span>// PRASANNA_AI</span>
        </p>
      </section>

      <section id="about" className="section sectionAbout">
        <div className="sectionHeader">
          <span>About Me</span>
          <h2>Building practical AI solutions with curiosity and purpose</h2>
        </div>

        <div className="aboutBento balancedAbout">
          <div className="aboutBox">
            <h3>Who I Am</h3>
            <p>
              I am Prasanna Rani, a Data Science and Artificial Intelligence student at
              IIT Guwahati. I enjoy learning by building projects in AI/ML, GenAI,
              NLP, agriculture AI, healthcare awareness, and analytics dashboards.
            </p>
            <p>
              My goal is to create useful AI applications that can be tested by real users,
              not just kept as notebook experiments.
            </p>
          </div>

          <div className="aboutBox">
            <h3>How I Build</h3>
            <p>
              I start with a problem, understand the user need, design the AI or data
              workflow, build the logic, and deploy it using tools like Streamlit,
              GitHub, and Vercel.
            </p>
          </div>

          <div className="aboutBox">
            <h3>Current Direction</h3>
            <p>
              I am focusing on stronger GenAI projects, agentic workflows,
              practical dashboards, farming AI, and research-oriented healthcare AI ideas.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="section sectionEducation">
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

      <section id="experience" className="section sectionExperience">
        <div className="sectionHeader">
          <span>Experience</span>
          <h2>Work I Practiced Through Real Projects</h2>
        </div>

        <div className="experienceGrid">
          {experience.map((item, index) => (
            <div className={`experienceCard ${item.color}`} key={index}>
              <div className="experienceTop">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <span>{item.year}</span>
              </div>

              <div className="experienceHighlight">{item.highlight}</div>

              <div className="experiencePoints">
                {item.points.map((point, i) => (
                  <div className="expPoint" key={i}>
                    <span className="colorBullet"></span>
                    <p>{point}</p>
                  </div>
                ))}
              </div>

              <div className="learnedSkills">
                {item.learned.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section sectionSkills">
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

      <section id="aiLab" className="section sectionAILab aiShowcaseSection">
        <div className="sectionHeader">
          <span>AI Lab</span>
          <h2>Ideas moving through an AI universe</h2>
        </div>

        <div className="aiShowcase">
          <div className="aiOrbit">
            <div className="coreBrain">
              <span>AI</span>
            </div>

            {aiTopics.map((topic, index) => (
              <span className={`node node${index + 1}`} key={topic}>
                {topic}
              </span>
            ))}

            <i className="star star1">✦</i>
            <i className="star star2">✧</i>
            <i className="star star3">✦</i>
            <i className="star star4">✧</i>
          </div>

          <div className="aiShowcaseText">
            <h3>From raw data to useful intelligence</h3>
            <p>
              My project style follows a simple loop: understand the problem,
              prepare the data or prompt flow, build the model or AI workflow,
              deploy it, and improve based on user experience.
            </p>
            <div className="aiSteps">
              <span>Problem</span>
              <span>Data</span>
              <span>Prompt</span>
              <span>Model</span>
              <span>Agent</span>
              <span>Interface</span>
              <span>Deployment</span>
              <span>Feedback</span>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="section sectionResearch">
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

      <section id="projects" className="section sectionProjects">
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

      <section id="certificates" className="section sectionCertificates">
        <div className="sectionHeader">
          <span>Certificates & Courses</span>
          <h2>Learning Blocks That Shape My AI Path</h2>
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

      <section id="contact" className="section sectionContact contactSection">
        <div className="sectionHeader">
          <span>Contact</span>
          <h2>Let’s connect and build something useful</h2>
        </div>

        <div className="contactLayout">
          <form className="terminalContact" onSubmit={handleContact}>
            <div className="terminalTop">
              <span></span>
              <span></span>
              <span></span>
              <p>prasanna.contact()</p>
            </div>

            <label>
              <small>Your Name</small>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>

            <label>
              <small>Your Email</small>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>

            <label>
              <small>Your Message</small>
              <textarea
                placeholder="Write your message for collaboration, project feedback, or opportunity..."
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </label>

            <button type="submit">Send Message</button>
          </form>

          <div className="contactSide socialBoard">
            <h3>Find me online</h3>

            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="socialCard">
              <div className="socialLogo linkedinLogo"><LinkedInLogo /></div>
              <div>
                <span>LinkedIn</span>
                <p>Segabandi Prasanna Rani</p>
              </div>
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer" className="socialCard">
              <div className="socialLogo githubLogo"><GitHubLogo /></div>
              <div>
                <span>GitHub</span>
                <p>Prasannasegabandi36</p>
              </div>
            </a>

            <a href={profile.medium} target="_blank" rel="noreferrer" className="socialCard">
              <div className="socialLogo mediumLogo"><MediumLogo /></div>
              <div>
                <span>Medium</span>
                <p>@prasannasegabandi</p>
              </div>
            </a>

            <a href={`mailto:${profile.email}`} className="socialCard">
              <div className="socialLogo mailLogo"><MailLogo /></div>
              <div>
                <span>Email</span>
                <p>prasannasegabandi@gmail.com</p>
              </div>
            </a>

            <a href={profile.resume} target="_blank" rel="noreferrer" className="socialCard">
              <div className="socialLogo resumeLogo"><ResumeLogo /></div>
              <div>
                <span>Resume</span>
                <p>Download PDF</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="resumeChatbot">
        {chatOpen && (
          <div className="chatWindow">
            <div className="chatHeader">
              <div>
                <h3>Ask Prasanna AI</h3>
                <p>Resume-aware assistant</p>
              </div>
              <button onClick={() => setChatOpen(false)}>×</button>
            </div>

            <div className="quickQuestions">
              <button onClick={() => quickAsk("Tell me about Prasanna")}>About</button>
              <button onClick={() => quickAsk("What are Prasanna's skills?")}>Skills</button>
              <button onClick={() => quickAsk("What projects has Prasanna built?")}>Projects</button>
              <button onClick={() => quickAsk("Tell me about the farming AI project")}>Farming AI</button>
              <button onClick={() => quickAsk("What is Prasanna's experience?")}>Experience</button>
              <button onClick={() => quickAsk("How can I contact Prasanna?")}>Contact</button>
            </div>

            <div className="chatMessages">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={msg.sender === "bot" ? "botMessage" : "userMessage"}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <form className="chatInputBox" onSubmit={handleChatSubmit}>
              <input
                type="text"
                placeholder="Ask about my resume..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        )}

        <button className="chatToggle" onClick={() => setChatOpen(!chatOpen)}>
          {chatOpen ? "×" : "🤖 Ask Resume AI"}
        </button>
      </div>

      <footer>
        <p>© 2026 Prasanna Rani — built with data, curiosity & neural sparks.</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
