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
  SiDotnet
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

import { As } from "@chakra-ui/react";

export interface TechSkill {
  name: string;
  icon: As;
}

export const skillsDB: TechSkill[] = [
  { name: "Javascript", icon: DiJavascript1 },
  { name: "Typescript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3 },
  { name: "Node", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "C#", icon: SiCsharp },
  { name: ".NET", icon: SiDotnet },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Sass", icon: FaSass },
  { name: "Linux", icon: FaLinux },
];
