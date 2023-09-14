"use client";

import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

const ResumeButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pdfPath = "/resume/JoshSorensenResume.pdf";

  return (
    <>
      <Button onClick={onOpen} mt={4} backdropBlur="#0a101d" size="lg">
        View Resume PDF
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent w="100vw" h="100vh">
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
              <object
                data={pdfPath}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p>
                  It appears you do not have a PDF plugin for this browser. You
                  can still{" "}
                  <a
                    href={pdfPath}
                    style={{
                      color: "blue",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    click here{" "}
                  </a>
                  to download the PDF file.
                </p>
              </object>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ResumeButton;
