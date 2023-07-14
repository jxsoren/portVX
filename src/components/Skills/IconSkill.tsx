"use client";

import { Text, ListItem, Icon, Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

import { TechSkill } from "./skillDB";

const IconSkill: React.FC<TechSkill> = ({ name, icon, color }) => {
  return (
    <Box textAlign="center">
      <Icon as={icon} w={100} h={20} color={color} />
      <Text fontSize="small" color={color}>
        {name}
      </Text>
    </Box>
  );
};

export default IconSkill;
