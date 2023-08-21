import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaLinux,
  FaNodeJs,
  FaSass,
  FaUbuntu,
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
  SiPerforce,
} from "react-icons/si";

import { AiOutlineGitlab } from "react-icons/ai";

import { DiJavascript1 } from "react-icons/di";
import { DiScrum } from "react-icons/di";
import { MdOutlineViewKanban } from "react-icons/md";
import { AiFillApple, AiOutlineApi } from "react-icons/ai";
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
    { name: "JS", icon: DiJavascript1, color: "#f7df1e" },
    { name: "TS", icon: SiTypescript, color: "#007acc" },
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
    { name: "REST API", icon: AiOutlineApi, color: "#007acc" },
  ],
  platforms: [
    { name: "Linux", icon: FaLinux, color: "#F8F8FF" },
    { name: "Ubuntu", icon: FaUbuntu, color: "#e95420" },
    { name: "macOS", icon: AiFillApple, color: "#ffff" },
    { name: "Windows", icon: BsWindows, color: "#0078d6" },
  ],
  cloud: [
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "Heroku", icon: SiHeroku, color: "#a762ff" },
  ],
  CCID: [
    { name: "Kanban", icon: MdOutlineViewKanban, color: "#a762ff" },
    { name: "Github", icon: FaGithubAlt, color: "#000000" },
    { name: "Gitlab", icon: AiOutlineGitlab, color: "#fca121" },
    { name: "Scrum", icon: DiScrum, color: "#189ab6" },
    { name: "Perforce", icon: SiPerforce, color: "#000000" },
  ],
};
