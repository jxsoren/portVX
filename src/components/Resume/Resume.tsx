"use client";

import {
  Flex,
  Heading,
  Container,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

import ResumeCard from "./ResumeCard/ResumeCard";
import { jobDB } from "./resumeDB";

import ResumeButton from "./ResumeButton";
import ResumeCarousel from "./ResumeCarousel";

const Resume = () => {
  const isSmallScreen = useBreakpointValue({ base: false, sm: true });
  return (
    <Container
      maxW="100%"
      minH="100vh"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      background="linear-gradient(#0a101d, #101728, #1a1f38)"
      overflowX="hidden"
      overflowY="auto"
      p={6}
      centerContent
      marginTop="-30"
    >
      <Heading
        color="#ffffff"
        fontSize="6xl"
        mb={10}
        mt={10}
        textShadow="2px 2px #111"
        fontWeight="extrabold"
        borderBottom="4px solid #FFFFFF"
      >
        Resume
      </Heading>
      <Flex
        direction="column"
        align="center"
        justify="center"
        color="#ffffff"
        maxW={{ sm: "80%", md: "80%", lg: "60%", xl: "70%" }}
      >
        {!isSmallScreen ? (
          <Box>
            {jobDB.map((job) => (
              <ResumeCard
                key={job.company}
                company={job.company}
                role={job.role}
                secondaryRole={job.secondaryRole}
                location={job.location}
                duration={job.duration}
                responsibilities={job.responsibilities}
                technologies={job.technologies}
                image={job.image}
                imageLong={job.imageLong}
              />
            ))}
          </Box>
        ) : (
          <ResumeCarousel />
        )}
        <ResumeButton />
      </Flex>
    </Container>
  );
};

export default Resume;
