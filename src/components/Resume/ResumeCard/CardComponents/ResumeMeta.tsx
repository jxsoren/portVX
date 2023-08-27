"use client";

import React from "react";

import {
  Heading,
  UnorderedList,
  ListItem,
  Box,
  Icon,
  As,
  useBreakpointValue,
  Text,
  Grid,
  Flex,
  Container,
} from "@chakra-ui/react";

import {
  FaBuilding,
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

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

  return (
    <Flex alignItems="center" justifyContent="center">
      {!isSmallScreen ? (
        <>
          <Flex alignItems="center">
            <Box as={FaBuilding} mr="2" />
            <Text fontWeight="bold">{company}</Text>
          </Flex>

          <Flex alignItems="center">
            <Box as={FaBriefcase} mr="2" />
            <Text>{role}</Text>
          </Flex>

          <Flex alignItems="center">
            <Box as={FaMapMarkerAlt} mr="2" />
            <Text>{location}</Text>
          </Flex>

          <Flex alignItems="center">
            <Box as={FaClock} mr="2" />
            <Text>{duration}</Text>
          </Flex>
        </>
      ) : (
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={4}
        >
          <Flex alignItems="center">
            <Box as={FaBuilding} mr="2" />
            <Text fontWeight="bold">{company}</Text>
          </Flex>

          <Flex alignItems="center">
            <Box as={FaBriefcase} mr="2" />
            <Text>{role}</Text>
          </Flex>

          <Flex alignItems="center">
            <Box as={FaMapMarkerAlt} mr="2" />
            <Text>{location}</Text>
          </Flex>

          <Flex alignItems="center">
            <Box as={FaClock} mr="2" />
            <Text>{duration}</Text>
          </Flex>
        </Grid>
      )}
    </Flex>
  );
};

export default ResumeMeta;
