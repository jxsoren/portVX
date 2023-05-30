"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ProjectAboutProps {
  about: string;
}

const ProjectAbout: React.FC<ProjectAboutProps> = ({ about }) => {
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        About
      </Heading>
      <Text pt="2" fontSize="sm">
        {about}
      </Text>
    </Box>
  );
};

export default ProjectAbout
