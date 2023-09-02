"use client";

import React from "react";

import {
  Heading,
  Box,
  Icon,
  As,
  useBreakpointValue,
  Text,
  Flex,
  Grid,
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
    xs: 8,
    sm: 10,
    md: 10,
    lg: 10,
    xl: 12,
    xxl: 10,
  });

  const fontSize = useBreakpointValue({
    xs: "8",
    sm: "12",
    md: "12",
    lg: "12",
    xl: "14",
    xxl: "14",
  });

  return (
    <Box textAlign="center" fontWeight="bold">
      <Icon as={icon} w={iconSize} h={iconSize} color={color} />
      <Text fontSize={fontSize} color={color}>
        {name}
      </Text>
    </Box>
  );
};

const ResumeTechnologies: React.FC<ResumeTechnologiesProps> = ({
  technologies,
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      justifyContent="space-between"
      maxW="100%"
    >
      <Heading as="h2" textAlign="center" mb={4} fontSize={[10, 24, 30]}>
        Technologies
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(7, 1fr)" }}
        gap={4}
        p={2}
        maxW={"100%"}
      >
        {technologies.map(({ name, color, icon }) => (
          <ResumeTech key={name} name={name} color={color} icon={icon} />
        ))}
      </Grid>
    </Flex>
  );
};

export default ResumeTechnologies;
