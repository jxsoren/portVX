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
  technologies,
  thumbnail,
  links,
}) => {
  const { textColor } = useAppColors();
  const { rightToLeft, leftToRight, up, down, flip, slideFade, slideBlur } =
    getAnimations();

  return (
    <AnimatedBox animation={leftToRight}>
      <Card
        display="flex"
        flexDirection="column"
        alignItems="center"
        variant="outline"
        boxShadow={"lg"}
        bgColor="#242423"
        borderColor="#9A9A98"
        borderWidth={4}
        borderRadius={20}
        color={textColor}
        maxW={["95vw", "40vw", "30vw", "20vw"]}
        maxH={"95vh"}
      >
        <CardHeader textAlign="center" width="100%">
          <Heading size="lg">{name}</Heading>
        </CardHeader>
        <CardBody flex="1">
          <Stack
            direction="column"
            justify="space-between"
            divider={<StackDivider />}
            spacing="4"
          >
            <ProjectThumbnail thumbnail={thumbnail} />
            <ProjectAbout about={about} />
            <ProjectTechnologies technologies={technologies} />
            <ProjectLinks links={links} />
          </Stack>
        </CardBody>
      </Card>
    </AnimatedBox>
  );
};

export default ProjectCard;
