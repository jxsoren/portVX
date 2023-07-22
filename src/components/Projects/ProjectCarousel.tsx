import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Carousel, { ReactElasticCarouselProps } from "react-elastic-carousel";

import ProjectCard from "./ProjectCard/ProjectCard";
import { projectDB } from "./projectDB";

interface Item {
  id: number;
  title: string;
}

const ProjectCarousel = () => {
  const carouselProps: ReactElasticCarouselProps = {
    isRTL: false,
    itemsToShow: 1,
    enableMouseSwipe: false,
    enableSwipe: true,
    easing: "ease",
    disableArrowsOnEnd: true,
    focusOnSelect: false,
    showArrows: true,
    enableTilt: true,
    outerSpacing: 0,
  };

  return (
    <Box height="40vh" width="40vw">
      <Carousel {...carouselProps}>
        {projectDB.map((project, index) => (
          <Box key={project.name}>
            <ProjectCard
              name={project.name}
              about={project.about}
              technologies={project.technologies}
              thumbnail={project.thumbnail}
              links={project.links}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProjectCarousel;
