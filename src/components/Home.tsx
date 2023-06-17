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
      <LayeredSVG />
      <Box
        aspectRatio={960 / 540}
        width="100%"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundImage="url('/SVG/fadingNightSky.svg')"
      ></Box>
      <Box id="skills">
        <Skills />
      </Box>
      <Box
        aspectRatio={960 / 540}
        width="100%"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundImage="url('/SVG/fadingNightSky.svg')"
      ></Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box
        aspectRatio={960 / 540}
        width="100%"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundImage="url('/SVG/fadingNightSky.svg')"
      ></Box>
      <Box id="about">
        <AboutMe />
      </Box>
      <Box
        aspectRatio={960 / 540}
        width="100%"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundImage="url('/SVG/fadingNightSky.svg')"
      ></Box>
      <Footer />
    </Box>
  );
}
