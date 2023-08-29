"use client";

import React from "react";

import { useBreakpointValue, Text, Grid, Flex } from "@chakra-ui/react";

interface ResumeMeta {
  company: string;
  role: string;
  location: string;
  duration: string;
}

const ResumeMeta: React.FC<ResumeMeta> = ({
  company,
  role,
  location,
  duration,
}) => {
  const isSmallScreen = useBreakpointValue({ base: false, sm: true });

  const fontSize = useBreakpointValue({
    xs: "10",
    sm: "12",
    md: "12",
    lg: "12",
    xl: "14",
    xxl: "14",
  });

  return (
    <Flex alignItems="center" justifyContent="center" fontWeight="bold">
      {!isSmallScreen ? (
        <Flex direction="column" fontSize={fontSize}>
          <Flex alignItems="center">
            <Text fontSize="lg" mr="2">
              🏢
            </Text>
            <Text>{company}</Text>
          </Flex>

          <Flex alignItems="center">
            <Text fontSize="lg" mr="2">
              💼
            </Text>
            <Text>{role}</Text>
          </Flex>

          <Flex alignItems="center">
            <Text fontSize="lg" mr="2">
              📌
            </Text>
            <Text>{location}</Text>
          </Flex>

          <Flex alignItems="center">
            <Text fontSize="lg" mr="2">
              🕕
            </Text>
            <Text>{duration}</Text>
          </Flex>
        </Flex>
      ) : (
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={4}
        >
          <Flex alignItems="center">
            <Text fontSize="lg" mr="2">
              🏢
            </Text>
            <Text>{company}</Text>
          </Flex>

          <Flex alignItems="center">
            <Text fontSize="lg" mr="2">
              💼
            </Text>
            <Text>{role}</Text>
          </Flex>

          <Flex alignItems="center">
            <Text fontSize="lg" mr="2">
              📌
            </Text>
            <Text>{location}</Text>
          </Flex>

          <Flex alignItems="center">
            <Text fontSize="lg" mr="2">
              🕕
            </Text>
            <Text>{duration}</Text>
          </Flex>
        </Grid>
      )}
    </Flex>
  );
};

export default ResumeMeta;
