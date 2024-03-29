"use client";

import React from "react";
import {
  Container,
  Heading,
  Box,
  Flex,
  VStack,
  GridItem,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";

import { skillsDB } from "./skillDB";
import SkillCategory from "./SkillCategory";

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
    bg="gray.600"
    p={4}
    borderRadius="2xl"
  >
    <Heading
      fontSize="xl"
      fontWeight="bold"
      color="white"
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

  const isExtraLargeSreen = useBreakpointValue({ base: false, xl: true });
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const isMediumScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box
      width="100%"
      minHeight="70vh"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      background="linear-gradient(#16161e, #2a2a36, #3e3e4e)"
      overflowX="hidden"
      overflowY="auto"
      pb={4}
    >
      <Container
        maxW="80vw"
        height="100%"
        centerContent
        overflowY="hidden"
        overflowX="hidden"
        position="relative"
      >
        <AnimatedBox animation={up}>
          <Heading
            color="#ffffff"
            fontSize="6xl"
            mb={10}
            mt={10}
            textShadow="2px 2px #111"
            fontWeight="extrabold"
            borderBottom="4px solid #FFFFFF"
          >
            Skills
          </Heading>
        </AnimatedBox>

        {isExtraLargeSreen ? (
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={10}
            w="90%"
            h="80%"
            templateRows="auto"
          >
            <AnimatedBox animation={leftToRight}>
              <SectionTitle>Technologies</SectionTitle>
            </AnimatedBox>

            <AnimatedBox animation={rightToLeft}>
              <SectionTitle>Systems</SectionTitle>
            </AnimatedBox>
            <AnimatedBox animation={leftToRight}>
              <Grid
                templateRows="auto"
                templateColumns="repeat(4, 1fr)"
                gap={4}
                height="100%"
                width="100%"
              >
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Front-end" skills={frontEnd} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Back-end" skills={backEnd} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Languages" skills={languages} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Frameworks" skills={frameworks} />
                </GridItem>
              </Grid>
            </AnimatedBox>

            <AnimatedBox animation={rightToLeft}>
              <Grid
                templateRows="auto"
                templateColumns="repeat(2, 1fr)"
                gap={4}
                height="100%"
                width="100%"
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <SkillCategory title="Platforms" skills={platforms} />
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} gridColumnStart={2}>
                  <SkillCategory title="CCID" skills={CCID} />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  gridColumnStart={1}
                  gridRowStart={2}
                >
                  <SkillCategory title="Cloud" skills={cloud} />
                </GridItem>
              </Grid>
            </AnimatedBox>
          </Grid>
        ) : isLargeScreen ? (
          <Grid
            templateColumns="repeat(1, 1fr)"
            gap={10}
            w="80%"
            h="70%"
            templateRows="auto"
          >
            <AnimatedBox animation={leftToRight}>
              <SectionTitle>Technologies</SectionTitle>
            </AnimatedBox>

            <AnimatedBox animation={leftToRight}>
              <Grid
                templateRows="auto"
                templateColumns="repeat(4, 1fr)"
                gap={4}
                height="100%"
                width="100%"
              >
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Front-end" skills={frontEnd} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Back-end" skills={backEnd} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Languages" skills={languages} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Frameworks" skills={frameworks} />
                </GridItem>
              </Grid>
            </AnimatedBox>

            <AnimatedBox animation={rightToLeft}>
              <SectionTitle>Systems</SectionTitle>
            </AnimatedBox>

            <AnimatedBox animation={rightToLeft}>
              <Grid
                templateRows="auto"
                templateColumns="repeat(2, 1fr)"
                gap={4}
                height="100%"
                width="100%"
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <SkillCategory title="Platforms" skills={platforms} />
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} gridColumnStart={2}>
                  <SkillCategory title="CCID" skills={CCID} />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  gridColumnStart={1}
                  gridRowStart={2}
                >
                  <SkillCategory title="Cloud" skills={cloud} />
                </GridItem>
              </Grid>
            </AnimatedBox>
          </Grid>
        ) : isMediumScreen ? (
          <Grid
            templateColumns="repeat(1, 1fr)"
            gap={10}
            w="80%"
            h="70%"
            templateRows="auto"
          >
            <AnimatedBox animation={leftToRight}>
              <SectionTitle>Technologies</SectionTitle>
            </AnimatedBox>

            <AnimatedBox animation={leftToRight}>
              <Grid
                templateRows="auto"
                templateColumns="repeat(4, 1fr)"
                gap={4}
                height="100%"
                width="100%"
              >
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Front-end" skills={frontEnd} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Back-end" skills={backEnd} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Languages" skills={languages} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <SkillCategory title="Frameworks" skills={frameworks} />
                </GridItem>
              </Grid>
            </AnimatedBox>

            <AnimatedBox animation={rightToLeft}>
              <SectionTitle>Systems</SectionTitle>
            </AnimatedBox>

            <AnimatedBox animation={rightToLeft}>
              <Grid
                templateRows="auto"
                templateColumns="repeat(2, 1fr)"
                gap={4}
                height="100%"
                width="100%"
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <SkillCategory title="Platforms" skills={platforms} />
                </GridItem>
                <GridItem rowSpan={2} colSpan={1} gridColumnStart={2}>
                  <SkillCategory title="CCID" skills={CCID} />
                </GridItem>
                <GridItem
                  rowSpan={1}
                  colSpan={1}
                  gridColumnStart={1}
                  gridRowStart={2}
                >
                  <SkillCategory title="Cloud" skills={cloud} />
                </GridItem>
              </Grid>
            </AnimatedBox>
          </Grid>
        ) : (
          <VStack spacing={8} w="100%">
            <Box width="100%">
              <SectionTitle>Technologies</SectionTitle>
            </Box>
            <Grid
              templateColumns="repeat(1, 1fr)"
              gap={4}
              width="100%"
              height="auto"
            >
              <AnimatedBox animation={rightToLeft}>
                <GridItem rowSpan={1} colSpan={1}>
                  <SkillCategory title="Front-end" skills={frontEnd} />
                </GridItem>
              </AnimatedBox>
              <AnimatedBox animation={leftToRight}>
                <GridItem rowSpan={1} colSpan={1}>
                  <SkillCategory title="Back-end" skills={backEnd} />
                </GridItem>
              </AnimatedBox>
              <AnimatedBox animation={rightToLeft}>
                <GridItem rowSpan={1} colSpan={1}>
                  <SkillCategory title="Languages" skills={languages} />
                </GridItem>
              </AnimatedBox>
              <AnimatedBox animation={leftToRight}>
                <GridItem rowSpan={1} colSpan={1}>
                  <SkillCategory title="Frameworks" skills={frameworks} />
                </GridItem>
              </AnimatedBox>
            </Grid>

            <Box width="100%">
              <SectionTitle>Systems</SectionTitle>
            </Box>
            <Grid
              templateColumns="repeat(1, 1fr)"
              gap={4}
              width="100%"
              height="auto"
            >
              <AnimatedBox animation={rightToLeft}>
                <GridItem rowSpan={1} colSpan={1}>
                  <SkillCategory title="Platforms" skills={platforms} />
                </GridItem>
              </AnimatedBox>
              <AnimatedBox animation={leftToRight}>
                <GridItem rowSpan={1} colSpan={1}>
                  <SkillCategory title="CCID" skills={CCID} />
                </GridItem>
              </AnimatedBox>
              <AnimatedBox animation={rightToLeft}>
                <GridItem rowSpan={1} colSpan={1} mb={8}>
                  <SkillCategory title="Cloud" skills={cloud} />
                </GridItem>
              </AnimatedBox>
            </Grid>
          </VStack>
        )}
      </Container>
    </Box>
  );
};

export default Skills;
