"use client";

import React from "react";

import { Box, useBreakpointValue, Image } from "@chakra-ui/react";

interface ResumeImage {
  image: string;
  imageLong: string;
}

const ResumeImage: React.FC<ResumeImage> = ({ image, imageLong }) => {
  const maxW = useBreakpointValue({
    xs: "100vw",
    sm: "100vw",
    md: "100vw",
    lg: "100vw",
    xl: "100vw",
    xxl: "100vw",
  });
  const isSmallScreen = useBreakpointValue({ base: false, sm: true });

  return (
    <Box
      maxW={maxW}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb={2}
    >
      <Image
        src={isSmallScreen ? imageLong : image}
        alt="Resume"
        objectFit="cover"
        w="100%"
        h="75%"
      />
    </Box>
  );
};

export default ResumeImage;
