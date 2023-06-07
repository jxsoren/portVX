"use client;"

import { Image, Box, Container } from "@chakra-ui/react";
import React from "react";

interface ThumbnailProps {
  thumbnail: string;
}

const ProjectThumbnail: React.FC<ThumbnailProps> = ({ thumbnail }) => {
  return (
    <Container>
      <Image
        boxSize="100px"
        objectFit="cover"
        src={thumbnail}
        alt="Project Thumbnail"
      />
    </Container>
  );
};

export default ProjectThumbnail;
