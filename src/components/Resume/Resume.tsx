"use client";

import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useDisclosure,
  Heading,
  Container,
} from "@chakra-ui/react";

import ResumeCard from "./ResumeCard";
import { jobDB } from "./resumeDB";

const Resume = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pdfPath = "/resume/JoshSorensenResume.pdf";

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
        {jobDB.map((job) => (
          <ResumeCard
            key={job.company}
            company={job.company}
            role={job.role}
            location={job.location}
            duration={job.duration}
            responsibilities={job.responsibilities}
            image={job.image}
            imageLong={job.imageLong}
          />
        ))}

        <Button onClick={onOpen} mt={4} backdropBlur="#0a101d" size="lg">
          View Resume PDF
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="2xl" color="white">
              {"Josh Sorensen's Resume"}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                h="90vh"
                p={2}
              >
                <iframe
                  src={pdfPath}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                ></iframe>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Container>
  );
};

export default Resume;
