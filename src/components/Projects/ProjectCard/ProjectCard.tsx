"use client";

import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Stack,
  StackDivider,
  Heading,
  Flex,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import { ProjectRecipe } from "../projectDB";
import ProjectThumbnail from "./CardComponents/ProjectThumbnail";
import ProjectTechnologies from "./CardComponents/ProjectTechnologies";
import ProjectAbout from "./CardComponents/ProjectAbout";
import ProjectLinks from "./CardComponents/ProjectLinks";

import { AnimatedBox, getAnimations } from "@/hooks/useScroll";

const ProjectCard: React.FC<ProjectRecipe> = ({
  name,
  about,
  shortAbout,
  technologies,
  thumbnail,
  links,
}) => {
  const { textColor } = useAppColors();
  const { rightToLeft, leftToRight, up, down, flip, slideFade, slideBlur } =
    getAnimations();

  const maxW = useBreakpointValue({
    base: "60vw",
    xs: "80vw",
    sm: "90vw",
    md: "80vw",
    lg: "70vw",
    xl: "70vw",
  });

  return (
    <AnimatedBox animation={leftToRight}>
      <Card
        display="flex"
        flexDirection="column"
        alignItems="center"
        variant="outline"
        boxShadow={"lg"}
        bgColor="#1A202C"
        borderColor="#383784"
        borderWidth={4}
        borderRadius={20}
        color={textColor}
        maxW={maxW}
        height="100%"
      >
        <CardHeader textAlign="center" width="100%">
          <Heading size="lg">{name}</Heading>
        </CardHeader>
        <CardBody flex="1" h="100%">
          <Stack
            direction="column"
            justify="space-between"
            divider={<StackDivider />}
            spacing="4"
          >
            <ProjectThumbnail thumbnail={thumbnail} />
            <ProjectAbout about={about} shortAbout={shortAbout} />
            <ProjectTechnologies technologies={technologies} />
            <ProjectLinks links={links} />
          </Stack>
        </CardBody>
      </Card>
    </AnimatedBox>
  );
};

export default ProjectCard;
