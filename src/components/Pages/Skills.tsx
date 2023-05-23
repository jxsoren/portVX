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
import IconSkill, { Skill } from "./IconSkill";

// Icons
import { FaReact, FaHtml5, FaCss3, FaLinux, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJavascript } from "react-icons/si";
import { TbBrandTypescript, TbBrandCss3 } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";

const skills: Skill[] = [
  { name: "Javascript", icon: DiJavascript1 },
  { name: "Typescript", icon: TbBrandTypescript },
  { name: "React", icon: FaReact },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3 },
  { name: "Linux", icon: FaLinux },
  { name: "Node", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
];

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
        >
          {skills.map((skill) => (
            <IconSkill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Skills;
