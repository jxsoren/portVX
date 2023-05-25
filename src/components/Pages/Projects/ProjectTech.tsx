"use client;";

import { useAppColors } from "@/hooks/useAppColors";
import React from "react";

import {
  Box,
  Text,
  Flex,
  Icon,
  ListItem,
  OrderedList,
  As,
} from "@chakra-ui/react";

interface ProjectTechProps {
  name: string;
  icon: As;
}

const ProjectTech: React.FC<ProjectTechProps> = ({ name, icon }) => {
  const { textColor } = useAppColors();

  return (
      <Box textAlign="center">
        <Icon as={icon} w={4} h={4} />
        <Text fontSize={{ base: "sm" }}>{name}</Text>
      </Box>
  );
};

export default ProjectTech;
