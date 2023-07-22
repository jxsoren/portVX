"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ProjectAboutProps {
  about: string;
}
const ProjectAbout: React.FC<ProjectAboutProps> = ({ about }) => {
  return (
    <Flex
      flex="1"
      direction="column"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      <Heading size="xs" textTransform="uppercase" textAlign="center">
        About
      </Heading>
      <Text pt="2" fontSize="17">
        {about}
      </Text>
    </Flex>
  );
};

export default ProjectAbout;
