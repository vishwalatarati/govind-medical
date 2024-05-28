import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Slider1 from "../images/slider1.jpg";
import Slider2 from "../images/slider2.jpg";
import Slider3 from "../images/slider3.jpg";
import Slider4 from "../images/slider4.jpg";

export default function HeroCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100 hero" src={Slider1} alt="First Slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 hero" src={Slider2} alt="Second Slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 hero" src={Slider3} alt="Third Slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 hero" src={Slider4} alt="Third Slide" />
      </Carousel.Item>
    </Carousel>
  );
}
