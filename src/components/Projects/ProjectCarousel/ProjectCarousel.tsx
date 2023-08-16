import { Box, useBreakpointValue } from "@chakra-ui/react";

import ProjectCard from "../ProjectCard/ProjectCard";
import { projectDB } from "../projectDB";

import "./carouselOverrides.css";

interface Item {
  id: number;
  title: string;
}

const ProjectCarousel = () => {

  const width = useBreakpointValue({
    base: "50vw",
    xs: "90vw",
    sm: "90vw",
    md: "80vw",
    lg: "70vw",
    xl: "45vw",
    xxl: "45vw",
  });

  return (
    <Box height="100%" width={width}>
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
    </Box>
  );
};

export default ProjectCarousel;
