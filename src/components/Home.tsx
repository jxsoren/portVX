'use client';

import Landing from "../components/Landing";
import Nav from '../components/Navbar/Nav'
import Footer from '../components/Footer/Footer'

import { Box, useColorModeValue } from "@chakra-ui/react";


export default function Home() {
    const bgColor = useColorModeValue("light.background", "dark.background")

  return (
    <Box bgColor={bgColor}>
      <Nav />
      <Landing />
      <Footer />
    </Box>
  );
}