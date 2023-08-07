"use client";

import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

interface ProjectAboutProps {
  about: string;
  shortAbout: string;
}

const ProjectAbout: React.FC<ProjectAboutProps> = ({ about, shortAbout }) => {
  const isSmallScreen = useBreakpointValue({ base: true, sm: false });

  const fontSize = useBreakpointValue({
    xs: "14",
    sm: "14",
    md: "14",
    lg: "15",
    xl: "15",
    xxl: "16",
  });

  const headingFontSize = useBreakpointValue({
    xs: "xs",
    sm: "xm",
    md: "sm",
    lg: "sm",
    xl: "md",
    xxl: "md",
  });

  return (
    <Flex
      flex="1"
      direction="column"
      alignItems="center"
      justifyContent="center"
      
      minH={["10vh", "15vh", "20vh", "15vh"]}
    >
      <Heading
        size={headingFontSize}
        textTransform="uppercase"
        textAlign="center"
      >
        About
      </Heading>
      <Text pt="2" fontSize={fontSize}>
        {isSmallScreen ? shortAbout : about}
      </Text>
    </Flex>
  );
};

export default ProjectAbout;
