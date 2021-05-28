import * as React from "react";
import { Card } from "react-bootstrap";
import "./style.scss";

type PropTypes = {
  productName: string;
  imageName: string;
  title:string;
  type: number;
  offer: number;
  price: number;
};

class ProductCard extends React.PureComponent<PropTypes> {
  render() {
    const { imageName, productName,title, type, offer, price } = this.props;
    return (
      <div className="product-category">
        <Card>
          <Card.Img
     
            variant="top"
            src={require("../../../assets/images/products/41.png").default}
          />
          <Card.Body>
            <Card.Title>
              <Card.Title>
                {title}
              </Card.Title>
            </Card.Title>
            <Card.Text>
              <span className="actual-price">${offer}</span>
              <span className="price-without-discount">${price}</span>
            </Card.Text>
            <a href="#" className="btn-agregar">
                Agregar
              </a>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
