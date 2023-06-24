"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

export default function ContactFormWithSocialButtons() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
        bg="linear-gradient(#01030b, #1f1f3a, #01030b)"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
          <Heading
            fontSize={{
              base: "4xl",
              md: "5xl",
            }}
            color={useColorModeValue("gray.700", "whiteAlpha.900")}
          >
            Got something nice to say?
          </Heading>
          <Stack spacing={{ base: 4, md: 8, lg: 20 }} width="100%">
            <Box
              bg={useColorModeValue("white", "gray.700")}
              borderRadius="lg"
              p={8}
              color={useColorModeValue("gray.700", "whiteAlpha.900")}
              shadow="base"
            >
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <BsPerson />
                    </InputLeftElement>
                    <Input type="text" name="name" placeholder="Your Name" />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <MdOutlineEmail />
                    </InputLeftElement>
                    <Input type="email" name="email" placeholder="Your Email" />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    resize="none"
                  />
                </FormControl>

                <Button
                  colorScheme="blue"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: "blue.500",
                  }}
                  width="full"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </Flex>
  );
}
