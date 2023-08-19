"use client;";

import React from "react";
import {
  Box,
  Text,
  Flex,
  Icon,
  Heading,
  As,
  useBreakpointValue,
} from "@chakra-ui/react";

interface ProjectTechProps {
  name: string;
  icon: As;
  color: string;
}

interface ProjectTechnologiesProps {
  technologies: Array<ProjectTechProps>;
  headingSize?: string;
}

const ProjectTech: React.FC<ProjectTechProps> = ({ name, icon, color }) => {
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

const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({
  technologies,
  headingSize,
}) => {
  const isExtraSmallScreen = useBreakpointValue({ base: false, xs: true });

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      justifyContent="space-between"
    >
      <Heading p={2} size={headingSize} textTransform="uppercase">
        Technologies
      </Heading>
      {isExtraSmallScreen ? (
        <Flex
          direction="row"
          justifyContent="flex-start"
          color="white"
          flexWrap="wrap"
          gap={4}
          p={2}
        >
          {technologies.map(({ name, icon, color }) => (
            <ProjectTech key={name} name={name} icon={icon} color={color} />
          ))}
        </Flex>
      ) : (
        <Flex
          direction="row"
          justifyContent="flex-start"
          color="white"
          listStyleType="none"
          flexWrap="wrap"
          gap={4}
          p={2}
        >
          {technologies.map(({ name, icon, color }) => (
            <ProjectTech key={name} name={name} icon={icon} color={color} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ProjectTechnologies;
