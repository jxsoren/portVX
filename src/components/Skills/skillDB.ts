import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaLinux,
  FaNodeJs,
  FaSass,
  FaUbuntu,
  FaAws,
  FaTrello,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiChakraui,
  SiHeroku,
  SiPerforce,
} from "react-icons/si";

import { DiJavascript1 } from "react-icons/di";
import { BiGitBranch } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import { MdApi, MdOutlineViewKanban } from "react-icons/md";
import { AiFillApple } from "react-icons/ai";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BsWindows } from "react-icons/bs";

import { As } from "@chakra-ui/react";


export interface TechSkill {
  name: string;
  icon: As;
  color: string;
}

interface Technologies {
  languages: TechSkill[];
  frontEnd: TechSkill[];
  frameworks: TechSkill[];
  backEnd: TechSkill[];
  platforms: TechSkill[];
  cloud: TechSkill[];
  CCID: TechSkill[];
}

export const skillsDB: Technologies = {
  languages: [
    { name: "Javascript", icon: DiJavascript1, color: "#f7df1e" },
    { name: "Typescript", icon: SiTypescript, color: "#007acc" },
  ],
  frontEnd: [
    { name: "HTML", icon: FaHtml5, color: "#e34f26" },
    { name: "CSS", icon: FaCss3, color: "#264de4" },
    { name: "Sass", icon: FaSass, color: "#c69" },
    { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
  ],
  frameworks: [
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "Next", icon: SiNextdotjs, color: "#000000" },
  ],
  backEnd: [
    { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Node", icon: FaNodeJs, color: "#68a063" },
    { name: "REST APIs", icon: MdApi, color: "#007acc" },
    { name: "SQL", icon: AiOutlineConsoleSql, color: "#000000" },
  ],
  platforms: [
    { name: "Linux", icon: FaLinux, color: "#000000" },
    { name: "Ubuntu", icon: FaUbuntu, color: "#e95420" },
    { name: "macOS", icon: AiFillApple, color: "#000000" },
    { name: "Windows", icon: BsWindows, color: "#0078d6" },
  ],
  cloud: [
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Heroku", icon: SiHeroku, color: "#000000" },
  ],
  CCID: [
    { name: "Kanban", icon: MdOutlineViewKanban, color: "#000000" },
    { name: "Git", icon: BiGitBranch, color: "#f34f29" },
    { name: "Scrum", icon: DiScrum, color: "#000000" },
    { name: "Perforce", icon: SiPerforce, color: "#000000" },
    { name: "Trello", icon: FaTrello, color: "#0079bf" },
  ],
};
