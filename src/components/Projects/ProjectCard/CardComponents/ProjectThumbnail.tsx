"use client;";

import { Image, Container } from "@chakra-ui/react";
import React from "react";

interface ThumbnailProps {
  thumbnail: string;
}

const ProjectThumbnail: React.FC<ThumbnailProps> = ({ thumbnail }) => {
  return (
    <Container>
      <Image
        width={400}
        height={250}
        objectFit="cover"
        borderRadius={20}
        src={thumbnail}
        alt="Project Thumbnail"
      />
    </Container>
  );
};

export default ProjectThumbnail;
