// Icon Imports
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaLinux,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiCsharp,
  SiDotnet,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

import { As } from "@chakra-ui/react";

export interface TechSkill {
  name: string;
  icon: As;
  color: string;
}

export const skillsDB: TechSkill[] = [
  { name: "Javascript", icon: DiJavascript1, color: "#f7df1e" },
  { name: "Typescript", icon: SiTypescript, color: "#007acc" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", icon: FaCss3, color: "#264de4" },
  { name: "Node", icon: FaNodeJs, color: "#68a063" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
  { name: "NextJS", icon: SiNextdotjs, color: "#000000" },
  { name: "Sass", icon: FaSass, color: "#c69" },
  { name: "Linux", icon: FaLinux, color: "#000000" },
];
