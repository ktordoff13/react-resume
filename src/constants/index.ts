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
  building,
  react,
  aws,
  cypress,
  node,
  resumesite,
  nestjs,
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
    icon: building,
    title: "Senior Software Engineer - American Family Insurance",
    contentList: [
      "Part of a team that supported an application with millions of users.  I was involved in every aspect of this application which allowed me to sharpen my skills and learn new technologies while providing critical business value and solving challenging technical problems.",
    ],
  },
  {
    id: "experiences-2",
    icon: building,
    title: "Test Engineering Manager - Northwestern Mutual",
    contentList: [
      "Managed a team of ten people split across many feature teams. Actively participated and supported team members to advocate for best testing and automation practices.  Propelled the company's quality goals which improved the user experience and confidence in the application.",
    ],
  },
  {
    id: "experiences-3",
    icon: building,
    title: "SDET/Software Test Engineer - Northwestern Mutual",
    contentList: [
      "Maintained and advanced many test automation frameworks. Improved performance while executing tests utilizing modern CICD processes with many custom built quality gates. Spearheaded the main framework which identified flaws in the code very quickly and allowed the developer to get quick feedback.",
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    content: "Learned styling with react using Amazon as an example",
    repoUrl: "https://gitlab.com/ktordoff13/amazon-clone",
    name: "Amazon Clone",
    img: amazoneclone,
  },
  {
    id: "project-2",
    content: "Learned about creating a real time chat using Firebase.",
    repoUrl: "https://gitlab.com/ktordoff13/facebook-messenger-clone",
    name: "Facebook Messenger Clone",
    img: facebookmessenger,
  },
  {
    id: "project-3",
    content: "Created this site to showcase my talents.",
    repoUrl: "https://gitlab.com/ktordoff13/resume",
    name: "This Resume Site",
    img: resumesite,
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
  { id: "nestjs", logo: nestjs, tooltip: "NestJS" },
  {
    id: "ngrx",
    logo: ngrx,
    tooltip: "NGRX",
  },
  {
    id: "angular",
    logo: angular,
    tooltip: "Angular",
  },
  {
    id: "atlassian",
    logo: atlassian,
    tooltip: "Atlassian",
  },
  {
    id: "css",
    logo: css,
    tooltip: "CSS",
  },
  {
    id: "git",
    logo: git,
    tooltip: "GIT",
  },
  {
    id: "gitlab",
    logo: gitlab,
    tooltip: "GitLab",
  },
  {
    id: "html",
    logo: html,
    tooltip: "HTML",
  },
  {
    id: "javascript",
    logo: javascript,
    tooltip: "JavaScript",
  },
  {
    id: "typescript",
    logo: typescript,
    tooltip: "TypeScript",
  },
  {
    id: "jest",
    logo: jest,
    tooltip: "Jest",
  },
  {
    id: "nx",
    logo: nx,
    tooltip: "NX",
  },
  {
    id: "scss",
    logo: scss,
    tooltip: "SCSS",
  },
  {
    id: "vscode",
    logo: vscode,
    tooltip: "VSCode",
  },
  {
    id: "react",
    logo: react,
    tooltip: "React",
  },
  {
    id: "aws",
    logo: aws,
    tooltip: "AWS",
  },
  {
    id: "cypress",
    logo: cypress,
    tooltip: "Cypress",
  },
  {
    id: "node",
    logo: node,
    tooltip: "Node",
  },
];
