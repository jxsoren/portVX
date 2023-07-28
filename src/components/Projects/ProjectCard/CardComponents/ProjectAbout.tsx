"use client";

import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

interface ProjectAboutProps {
  about: string;
  shortAbout: string;
}
const ProjectAbout: React.FC<ProjectAboutProps> = ({ about, shortAbout }) => {
  const isSmallScreen = useBreakpointValue({ base: true, sm: false });
  return (
    <Flex
      flex="1"
      direction="column"
      alignItems="center"
      justifyContent="center"
      p={4}
      minH={["10vh", "15vh", "26vh", "20vh"]}
    >
      <Heading size="xs" textTransform="uppercase" textAlign="center">
        About
      </Heading>
      <Text pt="2" fontSize={["16"]}>
        {isSmallScreen ? shortAbout : about}
      </Text>
    </Flex>
  );
};

export default ProjectAbout;
