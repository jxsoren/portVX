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
      <Card width={["100%", "100%"]} minHeight="600px">
        <CardHeader>
          <Heading size="md">{name}</Heading>
        </CardHeader>
        <CardBody>
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
