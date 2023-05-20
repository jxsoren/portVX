"use client";

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react"
import Twinkling from "../Twinkling/Twinkling";

interface StarsProps {
  children: ReactNode;
}

const Stars = ({children}: StarsProps) => {
  return (
    <Box
      width="100%"
      height="100vh"
      background={`black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat`}
      zIndex={0}
      overflow="hidden"
      position="relative"
    >
    <Twinkling />
    {children}
    </Box>
  );
};

export default Stars;
