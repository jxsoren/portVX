import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";

import IconSkill from "./IconSkill";
import { TechSkill } from "./skillDB";

import React from "react";

interface SkillCategoryProps {
  title: string;
  skills: TechSkill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <Box py={4} px={12}>
      <HStack justifyContent="center">
        <Text
          fontSize="2xl"
          fontWeight="700"
          textDecoration="underline"
        >
          {title}
        </Text>
      </HStack>
      <SimpleGrid columns={2} spacing={4}>
        {skills.map((skill) => (
          <IconSkill
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillCategory;
