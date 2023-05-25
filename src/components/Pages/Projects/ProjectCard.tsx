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
      <Card>
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
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Technologies
              </Heading>
              <Flex
                direction="row"
                justifyContent="space-between"
                color={textColor}
                listStyleType="none"
                flexWrap="wrap"
              >
                {technologies.map(({ name, icon }) => (
                  <ProjectTech key={name} name={name} icon={icon} />
                ))}
              </Flex>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Project;
