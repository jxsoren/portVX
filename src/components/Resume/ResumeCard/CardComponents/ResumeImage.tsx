"use client";

import React from "react";

import { Box, useBreakpointValue, Image } from "@chakra-ui/react";

interface ResumeImage {
  image: string;
  imageLong: string;
}

const ResumeImage: React.FC<ResumeImage> = ({ image, imageLong }) => {
  const maxW = useBreakpointValue({
    xs: "90vw",
    sm: "90vw",
    md: "80vw",
    lg: "70vw",
    xl: "60vw",
    xxl: "60vw",
  });
  const isSmallScreen = useBreakpointValue({ base: false, sm: true });

  return (
    <Box
      maxW={maxW}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb={10}
    >
      <Image
        src={isSmallScreen ? imageLong : image}
        alt="Resume"
        objectFit="cover"
        w="100%"
        h="100%"
      />
    </Box>
  );
};

export default ResumeImage;
