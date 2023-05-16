"use client";

import { Box, Image, keyframes } from "@chakra-ui/react";

const moveBackground = keyframes({
  from: { transform: "translate3d(0px, 0px, 0px)" },
  to: { transform: "translate3d(1000px, 0px, 0px)" },
});

const Stars = () => {
  return (
    <Box>
      <Box
        className="stars"
        background={`black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat`}
        height={200}
        width={200}
        zIndex={-1}
      />
    </Box>
  );
};

export default Stars;
