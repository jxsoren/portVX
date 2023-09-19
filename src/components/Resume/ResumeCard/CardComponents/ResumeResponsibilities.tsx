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
    xs: "12",
    sm: "12",
    md: "12",
    lg: "13",
    xl: "15",
    xxl: "15",
  });

  const sectionHeight = useBreakpointValue({
    xs: "100%",
    sm: "100%",
    md: "100%",
    lg: "100%",
    xl: "100%",
    xxl: "100%",
  });

  return (
    <Box height={sectionHeight}>
      <Heading as="h2" textAlign="center" mb={4} fontSize={[10, 20, 26]}>
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
