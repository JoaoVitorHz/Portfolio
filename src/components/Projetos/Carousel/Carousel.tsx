import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CarouselCss } from "./CarouselStyle";

// import required modules
import { Pagination, Navigation } from "swiper";
import Shortly from "../../../assets/projetos/ShortlyThumb.jpg"
import BrindeEuropa from "../../../assets/projetos/BrindeEuropaThumb.jpg"
import Hunddle from "../../../assets/projetos/HuddleThumb.jpg"

export function Carousel() {
  return (
    <CarouselCss>
      <Swiper
        slidesPerView={3}
        spaceBetween={-20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="carouselItem">
                  <img src={Shortly} alt="" />
                <div className="carouselItemText">
                    <span className="nomeItemCarousel">Shortly</span>
                    <span className="descriptionItemCarousel">Linda Landing Page responsiva, feita utilizando React, Typescript, RadixUi, CSS, HTML </span>                
                    <a href="https://bespoke-biscotti-a22532.netlify.app" target="_blank">Acessar <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="carouselItem">
                  <img src={BrindeEuropa} alt="" />
                <div className="carouselItemText">
                    <span className="nomeItemCarousel">Um Brinde na Europa</span>
                    <span className="descriptionItemCarousel">Lading Page responsiva, feita usando React, Typescript, Javascript, HTML e CSS </span>                
                    <a href="https://whimsical-torrone-53cd31.netlify.app" target="_blank">Acessar <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="carouselItem">
                  <img src={Hunddle} alt="" />
                <div className="carouselItemText">
                    <span className="nomeItemCarousel">Hunddle</span>
                    <span className="descriptionItemCarousel">Lading Page responsiva, feita usando React, Typescript, Javascript, HTML e CSS</span>                
                    <a href="https://dainty-muffin-9dd923.netlify.app" target="_blank">Acessar <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
    </CarouselCss>
  );
}
