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

const ProjectCard: React.FC<ProjectRecipe> = ({
  name,
  about,
  technologies,
  thumbnail,
  links,
}) => {
  const { textColor } = useAppColors();
  return (
    <Container>
      <Card
        display="flex"
        flexDirection="column"
        alignItems="center"
        variant="outline"
        boxShadow={"lg"}
        height={"100%"}
        maxHeight={"800px"}
        borderColor={textColor}
        color={textColor}
      >
        <CardHeader textAlign="center" width="100%">
          <Heading size="lg">{name}</Heading>
        </CardHeader>
        <CardBody overflowY="auto">
          <Flex direction="column" justify="space-between" height="100%">
            <Stack divider={<StackDivider />} spacing="4">
              <ProjectThumbnail thumbnail={thumbnail} />
              <ProjectAbout about={about} />
              <ProjectTechnologies technologies={technologies} />
              <ProjectLinks links={links} />
            </Stack>
          </Flex>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ProjectCard;
