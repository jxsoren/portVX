"use client";

import React from "react";
import { Box, Heading, Text, Icon, Link, As, Flex } from "@chakra-ui/react";

interface LinksProps {
  name: string;
  link: string;
  icon: As;
}
[];

import { useAppColors } from "@/hooks/useAppColors";

interface ProjectLinksProps {
  links: LinksProps[];
}

const Links: React.FC<LinksProps> = ({ name, link, icon }) => {
  return (
    <Box>
      <Box textAlign="center">
        <Link href={link} isExternal>
          <Icon as={icon} w={10} h={10} />
          <Text fontSize="xs">{name}</Text>
        </Link>
      </Box>
    </Box>
  );
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => {
  const { textColor } = useAppColors();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      justifyContent="space-between"
    >
      <Heading size="xs" textTransform="uppercase">
        Links
      </Heading>
      <Flex
        direction="row"
        justifyContent="flex-start"
        color={textColor}
        listStyleType="none"
        flexWrap="wrap"
        gap={4}
      >
        <Flex justifyContent="center" alignItems="center" gap={4}>
          {links.map(({ name, link, icon }) => (
            <Links key={name} name={name} link={link} icon={icon} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectLinks;
