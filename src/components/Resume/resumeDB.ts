import { As } from "@chakra-ui/react";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaSass,
  FaAws,
  FaGithubAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiChakraui,
  SiHeroku,
  SiJson,
  SiPerforce,
  SiZapier,
  SiCsharp,
  SiDotnet,
  SiPostman,
} from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";
import { BiGitMerge } from "react-icons/bi";
import { AiOutlineGitlab } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { DiScrum } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { RiToolsFill } from "react-icons/ri";

export interface TechSkill {
  name: string;
  icon: As;
  color: string;
}

export interface JobRecipe {
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
  technologies: TechSkill[];
  image: string;
  imageLong: string;
}

export const jobDB: JobRecipe[] = [
  {
    company: "Filevine",
    role: "Support Engineer II",
    location: "Salt Lake City, UT",
    duration: "Oct 2022 - Present",
    responsibilities: [
      "Managed REST API inquiries with Postman and API testing tools, leading to enhanced product quality and customer satisfaction by efficiently crafting API defect write-ups.",
      "Built and troubleshot client automations in Zapier and Workato, leading to streamlined business processes and efficient workflows by understanding client needs.",
      "Diagnosed and troubleshot product defects using Developer Tools, AWS Cloud Watch, AWS Athena, and SQL, resulting in a streamlined reporting and resolution process with the engineering team by leveraging technical expertise.",
    ],
    technologies: [
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "REST API", icon: AiOutlineApi, color: "#007acc" },
      { name: "JSON", icon: SiJson, color: "#000" },
      { name: "Zapier", icon: SiZapier, color: "#FF4A00" },
      { name: "Workato", icon: TbSettingsAutomation, color: "#00B4AB" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "SQL", icon: BsFiletypeSql, color: "#4479A1" },
      { name: "DevTools", icon: RiToolsFill, color: "#A9A9A9" },
      { name: "GitLab", icon: AiOutlineGitlab, color: "#fca121" },
    ],
    image: "/companyImages/filevine.png",
    imageLong: "/companyImages/filevineLong.svg",
  },
  {
    company: "Impartner",
    role: "Support Web Developer",
    location: "Salt Lake City, UT",
    duration: "Aug 2021 - Sep 2022",
    responsibilities: [
      "Utilized HTML, CSS, JS, C# and the .Net framework to develop frontend components, enhancing user interface functionality and user experience for client websites.",
      "Applied developer tools in a Scrum environment to locate and fix issues in customer portals, ensuring a seamless user experience through systematic debugging techniques.",
      "Addressed technical support requests efficiently, contributing to a perfect satisfaction rate and stronger client relationships through dedicated assistance.",
    ],
    technologies: [
      { name: "JS", icon: DiJavascript1, color: "#f7df1e" },
      { name: "TS", icon: SiTypescript, color: "#007acc" },
      { name: "HTML", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS", icon: FaCss3, color: "#264de4" },
      { name: "Sass", icon: FaSass, color: "#c69" },
      { name: "Node", icon: FaNodeJs, color: "#68a063" },
      { name: "C#", icon: SiCsharp, color: "#512BD4" },
      { name: ".Net", icon: SiDotnet, color: "#512BD4" },
      { name: "Perforce", icon: SiPerforce, color: "#000000" },
      { name: "Git", icon: BiGitMerge, color: "#F74E1A" },
      { name: "DevTools", icon: RiToolsFill, color: "#A9A9A9" },
      { name: "Scrum", icon: DiScrum, color: "#189ab6" },
    ],
    image: "/companyImages/impartner.png",
    imageLong: "/companyImages/impartner.svg",
  },
  {
    company: "V School",
    role: "Teaching Assistant",
    location: "Remote",
    duration: "May 2021 - Aug 2021",
    responsibilities: [
      "Orchestrated daily stand-up meetings with students in an Agile environment, ensuring tracking of progress and identification of support areas.",
      "Delivered technical assistance to students, fostering their understanding and progression using a student-focused approach.",
      "Worked with program directors to track and report student progress, aligning with program goals through accurate data analysis.",
    ],
    technologies: [
      { name: "JS", icon: DiJavascript1, color: "#f7df1e" },
      { name: "React", icon: FaReact, color: "#61dbfb" },
      { name: "HTML", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS", icon: FaCss3, color: "#264de4" },
      { name: "Node", icon: FaNodeJs, color: "#68a063" },
      { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Git", icon: BiGitMerge, color: "#F74E1A" },
      { name: "Github", icon: FaGithubAlt, color: "#000000" },
      { name: "REST API", icon: AiOutlineApi, color: "#007acc" },
      { name: "JSON", icon: SiJson, color: "#000000" },
      { name: "DevTools", icon: RiToolsFill, color: "#A9A9A9" },
      { name: "Scrum", icon: DiScrum, color: "#189ab6" },
    ],
    image: "/companyImages/vschool.png",
    imageLong: "/companyImages/vschoolLong.svg",
  },
];

export const educationDB = [
  {
    institution: "V School Software Engineering Immersive",
    location: "Remote",
    year: "2021",
    description:
      "Learned industry best practices and practical Front End and Back End (Full Stack) software development standards with a focus on HTML5, CSS3, JavaScript, Node.JS, React, REST APIs, and MongoDB. Created and deployed mobile-first applications while learning new languages and frameworks by collaborating every week with a senior web developer.",
  },
  {
    institution: "Taylorsville High School",
    location: "Taylorsville, UT",
    year: "2019",
    description: ".",
  },
];
