"use client";

import {
  Box,
  UnorderedList,
  ListItem,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

import React from "react";

interface ResumeResponsibilites {
  responsibilities: string[];
}

const ResumeResponsibilites: React.FC<ResumeResponsibilites> = ({
  responsibilities,
}) => {
  const fontSize = useBreakpointValue({
    xs: "10",
    sm: "12",
    md: "14",
    lg: "14",
    xl: "16",
    xxl: "16",
  });

  return (
    <Box>
      <Heading as="h2" textAlign="center" mb={4} fontSize={[10, 24, 30]}>
        Responsibilities
      </Heading>
      <UnorderedList spacing={3} ml={5} fontSize={fontSize}>
        {responsibilities.map((responsibility, index) => (
          <ListItem key={index}>{responsibility}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ResumeResponsibilites;
