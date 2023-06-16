"use client";

import { useAppColors } from "@/hooks/useAppColors";
import { Text, Container, Heading, Flex } from "@chakra-ui/react";
import Stars from "../Stars/Stars";

const AboutMe = () => {
  return (
    <Stars>
      <Container maxW="2x1" centerContent>
        <Flex
          direction="column"
          align="center"
          justify="center"
          padding={4}
          color='#ffffff'
          maxW={{ base: "80%", md: "60%" }}
          zIndex={2}
        >
          <Heading>About Me</Heading>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
            color='#ffffff'
          >
            {`Hello, I'm Josh Sorensen, a software developer from the beautiful Salt Lake City, Utah. I'm passionate about coding, problem-solving, and technology. From designing user interfaces to developing backend architectures, I strive to improve and innovate in all aspects of my work.`}
          </Text>
          <br />
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
            color='#ffffff'
          >
            {`Outside of coding, I love exploring Utah's great outdoors, building PCs, and staying active. These activities not only balance my life but also provide me with inspiration and motivation in my professional work`}
          </Text>
        </Flex>
      </Container>
    </Stars>
  );
};

export default AboutMe;
