"use client";

import React from "react";

import {
  Text,
  Container,
  Heading,
  Flex,
  Box,
  useTheme,
  useBreakpointValue,
} from "@chakra-ui/react";

import { getAnimations, AnimatedBox } from "@/hooks/useScroll";

interface ResumeItemProps {
  title: string;
  subtitle: string;
  date: string;
  children: string;
}

import { JobRecipe } from "./resumeDB";

const ResumeItem: React.FC<JobRecipe> = ({
  company,
  role,
  location,
  duration,
  responsibilities,
}) => {
  return (
    <Box>
      <Heading as="h2">Company</Heading>
      <Heading as="h3">{company}</Heading>

      <Heading as="h2">Role</Heading>
      <Heading as="h3">{role}</Heading>

      <Heading as="h2">Location</Heading>
      <Heading as="h3">{location}</Heading>

      <Heading as="h2">Duration</Heading>
      <Heading as="h3">{duration}</Heading>

      <Heading as="h2">Responsibilities</Heading>
      <Heading as="h3">{responsibilities}</Heading>
    </Box>
  );
};

export default ResumeItem;
