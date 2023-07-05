import { Box, HStack, SimpleGrid, Heading } from "@chakra-ui/react";

import IconSkill from "./IconSkill";
import { TechSkill } from "./skillDB";

import React from "react";

interface SkillCategoryProps {
  title: string;
  skills: TechSkill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <Box py={1} px={1}>
  <HStack justifyContent="center">
    <Heading
      size="lg"
      fontWeight="600"
      textDecoration="underline"
    >
      {title}
    </Heading>
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
