"use client";

import {
  Heading,
  Box,
  Text,
  Flex,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import Project from "./ProjectCard";
import { projectDB } from "./projectDB";

const Projects = () => {
  const { textColor } = useAppColors();

  return (
    <Container maxW="2x1" centerContent>
      <Heading marginBottom={4}>Projects</Heading>
      <Flex
        direction={["column", "row"]}
        align="center"
        justify="center"
        padding={4}
        color={textColor}
        maxW={{ base: "90%", md: "70%" }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }} // adjust as needed
          spacing="20px"
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
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Projects;
