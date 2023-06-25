"use client";

import { Box } from "@chakra-ui/react";

const LayeredSVG = ({ bgI }: { bgI: string }) => {
  return (
    <Box
      aspectRatio={960 / 540}
      width="100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundImage={bgI}
    ></Box>
  );
};

export default LayeredSVG;
