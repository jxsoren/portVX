import {
  Text,
  ListItem,
  Icon,
  Box,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

import { TechSkill } from "./skillDB";

const IconSkill: React.FC<TechSkill> = ({ name, icon, color }) => {
  const iconHeight = useBreakpointValue({
    xs: "60px",
    sm: "50px",
    md: "50px",
    lg: "50px",
  });

  const iconWidth = useBreakpointValue({
    xs: "60px",
    sm: "50px",
    md: "50px",
    lg: "60px",
  });

  const fontSize = useBreakpointValue({
    xs: "10px",
    sm: "16px",
    md: "14px",
    lg: "12px",
  });

  return (
    <Box textAlign="center">
      <Icon as={icon} w={iconWidth} h={iconHeight} color={color} />
      <Text fontSize={fontSize} color={color} fontWeight="bold">
        {name}
      </Text>
    </Box>
  );
};

export default IconSkill;
