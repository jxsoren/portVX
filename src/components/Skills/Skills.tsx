"use client";

import React from "react";
import {
  Container,
  Heading,
  Box,
  List,
  Flex,
  Spacer,
  VStack,
  GridItem,
  HStack,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import { skillsDB } from "./skillDB";
import SkillCategory from "./SkillCategory";

import { motion } from "framer-motion";
import { AnimatedBox, getAnimations } from "@/hooks/useScroll";


interface SectionTitleProps {
  children: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    height="100%"
    backgroundColor={useColorModeValue("gray.900", "gray.200")}
    p={4}
    borderRadius="2xl"
    boxShadow="md"
  >
    <Heading
      fontSize="xl"
      fontWeight="bold"
      color={useColorModeValue("gray.100", "gray.800")}
      textTransform="uppercase"
    >
      {children}
    </Heading>
  </Flex>
);

const Skills: React.FC = () => {
  const { languages, frontEnd, frameworks, backEnd, platforms, CCID, cloud } =
    skillsDB;
  const { rightToLeft, leftToRight, up } = getAnimations();

  return (
    <Box
      aspectRatio={960 / 640}
      width="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      background="linear-gradient(#16161d, #1f1f3a, #3b2f4a)"
      overflowX="hidden"
    >
      <Container
        maxW="80vw"
        centerContent
        overflowY="hidden"
        position="relative"
      >
        <AnimatedBox animation={up}>
          <Heading color="#ffffff" fontSize="6xl" mb={10} mt={10}>
            Skills
          </Heading>
        </AnimatedBox>

        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={10}
          w="80%"
          h="80%"
          templateRows="auto"
        >
          <AnimatedBox animation={leftToRight}>
            <SectionTitle>Technologies:</SectionTitle>
          </AnimatedBox>

          <AnimatedBox animation={rightToLeft}>
            <SectionTitle>Systems:</SectionTitle>
          </AnimatedBox>
          <AnimatedBox animation={leftToRight}>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={4}
              height="100%"
              width="100%"
              templateRows="auto"
            >
              <GridItem colSpan={2}>
                <Flex direction="row" justify="space-around">
                  <SkillCategory title="Front-end" skills={frontEnd} />
                  <SkillCategory title="Back-end" skills={backEnd} />
                </Flex>
              </GridItem>
              <GridItem colSpan={2}>
                <Flex direction="row" justify="space-around">
                  <SkillCategory title="Languages" skills={languages} />
                  <SkillCategory title="Frameworks" skills={frameworks} />
                </Flex>
              </GridItem>
            </Grid>
          </AnimatedBox>

          <AnimatedBox animation={rightToLeft}>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={4}
              minHeight="2xs"
              templateRows="auto 2fr"
            >
              <GridItem rowSpan={1} colSpan={1}>
                <Flex direction="column" justify="space-around" height="100%">
                  <SkillCategory title="Platforms" skills={platforms} />
                </Flex>
              </GridItem>
              <GridItem rowSpan={2} colSpan={1} gridColumnStart={2}>
                <Flex direction="column" justify="space-around" height="100%">
                  <SkillCategory title="CCID" skills={CCID} />
                </Flex>
              </GridItem>
              <GridItem
                rowSpan={1}
                colSpan={1}
                gridColumnStart={1}
                gridRowStart={2}
              >
                <Flex direction="column" justify="space-around" height="100%">
                  <SkillCategory title="Cloud" skills={cloud} />
                </Flex>
              </GridItem>
            </Grid>
          </AnimatedBox>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
