"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Stack,
  StackDivider,
  Heading,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

import { useAppColors } from "@/hooks/useAppColors";

const Project = () => {
  const { textColor } = useAppColors();

  return (
    <Container>
      <Card>
        <CardHeader>
          <Heading size="md">Quickcipie</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                About
              </Heading>
              <Text pt="2" fontSize="sm">
                Quickcipe is a sleek and user-friendly recipe creation
                application that simplifies the recipe-making process by
                delivering concise and easy-to-follow instructions. With
                Quickcipe, users can create their own recipes with ease, using
                only the necessary ingredients and steps.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Technologies
              </Heading>
              <Text pt="2" fontSize="sm">
                Node, MongoDB, Mongoose, Express and React.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Project;
