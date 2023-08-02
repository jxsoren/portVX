"use client;";

import React from "react";
import { useAppColors } from "@/hooks/useAppColors";
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
}

const ProjectTech: React.FC<ProjectTechProps> = ({ name, icon, color }) => {
  const { textColor } = useAppColors();

  return (
    <Box textAlign="center">
      <Icon as={icon} w={6} h={6} color={color} />
      <Text fontSize={10} color={color}>
        {name}
      </Text>
    </Box>
  );
};

const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({
  technologies,
}) => {
  const { textColor } = useAppColors();

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
      direction="column"
      align="center"
      justify="center"
      justifyContent="space-between"
    >
      <Heading p={2} size={headingFontSize} textTransform="uppercase">
        Technologies
      </Heading>
      <Flex
        direction="row"
        justifyContent="flex-start"
        color={textColor}
        listStyleType="none"
        flexWrap="wrap"
        gap={4}
        pt={2}
      >
        {technologies.map(({ name, icon, color }) => (
          <ProjectTech key={name} name={name} icon={icon} color={color} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ProjectTechnologies;
