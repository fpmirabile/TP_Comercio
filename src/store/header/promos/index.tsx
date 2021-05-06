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
                alt="slide1"
              />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Promos;
