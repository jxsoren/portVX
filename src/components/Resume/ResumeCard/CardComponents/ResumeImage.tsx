"use client";

import React from "react";

import { Box, useBreakpointValue, Image } from "@chakra-ui/react";

interface ResumeImage {
  image: string;
  imageLong: string;
}

const ResumeImage: React.FC<ResumeImage> = ({ image, imageLong }) => {
  const imageChoice = useBreakpointValue({ base: image, md: imageLong });

  const imageHeight = useBreakpointValue({
    xs: "150px",
    sm: "250px",
    md: "100%",
    lg: "100px",
    xl: "100px",
    xxl: "100px",
  });

  const imageWidth = useBreakpointValue({
    xs: "100%",
    sm: "100%",
    md: "100%",
    lg: "100%",
    xl: "100%",
    xxl: "100%",
  });

  return (
    <Box
      maxW="100%"
      maxH={imageHeight}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb="2"
    >
      <Image
        src={imageChoice}
        alt="Resume"
        objectFit="contain"
        w={imageWidth}
        h={imageHeight}
      />
    </Box>
  );
};

export default ResumeImage;
