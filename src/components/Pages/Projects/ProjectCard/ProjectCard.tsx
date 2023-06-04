"use client";

import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Stack,
  StackDivider,
  Heading,
  Box,
  Text,
  Flex,
  Icon,
  ListItem,
  OrderedList,
  Image,
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
      <Card maxW={["90%", "70%"]} maxH="700px">
        <CardHeader>
          <Heading size="md">{name}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <ProjectThumbnail thumbnail={thumbnail} />
            <ProjectAbout about={about} />
            <ProjectTechnologies technologies={technologies} />
            <ProjectLinks links={links} />
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ProjectCard;
