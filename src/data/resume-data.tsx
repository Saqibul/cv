import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";
import { LeetcodeIcon } from "@/components/icons/LeetcodeIcon";

export const RESUME_DATA = {
  name: "Mohammad Saqibul Alam",
  initials: "MSA",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka",
  about:
    "Backend engineer with 2 years of experience with a passion for creating maintainable and efficient code",
  summary:
    "I started my backend engineering journey with C# working on one of the biggest E-Commerce websites in Dhaka. Then I slowly started to delve into data engineering, devops, data science, all while developing my expertise building backend applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "sakibul.alam001@gmail.com",
    tel: "+8801689682885",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Saqibull",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saqibul-alam-5874041a9/",
        icon: LinkedInIcon,
      },
      {
        name: "Leetcode",
        url: "https://leetcode.com/user9552Kx/",
        icon: LeetcodeIcon,
      },
    ],
  },
  education: [
    {
      school: "Brac University",
      degree: "BSc in Computer Science",
      start: "May 2017",
      end: "June 2021",
    },
  ],
  work: [
    {
      company: "Astha IT",
      link: "https://www.asthait.com/",
      badges: [],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "March 2022",
      end: "Current",
      description:
        "Handled client's requirements and implemented new features for one of the largest E-Commerce platforms, including and not limited to, implementing a ticketing system, working with microservice communication using Kafka to send emails and managing bulk ERP Sync. Moved on to working on an esports coaching service as a team lead, backend engineer, data engineer and a mentor, all while working with foreign clients to transform their vision into a workable and sellable product.",
    },
    {
      company: "Astha IT",
      link: "https://www.asthait.com/",
      badges: ["Internship"],
      title: "Software Engineer - Intern",
      logo: ClevertechLogo,
      start: "November 2021",
      end: "February 2022",
      description:
        "Gathered practical experience in a 3 month long boot camp that covered a range of topics from the basics of HTML and CSS to advanced .NET Core, design patterns and microservices. The courses were taken by industry experts who exceled at their jobs.",
    },
    {
      company: "Brac University",
      link: "https://www.bracu.ac.bd/",
      badges: [],
      title: "Contractual Lecturer",
      logo: JojoMobileLogo,
      start: "October 2021",
      end: "May 2022",
      description:
        "Conducted theory and labs for advanced 300 - 400 level courses that include Compiler Design, Computer Networks, Microprocessors and Database design.",
    },
    {
      company: "Brac University",
      link: "https://www.bracu.ac.bd/",
      badges: [],
      title: "Student Tutor",
      logo: NSNLogo,
      start: "January 2020",
      end: "June 2021",
      description: "Assisted students with core concepts of data structures and implementation of algorithms.",
    },
  ],
  skills: [
    "C#",
    "Python",
    "Sql",
    "AWS",
    "Communication",
    "Leadership",
    "Software infrastructure",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
