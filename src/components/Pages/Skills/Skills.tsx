"use client";

import {
  Container,
  Flex,
  Heading,
  Text,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import IconSkill from "./IconSkill";
import { skillsDB } from "./skillDB";

const Skills = () => {
  const { textColor } = useAppColors();

  return (
    <Container maxW="2x1" centerContent>
      <Flex
        direction="column"
        align="center"
        justify="center"
        padding={4}
        color={textColor}
        maxW={{ base: "90%", md: "70%" }}
      >
        <Heading>Skills</Heading>
        <Flex
          as={OrderedList}
          direction="row"
          justifyContent="space-between"
          color={textColor}
          listStyleType="none"
          flexWrap="wrap"
        >
          {skillsDB.map((skill) => (
            <IconSkill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Skills;
