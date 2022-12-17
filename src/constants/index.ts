import {
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
  amazoneclone,
  facebookmessenger,
  star,
  react,
  aws,
  cypress,
  node,
  resumesite,
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
  { id: "projects", title: "Personal Projects" },
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
    icon: star,
    title: "Test Engineering Manager - Northwestern Mutual",
    contentList: [
      "Manage a group of 10 people across 5 teams",
      "Improved development and testing processes to shorten the turnaround time for new features",
      "Successfully created and executed a road map to achieve company goals and testing maturity",
      " Hands on management by jumping into project and getting my hands into the development and testing",
    ],
  },
  {
    id: "experiences-3",
    icon: star,
    title: "SDET/Software Test Engineer - Northwestern Mutual",
    contentList: [
      "Leader of redesigning project’s automation testing using popular web technologies such as Node, JavaScript and git/gitlab.",
      "Streamlining testing efforts for fellow project members (onshore and offshore).",
      "Developed and established best practices that fit the project team",
      "Maintaining and creating automated tests and testing frameworks",
      "Providing valuable testing results to the project.",
      "Successfully created and enforced software testing strategies",
      "Enforced best coding practices by reviewing merge requests for the automation framework and the project work",
      "Established CICD processes that include automated API and UI testing",
      "Successfully managed many deployments and all the testing related work leading up to production",
      "Built many automation tools/frameworks from the ground up to meet specific needs",
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    content: "Learned styling with react using Amazon as an example",
    name: "Amazon Clone",
    img: amazoneclone,
  },
  {
    id: "project-2",
    content: "Learned about creating a real time chat using Firebase",
    name: "Facebook Messenger Clone",
    img: facebookmessenger,
  },
  {
    id: "project-3",
    content: "Creted this site to showcase my talents",
    name: "This Resume Site",
    img: resumesite,
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
    id: "ngrx",
    logo: ngrx,
  },
  {
    id: "angular",
    logo: angular,
  },
  {
    id: "atlassian",
    logo: atlassian,
  },
  {
    id: "css",
    logo: css,
  },
  {
    id: "git",
    logo: git,
  },
  {
    id: "gitlab",
    logo: gitlab,
  },
  {
    id: "html",
    logo: html,
  },
  {
    id: "javascript",
    logo: javascript,
  },
  {
    id: "typescript",
    logo: typescript,
  },
  {
    id: "jest",
    logo: jest,
  },
  {
    id: "nx",
    logo: nx,
  },
  {
    id: "scss",
    logo: scss,
  },
  {
    id: "vscode",
    logo: vscode,
  },
  {
    id: "react",
    logo: react,
  },
  {
    id: "aws",
    logo: aws,
  },
  {
    id: "cypress",
    logo: cypress,
  },
  {
    id: "node",
    logo: node,
  },
];
