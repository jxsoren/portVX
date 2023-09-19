import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import ResumeCard from "./ResumeCard/ResumeCard";
import { jobDB } from "./resumeDB";

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
        {jobDB.map((job) => (
          <SwiperSlide key={job.company}>
            <ResumeCard
              company={job.company}
              role={job.role}
              location={job.location}
              duration={job.duration}
              responsibilities={job.responsibilities}
              technologies={job.technologies}
              image={job.image}
              imageLong={job.imageLong}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProjectCarousel;
