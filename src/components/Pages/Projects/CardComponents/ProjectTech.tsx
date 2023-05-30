"use client;";

import { useAppColors } from "@/hooks/useAppColors";
import React from "react";

import { Box, Text, Flex, Icon, Heading, As } from "@chakra-ui/react";

interface ProjectTechProps {
  name: string;
  icon: As;
}

interface ProjectTechnologiesProps {
  technologies: Array<ProjectTechProps>;
}

const ProjectTech: React.FC<ProjectTechProps> = ({ name, icon }) => {
  const { textColor } = useAppColors();

  return (
    <Box textAlign="center">
      <Icon as={icon} w={4} h={4} />
      <Text fontSize={10}>{name}</Text>
    </Box>
  );
};

const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({
  technologies,
}) => {
  const { textColor } = useAppColors();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      justifyContent="space-between"
    >
      <Heading size="xs" textTransform="uppercase">
        Technologies
      </Heading>
      <Flex
        direction="row"
        justifyContent="flex-start"
        color={textColor}
        listStyleType="none"
        flexWrap="wrap"
        gap={4}
      >
        {technologies.map(({ name, icon }, index) => (
          <ProjectTech key={`${name}-${index}`} name={name} icon={icon} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ProjectTechnologies;
