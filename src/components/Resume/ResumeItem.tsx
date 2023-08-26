import React from "react";
import {
  Text,
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Divider,
  VStack,
  Image
} from "@chakra-ui/react";
import { JobRecipe } from "./resumeDB";

interface ResumeItemProps extends JobRecipe {}

const ResumeItem: React.FC<ResumeItemProps> = ({
  company,
  role,
  location,
  duration,
  responsibilities,
  image
}) => {
  return (
    <VStack align="start" spacing={4} mt={10}>
            <Image src={image} alt={company} width="100px" height="100px" mb="4" /> 
      <Box>
        <Heading as="h3" size="md">
          Company
        </Heading>
        <Text>{company}</Text>
      </Box>

      <Box>
        <Heading as="h3" size="md">
          Role
        </Heading>
        <Text>{role}</Text>
      </Box>

      <Box>
        <Heading as="h3" size="md">
          Location
        </Heading>
        <Text>{location}</Text>
      </Box>

      <Box>
        <Heading as="h3" size="md">
          Duration
        </Heading>
        <Text>{duration}</Text>
      </Box>

      <Box>
        <Heading as="h3" size="md">
          Responsibilities
        </Heading>
        <UnorderedList>
          {responsibilities.map((responsibility, index) => (
            <ListItem key={index}>{responsibility}</ListItem>
          ))}
        </UnorderedList>
      </Box>

      <Divider />
    </VStack>
  );
};

export default ResumeItem;
