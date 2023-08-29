"use client";

import {
  Text,
  Container,
  Heading,
  Flex,
  Box,
  useTheme,
  useBreakpointValue,
} from "@chakra-ui/react";

import { getAnimations, AnimatedBox } from "@/hooks/useScroll";

const AboutMe = () => {
  const theme = useTheme();

  const { up, down, rightToLeft, leftToRight } = getAnimations();

  const breakpoint = useBreakpointValue({
    base: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    xxl: "xxl",
  });

  const shouldAnimate = breakpoint !== "xs" && breakpoint !== "sm";

  return (
    <Box
      width="100%"
      aspectRatio={960 / 300}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      background="linear-gradient(#01030b, #0a0a15, #1a1a2e)"
    >
      <Container maxW="2x1" centerContent position="relative">
        <AnimatedBox animation={down}>
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
        </AnimatedBox>
        <Flex
          direction="column"
          align="center"
          justify="center"
          padding={4}
          color="#ffffff"
          maxW={{ sm: "80%", md: "80%", lg: "60%", xl: "70%" }}
          fontFamily={theme.fonts.body}
        >
          <AnimatedBox animation={shouldAnimate ? leftToRight : undefined}>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
              lineHeight="tall"
              css={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {`Intrigued by the world of coding and technology, I've dedicated my career to creating efficient and user-friendly solutions. I have a strong knack for problem-solving and enjoy the challenge of breaking down complex issues into manageable tasks.`}
            </Text>
          </AnimatedBox>

          <AnimatedBox animation={shouldAnimate ? rightToLeft : undefined}>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
              mt={10}
              lineHeight="tall"
              css={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {`From meticulously crafting user interfaces to structuring robust backend architectures, my goal is to continuously grow, learn, and push the boundaries of what I can achieve.`}
            </Text>
          </AnimatedBox>

          <AnimatedBox animation={shouldAnimate ? leftToRight : undefined}>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
              mt={10}
              lineHeight="tall"
              css={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {`Apart from developing software, my passions lie in exploring Utah's breathtaking landscapes, delving into literature and philosophy, and maintaining an active routine at the gym.`}
            </Text>
          </AnimatedBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutMe;
