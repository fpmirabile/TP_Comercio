import * as React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.scss";

interface PropTypes {
  imageName?: string;
  title: string;
  discount?: number;
  price: number;
}

class ProductCard extends React.PureComponent<PropTypes> {
  render() {
    const { imageName, title, discount, price } = this.props;
    return (
      <div className="product-category">
        <Card>
          <Card.Img
            variant="top"
            src={imageName || require(`../../../assets/images/products/template.jpeg`).default}
            alt={title}
            className="product-image"
          />
          <Card.Body>
            <Card.Title>
              <Card.Title>{title}</Card.Title>
            </Card.Title>
            <Card.Text>
              <span className="actual-price">${price}</span>
              {discount && (<span className="price-without-discount">${discount}</span>)}
            </Card.Text>
            <Button className="btn-agregar">
              Agregar
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
