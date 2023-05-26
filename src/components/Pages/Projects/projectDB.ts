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
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

import { As } from "@chakra-ui/react";

export interface ProjectRecipe {
  name: string;
  about: string;
  technologies: { name: string; icon: As }[];
  thumbnail: string;
  links: { live: string; github: string };
}

export const projectDB: ProjectRecipe[] = [
  {
    name: "Quickcipie",
    about:
      "Quickcipe is a sleek and user-friendly recipe creation application that simplifies the recipe-making process by delivering concise and easy-to-follow instructions. With Quickcipe, users can create their own recipes with ease, using only the necessary ingredients and steps.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Mongo", icon: SiMongodb },
      { name: "Sass", icon: SiSass },
      { name: "Express", icon: SiExpress },
    ],
    thumbnail: "jk",
    links: {
      live: "https://quickcipe.herokuapp.com/",
      github: "https://github.com/jxsoren/quickcipe",
    },
  },
  {
    name: "HOT TAKE HQ",
    about:
      "Hot Take HQ is a dynamic web app that provides a platform for users to share their views on diverse topics, from sports to politics. It offers secure posting of opinions, comparison with others, and the ability for lively debates through its agree/disagree feature, fostering new perspectives.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Mongo", icon: SiMongodb },
      { name: "Sass", icon: SiSass },
      { name: "Express", icon: SiExpress },
    ],
    thumbnail: "jk",
    links: {
      live: "https://hot-take-app.herokuapp.com/profile",
      github: "https://github.com/jxsoren/hot-take-app",
    },
  },
  {
    name: "RETRO TERMINAL RPG",
    about:
      "Text-based role-playing game based on the popular video game series, Bioshock. This game is designed to be run inside the terminal using Node.js and JavaScript, and features a variety of gameplay mechanics, including combat, inventory management, and character progression.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Mongo", icon: SiMongodb },
      { name: "Sass", icon: SiSass },
      { name: "Express", icon: SiExpress },
    ],
    thumbnail: "jk",
    links: {
      live: "",
      github: "https://github.com/jxsoren/terminal-rpg",
    },
  },
];
