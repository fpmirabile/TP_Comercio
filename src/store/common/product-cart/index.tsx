import * as React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItem } from "../../../api/models/cart";
import "./style.scss";

interface PropTypes {
  item: CartItem;
  onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveProduct: () => void;
  hideInputs?: boolean;
}

class ProductCart extends React.PureComponent<PropTypes> {
  render() {
    const {
      item: cartItem,
      onQuantityChange,
      onRemoveProduct,
      hideInputs,
    } = this.props;
    return (
      <Row className="product">
        <Col md={5}>
          <div className="product-name">{cartItem.product.name}</div>
          {cartItem.discount && (
            <span className="discount">
              Descuento de ${cartItem.price - cartItem.discount}
            </span>
          )}
        </Col>
        {!hideInputs && (
          <Col md={3}>
            <Form.Control
              onChange={onQuantityChange}
              value={cartItem.quantity}
              type="number"
              as="input"
            />
          </Col>
        )}
        {!hideInputs && (
          <Col onClick={onRemoveProduct} md={2} className="remove">
            <FontAwesomeIcon icon="trash" className="mt-1" />
          </Col>
        )}
        <Col md={hideInputs ? 6: 2}>
          <span>${cartItem.discount ? cartItem.discount : cartItem.price}</span>
        </Col>
      </Row>
    );
  }
}

export default ProductCart;
