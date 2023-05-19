"use client";

import {
  Box,
  Heading,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import Stars from "./Stars/Stars";

export default function Landing() {
  const bgColor = useColorModeValue("light.background", "dark.background");

  return (
    <>
      <Stars>
        <Container maxW={"3xl"} zIndex={6}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize={{ base: "4xl", md: "6xl" }} // Changed the fontSize to be responsive
              fontWeight="extrabold"
              zIndex={2}
            >
              Hey There! 👋
            </Heading>
            <Heading
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize={{ base: "4xl", md: "6xl" }} // Changed the fontSize to be responsive
              fontWeight="extrabold"
              zIndex={2}
            >
              {`I'm Josh.`}
            </Heading>
          </Stack>
        </Container>
      </Stars>
    </>
  );
}
