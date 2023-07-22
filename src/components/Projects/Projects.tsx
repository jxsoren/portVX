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

import { AnimatedBox, getAnimations } from "@/hooks/useScroll";

import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  const { textColor } = useAppColors();
  const { rightToLeft, leftToRight, up, down, flip, slideFade, slideBlur } =
    getAnimations();

  return (
    <Container
      maxW={"100%"}
      minH={"120vh"}
      color={textColor}
      backgroundColor="#183664"
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
      <ProjectCarousel />
    </Container>
  );
};

export default Projects;
