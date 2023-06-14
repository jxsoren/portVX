"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

import Landing from "../components/Landing";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";

export default function Home() {
  const bgColor = useColorModeValue("light.background", "dark.background");

  return (
    <Box bgColor={bgColor}>
      <Nav />
      <Landing />
      <Box id="about" mb="30vh">
        <AboutMe />
      </Box>
      <Box id="skills" mb="30vh">
        <Skills />
      </Box>
      <Box id="projects" mb="30vh">
        <Projects />
      </Box>
      <Footer />
    </Box>
  );
}
