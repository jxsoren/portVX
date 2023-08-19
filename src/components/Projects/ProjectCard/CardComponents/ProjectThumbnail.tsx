"use client;";

import { Image, useBreakpointValue, Center } from "@chakra-ui/react";
import React from "react";

interface ThumbnailProps {
  thumbnail: string;
}

const ProjectThumbnail: React.FC<ThumbnailProps> = ({ thumbnail }) => {
  const width = useBreakpointValue({
    xs: "80%",
    sm: "100%",
    md: "100%",
    lg: "100%",
    xl: "100%",
    xxl: "90%",
  });

  const height = useBreakpointValue({
    xs: "150px",
    sm: "200px",
    md: "200px",
    lg: "200px",
    xl: "200px",
    xxl: "200px",
  });

  return (
    <Center>
      <Image
        width={width}
        height={height}
        objectFit="cover"
        objectPosition="center"
        borderRadius={20}
        src={thumbnail}
        alt="Project Thumbnail"
      />
    </Center>
  );
};

export default ProjectThumbnail;
