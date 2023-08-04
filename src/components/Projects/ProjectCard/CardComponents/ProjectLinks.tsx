"use client";

import React from "react";
import {
  Box,
  Heading,
  Text,
  Icon,
  Link,
  As,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

interface LinksProps {
  name: string;
  link: string;
  color: string;
  icon: As;
}
[];

import { useAppColors } from "@/hooks/useAppColors";

interface ProjectLinksProps {
  links: LinksProps[];
}

const Links: React.FC<LinksProps> = ({ name, link, color, icon }) => {
  const iconSize = useBreakpointValue({
    xs: 8,
    sm: 10,
    md: 10,
    lg: 8,
    xl: 10,
    xxl: 12,
  });

  return (
    <Box textAlign="center">
      <Link href={link} isExternal>
        <Icon as={icon} w={iconSize} h={iconSize} color={color} />
        <Text fontSize={12} fontWeight="bold">
          {name}
        </Text>
      </Link>
    </Box>
  );
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
  const { textColor } = useAppColors();

  const headingFontSize = useBreakpointValue({
    xs: "xs",
    sm: "xm",
    md: "sm",
    lg: "sm",
    xl: "md",
    xxl: "md",
  });

  return (
    <Flex direction="column" align="center" justify="center">
      <Heading p={2} size={headingFontSize} textTransform="uppercase">
        Links
      </Heading>
      <Flex direction="row" color={textColor} pt={2} gap={4}>
        {links.map(({ name, link, icon, color }) => (
          <Links key={name} name={name} link={link} color={color} icon={icon} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ProjectLinks;
