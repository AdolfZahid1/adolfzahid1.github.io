import {
  BiteLVLogo,
  AdikForce, // Add the missing import
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kirils Obodnikovs",
  initials: "KO",
  personalWebsiteUrl: "",
  location: "Riga, Latvia",
  locationLink: "https://maps.app.goo.gl/kFQiZuqCLC8yaBt48",
  about:
    "A motivated and enthusiastic student pursuing a degree in computer science, seeking to gain practical experience in software development",
  summary:
    "As a motivated and enthusiastic student I have strong skills in programming, problem-solving, and teamwork, and I am eager to learn from the experts in the field. Took 2nd place in Xtreme programming Marathon 2023.  ",
  avatarUrl: "https://avatars.githubusercontent.com/u/97355345?v=4",
  contact: {
    email: "kriobod@gmail.com",
    tel: "+37122838530",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AdolfZahid1",
        icon: GitHubIcon,
      }
    ],
  },
  education: [
    {
      school: "Riga Technical College",
      degree: "Programming Technician",
      start: "2021",
      end: "2025",
    },
    {
      school: "Progmeistars",
      degree: "Programming courses",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Bite Latvija",
      link: "https://bite.lv",
      badges: ["Internship"],
      title: "Intern Full-Stack Developer",
      logo: BiteLVLogo,
      start: "2023",
      end: "2024",
      description:
        "Took internship for 2.5 months. Implemented new features, fixed old features, worked on optimization and UX improvement.Technologies: Ruby, Rails, PostgreSQL, Stimulus, Turbo, Bootstrap, FontAwesome",
    },
  ],
  skills: [
    "Ruby",
    "TypeScript",
    "Linux",
    "PostgreSQL",
    "Ruby on Rails",
    "Stimulus",
    "Turbo",
    "Bootstrap",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "SQF",
    "Windows",
  ],
  projects: [
    {
      title: "Adik force",
      techStack: [
        "Side Project",
        "SQF",
        "Modding",
      ],
      description: "A simple mod for Arma 3 that adds more features to Jedi from Star Wars to the game",
      logo: AdikForce,
      link: {
        label: "github.com",
        href: "https://github.com/AdolfZahid1/adik_force",
      },
    },
    {
      title: "Gaussmethod",
      techStack: ["Side Project", "C++"],
      description:
        "Program written in C++ that solves system of linear equations using Gauss method",
      link: {
        label: "github.com",
        href: "https://github.com/AdolfZahid1/gaussmethod",
      },
    },
    {
      title: "Tetris",
      techStack: ["Side Project", "C++", "C"],
      description:
        "Unfinished Tetris game written in C++ and C, implementing OOP principles",
      link: {
        label: "github.com",
        href: "https://github.com/AdolfZahid1/Tetris",
      },
    },
    {
      title: "visualapp",
      techStack: ["Side Project", "Python", "Tkinter"],
      description:
        "A simple visual app that uses tkinter for file upload in the cloud and internet speed test",
      link: {
        label: "github.com",
        href: "https://github.com/AdolfZahid1/visualapp",
      },
    },
  ],
} as const;
