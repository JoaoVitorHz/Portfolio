import styled from "styled-components";

export const CarouselCss = styled.div`

.carouselItem{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carouselItem img{
  background-color: purple;
  width: 240px;
  height: 140px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.carouselImg a{
  background-color: yellow;
  font-size: 14px;
}
.nomeItemCarousel{
  color: #000;
  font-size: 17px;
}
.descriptionItemCarousel{
  display: block;
  font-size: 13px;
  margin-bottom: 20px;
}
.carouselItemText{
  width: 240px;
  text-align: start;
  display: block;
}
.carouselItemText a{
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
}
.carouselItemText a i{
  margin-left: 5px;
}

.swiper {
  width: 1024px;
  height: 400px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-button-prev::after,
.swiper-button-next::after {
    color: #000;
    font-size: 32px;
}

@media (max-width: 1030px){
  .swiper {
    width: 800px;
  }
}
@media (max-width: 800px){
  .swiper {
    width: 700px;
  }
}
@media (max-width: 700px){
  .swiper {
    width: 400px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
    color: #000;
    font-size: 32px;
  }
}
@media (max-width: 400px){
  .swiper {
    width: 350px;
  }
}
`;