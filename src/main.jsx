import React, { useState } from "react";
import "./PortfolioChatbot.css";

const quickQuestions = [
  "Tell me about Prasanna",
  "What are her skills?",
  "Show projects",
  "Medical project",
  "AI/ML projects",
  "Contact details",
];

const chatbotData = [
  {
    keywords: ["about", "who", "prasanna", "profile", "introduce", "yourself"],
    answers: [
      "Prasanna is an AI/ML and Data Science aspirant who builds real-time projects using Python, Streamlit, React, LangChain, CrewAI, Groq, Gemini, and Machine Learning.",
      "Prasanna focuses on practical AI projects, portfolio development, data analytics dashboards, and GenAI applications that solve real-life problems.",
    ],
  },
  {
    keywords: ["skill", "skills", "technology", "tools", "tech stack"],
    answers: [
      "Prasanna's skills include Python, SQL, Pandas, NumPy, Matplotlib, Plotly, Scikit-learn, Streamlit, React, GitHub, LangChain, CrewAI, Groq, and Gemini.",
      "Her main technical areas are AI/ML, Data Science, Streamlit apps, React portfolio websites, GenAI tools, dashboards, and beginner-level Data Engineering.",
    ],
  },
  {
    keywords: ["project", "projects", "work", "portfolio"],
    answers: [
      "Some of Prasanna's projects include AI Medicine Safety Assistant, KidneyCare AI Creatinine Tracker, AI Shopping Assistant, Multi-Agent AI Career Assistant, LinkedIn Post Generator, and Nassau Candy Analytics.",
      "Her portfolio contains AI/ML, Data Analytics, Streamlit, React, and GenAI projects with real-world use cases.",
    ],
  },
  {
    keywords: ["medicine", "medical", "drug", "tablet", "patient", "health"],
    answers: [
      "The AI Medicine Safety Assistant helps users check medicine safety, understand drug information, and generate simple AI-based explanations. It is useful for patient awareness, but not a replacement for doctors.",
      "Prasanna's medical project focuses on patient safety using OCR, drug information APIs, and AI summaries.",
    ],
  },
  {
    keywords: ["kidney", "creatinine", "father", "health tracker"],
    answers: [
      "KidneyCare AI is a creatinine tracker built for monthly kidney health monitoring. It helps users record values, understand trends, and explain health data in simple language.",
      "The KidneyCare AI project was created with a real-life purpose: helping families track creatinine levels in an easy and understandable way.",
    ],
  },
  {
    keywords: ["ai shopping", "shopping", "image search", "product"],
    answers: [
      "The AI Shopping Assistant allows users to search products using text or images. It uses Streamlit and AI to make product discovery easier.",
      "This project is useful because it combines image-based product search, text input, and AI recommendations in one assistant.",
    ],
  },
  {
    keywords: ["multi agent", "multi-agent", "crewai", "career assistant", "agent"],
    answers: [
      "The Multi-Agent AI Career Assistant uses multiple agents like Resume Analyzer, Skill Gap Planner, Interview Coach, Job Match Agent, and LinkedIn Content Agent.",
      "This project shows how different AI agents can work together to guide a student or job seeker step by step.",
    ],
  },
  {
    keywords: ["linkedin", "post generator", "content"],
    answers: [
      "The LinkedIn Post Generator helps create professional LinkedIn posts using AI. It is useful for students, job seekers, and creators.",
      "This project uses GenAI to generate clear, professional, and engaging LinkedIn content.",
    ],
  },
  {
    keywords: ["education", "college", "degree", "study"],
    answers: [
      "Prasanna is building her career in AI/ML, Data Science, and Data Engineering with hands-on projects and internship experience.",
      "Her learning path includes Machine Learning, Data Science, GenAI, Streamlit, React, SQL, and AI-based project development.",
    ],
  },
  {
    keywords: ["internship", "experience", "unified mentor", "data science"],
    answers: [
      "Prasanna worked on Data Science internship projects such as Nassau Candy Distributor Analytics and Care Transition Efficiency Analytics.",
      "Her internship work includes data cleaning, analysis, dashboards, visualization, and business insight writing.",
    ],
  },
  {
    keywords: ["resume", "cv"],
    answers: [
      "Prasanna's resume highlights AI/ML projects, Data Science internship work, Streamlit apps, GenAI projects, and technical skills.",
      "Her resume is focused on AI/ML, Data Science, GenAI, Python, Streamlit, and project-based learning.",
    ],
  },
  {
    keywords: ["contact", "email", "github", "linkedin", "reach"],
    answers: [
      "You can connect with Prasanna through GitHub, LinkedIn, Medium, or the contact section of this portfolio.",
      "Prasanna's GitHub profile is Prasannasegabandi36, where she shares her AI/ML and Data Science projects.",
    ],
  },
  {
    keywords: ["agriculture", "farming", "farmer", "crop", "seed", "fertilizer"],
    answers: [
      "Prasanna is also planning an agriculture-based AI project with image detection and voice assistant support for farmers.",
      "The farming project idea includes seed detection, plant identification, fertilizer guidance, crop suggestions, and voice support for uneducated farmers.",
    ],
  },
];

function getBotReply(userMessage) {
  const message = userMessage.toLowerCase();

  let bestMatch = null;
  let highestScore = 0;

  chatbotData.forEach((item) => {
    let score = 0;

    item.keywords.forEach((keyword) => {
      if (message.includes(keyword)) {
        score += 1;
      }
    });

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  });

  if (bestMatch) {
    const randomIndex = Math.floor(Math.random() * bestMatch.answers.length);
    return bestMatch.answers[randomIndex];
  }

  return "I can help you know about Prasanna's skills, projects, AI/ML work, internships, resume, medical projects, agriculture ideas, and contact details. Try asking: What are her projects?";
}

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("purple");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I am Prasanna's portfolio assistant. Ask me about her projects, skills, resume, internships, or AI/ML work.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (customQuestion = null) => {
    const userText = customQuestion || input.trim();

    if (!userText) return;

    const userMessage = {
      sender: "user",
      text: userText,
    };

    const botMessage = {
      sender: "bot",
      text: getBotReply(userText),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <button className={`chatbot-floating-btn ${theme}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "💬"}
      </button>

      {isOpen && (
        <div className={`chatbot-box ${theme}`}>
          <div className="chatbot-header">
            <div>
              <h3>Prasanna AI Assistant</h3>
              <p>Ask about skills, projects, resume & internships</p>
            </div>

            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="theme-selector">
            <button onClick={() => setTheme("purple")} className="purple-dot"></button>
            <button onClick={() => setTheme("blue")} className="blue-dot"></button>
            <button onClick={() => setTheme("green")} className="green-dot"></button>
            <button onClick={() => setTheme("pink")} className="pink-dot"></button>
          </div>

          <div className="quick-questions">
            {quickQuestions.map((question, index) => (
              <button key={index} onClick={() => handleSend(question)}>
                {question}
              </button>
            ))}
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message-row ${message.sender}`}>
                <div className={`message-bubble ${message.sender}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              placeholder="Ask about Prasanna..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={() => handleSend()}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioChatbot;
