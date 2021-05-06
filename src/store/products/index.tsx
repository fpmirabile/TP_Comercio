import * as React from "react";
import { Row, Col,Card, Container, ButtonGroup, Button } from "react-bootstrap";
import ProductCard from "../common/product-card";
import "./styles.scss";

class Products extends React.PureComponent {
  renderProduct = (
    catId: number,
    type: number,
    title: string,
    product: string,
    image: string,
    offer: number,
    price: number
  ) => {
    return (
      <Col key={catId} lg={3} sm={6} md={3}>
        <ProductCard
          productName={product}
          type={type}
          title={title}
          imageName={image}
          offer={offer}
          price={price}
        />
      </Col>
    );
  };

  render() {
    return (
      <div className="products">
      <Container>
       
        <div className="title">Productos</div>
        
        <Row>
          {temporal.map((product) =>
            this.renderProduct(
              product.catId,
              product.type,
              product.title,
              product.productName,
              product.imageName,
              product.offer,
              product.price
            )
          )}
        </Row>
      </Container>
      </div>
    );
  }
}

export default Products;

const temporal: Array<{
  catId: number;
  imageName: string;
  type: number;
  title: string;
  productName: string;
  offer: number;
  price: number;
}> = [
  {
    catId: 32,
    imageName: "29.png",
    productName: "Banana",
    title: "Banana X Kg",
    type: 1,

    offer: 10.49,
    price: 12.0,
  },
  {
    catId: 2,
    imageName: "36.png",
    productName: "Frutillas",
    title: "Frutillas X Kg",
    type: 1,

    offer: 10.0,
    price: 12.0,
  },
  {
    catId: 3,
    imageName: "3.png",
    productName: "Manzana",
    title: "Manzana X Kg",
    type: 1,
    offer: 10.0,
    price: 12.0,
  },
  {
    catId: 4,
    imageName: "4.png",
    productName: "Product",
    title: "Product X Kg",
    type: 1,

    offer: 10.0,
    price: 12.0,
  },
  {
    catId: 5,
    imageName: "5.png",
    productName: "Product",
    title: "Product X Kg",
    type: 1,

    offer: 10.0,
    price: 12.0,
  },
  {
    catId: 6,
    imageName: "6.png",
    productName: "Product",
    title: "Product X Kg",
    type: 1,

    offer: 10.0,
    price: 12.0,
  },
  {
    catId: 7,
    imageName: "7.png",
    productName: "Product",
    title: "Product X Kg",
    type: 1,

    offer: 10.0,
    price: 12.0,
  },
  {
    catId: 8,
    imageName: "8.png",
    productName: "Product",
    title: "Product X Kg",
    type: 1,

    offer: 10.0,
    price: 12.0,
  },
];
