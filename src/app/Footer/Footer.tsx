"use client";

import {
  Box,
  Flex,
  Image,
  IconButton,
  Link,
  Text,
  Stack,
  Button,
  Tooltip,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Logo = () => {
  return <Image src="/name.png" alt="My Image" height={32} />;
};

const Footer = () => {
  return (
    <Box as="footer" py="6" color="white" w="100%">
      <Box>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("white.200", "white.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("whiie.200", "white.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
      </Box>
      <Flex alignItems="center" justifyContent="center">
        <Flex flexDirection="column" alignItems="center">
          <Container display="flex" flexDirection="row" mx="auto">
            <Tooltip label="GitHub">
              <IconButton
                as={Link}
                href="https://github.com/jxsoren"
                aria-label="Github"
                icon={<FaGithub />}
                mr="4"
                colorScheme="whiteAlpha"
                size="lg"
                isRound
                target="_blank"
              />
            </Tooltip>
            <Tooltip label="LinkedIn" hasArrow placement="top">
              <IconButton
                as={Link}
                href="https://www.linkedin.com/in/josh-sorensen/"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                mr="4"
                colorScheme="whiteAlpha"
                size="lg"
                isRound
                target="_blank"
              />
            </Tooltip>
            <Tooltip label="Email" hasArrow placement="top">
              <IconButton
                as={Link}
                href="mailto:jxsoren@gmail.com"
                aria-label="Email"
                icon={<FaEnvelope />}
                colorScheme="whiteAlpha"
                size="lg"
                isRound
                target="_blank"
              />
            </Tooltip>
          </Container>
          <Text pt={6} fontSize={"sm"} textAlign={"center"}>
            © Josh Sorensen 2023
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
