import * as React from "react";
import { Carousel } from "react-bootstrap";
import "./style.scss";

class TrendingBlock extends React.PureComponent {
  renderCarouselItem(tProducts: Array<Product>) {
    return tProducts.map((product, index) => (
      <Carousel.Item key={index}>
        <div className="image-block">{this.renderProductImage(product.image)}</div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  }

  renderProductImage(image: string) {
    return (
      <img
        className="w-100 image"
        // src={
        //   require(`../../../assets/images/trending/${image}`).default
        // }
        alt="slide1"
      />
    );
  }

  render() {
    return (
      <div className="trending">
        <h2 className="title">Productos destacados</h2>
        <Carousel>{this.renderCarouselItem(trendingProducts)}</Carousel>
      </div>
    );
  }
}

export default TrendingBlock;

type Product = { image: string; productName: string };

const trendingProducts: Array<Product> = [
  // pagina 1
  {
    image: "tr1.png",
    productName: "1",
  },
  {
    image: "tr1.png",
    productName: "1",
  },
  {
    image: "tr1.png",
    productName: "1",
  },
  //pagina 2
  {
    image: "tr2.png",
    productName: "2",
  },
  {
    image: "tr2.png",
    productName: "2",
  },
  {
    image: "tr2.png",
    productName: "2",
  },
  //pagina 3
  {
    image: "tr3.png",
    productName: "3",
  },
  {
    image: "tr3.png",
    productName: "3",
  },
  {
    image: "tr3.png",
    productName: "3",
  },
];
