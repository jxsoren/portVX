"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

import Landing from "../components/Landing";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import LayeredSVG from "./Pages/LayeredSVG";

export default function Home() {
  const bgColor = useColorModeValue("light.background", "dark.background");

  return (
    <Box bgColor={bgColor}>
      <Nav />
      <Box id="landing">
        <Landing />
      </Box>
      <LayeredSVG bgI="url('/SVG/stars-skills2.svg')" />
      <Box id="skills">
        <Skills />
      </Box>
      <LayeredSVG bgI="url('/SVG/skills-projects2.svg')" />
      <Box id="projects">
        <Projects />
      </Box>
      <LayeredSVG bgI="url('/SVG/fadingNightSky.svg')" />
      <Box id="about">
        <AboutMe />
      </Box>
      <LayeredSVG bgI="url('/SVG/about-footer.svg')" />
      <Footer />
    </Box>
  );
}
