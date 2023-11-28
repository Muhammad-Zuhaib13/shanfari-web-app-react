import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SliderImgOne from "../../../utils/assets/images/banner-slider-img-01.jpg";
import SliderImgTwo from "../../../utils/assets/images/banner-slider-img-02.jpg";
import SliderImgThree from "../../../utils/assets/images/banner-slider-img-03.jpg";
import { EffectFade, EffectCreative } from "swiper/modules";

const BannerSlider = () => {
  const sliderImgs = [
    { id: 1, src: SliderImgOne },
    { id: 2, src: SliderImgTwo },
    { id: 3, src: SliderImgThree },
    { id: 4, src: SliderImgOne },
    { id: 5, src: SliderImgTwo },
    { id: 6, src: SliderImgThree },
  ];
  return (
    <div className="banner-slider-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
       
        // creativeEffect={{
        //   prev: {
        //     shadow: true,
        //     translate: [0, 0, -400],
        //   },
        //   current:{
        //     translate: [0, "100%", 0],
        //   },
        //   next: {
        //     translate: [0, 0, -400],
        //   },
        // }}
        // effect={'creative'}
        modules={[Navigation, Autoplay, EffectFade, EffectCreative]}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        navigation={true}
        speed={1000}
        className="banner-slider"
      >
        {sliderImgs.map((data) => {
          const { id, src } = data;
          return (
            <SwiperSlide
              key={id}
              virtualIndex={id}
              className="banner-img-slide"
            >
              <img src={src} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
