import {
  people01,
  people02,
  people03,
  linkedin,
  ngrx,
  angular,
  atlassian,
  css,
  git,
  gitlab,
  html,
  javascript,
  jest,
  nx,
  scss,
  typescript,
  vscode,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

export const experiences = [
  {
    id: "experiences-1",
    icon: star,
    title: "Senior Software Engineer - American Family Insurance",
    contentList: [
      "Completely overhauled Cypress test automation framework within a NX monorepo",
      "Integrated Cucumber, Gherkin and GitLab CICD into monorepo",
      "Developed Angular components using NGRX and RXJS for state management with TypeScript",
      "Resolved production and non production defects",
      "Learned Angular best practices to be efficient and produce high quality code",
      "Integrated unit testing and linting into the CICD process",
      "Suggested many time saving development processes within development, testing and backlog management that have been implemented and highly valued by the team",
      "Involved in all aspects of web development front end and back end plus Node utilities and AWS infrastructure",
      "Successfully migrated an application with millions of users to AWS using CDK within a monorepo",
      "Mentored several team members which I enjoy doing",
      "Develop and supported many APIs built with NestJS",
      "Eager to learn new technologies and implement intriguing features",
    ],
  },
  {
    id: "experiences-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "experiences-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const features = [
  {
    id: "features-1",
    icon: star,
    title: "Senior Software Engineer - American Family Insurance",
    contentList:
      "Completely overhauled Cypress test automation framework within a NX monorepo",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/jakub-tordoff-9ab6245a",
  },
];

export const skills = [
  {
    id: "skill-1",
    logo: ngrx,
  },
  {
    id: "skill-2",
    logo: angular,
  },
  {
    id: "skill-3",
    logo: atlassian,
  },
  {
    id: "skill-4",
    logo: css,
  },
  {
    id: "skill-5",
    logo: git,
  },
  {
    id: "skill-6",
    logo: gitlab,
  },
  {
    id: "skill-7",
    logo: html,
  },
  {
    id: "skill-8",
    logo: javascript,
  },
  {
    id: "skill-9",
    logo: typescript,
  },
  {
    id: "skill-10",
    logo: jest,
  },
  {
    id: "skill-11",
    logo: nx,
  },
  {
    id: "skill-12",
    logo: scss,
  },
  {
    id: "skill-13",
    logo: vscode,
  },
];
