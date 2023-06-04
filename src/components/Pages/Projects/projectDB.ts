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
import { VscGithubAlt } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";

import { As } from "@chakra-ui/react";

export interface ProjectRecipe {
  name: string;
  about: string;
  technologies: { name: string; icon: As }[];
  thumbnail: string;
  links: {
    name: string;
    link: string;
    icon: As;
  }[];
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
    thumbnail: "./thumbnails/quickcipie.png",
    links: [
      {
        name: "Live Site",
        link: "https://quickcipe.herokuapp.com/",
        icon: CgWebsite,
      },
      {
        name: "Github Repo",
        link: "https://github.com/jxsoren/quickcipe",
        icon: VscGithubAlt,
      },
    ],
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
    thumbnail: "./thumbnails/hotTakeHQ.png",
    links: [
      {
        name: "Live Site",
        link: "https://hot-take-app.herokuapp.com/",
        icon: CgWebsite,
      },
      {
        name: "Github Repo",
        link: "https://github.com/jxsoren/hot-take-app",
        icon: VscGithubAlt,
      },
    ],
  },
  {
    name: "Retro Terminal RPG",
    about:
      "Text-based role-playing game based on the popular video game series, Bioshock. This game is designed to be run inside the terminal using Node.js and JavaScript, and features a variety of gameplay mechanics, including combat, inventory management, and character progression.",
    technologies: [
      { name: "Javascript", icon: DiJavascript1 },
      { name: "NodeJS", icon: FaNodeJs },
    ],
    thumbnail: "./thumbnails/nodeRPG.png",
    links: [
      {
        name: "Live Site",
        link: "",
        icon: CgWebsite,
      },
      {
        name: "Github Repo",
        link: "https://github.com/jxsoren/terminal-rpg",
        icon: VscGithubAlt,
      },
    ],
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
    thumbnail: "./thumbnails/portfolioVX.png",
    links: [
      {
        name: "Live Site",
        link: "",
        icon: CgWebsite,
      },
      {
        name: "Github Repo",
        link: "",
        icon: VscGithubAlt,
      },
    ],
  },
];
