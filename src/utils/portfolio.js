import { DiHtml5 } from "react-icons/di";
import {
  SiFirebase,
  SiGit,
  SiCss3,
  SiMysql,
  SiAmazon,
  SiClojure,
  SiMongodb
} from "react-icons/si";
import { RiReactjsLine, RiAngularjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript, TbBrandNodejs, TbBrandTypescript, TbBrandBootstrap } from "react-icons/tb";

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "MP.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Mansi Patel",
  role: "Full Stack Developer",
  description: [
    {
      id: "para1",
      desc: "I'm a software developer with 2.3 years of experience, specializing in MEAN (MongoDB, Express.js, Angular, Node.js) and MERN (MongoDB, Express.js, React, Node.js) stack development. I create strong and scalable applications by using MongoDB for data storage, Express.js for server-side logic, and either Angular or React for user interfaces. I'm skilled in Node.js, covering all aspects of development.",
    },
    {
      id: "para2",
      desc: "By working on projects and always learning, I got good at creating databases, making servers work better, and designing easy-to-use screens. I really like tech stuff, and I'm excited about facing new challenges and discovering cool things in the ever-changing world of making software.",
    },
  ],
  resume: "https://drive.google.com/file/d/1N6QyczRT9z8Kx4zcRHW3ayyQdWF18Q9A/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/manie10/",
    github: "https://github.com/manie-oss",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    id: "project_1",
    name: "Munii",
    description:
      "A unified financial management software for everyone. Focus on living, leave managing your finances to us",
    stack: ["Clojure", "JavaScript", "CSS", "Reagent"],
    sourceCode: "https://github.com/manie-oss",
    livePreview: "https://app.munii.in/",
  },
  {
    id: "project_2",
    name: "GameEng",
    description:
      "GameEng helps thousands of organizations and users manage their game servers.",
    stack: ["Clojure","JavaScript", "Tailwind", "DaisyUI", "Uix-Cljs"],
    sourceCode: "https://github.com/manie-oss",
    livePreview: "https://gameeng.xyz/",
  }
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

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
    slug: "javascript",
    Component: TbBrandJavascript,
    title: "JavaScript",
    Description: () => <>Adding interactivity and dynamic behavior to web pages</>,
  },
  {
    slug: "reactjs",
    Component: RiReactjsLine,
    title: "ReactJs",
    Description: () => <>Building user interfaces with reusable components</>,
  },
  {
    slug: "angularjs",
    Component: RiAngularjsFill,
    title: "AngularJs",
    Description: () => <>A comprehensive framework for building complex web applications</>,
  },
  {
    slug: "nodejs",
    Component: TbBrandNodejs,
    title: "NodeJs",
    Description: () => <>Running JavaScript on the server for backend development and APIs</>,
  },
  {
    slug: "typescript",
    Component: TbBrandTypescript,
    title: "TypeScript",
    Description: () => <>Adding static typing to JavaScript for improved code maintainability</>,
  },
  {
    slug: "bootstrap",
    Component: TbBrandBootstrap,
    title: "BootStrap",
    Description: () => <>A CSS framework for quickly styling and laying out web pages</>,
  },
  {
    slug: "tailwindcss",
    Component: RiTailwindCssFill,
    title: "TailWindCss",
    Description: () => <>A utility-first CSS framework for highly customizable styling</>,
  },
  {
    slug: "clojure",
    Component: SiClojure ,
    title: "Clojure",
    Description: () => <>A functional programming language that runs on the Java Virtual Machine</>,
  },
  {
    slug: "mongodb",
    Component: SiMongodb,
    title: "MongoDB",
    Description: () => <>A NoSQL database for flexible data storage</>,
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
  email: "to.mansip@gmail.com",
};

const experience = [
  {
    id: "company1",
    company: "BimaXpress, Bangalore",
    from: "January 2022",
    to: 'June 2022',
    designation: "Product Engineer",
    logo: '/RNLP.svg'
  },
  {
    id: "company2",
    company: "Ticombo, Remote",
    designation: "Full Stack Developer",
    from: "January 2023",
    to: "October 2024",
    logo: '/ticombo.png'
  }
]

export { header, about, projects, skills, contact, experience };
