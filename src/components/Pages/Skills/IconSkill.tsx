"use client";

import { Text, ListItem, Icon, Box } from "@chakra-ui/react";
import React from "react";

import { TechSkill } from "./skillDB";

const IconSkill: React.FC<TechSkill> = ({ name, icon, color }) => {
  return (
    <ListItem m={4}>
      <Box textAlign="center">
        <Icon as={icon} w={40} h={40} color={color} />
        <Text color="#ffffff">{name}</Text>
      </Box>
    </ListItem>
  );
};

export default IconSkill;
