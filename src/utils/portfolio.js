import { DiAndroid, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import {
  SiFirebase,
  SiGit,
  SiDart,
  SiCss3,
  SiMysql,
  SiAmazon,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://rjshkhr.github.io/cleanfolio",
  title: "MP.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Mansi Patel",
  role: "Full Stack Developer",
  description: [
    {
      id: "para1",
      desc: "I'm a software developer with 1.5 years of experience, specializing in MEAN (MongoDB, Express.js, Angular, Node.js) and MERN (MongoDB, Express.js, React, Node.js) stack development. I create strong and scalable applications by using MongoDB for data storage, Express.js for server-side logic, and either Angular or React for user interfaces. I'm skilled in Node.js, covering all aspects of development.",
    },
    {
      id: "para2",
      desc: "By working on projects and always learning, I got good at creating databases, making servers work better, and designing easy-to-use screens. I really like tech stuff, and I'm excited about facing new challenges and discovering cool things in the ever-changing world of making software.",
    },
  ],
  resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/manie10/",
    github: "https://github.com/manie-oss",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Project 1",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 2",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>Android Apps, ROMs, & Kernels</>,
  },
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>Cross-platform app development</>,
  },
  {
    slug: "kotlin",
    Component: TbBrandKotlin,
    title: "Kotlin",
    Description: () => <>Android apps and Lambda functions</>,
  },
  {
    slug: "dart",
    Component: SiDart,
    title: "Dart",
    Description: () => <>Flutter apps only</>,
  },
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Android apps and Lambda functions</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "aws",
    Component: SiAmazon,
    title: "AWS Lambda",
    Description: () => <>Lambda functions for creating APIs</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Ease of life and build scripts</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentication, database and analytics</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "johnsmith@mail.com",
};

export { header, about, projects, skills, contact };
