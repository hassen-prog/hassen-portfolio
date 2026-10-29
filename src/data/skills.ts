// import {
//   FaAngular,
//   FaDocker,
//   FaGitAlt,
//   FaGithub,
//   FaJava,
//   FaNodeJs,
//   FaPython,
//   FaReact,
// } from "react-icons/fa";

// import {
//   SiExpress,
//   SiJavascript,
//   SiMongodb,
//   SiMysql,
//   SiPostgresql,
//   SiSpringboot,
//   SiTypescript,
//   SiSnowflake,
//   SiPostman,
//   SiJenkins,
// } from "react-icons/si";
// import { FaDatabase } from "react-icons/fa";
// export interface Skill {
//   name: string;
//   icon: React.ElementType;
//   color: string;
// }

// export interface SkillCategory {
//   title: string;
//   description: string;
//   skills: Skill[];
// }

// export const skillCategories: SkillCategory[] = [
//   {
//     title: "Frontend",
//     description:
//       "Building responsive interfaces and interactive experiences with modern frontend technologies.",
//     skills: [
//       {
//         name: "React",
//         icon: FaReact,
//         color: "#61DAFB",
//       },
//       {
//         name: "Angular",
//         icon: FaAngular,
//         color: "#DD0031",
//       },
//       {
//         name: "TypeScript",
//         icon: SiTypescript,
//         color: "#3178C6",
//       },
//       {
//         name: "JavaScript",
//         icon: SiJavascript,
//         color: "#F7DF1E",
//       },
//     ],
//   },

//   {
//     title: "Backend",
//     description:
//       "Developing APIs, business logic and server-side applications with scalable architectures.",
//     skills: [
//       {
//         name: "Spring Boot",
//         icon: SiSpringboot,
//         color: "#6DB33F",
//       },
//       {
//         name: "Node.js",
//         icon: FaNodeJs,
//         color: "#339933",
//       },
//       {
//         name: "Express",
//         icon: SiExpress,
//         color: "#FFFFFF",
//       },
//       {
//         name: "Python",
//         icon: FaPython,
//         color: "#3776AB",
//       },
//       {
//         name: "Java",
//         icon: FaJava,
//         color: "#ED8B00",
//       },
//     ],
//   },

//   {
//     title: "Databases",
//     description:
//       "Working with relational and NoSQL databases and integrating applications with different data systems.",
//     skills: [
//       {
//         name: "MongoDB",
//         icon: SiMongodb,
//         color: "#47A248",
//       },
//       {
//         name: "MySQL",
//         icon: SiMysql,
//         color: "#4479A1",
//       },
//       {
//         name: "PostgreSQL",
//         icon: SiPostgresql,
//         color: "#4169E1",
//       },
//       {
//         name: "Oracle",
//         icon: FaDatabase,
//         color: "#F80000",
//       },
//       {
//         name: "SQL Server",
//         icon: FaDatabase,
//         color: "#CC2927",
//       },
//       {
//         name: "Snowflake",
//         icon: SiSnowflake,
//         color: "#29B5E8",
//       },
//     ],
//   },

//   {
//     title: "DevOps & Tools",
//     description:
//       "Using development tools and DevOps practices to improve collaboration, testing and delivery.",
//     skills: [
//       {
//         name: "Docker",
//         icon: FaDocker,
//         color: "#2496ED",
//       },
//       {
//         name: "Git",
//         icon: FaGitAlt,
//         color: "#F05032",
//       },
//       {
//         name: "GitHub",
//         icon: FaGithub,
//         color: "#FFFFFF",
//       },
//       {
//         name: "Jenkins",
//         icon: SiJenkins,
//         color: "#D24939",
//       },
//       {
//         name: "Postman",
//         icon: SiPostman,
//         color: "#FF6C37",
//       },
//     ],
//   },
// ];

import {
  FaAngular,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaCode,
  FaCogs,
  FaChartLine,
  FaCheckCircle,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
  SiSnowflake,
  SiPostman,
  SiJenkins,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description:
      "Building responsive interfaces and interactive experiences with modern frontend technologies.",
    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: FaCode,
        color: "#FFFFFF",
      },
      {
        name: "Angular",
        icon: FaAngular,
        color: "#DD0031",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: FaCode,
        color: "#38BDF8",
      },
    ],
  },

  {
    title: "Backend",
    description:
      "Developing APIs, business logic and server-side applications with maintainable architectures.",
    skills: [
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#FFFFFF",
      },
      {
        name: "NestJS",
        icon: FaNodeJs,
        color: "#E0234E",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#ED8B00",
      },
      {
        name: "C#",
        icon: FaCode,
        color: "#9B4F96",
      },
      {
        name: "ASP.NET",
        icon: FaCode,
        color: "#512BD4",
      },
      {
        name: "REST APIs",
        icon: FaCode,
        color: "#A78BFA",
      },
      {
        name: "GitHub REST API",
        icon: FaGithub,
        color: "#FFFFFF",
      },
    ],
  },

  {
    title: "Databases",
    description:
      "Working with relational and NoSQL databases, data integration and multi-database management.",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "Oracle",
        icon: FaDatabase,
        color: "#F80000",
      },
      {
        name: "SQL Server",
        icon: FaDatabase,
        color: "#CC2927",
      },
      {
        name: "Snowflake",
        icon: SiSnowflake,
        color: "#29B5E8",
      },
    ],
  },

  {
    title: "DevOps & Tools",
    description:
      "Automating delivery, managing containerized applications, testing software and monitoring infrastructure.",
    skills: [
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
      },
      {
        name: "Docker Compose",
        icon: FaDocker,
        color: "#2496ED",
      },
      {
        name: "Kubernetes",
        icon: FaCogs,
        color: "#326CE5",
      },
      {
        name: "Helm",
        icon: FaCogs,
        color: "#0F1689",
      },
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#FFFFFF",
      },
      {
        name: "GitHub Actions",
        icon: FaGithub,
        color: "#2088FF",
      },
      {
        name: "Jenkins",
        icon: SiJenkins,
        color: "#D24939",
      },
      {
        name: "Prometheus",
        icon: FaChartLine,
        color: "#E6522C",
      },
      {
        name: "Grafana",
        icon: FaChartLine,
        color: "#F46800",
      },
      {
        name: "Vitest",
        icon: FaCheckCircle,
        color: "#6E9F18",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
    ],
  },
];
