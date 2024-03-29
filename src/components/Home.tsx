"use client";

import { Box } from "@chakra-ui/react";

import Landing from "./Landing";
import Nav from "./Navbar/Nav";
import Footer from "./Footer/Footer";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import LayeredSVG from "./LayeredSVG";

export default function Home() {
  return (
    <Box bgColor="#00000">
      <Nav />
      <Box id="landing">
        <Landing />
      </Box>
      <LayeredSVG bgI="url('/SVG/hero-skills.svg')" />
      <Box id="skills">
        <Skills />
      </Box>
      <LayeredSVG bgI="url('/SVG/skills-projects.svg')" />
      <Box id="projects">
        <Projects />
      </Box>
      <LayeredSVG bgI="url('/SVG/projects-resume.svg')" />
      <Box id="resume">
        <Resume />
      </Box>
      <LayeredSVG bgI="url('/SVG/resume-about.svg')" />
      <Box id="about">
        <AboutMe />
      </Box>
      <Footer />
    </Box>
  );
}
