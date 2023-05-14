"use client";

import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" py="6" color="white">
      <Flex alignItems="center" flexDirection={{ base: "column", md: "row" }}>
        <Flex>
          <IconButton
            as={Link}
            href="https://github.com/your-github-username"
            aria-label="Github"
            icon={<FaGithub />}
            mr="4"
            colorScheme="whiteAlpha"
            size="lg"
            isRound
          />
          <IconButton
            as={Link}
            href="https://www.linkedin.com/in/your-linkedin-username"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            mr="4"
            colorScheme="whiteAlpha"
            size="lg"
            isRound
          />
          <IconButton
            as={Link}
            href="mailto:your-email@example.com"
            aria-label="Email"
            icon={<FaEnvelope />}
            colorScheme="whiteAlpha"
            size="lg"
            isRound
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
