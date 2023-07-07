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

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { AnimatedBox, getAnimations } from "@/hooks/useScroll";

const Projects = () => {
  const { textColor } = useAppColors();
  const { rightToLeft, leftToRight, up, down, flip, scaleIn, scaleOut, skew, slideFade } = getAnimations();

  return (
    <Box
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundColor="#183664"
    >
      <Container maxW={"100%"} color={textColor} centerContent>
        <AnimatedBox animation={scaleIn}>
          <Heading color="#ffffff" fontSize="6xl" mb={10} mt={10}>
            Projects
          </Heading>
        </AnimatedBox>
        <Flex
          direction={["column", "row"]}
          align="center"
          justify="center"
          padding={4}
          overflowX="hidden"
        >
          <Carousel>
            {projectDB.map((project, index) => (
              <Box key={project.name}>
                <ProjectCard
                  name={project.name}
                  about={project.about}
                  technologies={project.technologies}
                  thumbnail={project.thumbnail}
                  links={project.links}
                />
              </Box>
            ))}
          </Carousel>
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
