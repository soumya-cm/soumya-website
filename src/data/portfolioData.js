// Centralized Portfolio Data for Soumya

export const portfolioData = {
  personalDetails: {
    name: "Soumya",
    fullName: "SOUMYA",
    title: "B.Tech CSE (AI & Data Science) Student",
    university: "REVA University, Bangalore",
    tagline: "B.Tech CSE (AI & Data Science) Student @ REVA University",
    intro: "Passionate about technology, programming, and building real-world solutions.",
    email: "soumya.student@example.com", // Placeholder Email
    phone: "+91 98765 43210", // Placeholder Phone
    github: "https://github.com", // Placeholder Github Link
    linkedin: "https://linkedin.com", // Placeholder LinkedIn Link
  },
  aboutMe: {
    paragraphs: [
      "I am Soumya, a B.Tech student at REVA University, Bangalore, pursuing Computer Science and Engineering with a specialization in Artificial Intelligence and Data Science. I am passionate about technology, programming, and learning new skills.",
      "I enjoy exploring new ideas, solving problems, and applying my knowledge to practical projects. I am always interested in gaining new experiences that help me improve both my technical and creative abilities.",
      "I have participated in Hyperthon, a hackathon organized by DevSpirit at my college, where I gained experience in teamwork, creativity, problem-solving, and developing ideas within a limited time."
    ],
    education: {
      degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence & Data Science)",
      institution: "REVA University",
      location: "Bangalore, India",
      duration: "Present"
    }
  },
  skills: [
    {
      category: "Programming",
      items: [
        { name: "C Language", iconName: "SiC", color: "text-blue-500" },
        { name: "Python", iconName: "FaPython", color: "text-yellow-500" }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", iconName: "SiMysql", color: "text-blue-400" }
      ]
    },
    {
      category: "Web Technologies",
      items: [
        { name: "HTML5", iconName: "FaHtml5", color: "text-orange-500" },
        { name: "CSS3", iconName: "FaCss3Alt", color: "text-blue-600" }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "GitHub", iconName: "FaGithub", color: "text-purple-500" }
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Problem Solving", iconName: "FaLightbulb", color: "text-yellow-400" },
        { name: "Teamwork & Collaboration", iconName: "FaUsers", color: "text-teal-400" }
      ]
    }
  ],
  projects: [
    {
      id: "graphics-editor",
      title: "2D Graphics Editor",
      description: "A C-based mini project that allows users to create and work with basic graphical shapes such as lines, circles, rectangles, and triangles. This project helped me strengthen my understanding of C programming, functions, logical thinking, and problem-solving.",
      techStack: ["C", "Graphics.h", "Algorithms"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: "smartwatch-prediction",
      title: "Smartwatch for Early Disease Prediction",
      description: "An Innovation & Entrepreneurship project focused on developing a smart wearable device for the early detection and prediction of health-related problems. The project explores the use of health-monitoring features to collect relevant data and provide early alerts. It helped me understand innovation, product development, teamwork, and solving real-world problems using technology.",
      techStack: ["IoT Concept", "Wearables", "Health Monitoring", "Innovation & Entrepreneurship"],
      githubLink: "#",
      demoLink: "#"
    }
  ],
  certifications: [
    {
      id: "cert-hyperthon",
      title: "Hyperthon Hackathon Certificate",
      issuer: "DevSpirit @ REVA University",
      description: "Participated in the hackathon organized by DevSpirit at REVA University. Gained experience in teamwork, product ideation under strict timelines, and pitching.",
      type: "hackathon",
      iconName: "FaTrophy",
      date: "Hackathon Participant"
    },
    {
      id: "cert-ibm",
      title: "IBM Python Certificate",
      issuer: "IBM",
      description: "Successfully completed a Python course offered by IBM, gaining solid foundations in object-oriented programming, data structures, and script development.",
      type: "course",
      iconName: "FaCertificate",
      date: "Course Certificate"
    },
    {
      id: "cert-systemdesign",
      title: "Instagram System Design Course",
      issuer: "Concept to Reality Training",
      description: "Successfully completed the course and received a certificate. Learnt advanced architecture layouts, database scaling, API load-balancing, and caching mechanisms.",
      type: "course",
      iconName: "FaCode",
      date: "Course Certificate"
    }
  ],
  careerGoal: {
    quote: "My goal is to continuously develop my programming and technical skills, gain practical experience through projects and hackathons, and learn emerging technologies in the field of Artificial Intelligence and Data Science. I aspire to become a skilled technology professional and contribute to innovative solutions that solve real-world problems."
  }
};
