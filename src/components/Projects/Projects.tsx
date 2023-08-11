"use client";

import {
  Heading,
  Box,
  Text,
  Flex,
  Container,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";

import ProjectCard from "./ProjectCard/ProjectCard";
import { projectDB } from "./projectDB";

import { AnimatedBox, getAnimations } from "@/hooks/useScroll";

import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";

const Projects = () => {
  const { textColor } = useAppColors();
  const { rightToLeft, leftToRight, up, down, flip, slideFade, slideBlur } =
    getAnimations();

  const isExtraLargeSreen = useBreakpointValue({ base: false, xl: true });
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const isMediumScreen = useBreakpointValue({
    base: false,
    md: true,
  });
  const isSmallScreen = useBreakpointValue({ base: false, sm: true });

  return (
    <Container
      maxW={"100%"}
      minH="100vh"
      marginTop="-10"
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
