import * as React from "react";
import { Carousel } from "react-bootstrap";
import "./styles.scss";

class Promos extends React.PureComponent {
  render() {
    return (
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <div className="image-block">
              <img
                className="w-100 image"
                src={require("../../../assets/images/slider/1.jpg").default}
                alt="granos"
              />
            </div>
            <Carousel.Caption>
              <h3>Proba nuestros frutos secos</h3>
              <p>Precios economicos y muy alta calidad</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-block">
              <img
                className="w-100 image"
                src={require("../../../assets/images/slider/2.jpg").default}
                alt="slide2"
              />
            </div>
            <Carousel.Caption>
              <h3>Proximamente venta de vegetales organicos</h3>
              <p>Agosto de 2021</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-block">
              <img
                className="w-100 image"
                src={require("../../../assets/images/slider/3.jpg").default}
                alt="slide3"
              />
            </div>
            <Carousel.Caption>
              <h3>Los mejores jugos naturales</h3>
              <p>Ideales para ver la copa america</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Promos;
