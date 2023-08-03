"use client";

import { useAppColors } from "@/hooks/useAppColors";
import {
  Text,
  Container,
  Heading,
  Flex,
  Box,
  useTheme,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useScrollAnimation, getAnimations } from "@/hooks/useScroll";
const MotionBox = motion(Box);

import Storybook from "./Storybook";

const AboutMe = () => {
  const theme = useTheme();

  const [ref, inView] = useScrollAnimation();
  const { rightToLeft, leftToRight, up } = getAnimations();

  return (
    <Box
      aspectRatio={960 / 340}
      width="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundColor="#01030b"
    >
      <Container
        maxW="2x1"
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
          <Heading
            color="#ffffff"
            fontSize="5xl"
            mb={10}
            mt={10}
            textShadow="2px 2px #111"
            fontWeight="extrabold"
            borderBottom="4px solid #FFFFFF"
          >
            About Me
          </Heading>
        </MotionBox>
        <Flex
          direction="column"
          align="center"
          justify="center"
          padding={4}
          color="#ffffff"
          maxW={{ sm: "80%", md: "80%", lg: "60%", xl: "50%" }}
          fontFamily={theme.fonts.body}
        >
          <MotionBox
            maxWidth="100%"
            ref={ref}
            variants={leftToRight}
            animate={inView ? "show" : "hidden"}
          >
            <Text fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}>
              {`Intrigued by the world of coding and technology, I've dedicated my career to creating efficient and user-friendly solutions. I have a strong knack for problem-solving and enjoy the challenge of breaking down complex issues into manageable tasks.`}
            </Text>
          </MotionBox>

          <MotionBox
            maxWidth="100%"
            ref={ref}
            variants={rightToLeft}
            animate={inView ? "show" : "hidden"}
          >
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
              mt={10}
            >
              {`From meticulously crafting user interfaces to structuring robust backend architectures, my goal is to continuously grow, learn, and push the boundaries of what I can achieve.`}
            </Text>
          </MotionBox>

          <MotionBox
            maxWidth="100%"
            ref={ref}
            variants={leftToRight}
            animate={inView ? "show" : "hidden"}
          >
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
              mt={10}
            >
              {`Apart from developing software, my passions lie in exploring Utah's breathtaking landscapes, delving into literature and philosophy, and maintaining an active routine at the gym.`}
            </Text>
          </MotionBox>
        </Flex>{" "}
      </Container>
    </Box>
  );
};

export default AboutMe;
