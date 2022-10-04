import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CarouselCss } from "../Carousel/CarouselStyle";

// import required modules
import { Pagination, Navigation } from "swiper";
import Shortly from "../../../assets/projetos/ShortlyThumb.jpg"
import BrindeEuropa from "../../../assets/projetos/BrindeEuropaThumb.jpg"
import Hunddle from "../../../assets/projetos/HuddleThumb.jpg"
import ContatosMVC from "../../../assets/projetos/ContatoThumb.jpg"
import Tintas from "../../../assets/projetos/TintasThumb.jpg"

export function CarouselBackend() {
  return (
    <CarouselCss>
      <Swiper
        slidesPerView={3}
        spaceBetween={-20}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          720: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1030: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          }
        }}
      >
        <SwiperSlide>
            <div className="carouselItem">
                  <img src={ContatosMVC} alt="" />
                <div className="carouselItemText">
                    <span className="nomeItemCarousel">ContatosMVC</span>
                    <span className="descriptionItemCarousel">Sistema onde você pode fazer um CRUD dos seus contatos. Foi utilizado o PHP, MySql, MVC e POO</span>                
                    <a href="https://github.com/JoaoVitorHz/ContatosMVC" target="_blank">Acessar <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="carouselItem">
                  <img src={Tintas} alt="" />
                <div className="carouselItemText">
                    <span className="nomeItemCarousel">Tintas Area</span>
                    <span className="descriptionItemCarousel">Sistema que calcula a quantidade a area, quantidade de tinta, e quais as melhores latas, para pintar uma sala com 4 paredes</span>                
                    <a href="https://github.com/JoaoVitorHz/Tinta-Area.git" target="_blank">Acessar <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </CarouselCss>
  );
}
