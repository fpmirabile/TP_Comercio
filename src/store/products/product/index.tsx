import * as React from "react";
import { Card } from "react-bootstrap";
import "./style.scss";

type PropTypes = {
  productName: string;
  imageName: string;
  type: number;
  offer: number;
  price: number;
};

class Product extends React.PureComponent<PropTypes> {
  render() {
    const { imageName, productName, type, offer, price } = this.props;
    return (
      <div className="product-category">
        <Card>
          <Card.Img
            src={require(`../../../assets/images/product/${imageName}`).default}
            alt={productName}
          />
          <Card.Body>
            <Card.Title>
              <Card.Title>
                {productName} Por Kg
              </Card.Title>
            </Card.Title>
            <Card.Text>
              ${offer} <span>${price}</span>
            </Card.Text>
            <a href="#" className="btn-agregar">
                Agregar
              </a>
          </Card.Body>
          {/*}
          <Card.ImgOverlay>
            <Card.Title>{productName} por {weight}</Card.Title>
            </Card.ImgOverlay>*/}
        </Card>
      </div>
    );
  }
}

export default Product;
