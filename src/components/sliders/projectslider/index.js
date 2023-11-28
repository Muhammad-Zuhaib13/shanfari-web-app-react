import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import ProjectCard from "../../card/projectcard";
import { Autoplay } from "swiper/modules";
const ProjectSlider = (props) => {
  const { sliderData } = props;

  return (
    <div className="project-slider-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        loop={true}
        speed={1000}
        breakpoints={{
          320:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
          540:{
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2200, disableOnInteraction: false }}
        className="mySwiper"
      >
        {sliderData.map((cardData) => {
          const { id, imgSrc, titleText, detailsText } = cardData;
          return (
            <SwiperSlide key={id} virtualIndex={id}>
              <ProjectCard
                imgSrc={imgSrc}
                titleText={titleText}
                detailsText={detailsText}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
