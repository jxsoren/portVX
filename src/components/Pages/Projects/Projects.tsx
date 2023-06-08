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
import ProjectCard from "./ProjectCard/ProjectCard";
import { projectDB } from "./projectDB";

const Projects = () => {
  const { textColor } = useAppColors();

  return (
    <Container maxW="2x1" color={textColor} centerContent>
      <Heading marginBottom={4}>Projects</Heading>
      <Flex
        direction={["column", "row"]}
        align="center"
        justify="center"
        padding={4}
        maxW={{ base: "100%", md: "100%" }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="50px">
          {projectDB.map((project) => (
            <ProjectCard
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
