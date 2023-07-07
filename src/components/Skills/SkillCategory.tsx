import {
  Box,
  HStack,
  VStack,
  SimpleGrid,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import IconSkill from "./IconSkill";
import { TechSkill } from "./skillDB";
import React from "react";

interface SkillCategoryProps {
  title: string;
  skills: TechSkill[];
}

import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <Box
      py={2}
      px={2}
      backgroundColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius="2xl"
      boxShadow="md"
      p={4}
      height="100%"
    >
      <VStack justifyContent="center">
        <Heading
          size="lg"
          fontWeight="500"
          textDecoration="underline"
          textDecorationThickness="2px"
          textShadow="1px 1px #000"
          animation={`${fadeIn} 1s ease-in`}
        >
          {title}
        </Heading>
      </VStack>
      <SimpleGrid columns={[1, 2]} spacing={2} height="100%">
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
