"use client";

import React from "react";
import { Box, Heading, Text, Icon, Link } from "@chakra-ui/react";

import { VscGithubAlt } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";

interface ProjectLinkProps {
  live: string;
  repo: string;
}

const ProjectLinks: React.FC<ProjectLinkProps> = ({ live, repo }) => {
  return (
    <Box>
      <Box textAlign="center">
        <Link href={live}>
          <Icon as={CgWebsite} w={10} h={10} />
          <Text>View Live</Text>
        </Link>
      </Box>
      <Box textAlign="center">
        <Link href={repo}>
          <Icon as={VscGithubAlt} w={10} h={10} />
          <Text>View Repository</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default ProjectLinks
