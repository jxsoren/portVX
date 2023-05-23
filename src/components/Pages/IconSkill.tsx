"use client";

import { Text, ListItem, Icon, Box, As } from "@chakra-ui/react";
import React from "react";

export interface Skill {
  name: string;
  icon: As;
}

const IconSkill: React.FC<Skill> = ({ name, icon }) => {
  return (
    <ListItem>
      <Box textAlign="center">
        <Icon as={icon} w={40} h={40} />
        <Text>{name}</Text>
      </Box>
    </ListItem>
  );
};

export default IconSkill;
