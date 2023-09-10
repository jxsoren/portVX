"use client";

import React, { ReactNode, useState } from "react";
import { Box, Flex, HStack, Image } from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ to, children }: { to: string; children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState("");

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  const handleSetInactive = () => {
    setActiveSection("");
  };

  return (
    <ChakraLink
      as={ScrollLink}
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      px={2}
      py={1}
      rounded={"md"}
      onSetActive={handleSetActive}
      onSetInactive={handleSetInactive}
      style={{
        color: activeSection === to ? "red" : undefined,
      }}
      _hover={{
        textDecoration: "none",
        bg: "gray.700",
      }}
    >
      {children}
    </ChakraLink>
  );
};

export default function Nav() {
  const Links = ["Skills", "Projects", "Resume", "About"];

  return (
    <Box
      bg="black"
      px="4"
      textColor="white"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={{ base: "center", md: "space-between" }}
      >
        <HStack spacing={8} alignItems={"center"}>
          <ChakraLink
            as={ScrollLink}
            to={"landing"}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            px={2}
            py={1}
            rounded={"md"}
          >
            <Image src="/name.png" alt="logo" height={32} />
          </ChakraLink>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link} to={link.toLowerCase()}>
                {link}
              </NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
