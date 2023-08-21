"use client";

import { Box, useBreakpointValue } from "@chakra-ui/react";

const LayeredSVG = ({ bgI }: { bgI: string }) => {

  const aspectRatio = useBreakpointValue({
    base: 960 / 540,
    sm: 960 / 1200,
    xs: 960 / 1200,
  });

  return (
    <Box
      aspectRatio={aspectRatio}
      width="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundImage={bgI}
    ></Box>
  );
};

export default LayeredSVG;
