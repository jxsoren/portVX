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
  SiSass,
  SiTypescript,
  SiChakraui,
} from "react-icons/si";

import { DiJavascript1 } from "react-icons/di";

import { As } from "@chakra-ui/react";

export interface ProjectRecipe {
  name: string;
  about: string;
  technologies: { name: string; icon: As }[];
  thumbnail: string;
  links: { live: string; repo: string };
}

export const projectDB: ProjectRecipe[] = [
  {
    name: "Quickcipie",
    about:
      "Quickcipe is a sleek and user-friendly recipe creation application that simplifies the recipe-making process by delivering concise and easy-to-follow instructions. With Quickcipe, users can create their own recipes with ease, using only the necessary ingredients and steps.",
    technologies: [
      { name: "Javascript", icon: DiJavascript1 },
      { name: "Mongo", icon: SiMongodb },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: FaReact },
      { name: "NodeJS", icon: FaNodeJs },
      { name: "Sass", icon: SiSass },
    ],
    thumbnail: "jk",
    links: {
      live: "https://quickcipe.herokuapp.com/",
      repo: "https://github.com/jxsoren/quickcipe",
    },
  },
  {
    name: "HOT TAKE HQ",
    about:
      "Hot Take HQ is a dynamic web app that provides a platform for users to share their views on diverse topics, from sports to politics. It offers secure posting of opinions, comparison with others, and the ability for lively debates through its agree/disagree feature, fostering new perspectives.",
    technologies: [
      { name: "Javascript", icon: DiJavascript1 },
      { name: "Mongo", icon: SiMongodb },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: FaReact },
      { name: "NodeJS", icon: FaNodeJs },
    ],
    thumbnail: "jk",
    links: {
      live: "https://hot-take-app.herokuapp.com/profile",
      repo: "https://github.com/jxsoren/hot-take-app",
    },
  },
  {
    name: "Retro Terminal RPG",
    about:
      "Text-based role-playing game based on the popular video game series, Bioshock. This game is designed to be run inside the terminal using Node.js and JavaScript, and features a variety of gameplay mechanics, including combat, inventory management, and character progression.",
    technologies: [
      { name: "Javascript", icon: DiJavascript1 },
      { name: "NodeJS", icon: FaNodeJs },
    ],
    thumbnail: "jk",
    links: {
      live: "",
      repo: "https://github.com/jxsoren/terminal-rpg",
    },
  },
  {
    name: "Portfolio Site",
    about: "This Site :D",
    technologies: [
      { name: "NextJS", icon: SiNextdotjs },
      { name: "Typescript", icon: SiTypescript },
      { name: "NodeJS", icon: FaNodeJs },
      { name: "ChakraUI", icon: SiChakraui },
      { name: "NodeJS", icon: FaNodeJs },
    ],
    thumbnail: "jk",
    links: {
      live: "",
      repo: "https://github.com/jxsoren/terminal-rpg",
    },
  },
];
