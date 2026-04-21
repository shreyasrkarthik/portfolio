export interface CareerNode {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  type: 'work' | 'education';
  description: string[];
  impact: string[];
  skills: string[];
  position: [number, number, number];
  color: string;
  current?: boolean;
}

export const careerData: CareerNode[] = [
  {
    id: "education",
    title: "B.E. Information Science",
    company: "PES University",
    duration: "2013 – 2017",
    location: "Bangalore, India",
    type: "education",
    description: [
      "Bachelor's in Information Science & Engineering",
      "Data Science Intern at InMobi — ads-serving ML pipelines",
      "Android Dev Intern at Quicken — mobile payments feature"
    ],
    impact: ["Graduated with distinction", "2× internship experience"],
    skills: ["Java", "Python", "Android", "ML Basics"],
    position: [-8, 2, 8],
    color: "#F59E0B"
  },
  {
    id: "ittiam",
    title: "Software Engineer",
    company: "Ittiam Systems",
    duration: "2017 – 2019",
    location: "Bangalore, India",
    type: "work",
    description: [
      "Computer Vision & ML platform on Google Cloud",
      "Java Spring Boot microservices + GKE deployments",
      "Built real-time video analytics pipeline"
    ],
    impact: ["+30% processing throughput", "+40% analytics query speed"],
    skills: ["Java", "Spring Boot", "GCP", "Kubernetes", "OpenCV"],
    position: [-4, 1, 4],
    color: "#D97706"
  },
  {
    id: "vymo",
    title: "Senior Member of Technical Staff",
    company: "Vymo",
    duration: "2019 – 2021",
    location: "Bangalore, India",
    type: "work",
    description: [
      "Distributed ML-driven microservices for sales intelligence",
      "Apache Kafka event pipelines at scale",
      "AWS Lambda serverless functions for ML inference",
      "Led ML lead scoring — integrated into 50+ enterprise accounts"
    ],
    impact: ["Tens of millions of daily events", "−20% lead turnaround time"],
    skills: ["Java", "Kafka", "AWS Lambda", "AWS", "Distributed Systems", "ML Ops"],
    position: [2, 1, 2],
    color: "#D97706"
  },
  {
    id: "neu",
    title: "M.S. Computer Science",
    company: "Northeastern University",
    duration: "2021 – 2023",
    location: "Boston, MA",
    type: "education",
    description: [
      "4.0 GPA — full merit scholarship",
      "Teaching Assistant: Human-Computer Interaction + Software Engineering",
      "Research focus: Computer Vision, Mixed Reality, XR Systems"
    ],
    impact: ["4.0 GPA", "TA × 2 courses", "Published research"],
    skills: ["TypeScript", "React", "Research", "Computer Vision", "Unity/XR"],
    position: [-2, 3, -2],
    color: "#7C3AED"
  },
  {
    id: "paypal",
    title: "Senior Software Engineer",
    company: "PayPal",
    duration: "2023 – 2026",
    location: "Austin, TX",
    type: "work",
    description: [
      "High-scale microservices in Go and Python on GCP",
      "Designed event-driven architecture serving global payments",
      "Built real-time analytics and cost optimization platform",
      "Maintained p95 latency under SLA across all services"
    ],
    impact: ["100M+ daily requests", "p95 latency < SLA", "Significant infra cost reduction"],
    skills: ["Go", "Python", "GCP", "Pub/Sub", "BigQuery", "Event-Driven", "Observability"],
    position: [4, 2, -6],
    color: "#D97706"
  },
  {
    id: "salesforce",
    title: "Senior Member of Technical Staff",
    company: "Salesforce",
    duration: "Jan 2026 – Present",
    location: "San Francisco, CA",
    type: "work",
    current: true,
    description: [
      "Cloud-native platform engineering for enterprise scale",
      "Distributed systems infrastructure and reliability",
      "Building the next generation of enterprise software"
    ],
    impact: ["Current role", "Senior IC at hyperscaler"],
    skills: ["Distributed Systems", "Cloud", "Platform Engineering"],
    position: [6, 1, -10],
    color: "#10B981"
  }
];

export interface Skill {
  name: string;
  level: number;
  highlight: boolean;
}

export const skillsData: Record<string, Skill[]> = {
  languages: [
    { name: "Go", level: 95, highlight: true },
    { name: "Python", level: 92, highlight: true },
    { name: "Java", level: 88, highlight: false },
    { name: "TypeScript", level: 80, highlight: false },
    { name: "SQL", level: 85, highlight: false },
  ],
  infrastructure: [
    { name: "GCP", level: 92, highlight: true },
    { name: "AWS", level: 85, highlight: false },
    { name: "Kubernetes", level: 88, highlight: false },
    { name: "Apache Kafka", level: 90, highlight: true },
    { name: "Docker", level: 90, highlight: false },
    { name: "Terraform", level: 75, highlight: false },
  ],
  architecture: [
    { name: "Distributed Systems", level: 95, highlight: true },
    { name: "Event-Driven Arch", level: 93, highlight: true },
    { name: "Microservices", level: 92, highlight: false },
    { name: "System Design", level: 90, highlight: false },
    { name: "Observability", level: 87, highlight: false },
    { name: "SRE / Reliability", level: 85, highlight: false },
  ],
  ml: [
    { name: "ML Ops", level: 82, highlight: true },
    { name: "PyTorch", level: 75, highlight: false },
    { name: "Computer Vision", level: 78, highlight: false },
    { name: "LLM Integration", level: 80, highlight: false },
    { name: "Data Pipelines", level: 85, highlight: false },
  ],
  frontend: [
    { name: "React / Next.js", level: 80, highlight: false },
    { name: "Three.js / WebGL", level: 70, highlight: false },
    { name: "Framer Motion", level: 72, highlight: false },
  ],
};

export const projectsData = [
  {
    id: "testplay",
    title: "TestPlay",
    tagline: "LLMs playing Werewolf against each other",
    description:
      "An experimental AI arena where large language models play Werewolf (social deduction) autonomously. Tests agent theory-of-mind, deception detection, and emergent strategy — a benchmark for real-world reasoning in adversarial settings.",
    tags: ["LLM Agents", "Game Theory", "Python", "Next.js"],
    link: "https://testplay.dev/",
    status: "live",
    featured: true,
    icon: "🎮"
  },
  {
    id: "readrecall",
    title: "ReadRecall",
    tagline: "AI reading companion — no spoilers, ever",
    description:
      "Upload any EPUB or choose a public domain classic and get AI-generated summaries and character breakdowns capped to exactly where you are in the book. OpenAI GPT + Next.js 14 + PostgreSQL.",
    tags: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
    link: "https://readrecall.vercel.app",
    status: "live",
    featured: true,
    icon: "📖"
  },
  {
    id: "just-one-place",
    title: "just-one-place",
    tagline: "One perfect recommendation based on your mood",
    description:
      "Enter your ZIP code, pick a mood, get exactly one curated place recommendation — no endless scrolling. Powered by Foursquare Places API with intelligent mood-to-category mapping.",
    tags: ["React", "TypeScript", "Vite", "Foursquare API"],
    link: "https://github.com/shreyasrkarthik/just-one-place",
    status: "live",
    featured: false,
    icon: "📍"
  },
  {
    id: "aquasync",
    title: "AquaSync",
    tagline: "Water treatment plant monitoring dashboard",
    description:
      "FastAPI backend + React/TypeScript frontend for real-time sensor data monitoring at water treatment facilities. Tracks energy consumption, water quality metrics, and asset health.",
    tags: ["FastAPI", "Python", "React", "TypeScript"],
    link: "https://github.com/shreyasrkarthik/aquasyncsvc",
    status: "live",
    featured: false,
    icon: "💧"
  }
];

export const achievementsData = [
  {
    year: "2026",
    title: "Senior MTS @ Salesforce",
    description: "Joined the enterprise cloud giant as Senior Member of Technical Staff"
  },
  {
    year: "2025",
    title: "200K+ YouTube Subscribers",
    description: "Reached a quarter-million strong community of tech professionals"
  },
  {
    year: "2024",
    title: "TestPlay Launch",
    description: "Launched LLM vs LLM social deduction game platform"
  },
  {
    year: "2023",
    title: "Joined PayPal",
    description: "Built systems handling 100M+ daily transactions"
  },
  {
    year: "2023",
    title: "M.S. CS Completed",
    description: "Graduated with 4.0 GPA from Northeastern University"
  },
];
