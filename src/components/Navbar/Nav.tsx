"use client";

import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAppColors } from "@/hooks/useAppColors";

const Links = ["Projects", "Skills", "About Me"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useAppColors().bgColor,
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { bgColor, textColor } = useAppColors();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={bgColor} px={4} boxShadow="dark-lg" textColor={textColor}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Image src="/name.png" alt="logo" height={32} />
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button variant="ghost" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
