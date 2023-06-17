"use client";

import { useAppColors } from "@/hooks/useAppColors";
import { Text, Container, Heading, Flex, Box } from "@chakra-ui/react";
import Stars from "../Stars/Stars";

const AboutMe = () => {
  return (
    <Box
      aspectRatio={960 / 540}
      width="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundColor="#183664"
    >
      <Container maxW="2x1" centerContent>
        <Heading mt={5} color="#ffffff">
          About Me
        </Heading>
        <Flex
          direction="column"
          align="center"
          justify="center"
          padding={4}
          color="#ffffff"
          maxW={{ base: "90%", md: "70%" }}
        >
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
            mt={10}
          >
            {`Greetings! My name is Josh Sorensen, a determined problem solver based out of Salt Lake City, Utah.`}
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
            mt={10}
          >
            {`Intrigued by the world of coding and technology, I've dedicated my career to creating efficient and user-friendly solutions. I have a strong knack for problem-solving and enjoy the challenge of breaking down complex issues into manageable tasks. From meticulously crafting user interfaces to structuring robust backend architectures, my goal is to continuously grow, learn, and push the boundaries of what I can achieve.`}
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
            mt={10}
          >
            {`Apart from developing software, my passions lie in exploring Utah's breathtaking landscapes, delving into self-help literature, and maintaining an active routine at the gym`}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutMe;
