export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  location: string;
  responsibilities?: string[];
  technologies?: string[];
}

interface WorkExperience {
  company: string;
  subtitle: string;
  functionTitle: string;
  projects: Project[];
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Solidaris",
    subtitle: "Health Insurance and Social Services",
    functionTitle: "UX/UI Designer",
    projects: [
      {
        id: "1",
        title: "ScanSequel",
        description: "Essential workflow application suite for Solidaris employees",
        imageUrl: "/logo_solidaris.png",
        duration: "Sep 2024 - currently",
        location: "Brussels, Belgium",
        responsibilities: [
          "Led the UX/UI design process for the ScanSequel application suite",
          "Conducted user research and usability testing",
          "Collaborated with cross-functional teams to implement design solutions",
        ],
        technologies: ["Figma", "Adobe XD", "React", "TypeScript"],
      },
      {
        id: "2",
        title: "e-Mut",
        description: "Redesign for online self-service portal used by 300.000 users",
        imageUrl: "/logo_solidaris.png",
        duration: "Sep 2023 - Aug 2024",
        location: "Brussels, Belgium",
        responsibilities: [
          "Led the redesign of the e-Mut self-service portal",
          "Conducted user research and usability testing",
          "Implemented responsive design for mobile and desktop users",
        ],
        technologies: ["Figma", "React", "TypeScript", "Responsive Web Design"],
      },
      {
        id: "3",
        title: "DMWorks 2.0",
        description: "A tool for social work services",
        imageUrl: "/logo_solidaris.png",
        duration: "Jan 2020 - Dec 2021",
        location: "Brussels, Belgium",
        responsibilities: [
          "Developed user interface for DMWorks 2.0",
          "Collaborated with social workers to understand their needs",
          "Implemented data visualization features for better insights",
        ],
        technologies: ["Adobe XD", "Vue.js", "D3.js", "Node.js"],
      },
    ],
  },
  {
    company: "Tobania",
    subtitle: "IT Consulting and Services",
    functionTitle: "Functional Analyst",
    projects: [
      {
        id: "4",
        title: "Vlaamse Overheid",
        description: "Wegen en Verkeer",
        imageUrl: "/logo_vlaamse-overheid.png",
        duration: "Jan 2020 - Dec 2021",
        location: "Brussels, Belgium"
      },
      {
        id: "5",
        title: "Attentia",
        description: "DOTS: Personeelsbeheer",
        imageUrl: "/logo_attentia.png",
        duration: "Jan 2020 - Dec 2021",
        location: "Ghent, Belgium"
      },
    ],
  },
  {
    company: "Colruyt",
    subtitle: "Retail and Food Distribution",
    functionTitle: "Junior Solution Analyst",
    projects: [
      {
        id: "6",
        title: "CRU POS Kassasysteem",
        description: "Process design, Self-service cash register OS improvements",
        imageUrl: "/logo_cru.png",
        duration: "Jan 2020 - Dec 2021",
        location: "Halle, Belgium"
      },
    ],
  },
];