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
      <Box id="landing" mb="30vh">
      <Landing />
      </Box>
      <LayeredSVG />
      <Box
        aspectRatio={960 / 540}
        width="100%"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundImage="url('/SVG/fadingNightSky.svg')"
      ></Box>
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
