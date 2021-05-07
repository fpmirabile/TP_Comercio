import * as React from "react";
import { Card } from "react-bootstrap";
import "./styles.scss";

interface PropTypes {
  name: string;
  image: string;
}

class ProductCard extends React.PureComponent<PropTypes> {
  render() {
    return (
      <div className="product-container">
        <Card>
          <Card.Img
            variant="top"
            src={require("../../../assets/images/products/41.png").default}
          />
          <Card.Body>
            <Card.Title>
                Producto 1
            </Card.Title>
            <Card.Text>
              <span className="actual-price">11$</span>
              <span className="price-without-discount">8$</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
