"use client";

import { useAppColors } from "@/hooks/useAppColors";
import { Box, Center, Text, Container, Heading, Flex } from "@chakra-ui/react";

const AboutMe = () => {
  const { textColor } = useAppColors();
  return (
    <Container maxW="2x1" centerContent>
      <Flex
        direction="column"
        align="center"
        justify="center"
        padding={4}
        color={textColor}
      >
        <Heading>About Me</Heading>
        <Text fontSize="3xl" textColor={textColor}>
          {`Hey there! My name is Josh Sorensen. I'm a software developer based out
        of Salt Lake City, Utah with a passion for solving problems and
        constantly improving. When I'm not behind a keyboard, you can find me
        enjoying the great outdoors, building PCs or working out.`}
        </Text>
      </Flex>
    </Container>
  );
};

export default AboutMe;
