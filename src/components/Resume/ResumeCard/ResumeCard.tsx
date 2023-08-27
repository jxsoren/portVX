import React from "react";
import {
  useBreakpointValue,
  Card,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { JobRecipe } from "../resumeDB";

import ResumeTechnologies from "./CardComponents/ResumeTechnologies";
import ResumeImage from "./CardComponents/ResumeImage";
import ResumeMeta from "./CardComponents/ResumeMeta";
import ResumeResponsibilites from "./CardComponents/ResumeResponsibilities";

interface ResumeCardProps extends JobRecipe {}

const ResumeCard: React.FC<ResumeCardProps> = ({
  company,
  role,
  location,
  duration,
  responsibilities,
  technologies,
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
        <Stack divider={<StackDivider />} spacing="4">
          <ResumeImage image={image} imageLong={imageLong} />
          <ResumeMeta
            company={company}
            role={role}
            location={location}
            duration={duration}
          />
          <ResumeResponsibilites responsibilities={responsibilities} />
          <ResumeTechnologies technologies={technologies} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ResumeCard;
