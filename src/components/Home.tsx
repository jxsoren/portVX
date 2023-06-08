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
      <Box id="about" mb="40vh">
        <AboutMe />
      </Box>
      <Box id="skills" mb="40vh">
        <Skills />
      </Box>
      <Box id="projects" mb="40vh">
        <Projects />
      </Box>
      <Footer />
    </Box>
  );
}
