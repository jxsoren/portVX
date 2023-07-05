"use client";

import { Text, ListItem, Icon, Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

import { TechSkill } from "./skillDB";

const IconSkill: React.FC<TechSkill> = ({ name, icon, color }) => {
  return (
    <ListItem m={1}>
      <Box textAlign="center">
        <Icon as={icon} w={10} h={10} color={color} />
        <Text fontSize="small" color={color}>{name}</Text>
      </Box>
    </ListItem>
  );
};

export default IconSkill;
