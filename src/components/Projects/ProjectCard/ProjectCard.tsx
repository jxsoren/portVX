"use client";

import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

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
  const maxW = useBreakpointValue({
    xs: "90vw",
    sm: "90vw",
    md: "80vw",
    lg: "70vw",
    xl: "60vw",
    xxl: "60vw",
  });

  const headingSize = useBreakpointValue({
    xs: "xs",
    sm: "xm",
    md: "sm",
    lg: "sm",
    xl: "md",
    xxl: "md",
  });

  return (
    <Card
      display="flex"
      flexDirection="column"
      alignItems="center"
      variant="outline"
      boxShadow={"lg"}
      bgColor="#2D3748"
      borderColor="#4A90E2"
      borderWidth={4}
      borderRadius={20}
      color="white"
      maxW={maxW}
      height="100%"
    >
      <CardHeader textAlign="center" width="100%">
        <Heading size="lg" mb="-5">
          {name}
        </Heading>
      </CardHeader>
      <CardBody flex="1" h="100%">
        <Stack
          direction="column"
          justify="space-between"
          divider={<StackDivider />}
          spacing="3"
        >
          <ProjectThumbnail thumbnail={thumbnail} />
          <ProjectAbout
            about={about}
            shortAbout={shortAbout}
            headingSize={headingSize}
          />
          <ProjectTechnologies
            technologies={technologies}
            headingSize={headingSize}
          />
          <ProjectLinks links={links} headingSize={headingSize} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
