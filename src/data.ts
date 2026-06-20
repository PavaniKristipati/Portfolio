/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SkillGroup, Project, EducationItem, Achievement } from "./types";
import avatarImg from "./assets/images/pavani_avatar_1781925999232.jpg";

export const PERSONAL_INFO = {
  name: "Kristipati Pavani",
  title: "Computer Science Student | Software Engineer | Web Developer",
  avatar: avatarImg,
  email: "pavskris3112@gmail.com",
  phone: "+91 7842600609",
  github: "https://github.com/PavaniKristipati",
  linkedin: "https://www.linkedin.com/in/pavani-kristipati-086070375",
  aboutMe: {
    bio: "I'm an enthusiastic Computer Science graduate eager to dive into new tech, build real skills, and grow in a challenging spot where I can make an impact—for the team and myself.",
    journey: "Currently pursuing my B.Tech in Computer Science & Engineering at Malla Reddy Engineering College (MREC) in Hyderabad. I maintain an outstanding CGPA of 9.29 and focus actively on full-stack web applications, relational and non-relational database design, and algorithmic problem-solving. My core goal is to deliver responsive, user-friendly software that solves business and community problems.",
    stats: [
      { label: "B.Tech CGPA", value: "9.29 / 10.0" },
      { label: "Completed Projects", value: "5 Build" },
      { label: "Certifications", value: "6 Earned" },
      { label: "Inter Marks", value: "986 / 1000" }
    ]
  }
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Java", level: 85, iconName: "Coffee", color: "from-orange-500 to-amber-600" },
      { name: "Python", level: 80, iconName: "Binary", color: "from-blue-500 to-indigo-600" },
      { name: "C Language", level: 80, iconName: "Code2", color: "from-slate-500 to-slate-700" }
    ]
  },
  {
    category: "Web & Databases",
    skills: [
      { name: "React (Hands-on)", level: 80, iconName: "Atom", color: "from-indigo-400 to-purple-600" },
      { name: "JavaScript", level: 85, iconName: "Code2", color: "from-yellow-400 to-amber-500" },
      { name: "HTML & CSS", level: 90, iconName: "Layers", color: "from-violet-500 to-indigo-600" },
      { name: "SQL", level: 80, iconName: "Database", color: "from-cyan-500 to-teal-600" },
      { name: "MongoDB", level: 80, iconName: "Server", color: "from-green-500 to-emerald-600" }
    ]
  },
  {
    category: "Frameworks, Tools & Soft Skills",
    skills: [
      { name: "Node.js & Express.js", level: 80, iconName: "Server", color: "from-green-400 to-emerald-600" },
      { name: "Git & GitHub", level: 85, iconName: "GitBranch", color: "from-gray-700 to-gray-900" },
      { name: "Team Player & Observer", level: 95, iconName: "GitMerge", color: "from-violet-500 to-fuchsia-600" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-poll-fusion",
    title: "Poll Fusion",
    subtitle: "Full-Stack Application",
    description: "Developed a web-based voting system with real-time poll creation and instant voting integration.",
    detailedDescription: "Designed and engineered an interactive poll builder and feedback application. Features active session locks, instant vote casting, live statistics compilation via Express and MongoDB, and an intuitive, secure administration suite.",
    image: "https://picsum.photos/seed/pollfusion/800/600",
    tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Real-Time"],
    githubUrl: "https://github.com/PavaniKristipati",
    demoUrl: "https://github.com/PavaniKristipati",
    featured: true
  },
  {
    id: "proj-orders-website",
    title: "Orders Website",
    subtitle: "React Goods Manager",
    description: "Developed responsive frontend pages for product browsing, and designed RESTful APIs to handle orders lifecycle.",
    detailedDescription: "An e-commerce ordering suite with dedicated dashboards. Implemented detailed API routes to manage order creation, record updates, retrieval, and status tracking, fully integrated with a MongoDB client database.",
    image: "https://picsum.photos/seed/orderssite/800/600",
    tags: ["React", "Express.js", "Node.js", "MongoDB", "RESTful API"],
    githubUrl: "https://github.com/PavaniKristipati",
    demoUrl: "https://github.com/PavaniKristipati",
    featured: true
  },
  {
    id: "proj-health-mgmt",
    title: "Health Management System",
    subtitle: "Role-Based Medical App",
    description: "Constructed a web-based portal to store health records with separate portals for patients and doctors.",
    detailedDescription: "Developed a robust medical management workspace featuring secure session controls. Built custom diagnostic feeds, medical ledger stores, and customized distinct control flows for registered patients and medical doctors.",
    image: "https://picsum.photos/seed/healthmgmt/800/600",
    tags: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/PavaniKristipati",
    demoUrl: "https://github.com/PavaniKristipati",
    featured: true
  },
  {
    id: "proj-amazon-clone",
    title: "Amazon Clone Page",
    subtitle: "Frontend Showcase Layout",
    description: "A gorgeous, high-fidelity responsive layout replicating the landing index of Amazon's store space.",
    detailedDescription: "Built with production-grade HTML and CSS styling. Showcases custom navigation search bars, submenus, grid content modules, high-contrast imagery, and adaptive layout adjustments representing solid frontend styling practices.",
    image: "https://picsum.photos/seed/amazonclone/800/600",
    tags: ["HTML", "CSS", "UI Design", "Responsive Layout"],
    githubUrl: "https://github.com/PavaniKristipati",
    demoUrl: "https://github.com/PavaniKristipati",
    featured: false
  },
  {
    id: "proj-thrift-books",
    title: "Thrift Books",
    subtitle: "Layout Presentation",
    description: "An elegant retail frontend concept styled for direct paperback thrifting and bookstore navigation.",
    detailedDescription: "Features fluid, minimalist card designs for book lists, responsive category sliders, intuitive filtering layouts, and standard checkout page wireframes built using native web components.",
    image: "https://picsum.photos/seed/thriftbooks/800/600",
    tags: ["HTML", "CSS", "Static Web Design"],
    githubUrl: "https://github.com/PavaniKristipati",
    demoUrl: "https://github.com/PavaniKristipati",
    featured: false
  }
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Malla Reddy Engineering College (MREC), Hyderabad",
    duration: "2023 – 2027",
    result: "CGPA: 9.29 / 10.0",
    details: [
      "Rigorous core modules in Data Structures, Relational DBMS, Web Implementations, and Algorithm Engineering.",
      "Maintained an exceptional academic trajectory with a verified 9.29 CGPA standard.",
      "Actively building full-stack programs and community systems using modern development methodologies."
    ],
    iconType: "college"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "OXFORD VIT JUNIOR COLLEGE",
    duration: "2021 – 2023",
    result: "MARKS: 986 / 1000",
    details: [
      "Focused heavily on Mathematics, Physics, and Chemistry (MPC stream) to support software computational logics.",
      "Completed junior college studies with a top-tier score of 986 out of 1000 marks."
    ],
    iconType: "highschool"
  },
  {
    degree: "Secondary Education",
    institution: "OXFORD HIGH SCHOOL",
    duration: "2020 – 2021",
    result: "MARKS: 600 / 600",
    details: [
      "Completed standard board exams with an outstanding score sheet recording perfect marks.",
      "Achieved full honors for overall logical, academic, and social-science milestones."
    ],
    iconType: "school"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-microsoft-azure",
    title: "Azure AI Fundamentals",
    issuer: "Microsoft Certified",
    date: "2024",
    description: "Validated fundamental concepts of Machine Learning, Deep Learning patterns, and AI systems deployed to Microsoft Azure services.",
    tags: ["Cloud AI", "Azure", "Fundamentals"],
    type: "certification"
  },
  {
    id: "ach-nptel-c",
    title: "C Programming Elite",
    issuer: "NPTEL Online Certification",
    date: "2024",
    description: "Secured credential honors for completing the academic programming syllabus with core metrics on pointers, file I/O, and data structure layouts in C.",
    tags: ["C Language", "Problem Solving"],
    type: "certification"
  },
  {
    id: "ach-skiltimate-intern",
    title: "Skiltimate Junior Developer Internship",
    issuer: "Skiltimate Industry Program",
    date: "2024",
    description: "Served as a Junior Developer, engineering software features, reviewing database APIs, and acquiring enterprise development experience.",
    tags: ["Internship", "Development"],
    type: "certification"
  },
  {
    id: "ach-skiltimate-participate",
    title: "Skiltimate Code Expert (Python, C)",
    issuer: "Skiltimate",
    date: "2023",
    description: "Exhibited strong code patterns and diagnostic excellence across multi-language assessment sprints in Python and C.",
    tags: ["Python", "C Language"],
    type: "certification"
  },
  {
    id: "ach-techaugusta",
    title: "TechAugusta Python & Data Structures",
    issuer: "TechAugusta",
    date: "2024",
    description: "Collaborated on problem statements using advanced data structures and language efficiencies under active mentor validation structures.",
    tags: ["Python", "Data Structures"],
    type: "certification"
  },
  {
    id: "ach-business-english",
    title: "Business English Certification",
    issuer: "Cambridge Assessment / CEC",
    date: "2023",
    description: "Certified with honors, proving exceptional standard workspace writing tools, conversational presentations, and business collaboration styles.",
    tags: ["English", "Professionalism"],
    type: "certification"
  }
];
