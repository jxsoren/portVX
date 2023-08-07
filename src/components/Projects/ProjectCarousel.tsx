import { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
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

  const width = useBreakpointValue({
    base: "50vw",
    xs: "95vw",
    sm: "95vw",
    md: "90vw",
    lg: "70vw",
    xl: "50vw",
    xxl: "50vw",
  });

  return (
    <Box height="100%" width={width}>
      <Carousel {...carouselProps}>
        {projectDB.map((project) => (
          <Box key={project.name}>
            <ProjectCard
              name={project.name}
              about={project.about}
              shortAbout={project.shortAbout}
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
