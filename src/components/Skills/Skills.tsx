"use client";

import {
  Container,
  Flex,
  Heading,
  Text,
  ListItem,
  Box,
  OrderedList,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import IconSkill from "./IconSkill";
import { skillsDB } from "./skillDB";

const Skills = () => {
  const { textColor } = useAppColors();

  return (
    <Box
      aspectRatio={960 / 540}
      width="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      background="linear-gradient(#16161d, #1f1f3a, #3b2f4a)"
    >
      <Container maxW="2x1" centerContent>
        <Flex
          direction="column"
          align="center"
          justify="center"
          padding={4}
          maxW={{ base: "90%", md: "70%" }}
        >
          <Heading color="#ffffff">Skills</Heading>
          <Flex
            as={OrderedList}
            direction="row"
            justifyContent="space-between"
            listStyleType="none"
            flexWrap="wrap"
          >
            {skillsDB.map((skill) => (
              <IconSkill
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Skills;
