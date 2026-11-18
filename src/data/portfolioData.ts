import type { Certificate, EducationItem, HackathonItem, Project, SkillCategory, CareerOpportunity } from '../types/portfolio';

/**
 * ============================================================================
 * SANTHOSH KUMAR R. - PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * This file contains all portfolio information.
 * You can easily update links, certificates, projects, and contact info here.
 * ============================================================================
 */

export const personalInfo = {
  name: "Santhosh Kumar R.",
  initials: "SK",
  title: "Aspiring AI & Data Science Engineer | Software Developer",
  college: "Rajalakshmi Institute of Technology (RIT)",
  collegeAbbr: "RIT Chennai",
  department: "Artificial Intelligence and Data Science",
  email: "rsanthoshkumar376@gmail.com",
  linkedIn: "https://www.linkedin.com/in/santhosh-kumar-r-1892553b4/",
  github: "https://github.com/santhoshkumarr376",
  githubUsername: "santhoshkumarr376",
  location: "Chennai, Tamil Nadu, India",
  experienceStatus: "Fresher – Actively seeking internships & junior developer roles",
  careerObjective:
    "To become a skilled AI and Data Science Engineer by developing practical software applications, exploring artificial intelligence, participating in hackathons and solving real-world problems through technology.",
  tagline: "I build practical digital solutions using programming, web technologies and artificial intelligence.",
  
  // NOTE: Place your custom profile image in `/public/images/profile.jpg`
  // The website will automatically use it, or fallback to the sleek interactive avatar below.
  avatarPlaceholder: "/images/profile.jpg",
  resumePath: "/resume-santhosh-kumar.pdf",
};

export const aboutData = {
  intro:
    "I am an Artificial Intelligence and Data Science engineering student at Rajalakshmi Institute of Technology (RIT), Chennai. I have a passion for transforming real-world challenges into reliable software systems and data-driven solutions.",
  philosophy:
    "Rather than treating engineering as purely theoretical, I believe in learning by building. From architecting end-to-end solar management platforms like MRS SOLAR to designing AI-driven compliance workflows, I focus on clean code, practical system architecture, and impactful technology.",
  interests: [
    { title: "Artificial Intelligence", description: "Integrating intelligent reasoning, LLMs, and decision engines into applications." },
    { title: "Machine Learning", description: "Exploring data modeling, predictive analysis, and anomaly detection algorithms." },
    { title: "Full-Stack Web Development", description: "Crafting responsive React frontends paired with robust Node.js and SQL backends." },
    { title: "Database Management", description: "Designing relational schemas, optimizing SQL queries, and ensuring data consistency." },
    { title: "Software Engineering", description: "Writing maintainable, modular code with clean architectural boundaries." },
    { title: "Real-World Problem Solving", description: "Directing technology towards green energy, civic efficiency, and social good." },
    { title: "Innovation & Hackathons", description: "Rapid prototyping, collaborative problem-solving, and presenting functional ideas." }
  ],
  stats: [
    { label: "Engineering Major", value: "AI & Data Science" },
    { label: "Institution", value: "RIT Chennai" },
    { label: "Certifications", value: "13 Completed" },
    { label: "Work Experience", value: "Fresher / Ready to Intern" }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    description: "Core languages used for problem solving, logic implementation, and software development.",
    skills: [
      { name: "Python", iconName: "Python", practicalContext: "AI experimentation, data scripts, algorithms", isKey: true },
      { name: "Java", iconName: "Coffee", practicalContext: "Object-oriented programming, modular structures", isKey: true },
      { name: "SQL", iconName: "Database", practicalContext: "Relational queries, schema queries, data retrieval", isKey: true }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: "Layout",
    description: "Building responsive, modern, user-friendly client interfaces.",
    skills: [
      { name: "HTML5", iconName: "FileCode", practicalContext: "Semantic structure, accessibility", isKey: false },
      { name: "CSS3", iconName: "Palette", practicalContext: "Responsive layouts, Flexbox, Grid, transitions", isKey: false },
      { name: "JavaScript (ES6+)", iconName: "FileJson", practicalContext: "Modern asynchronous code, DOM manipulation", isKey: true },
      { name: "React", iconName: "Atom", practicalContext: "Component architectures, hooks, state management", isKey: true }
    ]
  },
  {
    title: "Backend & Systems",
    icon: "Server",
    description: "Server-side logic and API handling for full-stack applications.",
    skills: [
      { name: "Node.js", iconName: "Server", practicalContext: "Backend APIs, runtime environment, micro-services", isKey: true }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    description: "Relational data modeling, table normalization, and persistence.",
    skills: [
      { name: "MySQL", iconName: "Database", practicalContext: "Structured tables, relational joins, constraints", isKey: true }
    ]
  },
  {
    title: "Tools & Development Platforms",
    icon: "Wrench",
    description: "Daily development workflow, collaboration, and environment tooling.",
    skills: [
      { name: "Visual Studio Code", iconName: "Terminal", practicalContext: "Primary IDE, debugging, extensions", isKey: true },
      { name: "Git", iconName: "GitBranch", practicalContext: "Version control, branching, atomic commits", isKey: true },
      { name: "GitHub", iconName: "Github", practicalContext: "Repository hosting, collaboration, open source", isKey: true }
    ]
  },
  {
    title: "AI & Emerging Technologies",
    icon: "Cpu",
    description: "Applied generative AI, API integration, and computer vision concepts.",
    skills: [
      { name: "Google Gemini API", iconName: "Sparkles", practicalContext: "Multimodal AI prompts, chatbots, intelligent responses", isKey: true },
      { name: "AI Integration", iconName: "Bot", practicalContext: "Connecting LLMs to application workflows", isKey: true },
      { name: "Image Recognition Concepts", iconName: "Eye", practicalContext: "Visual feature detection and document anomaly detection", isKey: false }
    ]
  }
];

export const featuredProjects: Project[] = [
  {
    id: "mrs-solar",
    title: "MRS SOLAR",
    subtitle: "Solar Loan Management & Clean Energy Tracking Platform",
    category: "Flagship Platform",
    flagship: true,
    status: "In Active Development",
    statusColor: "emerald",
    description:
      "A comprehensive web and mobile-oriented ecosystem engineered to help rooftop solar customers manage solar installation journeys, loan progress, generation metrics, and post-installation service operations.",
    gridTiedRequirement:
      "GRID-TIED ARCHITECTURE: All solar energy generated is fed directly into the TNEB (Tamil Nadu Electricity Board) electrical grid via bi-directional net metering. The system intentionally excludes battery storage or backup systems to maximize grid efficiency and reduce upfront customer costs.",
    modules: [
      "Customer Portal: Clean energy generation analytics, loan application status & payment tracking.",
      "Manager Portal: Pipeline monitoring, site inspection reviews, customer onboarding approval.",
      "Worker Portal: Field task assignments, physical installation verification & status checklists.",
      "Main Owner Portal: Executive KPIs, company-wide revenue metrics, multi-site performance.",
      "Solar Generation Tracking: Real-time kilowatt-hour tracking and EB grid feed verification.",
      "Customer Management: Lifecycle records, document vaults, contract management.",
      "Worker Task Management & CRM: Geo-tagged service tickets and operational CRM.",
      "AI Chatbot with Google Gemini API: 24/7 intelligent automated resolution for customer solar inquiries.",
      "Customer Support & Manager Connection: Direct escalate-to-human communication channels.",
      "TNEB Bill Integration: Net metering reconciliation and tariff reduction calculator."
    ],
    features: [
      "Role-Based Access Control (RBAC) across 4 dedicated user roles",
      "Real-time solar export tracking straight to the EB power grid",
      "Built-in Google Gemini API conversational assistant for solar FAQs",
      "Loan repayment schedules and financing milestone visibility",
      "Worker field task allocation and status updates"
    ],
    techStack: ["React", "TypeScript", "Node.js", "MySQL", "Google Gemini API", "Tailwind CSS"],
    image: "/images/mrs-solar-preview.png",
    githubUrl: "https://github.com/santhoshkumarr376",
    liveDemoUrl: "https://github.com/santhoshkumarr376",
    highlights: [
      "Flagship capstone project with multi-role enterprise architecture",
      "Custom Net-Metering logic tailored for EB grid export",
      "Generative AI integration for autonomous customer assistance"
    ],
    architectureOverview:
      "Engineered with a decoupled frontend/backend architecture, MRS SOLAR integrates role-based security, relational MySQL data persistence for customer financial ledgers, and Gemini API for domain-specific solar assistance."
  },
  {
    id: "nourish-network",
    title: "NOURISH NETWORK",
    subtitle: "Real-Time Surplus Food Allocation Ecosystem",
    category: "AI & System Design",
    flagship: false,
    status: "System Architecture",
    statusColor: "cyan",
    description:
      "A mission-driven software solution designed to tackle urban food waste and hunger by connecting commercial food producers, restaurants, and local farmers directly with registered NGOs for immediate surplus food redistribution.",
    features: [
      "Farmer & Restaurant Connections: Structured listing of surplus inventory before perishability deadlines.",
      "Surplus Food Identification: Automated category tagging, expiry windows, and quantity tracking.",
      "NGO Coordination Dispatch: Smart notification matching food availability with nearest registered hunger relief centers.",
      "Dynamic Food Allocation: Fair routing logic to prevent distribution bottlenecks across shelters.",
      "Institutional Verification Concepts: Trust score and sanitation compliance verification."
    ],
    techStack: ["React", "JavaScript", "Node.js", "SQL", "Tailwind CSS"],
    image: "/images/nourish-network-preview.png",
    githubUrl: "https://github.com/santhoshkumarr376",
    highlights: [
      "Targeted at UN Sustainable Development Goal #2: Zero Hunger",
      "Geo-proximity allocation concept to minimize logistics transit time",
      "Designed with verified entity authentication protocols"
    ],
    architectureOverview:
      "Designed with an event-driven allocation model where surplus batches trigger push alerts to the closest available distribution partner based on volume capacity and transit time."
  },
  {
    id: "aicte-validation",
    title: "AICTE APPLICATION VALIDATION",
    subtitle: "Intelligent Institutional Application Validation System",
    category: "Full-Stack",
    flagship: false,
    status: "Research Prototype",
    statusColor: "blue",
    description:
      "A proposed solution engineered to streamline the scrutiny of institutional approval applications, cross-comparing regulatory documentation, validating institutional parameters, and flagging anomalies with human-in-the-loop oversight.",
    features: [
      "Document Verification Pipeline: Extraction and scrutiny of institutional compliance files.",
      "Institutional Record Validation: Cross-matching infrastructure, faculty count, and land requirements against norms.",
      "Anomaly Detection: Identifying inconsistencies or irregular entries in submitted dossiers.",
      "Regulatory Compliance Checking: Automated scoring against mandatory criteria rulesets.",
      "Evidence-Linked Findings: Audit trails linking every validation flag directly to specific clauses."
    ],
    techStack: ["Python", "FastAPI / Node.js", "React", "AI / Document OCR Concepts", "SQL"],
    image: "/images/aicte-validation-preview.png",
    githubUrl: "https://github.com/santhoshkumarr376",
    highlights: [
      "Engineered for Smart India Hackathon institutional compliance challenge",
      "Transparent audit trail showing rationale behind validation determinations",
      "Human-in-the-loop approval workflow"
    ],
    architectureOverview:
      "Employs a multi-tier verification model: document parsing layer, heuristic rules evaluation engine, and a reviewer governance dashboard with cryptographic digest logging."
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering / Technology (B.Tech)",
    department: "Artificial Intelligence and Data Science",
    institution: "Rajalakshmi Institute of Technology (RIT)",
    location: "Chennai, Tamil Nadu, India",
    description:
      "Currently pursuing foundational and advanced engineering principles in Artificial Intelligence, Data Science, Machine Learning, and Software Systems. Engaging actively in lab work, algorithmic problem solving, and technical competitions.",
    coreSubjects: [
      "Data Structures & Algorithms",
      "Object Oriented Programming (Java/Python)",
      "Database Management Systems (SQL)",
      "Machine Learning Foundations",
      "Operating Systems & Computer Networks",
      "Artificial Intelligence & Problem Solving"
    ],
    academicFocus: [
      "Hands-on application development alongside theoretical concepts",
      "Active participant in technical club initiatives and coding challenges",
      "Building practical solutions for renewable energy and civic workflows"
    ]
  }
];

export const certificationsData: Certificate[] = [
  {
    id: "cert-01",
    title: "Programming Fundamentals using Python",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-PY-01",
    skillsLearned: ["Python Syntax", "Data Structures", "Control Flow", "Functions & Modules"]
  },
  {
    id: "cert-02",
    title: "Object Oriented Programming using Java",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-JAV-02",
    skillsLearned: ["Inheritance", "Polymorphism", "Encapsulation", "Exception Handling"]
  },
  {
    id: "cert-03",
    title: "Database Management Systems and SQL",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-SQL-03",
    skillsLearned: ["Relational Schema Design", "Complex SQL Queries", "Normalization", "ACID Properties"]
  },
  {
    id: "cert-04",
    title: "Artificial Intelligence Primer",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-AI-04",
    skillsLearned: ["Search Algorithms", "Knowledge Representation", "Inference Engines", "AI Ethics"]
  },
  {
    id: "cert-05",
    title: "Machine Learning Foundations",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-ML-05",
    skillsLearned: ["Supervised Learning", "Regression & Classification", "Model Evaluation", "Overfitting Prevention"]
  },
  {
    id: "cert-06",
    title: "Data Science Essentials",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-DS-06",
    skillsLearned: ["Data Wrangling", "Exploratory Data Analysis", "Statistical Thinking", "Data Cleansing"]
  },
  {
    id: "cert-07",
    title: "Web Development Fundamentals (HTML5 & CSS3)",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-WEB-07",
    skillsLearned: ["Semantic HTML", "CSS Flexbox & Grid", "Responsive Design", "Web Accessibility"]
  },
  {
    id: "cert-08",
    title: "JavaScript for Modern Web Applications",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-JS-08",
    skillsLearned: ["Asynchronous JS", "Promises & Async/Await", "DOM Manipulation", "ES6+ Features"]
  },
  {
    id: "cert-09",
    title: "Software Engineering & Lifecycle Principles",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-SE-09",
    skillsLearned: ["SDLC Methodologies", "Requirement Analysis", "Testing Principles", "Design Patterns"]
  },
  {
    id: "cert-10",
    title: "Cloud Computing Overview",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-CC-10",
    skillsLearned: ["IaaS/PaaS/SaaS", "Cloud Architecture", "Virtualization", "Cloud Security Basics"]
  },
  {
    id: "cert-11",
    title: "Version Control with Git & GitHub",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-GIT-11",
    skillsLearned: ["Branching & Merging", "Pull Requests", "Merge Conflict Resolution", "Collaborative Workflows"]
  },
  {
    id: "cert-12",
    title: "Problem Solving and Algorithmic Thinking",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-PS-12",
    skillsLearned: ["Time Complexity Analysis", "Recursion", "Divide and Conquer", "Edge Case Testing"]
  },
  {
    id: "cert-13",
    title: "Professional Workplace & Communication Skills",
    issuer: "Infosys Springboard",
    date: "2024",
    credentialId: "INF-SB-COMM-13",
    skillsLearned: ["Technical Presentation", "Cross-Functional Collaboration", "Active Listening", "Workplace Ethics"]
  }
];

export const hackathonsData: HackathonItem[] = [
  {
    id: "sih-participation",
    title: "Smart India Hackathon (SIH) Participation",
    event: "Smart India Hackathon",
    role: "Team Developer & Problem Analyst",
    tagline: "Institutional Application Scrutiny & Compliance Automation",
    problemStatement:
      "Tackled the challenge of automating scrutiny for regulatory institutional approval dossiers, aiming to reduce manual processing overhead and detect filing anomalies.",
    solutionSummary:
      "Formulated an intelligent document validation flow combining rule engines, evidence citation, and audit logging to assist reviewers in assessing institutional records with speed and accuracy.",
    technologies: ["System Design", "Document Processing Concepts", "Python / Web Stack", "Audit Trail"],
    status: "Project Participation & Concept Development",
    verified: true
  },
  {
    id: "designathon-2",
    title: "Designathon 2.0 Participation",
    event: "Designathon 2.0",
    role: "UI/UX & Frontend Prototyper",
    tagline: "Rapid User-Centric Prototyping & Iteration",
    problemStatement:
      "Focused on rapid wireframing, accessible layout architecture, and building intuitive interfaces under intensive time constraints.",
    solutionSummary:
      "Crafted cohesive design systems, clear interactive visual hierarchy, and functional prototypes focused on high usability and zero clutter for complex multi-role workflows.",
    technologies: ["UI/UX Prototyping", "Design Systems", "Component Modeling", "Responsive Layouts"],
    status: "Active Hackathon Participant",
    verified: true
  },
  {
    id: "technical-presentations",
    title: "College Technical Symposia & Project Demonstrations",
    event: "RIT Technical & Department Events",
    role: "Project Presenter & Software Builder",
    tagline: "Demonstrating Working Software Solutions",
    problemStatement:
      "Presenting technical architectures and live prototypes (such as the MRS SOLAR grid-tied platform) to faculty evaluators and peer developers.",
    solutionSummary:
      "Demonstrated system diagrams, database relationship models, and live UI interactions while explaining why grid-tied solar eliminates battery overhead.",
    technologies: ["Technical Communication", "Architecture Presentation", "Live Demo"],
    status: "Active Department Participant",
    verified: true
  }
];

export const careerOpportunities: CareerOpportunity[] = [
  {
    role: "AI & Data Science Intern",
    type: "Internship / Trainee",
    focus: "Applied AI, Data Pipeline Cleaning, ML Exploration, LLM Integration",
    description: "Eager to assist engineering teams in preparing datasets, integrating AI APIs like Gemini, and evaluating machine learning workflows.",
    icon: "Brain"
  },
  {
    role: "Software Developer Intern",
    type: "Internship / Trainee",
    focus: "Full-Stack Web (React, Node.js), API Development, Database Modeling",
    description: "Ready to contribute clean frontend components, RESTful endpoints, and SQL queries to commercial production codebases.",
    icon: "Code"
  },
  {
    role: "Hackathon & Project Collaborator",
    type: "Technical Collaboration",
    focus: "Rapid Prototyping, Hackathon Teams, Open Source Contributions",
    description: "Passionate about teaming up with fellow passionate builders to create impactful prototypes under tight deadlines.",
    icon: "Users"
  }
];

export const fallbackGithubRepos = [
  {
    id: 1,
    name: "mrs-solar",
    description: "Flagship clean-energy tracking & solar loan management platform for rooftop solar installations (Grid-tied TNEB system).",
    html_url: "https://github.com/santhoshkumarr376",
    language: "TypeScript",
    stargazers_count: 5,
    forks_count: 1,
    updated_at: "2026-11-18T12:00:00Z",
    topics: ["react", "typescript", "solar-energy", "grid-tied", "gemini-api"],
    fork: false
  },
  {
    id: 2,
    name: "ai-verify-compliance",
    description: "Intelligent institutional application and document scrutiny platform with anomaly detection (SIH Prototype).",
    html_url: "https://github.com/santhoshkumarr376",
    language: "Python",
    stargazers_count: 3,
    forks_count: 0,
    updated_at: "2026-10-24T18:00:00Z",
    topics: ["fastapi", "document-analysis", "python", "compliance-engine"],
    fork: false
  },
  {
    id: 3,
    name: "nourish-network",
    description: "Surplus food allocation ecosystem connecting restaurants, farmers, and relief NGOs in real time.",
    html_url: "https://github.com/santhoshkumarr376",
    language: "JavaScript",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-09-15T15:30:00Z",
    topics: ["food-waste", "fullstack", "react", "social-good"],
    fork: false
  }
];
