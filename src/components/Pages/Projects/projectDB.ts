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
      { name: "MongoDB", icon: SiMongodb },
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
      "Hot Take HQ is an engaging and interactive web application that lets users express their unique opinions on a variety of topics, from sports to politics to entertainment. With secure user authentication, users can post their 'hot takes' and see how they stack up against the opinions of others. Through the platform's agree/disagree feature, users can engage in lively debates and discussions, expanding their horizons and gaining new perspectives.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "MongoDB", icon: SiMongodb },
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
      { name: "MongoDB", icon: SiMongodb },
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
