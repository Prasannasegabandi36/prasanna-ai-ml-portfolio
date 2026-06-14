import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const profile = {
  name: "Segabandi Prasanna Rani",
  role: "AI/ML & Data Science Intern Aspirant",
  email: "prasannasegabandi@gmail.com",
  github: "https://github.com/Prasannasegabandi36",
  linkedin: "https://www.linkedin.com/in/segabandi-prasanna-rani-5828a42ba/",
  resume: "#"
};

const typingSentences = [
  "I build AI-powered applications that solve real-world problems.",
  "I turn machine learning ideas into deployed web applications.",
  "I am exploring Data Science, GenAI, Agentic AI, and practical ML systems.",
  "I am open to AI/ML, Data Science, and GenAI internship opportunities."
];

const education = [
  {
    degree: "BSc (Hons) - Data Science and Artificial Intelligence",
    institute: "Indian Institute of Technology, Guwahati",
    score: "CGPA: 7.53 Current",
    year: "2023 - Present"
  },
  {
    degree: "Senior Secondary",
    institute: "Board of Intermediate Education, Andhra Pradesh",
    score: "90.0%",
    year: "2021"
  },
  {
    degree: "Secondary",
    institute: "Board of Secondary Education, Andhra Pradesh",
    score: "93.0%",
    year: "2019"
  }
];

const experience = [
  {
    role: "Data Science Intern",
    company: "Unified Mentor",
    year: "2026 - Present",
    points: [
      "Developed interactive analytics dashboards using Python, Pandas, Streamlit, Matplotlib, and Plotly.",
      "Built Banking Customer Retention and Nassau Candy Shipping Analytics dashboards to analyze KPIs, churn, shipping cost, order trends, and business performance."
    ]
  },
  {
    role: "AI/ML Intern",
    company: "Micro Information Technology Services",
    year: "2025",
    points: [
      "Developed an NLP Sentiment Analysis project to classify text into positive, negative, and neutral sentiments.",
      "Used NLTK, TextBlob, Scikit-learn, and Streamlit for preprocessing, prediction, and real-time web interface development."
    ]
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

const projects = [
  {
    title: "AI Shopping Assistant",
    category: "GenAI",
    year: "2026",
    tech: ["LangChain", "Groq API", "SQLite", "Streamlit"],
    desc: "AI-powered shopping assistant supporting product search, image-based queries, review lookup, and checkout simulation.",
    github: "https://github.com/Prasannasegabandi36/AI-Shopping-Assistant",
    live: "#"
  },
  {
    title: "AI Medicine Safety Assistant",
    category: "Healthcare AI",
    year: "2026",
    tech: ["Python", "Streamlit", "OCR", "AI Summary"],
    desc: "Healthcare awareness app to search medicine details and explain uses, precautions, and safety notes in simple language.",
    github: "https://github.com/Prasannasegabandi36/ai-medicine-safety-assistant",
    live: "https://ai-medicine-safety-assistant.streamlit.app/"
  },
  {
    title: "Multi-Agent AI Career Assistant",
    category: "Agentic AI",
    year: "2026",
    tech: ["CrewAI", "Groq API", "Streamlit"],
    desc: "Multi-agent system to analyze resumes, match job descriptions, identify skill gaps, and generate interview guidance.",
    github: "https://github.com/Prasannasegabandi36/multi-agent-ai-career-assistant",
    live: "https://multi-agent-ai-career-assistant-rerompyd6ykpxbknrkdisb.streamlit.app/"
  },
  {
    title: "LinkedIn Post Generator",
    category: "GenAI",
    year: "2025",
    tech: ["LangChain", "Groq API", "Streamlit"],
    desc: "GenAI content automation project that generates professional LinkedIn posts using LLM prompts.",
    github: "https://github.com/Prasannasegabandi36/linkedin-post-generator",
    live: "https://linkedin-post-generator-4r24kesjtr6cwqrogdwlrv.streamlit.app/"
  },
  {
    title: "NLP Sentiment Analysis App",
    category: "ML",
    year: "2025",
    tech: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    desc: "NLP app to classify text sentiment as positive, negative, or neutral with real-time prediction.",
    github: "https://github.com/Prasannasegabandi36/NLP-Sentiment-Analysis-Streamlit",
    live: "https://nlp-sentiment-analysis-app-ltibii22sappryq93zfxnfq.streamlit.app/"
  },
  {
    title: "Nassau Candy Distributor Analytics",
    category: "Data Science",
    year: "2025",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    desc: "Data analytics dashboard for shipping analysis, factory allocation, regional performance, and business insights.",
    github: "https://github.com/Prasannasegabandi36/Nassau-Candy-Distributor",
    live: "https://candy-shipping-analysis.streamlit.app/"
  }
];

const skills = [
  {
    title: "Programming",
    icon: "💻",
    items: ["Python", "SQL", "Java", "C", "C++"]
  },
  {
    title: "Data Analysis & Visualization",
    icon: "📊",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Excel"]
  },
  {
    title: "Machine Learning & NLP",
    icon: "🧠",
    items: ["Scikit-learn", "NLTK", "TextBlob", "Classification", "Regression", "Model Evaluation"]
  },
  {
    title: "Generative AI",
    icon: "🤖",
    items: ["LLM Basics", "Prompt Engineering", "RAG Basics", "LangChain", "CrewAI", "Groq API"]
  },
  {
    title: "Tools & Deployment",
    icon: "🚀",
    items: ["Streamlit", "Jupyter Notebook", "Google Colab", "Git", "GitHub", "VS Code"]
  }
];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const categories = ["All", "GenAI", "Agentic AI", "Healthcare AI", "ML", "Data Science"];

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
        }, 1800);
      }
    }, 55);

    return () => clearInterval(typing);
  }, [sentenceIndex]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">PR</div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
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
            <span>Streamlit Apps</span>
          </div>

          <div className="floatingBadges">
            <span>Python</span>
            <span>LangChain</span>
            <span>CrewAI</span>
            <span>Groq API</span>
            <span>RAG Basics</span>
          </div>

          <p>
            I am pursuing BSc (Hons) in Data Science and Artificial Intelligence
            at IIT Guwahati. I build AI, ML, Data Science, NLP, and GenAI
            projects with real deployment using Streamlit, GitHub, and Vercel.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="primaryBtn">View Projects</a>
            <a href={profile.resume} className="secondaryBtn">Download Resume</a>
          </div>

          <div className="socialLinks">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>

        <div className="heroCard">
          <div className="orbit">
            <div className="orbitCenter">AI</div>
          </div>

          <h3>AI Portfolio System</h3>
          <p>Education • Experience • Projects • Certificates</p>

          <div className="statsGrid">
            <div>
              <strong>7.53</strong>
              <span>Current CGPA</span>
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
      </section>

      <section id="about" className="section">
        <div className="sectionHeader">
          <span>About Me</span>
          <h2>Building practical AI solutions for real-world problems</h2>
        </div>

        <div className="aboutBox">
          <p>
            I am an AI/ML and Data Science learner with hands-on experience in
            building real-world projects using Python, Machine Learning, NLP,
            Streamlit, LangChain, CrewAI, and Groq API.
          </p>

          <p>
            My focus is to create practical AI applications, analytics
            dashboards, and GenAI tools that can be used as real deployed
            projects, not only notebook experiments.
          </p>
        </div>
      </section>

      <section id="education" className="section">
        <div className="sectionHeader">
          <span>Education</span>
          <h2>Academic Background</h2>
        </div>

        <div className="educationGrid">
          {education.map((edu, index) => (
            <div className="educationCard" key={index}>
              <div className="educationYear">{edu.year}</div>
              <h3>{edu.degree}</h3>
              <p>{edu.institute}</p>
              <strong>{edu.score}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="sectionHeader">
          <span>Experience</span>
          <h2>Internship Experience</h2>
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
          <h2>Technical Stack</h2>
        </div>

        <div className="skillsGrid">
          {skills.map((skill, index) => (
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
              <div className="projectTop">
                <span>{project.category}</span>
                <small>{project.year}</small>
              </div>

              <h3>{project.title}</h3>
              <p>{project.desc}</p>

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

      <section className="section whySection">
        <div className="sectionHeader">
          <span>Why Hire Me?</span>
          <h2>What I Bring as an Intern</h2>
        </div>

        <div className="whyGrid">
          <div>
            <h3>Project-Based Learning</h3>
            <p>
              I build and deploy complete projects so recruiters can see my
              practical work clearly.
            </p>
          </div>

          <div>
            <h3>Deployment Mindset</h3>
            <p>
              I use Streamlit Cloud, GitHub, and Vercel to turn ideas into live
              applications.
            </p>
          </div>

          <div>
            <h3>AI Curiosity</h3>
            <p>
              I actively explore GenAI, agents, prompt engineering, RAG basics,
              and ML applications for real-world use cases.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="contactCard">
          <h2>Let’s Connect</h2>

          <p>
            I am open to AI/ML, Data Science, and GenAI internship opportunities.
            Feel free to contact me for internships, projects, or collaboration.
          </p>

          <div className="contactButtons">
            <a href={`mailto:${profile.email}`} className="primaryBtn">Email Me</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="secondaryBtn">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="secondaryBtn">LinkedIn</a>
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
