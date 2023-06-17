"use client";

import { Box, Heading, Text, Container } from "@chakra-ui/react";

const LayeredSVG = () => {
  return (
    <Box
      aspectRatio={960 / 540}
      width="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundImage="url('/SVG/layered-waves-haikei (3).svg')"
    ></Box>
  );
};

export default LayeredSVG;
