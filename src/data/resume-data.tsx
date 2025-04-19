import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Yehezkiel Gunawan",
  initials: "YG",
  location: "Bogor, West Java, Indonesia",
  locationLink: "https://maps.app.goo.gl/i5dgoGNxPuQdBh73A",
  about: "Mainly work in React & Typescript Ecosystem as a web engineer.",
  summary: (
    <>
      Web developer specializing in high-performance React applications and
      scalable Node.js services, with hands-on experience in deployment
      pipelines and infrastructure. Experienced in technical architecture
      design, real-time collaboration systems, and remote/hybrid team
      leadership.
    </>
  ),
  avatarUrl: "/profile.jpg",
  personalWebsiteUrl: "https://yehezgun.com",
  contact: {
    email: "yehezkiel.gunawan28@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yehezkielgunawan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yehezkiel-gunawan-595128138/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/yehezgun",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Multimedia Nusantara University",
      degree: "Bachelor's Degree in Informatics",
      start: "2016",
      end: "2020",
    },
    {
      school: "Binus University",
      degree: "Master's Degree in Information System Management",
      start: "2022",
      end: "2024",
    },
  ],
  work: [
    {
      company: "OLX (Member of Astra)",
      link: "https://olx.co.id",
      badges: ["React", "Next.js", "Node.js", "Express.js"],
      title: "Frontend Developer (PWA)",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Mainly involved in the Platform team, which is responsible for
          building and maintaining the core platform of OLX.
          <ul className="list-inside list-disc">
            <li>Improved the build time of its web app by 50%.</li>
            <li>Increase the coverage of unit tests to 70%.</li>
            <li>
              Increased the traceability of the web app by integrating the web
              app to Google Analytics and Datadog.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Katalis.ai",
      link: "https://katalis.ai",
      badges: ["React", "Next.js", "Node.js", "Typescript"],
      title: "Frontend Engineer (Founding Engineer)",
      logo: ConsultlyLogo,
      start: "Feb 2024",
      end: "Aug 2024",
      description: (
        <>
          Involved as one of the founding engineers in building a platform for
          AI-powered for copywriting and content generation for ecommerce
          businesses.
          <ul className="list-inside list-disc">
            <li>
              Improved the e-commerce seller productivity by 25% through the AI
              automation tool feature.
            </li>
            <li>
              Indirectly helped the company to secure a $150,000 seed investment
              round from Iterative.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Bobobox",
      link: "https://bobobox.com",
      badges: ["React", "Next.js", "Node.js", "Typescript"],
      title: "Frontend Engineer",
      logo: ConsultlyLogo,
      start: "2022",
      end: "2024",
      description: (
        <>
          Involved as one of frontend engineer team member in building a
          platform for order management system for Bobobox`s hotel chain.
          <ul className="list-inside list-disc">
            <li>
              Successfully revamped the newest Bobobox main web app which has
              more than 10.000 weekly access.
            </li>
            <li>
              Achieved 10% improvement in user retention rate through revamping
              the user experience of the web app.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "MacroAd",
      link: "https://www.linkedin.com/company/macroad-surge/",
      badges: ["Angular", "Ionic", "Javascript", "Node.js"],
      title: "Frontend Engineer",
      logo: ConsultlyLogo,
      start: "2020",
      end: "2021",
      description: (
        <>
          Mainly involved in building KAI Access App for PT. KAI as the client.
          <ul className="list-inside list-disc">
            <li>
              Developed the first version of the KAI Access App made using Ionic
              and Angular.
            </li>
            <li>Achieved 10 million downloads on Playstore.</li>
          </ul>
        </>
      ),
    },
    {
      company: "JULO",
      link: "https://julo.co.id",
      badges: ["Robot Framework", "Python"],
      title: "QA Engineer Intern",
      logo: ConsultlyLogo,
      start: "Jun 2019",
      end: "Sept 2019",
      description: (
        <>
          Mainly involved in building the automation testing framework using
          Robot Framework.
          <ul className="list-inside list-disc">
            <li>
              Optimized the repetitive end-to-end testing process by 50% through
              the automation testing development.
            </li>
            <li>
              Concurrently worked as a Support Engineer to find and forward the
              bugs or issues to the developer.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "GraphQL",
    "Git",
    "No SQL",
    "BaaS",
    "Tailwind CSS",
    "Python",
  ],
  projects: [
    {
      title: "OLX Site",
      techStack: ["React", "Express.js", "Node.js", "Javascript"],
      description:
        "A web app for OLX Indonesia, a marketplace for buying and selling 2nd products, especially for automative products.",
      logo: MonitoLogo,
      link: {
        label: "olx.co.id",
        href: "https://olx.co.id/",
      },
    },
    {
      title: "Bobobox Web App",
      techStack: ["Next.js", "Tailwind CSS", "Node.js", "Typescript"],
      description:
        "A web app for Bobobox, a hotel chain in Indonesia that provides a capsule hotel.",
      logo: MonitoLogo,
      link: {
        label: "bobobox.com",
        href: "https://bobobox.com/",
      },
    },
    {
      title: "Katalis.ai",
      techStack: ["Next.js", "Chakra UI", "Node.js", "Typescript"],
      description:
        "A web app for Katalis.ai, a platform for AI-powered copywriting and content generation for ecommerce businesses.",
      logo: MonitoLogo,
      link: {
        label: "katalis.ai",
        href: "https://katalis.ai/",
      },
    },
    {
      title: "KAI Access",
      techStack: ["Ionic", "Angular", "Node.js", "Typescript"],
      description:
        "A mobile app for PT. KAI, a state-owned railway company in Indonesia to book train tickets by using mobile app.",
      logo: MonitoLogo,
      link: {
        label: "kaiaccess.com",
        href: "https://play.google.com/store/apps/details?id=com.kai.kaiticketing&hl=en_US&pli=1",
      },
    },
    {
      title: "Master's Thesis Research Paper",
      techStack: ["Python", "Machine Learning", "Data Science"],
      description:
        "A research paper for my master's thesis about the Indonesian user feedback dataset of capsule hotel experiences and its risk classification using machine learning.",
      logo: MonitoLogo,
      link: {
        label: "Research Paper",
        href: "https://tunasbangsa.ac.id/pkm/index.php/kesatria/article/view/349/346",
      },
    },
  ],
} as const;
