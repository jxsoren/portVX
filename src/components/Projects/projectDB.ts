// Icon Imports
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiSass,
  SiTypescript,
  SiChakraui,
} from "react-icons/si";

import { DiJavascript1 } from "react-icons/di";
import { VscGithubAlt } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";

import { As } from "@chakra-ui/react";

import { TechSkill } from "../Skills/skillDB";

export interface ProjectRecipe {
  name: string;
  about: string;
  technologies: TechSkill[];
  thumbnail: string;
  links: {
    name: string;
    link: string;
    color: string;
    icon: As;
  }[];
}

export const projectDB: ProjectRecipe[] = [
  {
    name: "Quickcipie",
    about:
      "Quickcipe is a sleek and user-friendly recipe creation application that simplifies the recipe-making process by delivering concise and easy-to-follow instructions. With Quickcipe, users can create their own recipes with ease, using only the necessary ingredients and steps.",
    technologies: [
      { name: "Javascript", icon: DiJavascript1, color: "#f7df1e" },
      { name: "Mongo", icon: SiMongodb, color: "#4db33d" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "NodeJS", icon: FaNodeJs, color: "#68a063" },
      { name: "Sass", icon: SiSass, color: "#c69" },
    ],
    thumbnail: "./thumbnails/quickcipie.png",
    links: [
      {
        name: "Live",
        link: "https://quickcipe.herokuapp.com/",
        color: "#FF0000",

        icon: CgWebsite,
      },
      {
        name: "Github",
        link: "https://github.com/jxsoren/quickcipe",
        color: "#181717",

        icon: VscGithubAlt,
      },
    ],
  },
  {
    name: "Hot Take HQ",
    about:
      "Hot Take HQ is a dynamic online platform that offers a secure environment for users to share and contrast their viewpoints on a wide range of subjects. Users can engage in vibrant debates via its agree/disagree feature to cultivate fresh perspectives.",
    technologies: [
      { name: "Javascript", icon: DiJavascript1, color: "#f7df1e" },
      { name: "Mongo", icon: SiMongodb, color: "#4db33d" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "NodeJS", icon: FaNodeJs, color: "#68a063" },
    ],
    thumbnail: "./thumbnails/hotTakeHQ.png",
    links: [
      {
        name: "Live",
        link: "https://hot-take-app.herokuapp.com/",
        color: "#FF0000",

        icon: CgWebsite,
      },
      {
        name: "Github",
        link: "https://github.com/jxsoren/hot-take-app",
        color: "#181717",

        icon: VscGithubAlt,
      },
    ],
  },
  {
    name: "Retro Terminal RPG",
    about:
      "Text-based role-playing game based on the popular video game series, Bioshock. This game is designed to be run inside the terminal using Node.js and JavaScript, and features a variety of gameplay mechanics, including combat, inventory management, and character progression.",
    technologies: [
      { name: "Javascript", icon: DiJavascript1, color: "#f7df1e" },
      { name: "NodeJS", icon: FaNodeJs, color: "#68a063" },
    ],
    thumbnail: "./thumbnails/nodeRPG.png",
    links: [
      {
        name: "Live",
        link: "",
        color: "#FF0000",

        icon: CgWebsite,
      },
      {
        name: "Github",
        link: "https://github.com/jxsoren/terminal-rpg",
        color: "#181717",

        icon: VscGithubAlt,
      },
    ],
  },
  {
    name: "Portfolio Site v2",
    about:
      "A testament to innovation and continuous learning, this project uses Chakra UI for user interaction, TypeScript for reliable coding, and Next.js for optimal performance. It reflects my journey in tech and commitment to expanding my capabilities.",
    technologies: [
      { name: "NextJS", icon: SiNextdotjs, color: "#000000" },
      { name: "Typescript", icon: SiTypescript, color: "#007acc" },
      { name: "NodeJS", icon: FaNodeJs, color: "#68a063" },
      { name: "ChakraUI", icon: SiChakraui, color: "#319795" },
      { name: "NodeJS", icon: FaNodeJs, color: "#68a063" },
    ],
    thumbnail: "./thumbnails/portfolioVX.png",
    links: [
      {
        name: "Live",
        link: "",
        color: "#FF0000",
        icon: CgWebsite,
      },
      {
        name: "Github",
        link: "",
        color: "#181717",
        icon: VscGithubAlt,
      },
    ],
  },
];
