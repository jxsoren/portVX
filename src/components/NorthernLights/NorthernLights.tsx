import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { keyframes } from "@emotion/react";

const move = keyframes`
  0% {background-position: 0%;}
  50% {background-position: 100%;}
  100% {background-position: 0%;}
`;

interface NorthernLightsProps {
  children: ReactNode;
}

const NorthernLights = ({ children }: NorthernLightsProps) => {
  return (
    <Box
      width="100%"
      height="100vh"
      position="relative"
      overflow="hidden"
      background="url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png'), linear-gradient(89.93deg, rgba(158,255,255,0.5) 14.42%, rgba(255,255,255,0.5) 87.58%)"
      backgroundBlendMode="screen"
      animation={`${move} 30s infinite`}
      opacity={0.5}
      zIndex={0}
    >
      {children}
    </Box>
  );
};

export default NorthernLights;
