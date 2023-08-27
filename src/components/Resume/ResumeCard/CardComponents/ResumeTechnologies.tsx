"use client";

import React from "react";

import {
  Heading,
  Box,
  Icon,
  As,
  useBreakpointValue,
  Text,
  HStack,
} from "@chakra-ui/react";

interface ProjectTechProps {
  name: string;
  icon: As;
  color: string;
}

interface ResumeTechnologiesProps {
  technologies: Array<ProjectTechProps>;
}

const ResumeTech: React.FC<ProjectTechProps> = ({ name, icon, color }) => {
  const iconSize = useBreakpointValue({
    xs: 7,
    sm: 7,
    md: 7,
    lg: 8,
    xl: 8,
    xxl: 8,
  });

  const fontSize = useBreakpointValue({
    xs: "10",
    sm: "12",
    md: "12",
    lg: "12",
    xl: "12",
    xxl: "13",
  });
  return (
    <Box textAlign="center">
      <Icon
        as={icon}
        w={iconSize}
        h={iconSize}
        color={color}
        fontWeight="bold"
      />
      <Text fontSize={fontSize} color={color} fontWeight="bold">
        {name}
      </Text>
    </Box>
  );
};

const ResumeTechnologies: React.FC<ResumeTechnologiesProps> = ({
  technologies,
}) => {
  return (
    <Box>
      <Heading as="h2" textAlign="center" mb={4}>
        Technologies
      </Heading>
      <HStack justify="space-evenly">
        {technologies.map(({ name, color, icon }) => (
          <ResumeTech key={name} name={name} color={color} icon={icon} />
        ))}
      </HStack>
    </Box>
  );
};

export default ResumeTechnologies;
