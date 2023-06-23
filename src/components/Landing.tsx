"use client";

import {
  Box,
  Heading,
  Container,
  Stack,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";

import Stars from "./Stars/Stars";

export default function Landing() {
  const bgColor = useColorModeValue("light.background", "dark.background");
  const textColor = useColorModeValue("light.text", "dark.text");

  const theme = useTheme();

  return (
    <Stars>
      <Container maxW={"3xl"} zIndex={6}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            bgColor={"#ffffff"}
            bgClip="text"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="extrabold"
            fontFamily={theme.fonts.heading}
            zIndex={2}
          >
            Hey There!
          </Heading>
          <Heading
            bgColor={"#ffffff"}
            bgClip="text"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="extrabold"
            zIndex={2}
          >
            {`I'm Josh.`}
          </Heading>
          <Heading
            bgColor={"#ffffff"}
            bgClip="text"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            zIndex={2}
          >
            {`A Full-Stack Developer with a knack for solving problems.`}
          </Heading>
        </Stack>
      </Container>
    </Stars>
  );
}
