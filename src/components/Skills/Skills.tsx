"use client";

import {
  Container,
  Flex,
  Heading,
  Text,
  ListItem,
  Box,
  SimpleGrid,
  OrderedList,
  Grid,
  GridItem,
  HStack,
  useColorModeValue,
  List,
  VStack,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import IconSkill from "./IconSkill";
import { skillsDB } from "./skillDB";

import SkillCategory from "./SkillCatagory";

const Skills = () => {
  const { textColor } = useAppColors();

  const { languages, frontEnd, frameworks, backEnd, platforms, CCID, cloud } =
    skillsDB;

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
        <Heading color="#ffffff" fontSize="6xl" mb={20}>
          Skills
        </Heading>

        <Grid
          templateRows="repeat(2, 2fr)"
          templateColumns="repeat(2, 2fr)"
          gap={4}
          padding={4}
          maxW={{ base: "90%", md: "70%" }}
          position="relative"
          gridRowGap={1} 
        >
          <GridItem rowSpan={1} colSpan={1} rowStart={1} colStart={2}>
            <Box
              mb={4}
              shadow="base"
              borderWidth="2px"
              borderColor={useColorModeValue("gray.200", "gray.500")}
              borderRadius={"x2"}
              background="linear-gradient(#6600FF, #00CC99, #6600FF)"
              position="relative"
              width={{ base: "100%", md: "100%" }}
              top={0}
              left={0}
            >
              <List spacing={2} textAlign="start">
                <SkillCategory title="Languages" skills={languages} />
                <SkillCategory title="Frameworks" skills={frameworks} />
                <SkillCategory title="Front-end" skills={frontEnd} />
                <SkillCategory title="Back-end" skills={backEnd} />
              </List>
            </Box>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1} rowStart={2} colStart={1}>
            <Box
              mb={4}
              shadow="base"
              borderWidth="2px"
              borderColor={useColorModeValue("gray.200", "gray.500")}
              borderRadius={"x2"}
              background="linear-gradient(#00CC99, #6600FF, #00CC99)"
              position="relative"
              top={0}
              left={0}
            >
              <List spacing={3} textAlign="start">
                <SkillCategory title="Platforms" skills={platforms} />
                <SkillCategory title="Cloud" skills={cloud} />
                <SkillCategory title="CCID" skills={CCID} />
              </List>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
