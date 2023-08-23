import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-cards';

import ProjectCard from "../ProjectCard/ProjectCard";
import { projectDB } from "../projectDB";

const ProjectCarousel = () => {
  const width = useBreakpointValue({
    xs: "90vw",
    sm: "90vw",
    md: "80vw",
    lg: "70vw",
    xl: "55vw",
    xxl: "45vw",
  });

  return (
    <Box height="100%" width={width}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {projectDB.map((project) => (
          <SwiperSlide key={project.name}>
            <ProjectCard
              name={project.name}
              about={project.about}
              shortAbout={project.shortAbout}
              technologies={project.technologies}
              thumbnail={project.thumbnail}
              links={project.links}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProjectCarousel;
