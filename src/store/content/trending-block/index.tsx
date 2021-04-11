import * as React from "react";
import { Carousel } from "react-bootstrap";
import "./style.scss";

class TrendingBlock extends React.PureComponent {
  render() {
    return (
      <div className="trending">
        <h2 className="title">Productos destacados</h2>
        <Carousel>
          <Carousel.Item>
            <div className="image-block">
              <img
                className="image"
                src={require("../../../assets/images/trending/tr1.png").default}
                alt="slide1"
              />
              <img
                className="image"
                src={require("../../../assets/images/trending/tr1.png").default}
                alt="slide1"
              />
              <img
                className="image"
                src={require("../../../assets/images/trending/tr1.png").default}
                alt="slide1"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-block">
              <img
                className="image"
                src={require("../../../assets/images/trending/tr2.png").default}
                alt="slide1"
              />
              <img
                className="image"
                src={require("../../../assets/images/trending/tr2.png").default}
                alt="slide1"
              />
              <img
                className="image"
                src={require("../../../assets/images/trending/tr2.png").default}
                alt="slide1"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-block">
              <img
                className="image"
                src={require("../../../assets/images/trending/tr3.png").default}
                alt="slide1"
              />
              <img
                className="image"
                src={require("../../../assets/images/trending/tr3.png").default}
                alt="slide1"
              />
              <img
                className="image"
                src={require("../../../assets/images/trending/tr3.png").default}
                alt="slide1"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default TrendingBlock;
