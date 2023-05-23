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
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaLinux,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";
import { TbBrandTypescript, TbBrandCss3, TbBrandNextjs } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";

const skills: Skill[] = [
  { name: "Javascript", icon: DiJavascript1 },
  { name: "Typescript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3 },
  { name: "Linux", icon: FaLinux },
  { name: "Node", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "Sass", icon: FaSass },
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
          flexWrap="wrap"
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
