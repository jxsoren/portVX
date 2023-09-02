"use client";

import React from "react";

import { useBreakpointValue, Text, Grid, Flex } from "@chakra-ui/react";

interface ResumeMeta {
  company: string;
  role: string;
  secondaryRole?: string;
  location: string;
  duration: string;
}

const ResumeMeta: React.FC<ResumeMeta> = ({
  company,
  role,
  secondaryRole,
  location,
  duration,
}) => {
  const isXlScreen = useBreakpointValue({ sm: true });

  const fontSize = useBreakpointValue({
    xs: "16",
    sm: "16",
    md: "14",
    lg: "16",
    xl: "18",
    xxl: "20",
  });

  return (
    <Flex alignItems="center" justifyContent="center" fontWeight="bold">
      {isXlScreen ? (
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="1fr 1fr"
          gap={2}
          alignItems="center"
        >
          <Flex alignItems="center" minHeight="2em">
            <Text mr="2">🏢</Text>
            <Text>{company}</Text>
          </Flex>

          <Flex alignItems="center" minHeight="2em">
            <Text mr="2">💼</Text>
            <Flex direction="column">
              <Text>{role}</Text>
              {secondaryRole && <Text>{secondaryRole}</Text>}
            </Flex>
          </Flex>

          <Flex alignItems="center">
            <Text mr="2">📌</Text>
            <Text>{location}</Text>
          </Flex>

          <Flex alignItems="center">
            <Text mr="2">🕕</Text>
            <Text>{duration}</Text>
          </Flex>
        </Grid>
      ) : (
        <Flex direction="column" fontSize={fontSize}>
          <Flex alignItems="center" mb={4}>
            <Text mr="2">🏢</Text>
            <Text>{company}</Text>
          </Flex>

          <Flex alignItems="center" mb={4}>
            <Text mr="2">💼</Text>
            <Flex direction="column">
              <Text>{role}</Text>
              {secondaryRole && (
                <Flex direction="column">
                  <Text>{secondaryRole}</Text>
                </Flex>
              )}
            </Flex>
          </Flex>

          <Flex alignItems="center" mb={4}>
            <Text mr="2">📌</Text>
            <Text>{location}</Text>
          </Flex>

          <Flex alignItems="center" mb={4}>
            <Text mr="2">🕕</Text>
            <Text>{duration}</Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default ResumeMeta;
