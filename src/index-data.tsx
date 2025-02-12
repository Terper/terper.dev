import { Github, Linkedin } from "lucide-react";

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
    logo: (
      <svg
        preserveAspectRatio="xMidYMid meet"
        data-bbox="75.1 80.923 499.9 318.177"
        viewBox="75.1 80.923 499.9 318.177"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
        aria-label=""
        className="h-16"
      >
        <g>
          <path
            d="M435.3 161.6c-29.1 36.8-56.2 54.3-83 65.4-20.2 6.8-55.5 9.4-85.9-23.9-27.9-30.6-38.2-35.9-72.5-36.2-10.6-.1-20.3-3.9-28.7-10.3-3.1-2.3-25.6-18.6-18.3-23.1 7.4-4.4 12.9-1.1 17.6 2.2 2.5 1.8 5.8 2.2 8.7.9 14-6.1 42.8-15.5 69.3 1 14.6 9.1 39.8 20.3 56.8 11.8 4.9-2.5 9.3-6 13.7-9.3 8.3-6.2 17.7-12.2 27.7-15.3 5.8-1.7 12.1-2.2 17.7-.1 4.2 1.5 4.8 3.7 1.1 6.4-1.7 1.2-6.9 6.6-8.9 9.8-2 3.1-3 6.9-2.6 10.6 1.5 12 16 13.7 25.6 13.3 1.5-.1 2.9-.2 4.4-.4 11.3-1.4 18.7-3.1 28.5-8.8 5.5-3.2 10.8-6.7 15.9-10.5 4.5-3.4 5.1-8.3 4.5-13.6-.6-5.2-2.2-10.3-4.1-15.2-5.9-15.4-1.8-27 .1-33 .7-2.4 3.9-3.3 5.6-1.2.8 1 1.1 2.4 1.3 3.8 3 15.3 18.3 20.2 23 34.5.1.4.3.8.6 1.2.5.5 1.3.6 2.1.6 12.9.7 17.9 12.7 28.5 17.8 5.8 2.8 12.3 4 18.6 3.5.8-.1 1.7-.2 2.5.2 4.1 1.8-4.4 8.8-6 9.8-4.1 2.6-8.9 4-13.7 4.8-9.5 1.7-19.5 1.3-29-.1l-8.8-1.3c-4.6-.9-9.4 1-12.3 4.7m-220.7 52.7c-.6.3-1.3.6-1.5 1.2-.2.7.2 1.4.5 1.9 6.9 11.1 16.2 20.4 26.1 28.9 7.6 6.6 16.7 12 26.3 14.9 5.7 1.7 11.8 2.5 17.7 1.9 2.2-.2 10.2-.8 10-4.4-.3-4-10.4-6.2-13.3-7.3-4.4-1.8-8.9-3.7-12.5-7-4-3.7-6.4-8.8-9.1-13.6-4.7-8.2-11.6-13.7-20.7-16.6-5.7-1.8-12.1-2.6-18.1-1.5-1.8.4-3.6.9-5.4 1.6m-54.1-34.9c10.8 1.3 18.9.2 29.1-3.7 1.5-.6 1-2.8-.6-2.7h-2.2c-10.3.1-17.9-1.8-27.2-6.4-2.7-1.3-5.2-3.4-8.3-3.8-2.7-.3-5.4 1.4-6.7 3.7-1.1 2-1.3 4.6-.2 6.6s3.2 3.2 5.4 4c.4.1.8.2 1.1.4 3.2.9 6.4 1.5 9.6 1.9m163.9 145c-2.6-2.4-5.7-4.3-9.2-5.4-3.5-1.2-7.2-1.7-10.9-1.7-6.1 0-11.5 1.3-16.2 3.9-4.1 2.3-7.2 5.3-9.2 8.9v-9.2c0-.9-.7-1.6-1.6-1.6h-12.7c-.9 0-1.6.7-1.6 1.6V398h15.8v-40.5c0-4.4.5-8.3 1.6-11.5 1.1-3.2 2.6-5.8 4.5-7.9 1.9-2 4.1-3.6 6.7-4.5 2.5-1 5.3-1.4 8.3-1.4 2.2 0 4.4.3 6.5 1 2 .7 3.9 1.8 5.4 3.3 1.6 1.5 2.9 3.5 3.8 6 1 2.5 1.4 5.5 1.4 9.1V398h16v-50.5c0-5.2-.8-9.7-2.3-13.5-1.6-4-3.7-7.2-6.3-9.6m-87.9 44.4c1.2-3.2 1.7-6.8 1.7-10.6s-.6-7.4-1.7-10.6c-1.2-3.2-2.8-6-4.9-8.2-2.1-2.3-4.7-4.1-7.7-5.4-3-1.3-6.5-2-10.3-2-3.8 0-7.3.7-10.3 2-3 1.3-5.7 3.1-7.7 5.4-2.1 2.3-3.7 5-4.9 8.2-1.2 3.2-1.7 6.8-1.7 10.6s.6 7.4 1.7 10.6c1.2 3.2 2.8 6 4.9 8.2 2.1 2.3 4.7 4.1 7.7 5.4 3 1.3 6.5 2 10.3 2 3.8 0 7.3-.7 10.3-2 3-1.3 5.6-3.1 7.7-5.4 2.1-2.2 3.8-5 4.9-8.2m15.2-26.5c2.1 4.9 3.2 10.3 3.2 15.9 0 5.7-1.1 11-3.2 16-2.1 4.9-5.1 9.3-8.8 13-3.7 3.6-8.1 6.6-13.1 8.7-5 2.1-10.5 3.2-16.2 3.2-5.8 0-11.2-1.1-16.2-3.2s-9.4-5-13.1-8.7c-3.7-3.6-6.7-8-8.8-13-2.1-5-3.2-10.3-3.2-16s1.1-11 3.2-15.9 5.1-9.3 8.8-13c3.7-3.7 8.1-6.7 13.1-8.8 5-2.1 10.5-3.2 16.2-3.2 5.8 0 11.2 1.1 16.2 3.2s9.4 5.1 13.1 8.8c3.8 3.8 6.7 8.1 8.8 13m144.5 15.9c-2-1.8-4.5-3.2-7.3-4.3-2.8-1.1-5.8-2-8.9-2.8-1.6-.3-3.6-.7-5.8-1.1-2.2-.4-4.3-1.1-6.3-1.9-1.9-.8-3.6-1.9-5-3.3-1.4-1.3-2-3-2-5.1 0-2.6 1.2-4.6 3.5-5.9 2.4-1.4 5.4-2.1 8.7-2.1 3.6 0 6.6.7 9 2.1 2.2 1.2 4.1 2.8 5.6 4.6.6.6 1.5.7 2.1.2l9.8-7.4c.7-.5.8-1.5.4-2.2-2.8-4.2-6.5-7.2-11-9.1-8.1-3.3-17.2-3.9-25.9-1.5-3.6 1-6.8 2.5-9.6 4.5s-5.1 4.5-6.8 7.5c-1.7 3-2.6 6.6-2.6 10.7 0 3.7.7 6.9 2 9.5 1.3 2.6 3.1 4.7 5.3 6.3 2.2 1.6 4.7 3 7.6 4 2.8 1 5.8 1.9 9 2.6 1.6.3 3.5.7 5.6 1.2 2.1.5 4.1 1.1 5.9 1.9 1.8.8 3.4 1.8 4.7 3.2 1.2 1.3 1.9 3 1.9 5 0 1.5-.4 2.8-1.3 4-.9 1.2-2 2.1-3.4 2.9-1.4.8-3 1.4-4.9 1.7-1.8.4-3.7.6-5.5.6-4.1 0-7.6-.9-10.4-2.7-2.6-1.6-5-3.5-7.2-5.6-.6-.6-1.5-.6-2.1-.1l-9.5 7.8c-.7.5-.8 1.6-.3 2.2 3.7 4.8 7.9 8.2 12.5 10 4.9 2 10.6 3 17 3 3.8 0 7.6-.4 11.4-1.3 3.8-.9 7.2-2.3 10.1-4.3 3-2 5.4-4.6 7.3-7.7 1.9-3.2 2.8-7 2.8-11.4 0-3.6-.6-6.7-1.8-9.3-.9-2.5-2.6-4.7-4.6-6.4m31.3-39.8h-13.6c-.9 0-1.6.7-1.6 1.6v77.8h16.8V320c0-.9-.7-1.6-1.6-1.6m33.1-30.6H447c-.9 0-1.6.7-1.6 1.6v108.4h16.8V289.4c0-.8-.8-1.6-1.6-1.6m33 30.6H480c-.9 0-1.6.7-1.6 1.6v77.8h16.8V320c0-.9-.7-1.6-1.6-1.6m64.6 45.4h-19.9c-10.9 0-16.1 3.4-16.1 10.4 0 3.4 1.3 6 3.9 7.9 2.7 2 6.6 3 11.5 3 5 0 9.4-1.1 12.9-3.3 4.8-3 7.7-8.5 7.7-14.5v-3.5zm7.9-37.9c5.9 5.5 8.9 13.6 8.9 24.3v47.6h-16.1v-7.4c-2.1 2.2-4.8 4-7.8 5.3-4.5 1.9-9.8 2.9-15.8 2.9-8.9 0-16.1-2.2-21.5-6.5-5.5-4.4-8.3-10.3-8.3-17.5 0-7.2 2.7-13 7.9-17.4 5.2-4.3 13.3-6.5 24.3-6.5h20.5v-1.3c0-5.5-1.6-9.8-4.7-12.6-3.2-2.9-8-4.4-14.3-4.4-4.3 0-8.6.7-12.8 2.2-3.3 1.1-6.2 2.6-8.7 4.4-.6.4-1.4.6-2.1.4-.7-.1-1.3-.6-1.6-1.2l-4.8-8.2c-.7-1.2-.4-2.7.7-3.5 3.8-2.7 8.2-4.9 13.1-6.4 5.6-1.7 11.6-2.6 17.9-2.6 10.8.2 19.3 3 25.2 8.4m-145.4-38.1c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-4-8.9-8.9-8.9m66.1 0c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-4-8.9-8.9-8.9M111 313.5c5.8-3.2 12.4-4.9 19.6-4.9 10.5 0 19.5 3.6 26.7 10.8.6.6 1.6.6 2.2 0l9.3-8.9c.6-.6.7-1.6.1-2.3-4.6-5-10.2-8.8-16.6-11.4-6.7-2.7-14.2-4.1-22.2-4.1-10.3 0-19.8 2.3-28.1 6.9-8.4 4.6-15 11-19.8 19-4.7 8-7.1 17.2-7.1 27.2s2.4 19.2 7.1 27.2c4.7 8 11.4 14.4 19.7 19 8.3 4.6 17.7 6.9 28.1 6.9 8 0 15.5-1.4 22.3-4.2 6.4-2.6 12-6.5 16.6-11.4.6-.6.6-1.7-.1-2.3l-9.3-8.9c-.6-.6-1.6-.6-2.2 0-7.3 7.3-16.2 10.9-26.7 10.9-7.2 0-13.8-1.6-19.6-4.9-5.8-3.2-10.4-7.7-13.7-13.4-3.3-5.7-4.9-12.1-4.9-19.1 0-7 1.7-13.4 4.9-19.1 3.3-5.3 7.9-9.8 13.7-13"
            fill="#007266"
            data-color="1"
          ></path>
        </g>
      </svg>
    ),
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
    logo: (
      <img
        src="https://deductivelabs.com/wp-content/themes/deductivelabs/images/logo-black.svg"
        className="h-16"
      ></img>
    ),
    logoDark: (
      <img
        src="https://deductivelabs.com/wp-content/themes/deductivelabs/images/logo-white.svg"
        className="h-16"
      ></img>
    ),
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
    logo: (
      <img
        src="https://www.arcada.fi/themes/custom/arcada/img/logo.svg"
        className="h-16"
      ></img>
    ),
    logoDark: (
      <img
        src="https://www.arcada.fi/themes/custom/arcada/img/logo-negative.svg"
        className="h-16"
      ></img>
    ),
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
    logo: (
      <img
        src="https://www.gymnasium.ax/sites/default/files/images/page_section_logo/logo_ayg_white_0.svg"
        className="h-16 invert selection:invert-0"
      ></img>
    ),
    logoDark: (
      <img
        src="https://www.gymnasium.ax/sites/default/files/images/page_section_logo/logo_ayg_white_0.svg"
        className="h-16"
      ></img>
    ),
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
