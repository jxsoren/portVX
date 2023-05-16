"use client";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  keyframes,
} from "@chakra-ui/react";

import Stars from "./Stars/Stars";

const moveBackground = keyframes({
  from: { transform: "translate3d(0px, 0px, 0px)" },
  to: { transform: "translate3d(100vh, 0px, 0px)" },
});

export default function Landing() {
  const bgColor = useColorModeValue("light.background", "dark.background");

  return (
    <>
      <Box
        width="100%"
        background={`black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat`}
      >
        <Box
          className="twinkling"
          width="100vh"
          height="70vh"
          background={`transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png") repeat`}
          backgroundSize="100vh"
          position="absolute"
          animation={`${moveBackground} 40s linear infinite`}
        />
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              Hello World!
            </Heading>
            <Stars />
            <Heading
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
            >
              Josh Sorensen
            </Heading>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
