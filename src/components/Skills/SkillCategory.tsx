import {
  Box,
  HStack,
  VStack,
  SimpleGrid,
  Heading,
  GridItem,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";
import IconSkill from "./IconSkill";
import { TechSkill } from "./skillDB";

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
      backgroundColor="blackAlpha.400"
      borderRadius="2xl"
      boxShadow="md"
      p={4}
      height="100%"
      width="100%"
    >
      <VStack justifyContent="center">
        <Heading
          size="md"
          fontWeight="700"
          animation={`${fadeIn} 1s ease-in`}
          color="white"
          mb={4}
          bg="blackAlpha.400"
          borderRadius="xl"
          boxShadow="xl"
          px={4}
        >
          {title}
        </Heading>
      </VStack>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={[4, 6, 4]}
        mt={4}
        width="60%"
        height="60%"
        margin="auto"
      >
        {skills.map((skill, index) => (
          <GridItem key={skill.name}>
            <IconSkill
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillCategory;
