import { useColorModeValue } from "@chakra-ui/react";

export const useAppColors = () => {
  const bgColor = useColorModeValue("light.background", "dark.background");
  const textColor = useColorModeValue("light.text", "dark.text");
  return {
    bgColor,
    textColor,
  };
};
