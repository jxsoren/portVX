import {
  Container,
  Flex,
  Heading,
  Text,
  ListItem,
  OrderedList,
  Icon,
  IconProps,
  Box,
  As,
} from "@chakra-ui/react";

import { FaReact, FaHtml5, FaCss3, FaLinux, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCss3, SiExpress } from "react-icons/si";
import { TbBrandTypescript, TbBrandCss3 } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { DiJavascript1 } from "react-icons/di";
import { ImHtmlFive } from "react-icons/im";
import { GrCss3 } from "react-icons/gr";

import { useAppColors } from "@/hooks/useAppColors";
import React from "react";

interface IconSkillProps {
  name: string;
  icon: As;
}

const IconSkill: React.FC<IconSkillProps> = ({ name, icon }) => {
  return (
    <ListItem>
      <Box textAlign="center">
        <Icon as={icon} w={40} h={40} />
        <Text>{name}</Text>
      </Box>
    </ListItem>
  );
};

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
          <IconSkill name={"Javascript"} icon={DiJavascript1} />
          <IconSkill name={"Typescript"} icon={TbBrandTypescript} />
          <IconSkill name={"React"} icon={FaReact} />
          <IconSkill name={"HTML"} icon={FaHtml5} />
          <IconSkill name={"CSS"} icon={FaCss3} />
          <IconSkill name={"Linux"} icon={FaLinux} />
          <IconSkill name={"Node"} icon={FaNodeJs} />
          <IconSkill name={"SiExpress"} icon={SiExpress} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Skills;
