"use client";

import { Box, UnorderedList, ListItem, Heading } from "@chakra-ui/react";

import React from "react";

interface ResumeResponsibilites {
  responsibilities: string[];
}

const ResumeResponsibilites: React.FC<ResumeResponsibilites> = ({
  responsibilities,
}) => {
  return (
    <Box>
      <Heading as="h2" textAlign="center" mb={4}>
        Responsibilities
      </Heading>
      <UnorderedList spacing={3} ml={5} fontSize="lg">
        {responsibilities.map((responsibility, index) => (
          <ListItem key={index}>{responsibility}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ResumeResponsibilites;
