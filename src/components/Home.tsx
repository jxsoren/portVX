"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

import Landing from "./Landing";
import Nav from "./Navbar/Nav";
import Footer from "./Footer/Footer";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import LayeredSVG from "./LayeredSVG";

export default function Home() {
  const bgColor = useColorModeValue("light.background", "dark.background");

  return (
    <Box bgColor={bgColor}>
      <Nav />
      <Box id="landing">
        <Landing />
      </Box>
      <LayeredSVG bgI="url('/SVG/stacked-waves-haikei (6).svg')" />
      <Box id="skills">
        <Skills />
      </Box>
      <LayeredSVG bgI="url('/SVG/skills-projects1.svg')" />
      <Box id="projects">
        <Projects />
      </Box>
      <LayeredSVG bgI="url('/SVG/projects-aboutMe.svg')" />
      <Box id="about">
        <AboutMe />
      </Box>
      <Footer />
    </Box>
  );
}
