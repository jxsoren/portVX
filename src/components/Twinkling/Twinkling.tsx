"use client";

import { Box, keyframes } from "@chakra-ui/react";

const moveBackground = keyframes({
  from: { transform: "translateX(0%)" },
  to: { transform: "translateX(-100%)" },
});

const Twinkling = () => {
  return (
    <>
      <Box
        className="twinkling"
        width="200%"
        height="100%"
        background="transparent url('/stars/twinkling.png') 0%/50% 100% repeat-x"
        position="absolute"
        zIndex={1}
        sx={{
          animation: `${moveBackground} 40s linear infinite`,
        }}
      />
      <Box
        className="twinkling"
        width="200%"
        height="100%"
        background="transparent url('/stars/twinkling.png') 100%/50% 100% repeat-x"
        position="absolute"
        zIndex={1}
        sx={{
          animation: `${moveBackground} 40s linear infinite`,
          animationDelay: "10s",
        }}
      />
    </>
  );
};

export default Twinkling;
