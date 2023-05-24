"use client";

import {
  Heading,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import Project from "./ProjectCard";

const Projects = () => {
  const { textColor } = useAppColors();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      padding={4}
      color={textColor}
      maxW={{ base: "90%", md: "70%" }}
    >
      <Heading>Projects</Heading>
      <Project />
    </Flex>
  );
};

export default Projects;
