import { FC } from "react";
import {
  Box,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

interface StorybookProps {
  onOpen: () => void;
}

const Storybook: FC<StorybookProps> = ({ onOpen }) => {
  return (
    <MotionBox
      position="relative"
      w="300px"
      h="400px"
      bg="brown"
      borderRadius={10}
      color="black"
      boxShadow="2xl"
      p={8}
      onClick={onOpen}
      cursor="pointer"
    >
      <MotionImage
        w="100%"
        h="100%"
        src="/path/to/your/book/cover/image.png" // <-- Replace this with your image path
        borderRadius={8}
      />
    </MotionBox>
  );
};

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookModal: FC<BookModalProps> = ({ isOpen, onClose }) => {
  const openBookAnimation = {
    open: { rotateY: 0, transition: { duration: 1 } },
    closed: { rotateY: -180, transition: { duration: 1 } },
  };

  const contentAnimation = {
    open: { opacity: 1, transition: { delay: 1, duration: 1 } },
    closed: { opacity: 0, transition: { duration: 1 } },
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>My Journal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <MotionBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100%"
            bg="brown"
            borderRadius={10}
            color="black"
            boxShadow="2xl"
            p={8}
            animate={isOpen ? "open" : "closed"}
            variants={openBookAnimation}
          >
            <MotionBox
              animate={isOpen ? "open" : "closed"}
              variants={contentAnimation}
              w="100%"
              h="100%"
              bg="white"
              borderRadius={8}
              p={4}
              overflowY="auto"
            >
              {/* Your book content goes here */}
            </MotionBox>
          </MotionBox>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Book = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Storybook onOpen={onOpen} />
      <BookModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Book;
