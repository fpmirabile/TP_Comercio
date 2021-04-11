import * as React from "react";
import { Row, Col } from "react-bootstrap";
import Category from "./category";

class Categories extends React.PureComponent {
  renderCategory = (catId: number, category: string, image: string) => {
    return (
      <Col key={catId} lg={3} sm={6} md={3}>
        <Category categoryName={category} imageName={image} />
      </Col>
    );
  };

  render() {
    return <Row>{temporal.map((category) => this.renderCategory(category.catId, category.categoryName, category.imageName))}</Row>;
  }
}

export default Categories;

const temporal: Array<{ catId: number, imageName: string; categoryName: string }> = [
  {
      catId: 1,
      imageName: "1.png",
      categoryName: "Product"
  },
  {
    catId: 2,
    imageName: "2.png",
    categoryName: "Product"
  },
  {
    catId: 3,
    imageName: "3.png",
    categoryName: "Product"
  },
  {
    catId: 4,
    imageName: "4.png",
    categoryName: "Product"
  },
  {
    catId: 5,
    imageName: "5.png",
    categoryName: "Product"
  },
  {
    catId: 6,
    imageName: "6.png",
    categoryName: "Product"
  },
  {
    catId: 7,
    imageName: "7.png",
    categoryName: "Product"
  },
  {
    catId: 8,
    imageName: "8.png",
    categoryName: "Product"
  },
];
