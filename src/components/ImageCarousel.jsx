import React from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
function ImageCarousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default ImageCarousel;

const Carousel = styled(Slider)`
  margin-top: 20px;
`;

const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
