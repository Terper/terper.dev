import { Github, Linkedin } from "lucide-react";
import Consilia from "../../public/logos/consilia.svg";
import DeductivelabsLight from "../../public/logos/deductivelabs-light.svg";
import DeductivelabsDark from "../../public/logos/deductivelabs-dark.svg";
import ArcadaLight from "../../public/logos/arcada-light.svg";
import ArcadaDark from "../../public/logos/arcada-dark.svg";
import AYG from "../../public/logos/ayg.svg";

export const skills = [
  {
    category: "Languages",
    items: [
      {
        text: "JavaScript",
        icon: "javascript",
      },
      {
        text: "TypeScript",
        icon: "typescript",
      },
      {
        text: "Java",
        icon: "java",
      },
      {
        text: "C#",
        icon: "csharp",
      },
      {
        text: "C",
        icon: "c",
      },
      {
        text: "Python",
        icon: "python",
      },
      {
        text: "PHP",
        icon: "php",
      },
      {
        text: "Bash",
        icon: "bash",
      },

      {
        text: "HTML",
        icon: "html5",
      },
      {
        text: "CSS",
        icon: "css3",
      },
    ],
  },
  {
    category: "Frameworks",
    items: [
      {
        text: "React",
        icon: "react",
      },
      {
        text: "React Native",
        icon: "react",
      },
      {
        text: "Vue.js",
        icon: "vuejs",
      },
      {
        text: "Tailwind CSS",
        icon: "tailwindcss",
      },
      {
        text: "Flask",
        icon: "flask",
        darkIncompatible: true,
      },
      {
        text: "Express",
        icon: "express",
        darkIncompatible: true,
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        text: "Android Studio",
        icon: "androidstudio",
      },
      {
        text: "XCode",
        icon: "xcode",
      },
      {
        text: "Ansible",
        icon: "ansible",
      },
      {
        text: "Git",
        icon: "git",
      },
      {
        text: "Unity",
        icon: "unity",
      },
      {
        text: "Bun",
        icon: "bun",
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        text: "MySQL",
        icon: "mysql",
      },
      {
        text: "PostgreSQL",
        icon: "postgresql",
      },
      {
        text: "MongoDB",
        icon: "mongodb",
      },
      {
        text: "Firestore",
        icon: "firebase",
      },
    ],
  },
];

export const experience = [
  {
    company: "Consilia Solutions",
    link: "https://consilia.fi",
    logo: Consilia,
    role: "App developer",
    description:
      "Developed a cross-platform app for their SaaS membra to handle attendance for different activities.",
    skills: [
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Android Studio",
      "XCode",
    ],
    from: "May 2022",
    to: "Feb 2023",
  },
  {
    company: "Deductive labs",
    link: "https://deductivelabs.com/",
    logo: DeductivelabsLight,
    logoDark: DeductivelabsDark,
    role: "Internship",
    description:
      "Experimented with various cybersecurity solutions. Wrote ansible scripts to automate setups for different devices and prototyped a website for creating forms.",
    skills: ["React", "TypeScript", "Ansible", "Firestore"],
    from: "Feb 2022",
    to: "Apr 2022",
  },
];

export const ctaButtons = [
  {
    text: "See what I have done",
    to: "/projects",
  },
  {
    text: "Get in touch",
    to: "/contact",
  },
];

export const education = [
  {
    school: "Arcada University of Applied Sciences",
    logo: ArcadaLight,
    logoDark: ArcadaDark,
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    from: "2023",
    to: "Ongoing",
    website: "https://www.arcada.fi",
    programmeWebsite:
      "https://www.arcada.fi/en/study-arcada/bachelors-degree-programmes/information-technology-swedish-programme",
  },
  {
    school: "Åland Vocational School",
    logo: AYG,
    logoInvertLight: true,
    degree: "Vocational degree",
    field: "Datanom",
    from: "2019",
    to: "2022",
    website: "https://www.gymnasium.ax/alands-yrkesgymnasium",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    logo: <Github />,
    url: "https://github.com/Terper",
  },
  {
    name: "LinkedIn",
    logo: <Linkedin />,
    url: "https://www.linkedin.com/in/jann-totterman/",
  },
];
