"use client";

import { Heading, Box, Text, Flex, Container } from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import Project from "./ProjectCard";
import { projectDB } from "./projectDB";

const Projects = () => {
  const { textColor } = useAppColors();

  return (
    <Box padding={4} color={textColor} maxW={{ base: "90%", md: "70%" }}>
      <Heading>Projects</Heading>
      <Flex
        direction="row"
        align="center"
        justify="center"
        padding={4}
        color={textColor}
        maxW={{ base: "90%", md: "70%" }}
      >
        {projectDB.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
            thumbnail={project.thumbnail}
            links={project.links}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
