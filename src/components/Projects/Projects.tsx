"use client";

import { Heading, Box, Container, useBreakpointValue } from "@chakra-ui/react";

import ProjectCard from "./ProjectCard/ProjectCard";
import { projectDB } from "./projectDB";

import { AnimatedBox, getAnimations } from "@/hooks/useScroll";

import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";

const Projects = () => {
  const { rightToLeft } = getAnimations();

  const isSmallScreen = useBreakpointValue({ base: false, sm: true });

  return (
    <Container
      maxW={"100%"}
      minH="100vh"
      marginTop="-10"
      color="white"
      background="linear-gradient(#16161d, #1f1f3a, #173663)"
      overflowX="hidden"
      overflowY="hidden"
      centerContent
    >
      <AnimatedBox animation={rightToLeft}>
        <Heading
          color="#ffffff"
          fontSize="5xl"
          mb={10}
          mt={10}
          textShadow="2px 2px #111"
          fontWeight="extrabold"
          borderBottom="4px solid #FFFFFF"
        >
          Projects
        </Heading>
      </AnimatedBox>

      {!isSmallScreen ? (
        <Box>
          {projectDB.map((project) => (
            <Box key={project.name} mb="4">
              <ProjectCard
                name={project.name}
                about={project.about}
                shortAbout={project.shortAbout}
                technologies={project.technologies}
                thumbnail={project.thumbnail}
                links={project.links}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <ProjectCarousel />
      )}
    </Container>
  );
};

export default Projects;
