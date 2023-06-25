"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ProjectAboutProps {
  about: string;
}

const ProjectAbout: React.FC<ProjectAboutProps> = ({ about }) => {
  return (
    <Box height="120" >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading size="xs" textTransform="uppercase" textAlign="center">
          About
        </Heading>
        <Text pt="2" fontSize="sm">
          {about}
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectAbout;
