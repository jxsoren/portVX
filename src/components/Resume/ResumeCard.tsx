import React from "react";
import {
  Text,
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Image,
  Flex,
  useBreakpointValue,
  Card,
  CardBody,
  Stack,
  Grid,
  Divider,
} from "@chakra-ui/react";
import { JobRecipe } from "./resumeDB";

import {
  FaBuilding,
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

interface ResumeCardProps extends JobRecipe {}

const ResumeCard: React.FC<ResumeCardProps> = ({
  company,
  role,
  location,
  duration,
  responsibilities,
  image,
  imageLong,
}) => {
  const maxW = useBreakpointValue({
    xs: "90vw",
    sm: "90vw",
    md: "80vw",
    lg: "70vw",
    xl: "60vw",
    xxl: "60vw",
  });
  const isSmallScreen = useBreakpointValue({ base: false, sm: true });

  return (
    <Card
      display="flex"
      flexDirection="column"
      alignItems="center"
      variant="outline"
      boxShadow={"lg"}
      bgColor="#2A2F4A"
      borderColor="#3A3F5A"
      borderWidth={4}
      borderRadius={20}
      color="white"
      maxW={maxW}
      height="100%"
      mb={4}
    >
      <CardBody>
        <Flex justifyContent="center" width="100%">
          {isSmallScreen ? (
            <Image src={imageLong} alt={company} mb="4" boxSize="60%" />
          ) : (
            <Image src={image} alt={company} mb="4" boxSize="200px" />
          )}
        </Flex>
        <Divider mb={6} />

        <Stack spacing="4">
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

          <Box>
          <Divider mb={4} />
            <UnorderedList>
              {responsibilities.map((responsibility, index) => (
                <ListItem key={index}>{responsibility}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ResumeCard;
