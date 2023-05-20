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
  const textColor = useColorModeValue("light.text", "dark.text");

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
              bgColor={"#ffffff"}
              bgClip="text"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="extrabold"
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
          </Stack>
        </Container>
      </Stars>
    </>
  );
}
