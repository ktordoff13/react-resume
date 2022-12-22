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
    icon: star,
    title: "Senior Software Engineer - American Family Insurance",
    contentList: [
      "Part of a team that supported an application with millions of user.  I was involved in every aspect of this application starting which allowed me to sharpen my skills and learn new technologies while providing critical business value and solving challenging technical problems",
    ],
  },
  {
    id: "experiences-2",
    icon: star,
    title: "Test Engineering Manager - Northwestern Mutual",
    contentList: [
      "Managed a team of 10 split across many feature teams. Actively participated and supported team members to advocate for best testing and automation practices.  Propelled the company's quality goals which improved the user experience and confidence is the application",
    ],
  },
  {
    id: "experiences-3",
    icon: star,
    title: "SDET/Software Test Engineer - Northwestern Mutual",
    contentList: [
      "Maintained and advanced many test automation frameworks. Improved performance while executing test utilizing modern CICD processes that had many custom built quality gates. The main framework was spearheaded by me which identified flaws in the code very quickly and allowed the developer to get quick feedback.",
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
    content: "Learned about creating a real time chat using Firebase",
    repoUrl: "https://gitlab.com/ktordoff13/facebook-messenger-clone",
    name: "Facebook Messenger Clone",
    img: facebookmessenger,
  },
  {
    id: "project-3",
    content: "Creted this site to showcase my talents",
    repoUrl: "https://gitlab.com/ktordoff13/resume",
    name: "This Resume Site",
    img: resumesite,
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
  { id: "nestjs", logo: nestjs },
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
