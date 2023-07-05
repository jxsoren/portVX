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
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";
import { skillsDB } from "./skillDB";
import SkillCategory from "./SkillCatagory";

import { motion } from "framer-motion";
import { useScrollAnimation, getAnimations } from "@/hooks/useScroll";
const MotionBox = motion(Box);

const Skills = () => {
  const { languages, frontEnd, frameworks, backEnd, platforms, CCID, cloud } =
    skillsDB;

  const [ref, inView] = useScrollAnimation();
  const { rightToLeft, leftToRight, up } = getAnimations();

  return (
    <Box
      aspectRatio={960 / 440}
      width="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      background="linear-gradient(#16161d, #1f1f3a, #3b2f4a)"
    >
      <Container
        maxW="80vw"
        centerContent
        overflowX="hidden"
        position="relative"
      >
        <MotionBox
          maxWidth="100%"
          ref={ref}
          variants={up}
          animate={inView ? "show" : "hidden"}
        >
          <Heading color="#ffffff" fontSize="6xl" mb={10} mt={10}>
            Skills
          </Heading>
        </MotionBox>

        <Box
          display="grid"
          gridTemplateRows="auto"
          gridTemplateColumns="1fr 2fr"
          padding={4}
          position="relative"
          gridGap={1}
          w="80%"
          h="80%"
        >
          <GridItem colSpan={1} colStart={1}>
            <MotionBox
              maxWidth="100%"
              ref={ref}
              variants={leftToRight}
              animate={inView ? "show" : "hidden"}
            >
              <Flex
                direction="column"
                align="center"
                justify="center"
                height="100%"
                backgroundColor={useColorModeValue("gray.100", "gray.900")}
                p={4}
                borderRadius="md"
                boxShadow="md"
              >
                <Heading fontSize="xl" fontWeight="semibold">
                  Technologies:
                </Heading>
              </Flex>
            </MotionBox>
          </GridItem>

          <GridItem colSpan={3} colStart={2}>
            <MotionBox
              maxWidth="100%"
              ref={ref}
              variants={leftToRight}
              animate={inView ? "show" : "hidden"}
            >
              <Box mb={4} shadow="base" position="relative">
                <Flex direction="row" justify="space-around">
                  <List>
                    <SkillCategory title="Languages" skills={languages} />
                  </List>
                  <List>
                    <SkillCategory title="Frameworks" skills={frameworks} />
                  </List>
                </Flex>
                <Flex direction="row" justify="space-around">
                  <List>
                    <SkillCategory title="Front-end" skills={frontEnd} />
                  </List>
                  <List>
                    <SkillCategory title="Back-end" skills={backEnd} />
                  </List>
                </Flex>
              </Box>
            </MotionBox>
          </GridItem>
        </Box>

        <Box
          display="grid"
          gridTemplateRows="1fr"
          gridTemplateColumns="1fr 2fr"
          padding={4}
          position="relative"
          w="80%"
          h="80%"
        >
          <GridItem colSpan={3} colStart={2}>
            <MotionBox
              maxWidth="100%"
              ref={ref}
              variants={rightToLeft}
              animate={inView ? "show" : "hidden"}
            >
              <Box mb={4} shadow="base" position="relative">
                <Flex direction="row" justify="space-around" h="full">
                  <List>
                    <HStack alignItems="start">
                      <SkillCategory title="Platforms" skills={platforms} />
                      <SkillCategory title="CCID" skills={CCID} />
                      <SkillCategory title="Cloud" skills={cloud} />
                    </HStack>
                  </List>
                </Flex>
              </Box>
            </MotionBox>
          </GridItem>
          <GridItem colSpan={1} rowStart={1} colStart={1}>
            <MotionBox
              maxWidth="100%"
              ref={ref}
              variants={rightToLeft}
              animate={inView ? "show" : "hidden"}
            >
              <Flex
                direction="column"
                align="center"
                justify="center"
                height="100%"
                backgroundColor={useColorModeValue("gray.100", "gray.900")}
                p={4}
                borderRadius="md"
                boxShadow="md"
              >
                <Heading fontSize="xl" fontWeight="semibold">
                  Systems:
                </Heading>
              </Flex>
            </MotionBox>
          </GridItem>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
