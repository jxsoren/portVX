"use client";

import {
  Box,
  Flex,
  Image,
  IconButton,
  Link,
  Text,
  Tooltip,
  Container,
  Heading,
  List,
} from "@chakra-ui/react";

import ResumeItem from "./ResumeItem";
import { jobDB } from "./resumeDB";

const Resume = () => {
  return (
    <Box
      width="100%"
      minHeight="70vh"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      background="linear-gradient(#16161e, #2a2a36, #3e3e4e)"
      overflowX="hidden"
      overflowY="auto"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        padding={4}
        color="#ffffff"
        maxW={{ sm: "80%", md: "80%", lg: "60%", xl: "70%" }}
      >
        {jobDB.map((job) => (
          <ResumeItem
            key={job.company}
            company={job.company}
            role={job.role}
            location={job.location}
            duration={job.duration}
            responsibilities={job.responsibilities}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Resume;
