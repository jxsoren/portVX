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
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import { ProjectRecipe } from "./projectDB";
import ProjectTechnologies from "./CardComponents/ProjectTech";
import ProjectAbout from "./CardComponents/ProjectAbout";

const ProjectCard: React.FC<ProjectRecipe> = ({
  name,
  about,
  technologies,
  thumbnail,
  links,
}) => {
  const { textColor } = useAppColors();
  const { live, repo } = links;
  return (
    <Container>
      <Card maxW={["90%", "70%"]} maxH="700px">
        <CardHeader>
          <Heading size="md">{name}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <ProjectAbout about={about} />
            <ProjectTechnologies technologies={technologies} />
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ProjectCard;
