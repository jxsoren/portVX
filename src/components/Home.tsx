"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

import Landing from "../components/Landing";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact";
import LayeredSVG from "./Pages/LayeredSVG";

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
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
