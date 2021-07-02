import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import * as React from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import cartApi, { CartItem } from "../../../api/models/cart";
import "./styles.scss";

interface PropsType {
  onClose: () => void;
  onCheckout: () => void;
}

interface StateType {
  cartItems: CartItem[];
}

class Carrito extends React.PureComponent<PropsType, StateType> {
  state: StateType = {
    cartItems: [],
  };

  async componentDidMount() {
    const cart = await cartApi.get();
    this.setState({
      cartItems: cart.items,
    });
  }

  handleCheckOut = () => {
    const { onCheckout } = this.props;
    //Validar el carrito
    onCheckout();
  };

  handleQuantityOnItem =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const quantity = Number(e.target.value);
      if (isNaN(quantity) || quantity < 1) {
        return;
      }

      const items = this.state.cartItems;
      const currentItem = items[index];
      currentItem.quantity = quantity;
      currentItem.price = currentItem.product.msrp * quantity;
      if (currentItem.discount) {
        currentItem.discount = (currentItem.product.discount || 0) * quantity
      }      

      items[index] = currentItem;
      // Creo una copia del array, para reemplazar los punteros
      const newArray = items.slice();
      this.setState({
        cartItems: newArray,
      });
    };

  handleRemoveProduct = (prodId: string) => async () => {
  await cartApi.deleteItem(prodId);
    const newCartItems = await cartApi.get();
    this.setState({
      cartItems: newCartItems.items,
    })
  };

  renderProduct = (cartItem: CartItem, index: number) => {
    return (
      <div key={cartItem.product.id} className="product">
        <Col md={6}>
          <div className="product-name">{cartItem.product.name}</div>
          <span className="discount">
            Descuento de ${cartItem.price - cartItem.discount}
          </span>
        </Col>
        <Col md={2}>
          <Form.Control
            onChange={this.handleQuantityOnItem(index)}
            value={cartItem.quantity}
            type="number"
            as="input"
          />
        </Col>
        <Col
          onClick={this.handleRemoveProduct(cartItem.product.id)}
          md={2}
          className="remove"
        >
          <FontAwesomeIcon icon="trash" className="mt-1" />
        </Col>
        <Col md={2}>
          <span>${cartItem.discount ? cartItem.discount : cartItem.price}</span>
        </Col>
      </div>
    );
  };

  render() {
    const { cartItems } = this.state;
    const rowClassName = classNames("products", {
      "more-than-one": cartItems.length > 1,
    });
    const cartTotal = cartItems.reduce(
      (sum, current) =>
        sum + (current.discount ? current.discount : current.price),
      0
    );
    return (
      <div className="checkout">
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="checkout-items-container">
            <Row className={rowClassName}>
              {cartItems.map((item, index) => {
                return this.renderProduct(item, index);
              })}
            </Row>
          </div>
          <div className="control-container">
            <div className="total">Total ${cartTotal}</div>
            <div className="button-container">
              <Button className="btn-pay" onClick={this.handleCheckOut}>
                Pagar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </div>
    );
  }
}

export default Carrito;
