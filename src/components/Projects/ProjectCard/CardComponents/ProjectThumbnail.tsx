"use client;";

import { Image, useBreakpointValue, Center } from "@chakra-ui/react";
import React from "react";

interface ThumbnailProps {
  thumbnail: string;
}

const ProjectThumbnail: React.FC<ThumbnailProps> = ({ thumbnail }) => {
  const width = useBreakpointValue({
    xs: "100%",
    sm: "100%",
    md: "80%",
    lg: "80%",
    xl: "80%",
    xxl: "80%",
  });

  const height = useBreakpointValue({
    xs: "150px",
    sm: "150px",
    md: "175px",
    lg: "175px",
    xl: "175px",
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
