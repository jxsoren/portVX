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
  Text,
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
      bg="black"
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
        src="/path/to/your/book/cover/image.png"
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
              <Text>
                {`Intrigued by the world of coding and technology, I've dedicated my career to creating efficient and user-friendly solutions. I have a strong knack for problem-solving and enjoy the challenge of breaking down complex issues into manageable tasks. From meticulously crafting user interfaces to structuring robust backend architectures, my goal is to continuously grow, learn, and push the boundaries of what I can achieve.`}
              </Text>
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
