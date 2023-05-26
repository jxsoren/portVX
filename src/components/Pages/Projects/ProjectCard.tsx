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
  Icon,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";

import React from "react";
import { useAppColors } from "@/hooks/useAppColors";
import { ProjectRecipe } from "./projectDB";
import ProjectTech from "./ProjectTech";

const Project: React.FC<ProjectRecipe> = ({
  name,
  about,
  technologies,
  thumbnail,
  links,
}) => {
  const { textColor } = useAppColors();
  const { live, github } = links;
  return (
    <Container>
      <Card maxW={["90%", "70%"]} maxH="700px">
        <CardHeader>
          <Heading size="md">{name}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                About
              </Heading>
              <Text pt="2" fontSize="sm">
                {about}
              </Text>
            </Box>
            <Flex
              direction="column"
              align="center"
              justify="center"
              justifyContent="space-between"
            >
              <Heading size="xs" textTransform="uppercase">
                Technologies
              </Heading>
              <Flex
                direction="row"
                justifyContent="flex-start"
                color={textColor}
                listStyleType="none"
                flexWrap="wrap"
                gap={4}
              >
                {technologies.map(({ name, icon }) => (
                  <ProjectTech key={name} name={name} icon={icon} />
                ))}
              </Flex>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Project;
