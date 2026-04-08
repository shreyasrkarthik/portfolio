export interface CareerNode {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  position: [number, number, number];
  color: string;
}

export const careerData: CareerNode[] = [
  {
    id: "bangalore",
    title: "Education & Internships",
    company: "PES University / InMobi / Quicken",
    duration: "2013 - 2017",
    location: "Bangalore, India",
    description: [
      "B.E. in Information Science",
      "Data Science Intern at InMobi",
      "Android Dev Intern at Quicken"
    ],
    skills: ["Java", "Android", "Python", "ML"],
    position: [-8, 2, 8],
    color: "#FF6B35"
  },
  {
    id: "ittiam",
    title: "Software Engineer",
    company: "Ittiam Systems",
    duration: "2017 - 2019",
    location: "Bangalore, India",
    description: [
      "Computer Vision & ML on GCP",
      "Improved processing throughput by 30%",
      "Accelerated analytics queries by 40%"
    ],
    skills: ["Java", "Spring Boot", "GCP", "Kubernetes"],
    position: [-4, 1, 4],
    color: "#00D4FF"
  },
  {
    id: "vymo",
    title: "Senior MTS",
    company: "Vymo",
    duration: "2019 - 2021",
    location: "Bangalore, India",
    description: [
      "Scaled ML-driven microservices",
      "Handled tens of millions of daily events",
      "Reduced lead turnaround time by 20%"
    ],
    skills: ["Java", "Kafka", "AWS Lambda", "Distributed Systems"],
    position: [2, 1, 2],
    color: "#00D4FF"
  },
  {
    id: "neu",
    title: "MS Computer Science",
    company: "Northeastern University",
    duration: "2021 - 2023",
    location: "Boston, MA",
    description: [
      "4.0 GPA",
      "Teaching Assistant for HCI & SWE",
      "Focus: Computer Vision, Mixed Reality"
    ],
    skills: ["TypeScript", "React", "Research"],
    position: [-2, 3, -2],
    color: "#7B61FF"
  },
  {
    id: "paypal",
    title: "Senior Software Engineer",
    company: "PayPal",
    duration: "2023 - 2026",
    location: "Austin, TX",
    description: [
      "High-scale microservices (Go, Python)",
      "Hundreds of millions of daily requests",
      "p95 latency under SLA"
    ],
    skills: ["Go", "Python", "GCP", "Event-Driven Arch"],
    position: [4, 2, -6],
    color: "#00D4FF"
  },
  {
    id: "salesforce",
    title: "Senior MTS",
    company: "Salesforce",
    duration: "Jan 2026 - Present",
    location: "San Francisco, CA",
    description: [
      "Cloud & Distributed Systems",
      "Building the future of enterprise software"
    ],
    skills: ["Distributed Systems", "Cloud"],
    position: [6, 1, -10],
    color: "#00D4FF" // Active node color potentially handled in component
  }
];

export interface Skill {
  name: string;
  category: string;
  position: [number, number, number];
}

export const skillsData: Skill[] = [
  // Languages
  { name: "Go", category: "Language", position: [5, 3, -5] },
  { name: "Python", category: "Language", position: [3, 3, -7] },
  { name: "Java", category: "Language", position: [-3, 2, 3] },
  { name: "TypeScript", category: "Language", position: [-1, 4, -1] },
  
  // Infrastructure
  { name: "GCP", category: "Infrastructure", position: [4, 0, -5] },
  { name: "AWS", category: "Infrastructure", position: [2, 0, 1] },
  { name: "Kubernetes", category: "Infrastructure", position: [-3, 0, 4] },
  { name: "Kafka", category: "Infrastructure", position: [1, 0, 2] },

  // ML/Data
  { name: "PyTorch", category: "ML", position: [-5, 0, 5] },
  { name: "Pandas", category: "ML", position: [-4, -1, 4] },
  
  // Frontend
  { name: "React", category: "Frontend", position: [-1, 2, -3] },
  { name: "Next.js", category: "Frontend", position: [-2, 2, -1] }
];

export const projectsData = [
  {
    title: "YouTube Channel",
    description: "Content creation & community building. 200k+ subscribers.",
    tags: ["Education", "Video", "Community"],
    link: "https://youtube.com/@shreyasrk"
  },
  {
    title: "SmrtGov",
    description: "Civic tech web platform for citizen complaints.",
    tags: ["PHP", "Bootstrap", "Civic Tech"],
    link: "#"
  },
  {
    title: "TestPlay",
    description: "LLMs playing Werewolf against each other.",
    tags: ["LLM", "AI Agents", "Game Theory"],
    link: "https://testplay.dev/"
  },
  {
    title: "Gender Classification",
    description: "CV/ML research project using facial features.",
    tags: ["Python", "OpenCV", "Research"],
    link: "#"
  }
];
