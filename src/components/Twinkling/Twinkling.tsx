"use client";

import { Box, keyframes } from "@chakra-ui/react";

const moveBackground = keyframes({
  from: { transform: "translate3d(0px, 0px, 0px)" },
  to: { transform: "translate3d(50%, 0px, 0px)" },
});

const moveBackgroundBackwards = keyframes({
  from: { transform: "translate3d(50%, 0px, 0px)" },
  to: { transform: "translate3d(0px, 0px, 0px)" },
});

const Twinkling = () => {
  return (
    <>
      <Box
        className="twinkling"
        width="200%"
        height="100%"
        background="transparent url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png') 0%/100% 100% no-repeat"
        position="absolute"
        animation={`${moveBackground} 20s linear infinite`}
        zIndex={1}
      />
      <Box
        className="twinkling"
        width="200%"
        height="100%"
        background="transparent url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png') 0%/100% 100% no-repeat"
        position="absolute"
        animation={`${moveBackgroundBackwards} 20s linear infinite`}
        zIndex={1}
      />
    </>
  );
};

export default Twinkling;
