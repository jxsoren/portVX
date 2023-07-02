"use client";

import {
  Container,
  Heading,
  Box,
  GridItem,
  Center,
  List,
  Flex,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import { skillsDB } from "./skillDB";
import SkillCategory from "./SkillCatagory";

import { motion } from "framer-motion";
import { useScrollAnimation, getAnimations } from "@/hooks/useScroll";
const MotionBox = motion(Box);

const Skills = () => {
  const borderColor = useColorModeValue("gray.200", "gray.500");
  const { languages, frontEnd, frameworks, backEnd, platforms, CCID, cloud } =
    skillsDB;

  const [ref, inView] = useScrollAnimation();
  const { rightToLeft, leftToRight } = getAnimations();

  return (
    <Box
      aspectRatio={960 / 540}
      width="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      background="linear-gradient(#16161d, #1f1f3a, #3b2f4a)"
    >
      <Container maxW="100vw" centerContent>
        <Heading color="#ffffff" fontSize="6xl" mb={20}>
          Skills
        </Heading>

        <Box
          display="grid"
          gridTemplateRows="repeat(2, 1fr)"
          gridTemplateColumns="1fr 3fr"
          gap={4}
          padding={4}
          position="relative"
          gridRowGap={1}
          w="100%"
        >
          <GridItem rowSpan={1} colSpan={1} rowStart={1} colStart={1}>
            <MotionBox
              ref={ref}
              variants={leftToRight}
              animate={inView ? "show" : "hidden"}
            >
              <Center height="full">
                <Heading>Technologies</Heading>
              </Center>
            </MotionBox>
          </GridItem>

          <GridItem rowSpan={1} colSpan={3} rowStart={1} colStart={2}>
            <MotionBox
              ref={ref}
              variants={leftToRight}
              animate={inView ? "show" : "hidden"}
            >
              <Box
                mb={4}
                shadow="base"
                borderWidth="2px"
                borderColor={useColorModeValue("gray.200", "gray.500")}
                borderRadius={"x2"}
                position="relative"
              >
                <Flex direction="column" justify="center" h="full">
                  <Flex direction="row" justify="space-around">
                    <List spacing={2}>
                      <SkillCategory title="Languages" skills={languages} />
                    </List>
                    <List spacing={2}>
                      <SkillCategory title="Frameworks" skills={frameworks} />
                    </List>
                  </Flex>
                  <Flex direction="row" justify="space-around">
                    <List spacing={1}>
                      <SkillCategory title="Front-end" skills={frontEnd} />
                    </List>
                    <List spacing={2}>
                      <SkillCategory title="Back-end" skills={backEnd} />
                    </List>
                  </Flex>
                </Flex>
              </Box>
            </MotionBox>
          </GridItem>

          <GridItem rowSpan={1} colSpan={3} rowStart={2} colStart={1}>
            <MotionBox
              ref={ref}
              variants={rightToLeft}
              animate={inView ? "show" : "hidden"}
            >
              <Box
                mb={4}
                shadow="base"
                borderWidth="2px"
                borderColor={useColorModeValue("gray.200", "gray.500")}
                borderRadius={"x2"}
                position="relative"
                top={0}
                left={0}
              >
                <Flex direction="row" justify="flex-start" h="full">
                  <List spacing={3} pr={5}>
                    <VStack alignItems="start">
                      <SkillCategory title="Platforms" skills={platforms} />
                      <SkillCategory title="Cloud" skills={cloud} />
                    </VStack>
                  </List>
                  <List spacing={3}>
                    <SkillCategory title="CCID" skills={CCID} />
                  </List>
                </Flex>
              </Box>
            </MotionBox>
          </GridItem>

          <GridItem rowSpan={1} colSpan={1} rowStart={2} colStart={4}>
            <MotionBox
              ref={ref}
              variants={rightToLeft}
              animate={inView ? "show" : "hidden"}
            >
              <Center height="full">
                <Heading>System</Heading>
              </Center>
            </MotionBox>
          </GridItem>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
