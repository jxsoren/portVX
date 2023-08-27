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

interface ProjectLinksProps {
  links: LinksProps[];
  headingSize?: string;
}

const Links: React.FC<LinksProps> = ({ name, link, color, icon }) => {
  const iconSize = useBreakpointValue({
    base: 8,
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

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links, headingSize }) => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading size={headingSize} textTransform="uppercase">
        Links
      </Heading>
      <Flex direction="row" color="white" pt={2} gap={4}>
        {links.map(({ name, link, icon, color }) => (
          <Links key={name} name={name} link={link} color={color} icon={icon} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ProjectLinks;
