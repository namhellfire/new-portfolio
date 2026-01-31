export const personalInfo = {
  name: "Nguyen Hoang Nam",
  title: "Senior Frontend Engineer",
  email: "nguyennamuit@gmail.com",
  phone: "0987872902",
  address: "Opal Boulevard apartment, 10 Kha Van Can, Di An, Ho Chi Minh",
  linkedin: "https://www.linkedin.com/in/nguyen-nam-6a8b68102",
  dateOfBirth: "February 29, 1992",
  yearsOfExperience: 7,
};

export const professionalProfile = `Innovative Senior Frontend Engineer with over 7 years of professional experience specializing in building scalable, high-performance web applications using React, Next.js, and TypeScript. I have a proven track record of leading end-to-end frontend architecture for complex systems, including the "Max Bank" digital banking platform and large-scale e-commerce solutions at Tiki. I am an expert in crafting sophisticated, user-centric interfaces with modern UI frameworks like Tailwind CSS and shadcn/ui. I am committed to modernizing development workflows by leveraging AI tools to maximize productivity and deliver cutting-edge products that exceed business expectations.`;

export const technicalSkills = {
  "Frontend Core": [
    { name: "Next.js", level: 95 },
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML5/CSS3", level: 90 },
  ],
  "UI Frameworks": [
    { name: "Tailwind CSS", level: 95 },
    { name: "shadcn/ui", level: 90 },
    { name: "Material UI", level: 85 },
    { name: "Ant Design", level: 90 },
    { name: "Headless UI", level: 85 },
  ],
  "Data Visualization": [
    { name: "Apex Chart", level: 85 },
    { name: "Google Chart", level: 80 },
  ],
  "AI & Productivity": [
    { name: "Cursor", level: 90 },
    { name: "GitHub Copilot", level: 90 },
    { name: "Claude 3.5", level: 85 },
    { name: "Gemini", level: 85 },
  ],
  "Backend & Mobile": [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 80 },
    { name: "React Native", level: 75 },
    { name: "Android SDK", level: 70 },
  ],
  "Databases & Cloud": [
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 80 },
    { name: "Amazon S3/EC2", level: 75 },
  ],
};

export const experiences = [
  {
    id: 1,
    company: "VIB (Vietnam International Bank)",
    role: "Senior Software Engineer",
    period: "January 2024 – Present",
    description: [
      'Digital Banking "Max Bank": Led the architectural design and frontend development for the "Max Bank" application from scratch, ensuring a high-performance digital banking experience.',
      "Admin & Management Portals: Engineered a comprehensive Admin Portal to manage customer deals and application configurations.",
      "Sales & Support Platforms: Developed a dedicated Sales Web for product distribution and a Customer Support platform to streamline service interactions.",
      "AI Integration: Integrated Cursor and GitHub Copilot into the daily workflow to refactor complex logic and accelerate the delivery of portals.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AI Tools",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 2,
    company: "Tiki Corporation",
    role: "Senior Software Engineer",
    period: "October 2018 – May 2023",
    description: [
      "Marketing Solution Portal: Developed the Front-end for managing CPAS tracking and the banner booking system on the Tiki site.",
      "Affiliate System: Built the Front-end project Affiliate System for Tiki.",
      "Customer Data Platform (CDP): Engineered a system that presents a unified, persistent, and updated view of individual customers based on multi-channel data.",
    ],
    technologies: [
      "React",
      "Redux",
      "Redux-Saga",
      "Ant Design",
      "TypeScript",
      "Apex Chart",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    company: "Simba Corporation",
    role: "Freelancer",
    period: "August 2019 – November 2023",
    description: [
      "Simba E-shop: Developed the Back-end using Node.js, Express, and MySQL; built order systems to calculate delivery dates and distances.",
      "Simba Local App: Developed a warehouse management application to check products using React Native, Redux, and Redux-Saga featuring QR code and Barcode scanning.",
    ],
    technologies: ["Node.js", "Express", "MySQL", "React Native", "Linux"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    company: "Terralogic Inc., Vietnam",
    role: "Software Engineer",
    period: "July 2016 – September 2018",
    description: [
      "Project SHenna: Built Web, Mobile, and Backend using React, React JS, React Native, and Node.js; integrated PayPal, Amazon S3, and Social APIs.",
      "Project VNC OTT (Android Developer): Researched telecom/VoIP protocols and developed the VNC interface and continuity server.",
      "Frankly Project (Roku Developer): Deployed applications on Roku TV using Brightscript.",
    ],
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "Android",
      "Roku/Brightscript",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 5,
    company: "Wigo Company",
    role: "Software Engineer",
    period: "October 2015 – April 2016",
    description: [
      "Wigo Analytic: Developed hybrid and native applications on Android and iOS for data analysis and visualization using Java, JavaScript, and Google Charts.",
    ],
    technologies: ["Java", "JavaScript", "Google Charts", "Android", "iOS"],
    color: "from-pink-500 to-rose-500",
  },
];

export const education = {
  institution: "University of Information Technology (UIT) - VNUHCM",
  degree: "Engineer of Network and Communication",
  period: "July 2010 – December 2015",
};

export const languages = ["English"];
export const hobbies = ["Music", "Travel"];

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
