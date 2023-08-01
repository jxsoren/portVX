"use client;";

import { Image, Container, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

interface ThumbnailProps {
  thumbnail: string;
}

const ProjectThumbnail: React.FC<ThumbnailProps> = ({ thumbnail }) => {
  const width = useBreakpointValue({
    base: "100%",
    xs: "100%",
    sm: "100%",
    md: "100%",
    lg: "100%",
    xl: "100%",
    xxl: "100%",
  });

  const height = useBreakpointValue({
    base: "250px",
    xs: "250px",
    sm: "250px",
    md: "250px",
    lg: "250px",
    xl: "250px",
    xxl: "300px",
  });

  return (
    <Container display="flex" justifyContent="center">
      <Image
        width={width}
        height={height}
        objectFit="cover"
        objectPosition="center"
        borderRadius={20}
        src={thumbnail}
        alt="Project Thumbnail"
      />
    </Container>
  );
};

export default ProjectThumbnail;
