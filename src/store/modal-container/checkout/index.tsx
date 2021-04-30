import * as React from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import "./styles.scss";

interface PropsType {
  onClose: () => void;
}

class Checkout extends React.PureComponent<PropsType> {
  handleCheckOut = () => {
    const { onClose } = this.props;
    console.log("Checkout de pago");
    onClose();
  };

  render() {
    // const { onClose } = this.props;
    return (
      <div className="checkout">
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="checkout-items-container">
            <Row className="products more-than-one">
              <div className="product">
                <Col md={6}>
                  <div className="product-name">Producto</div>
                  <span className="discount">Descuento de $2</span>
                </Col>
                <Col md={2}>
                  <Form.Control value="1" as="input" />
                </Col>
                <Col md={2}>
                  <img alt="Remove Icon" />
                </Col>
                <Col md={2}>
                  <span>7$</span>
                </Col>
              </div>
              <div className="product">
                <Col md={6}>
                  <div className="product-name">Producto</div>
                  <span className="discount">Descuento de $2</span>
                </Col>
                <Col md={2}>
                  <Form.Control value="1" as="input" />
                </Col>
                <Col md={2}>
                  <img alt="Remove Icon" />
                </Col>
                <Col md={2}>
                  <span>7$</span>
                </Col>
              </div>
            </Row>
          </div>
          <div className="control-container">
            <div className="total">
              Total $14
            </div>
            <div className="button-container">
              <Button className="btn-pay" onClick={this.handleCheckOut}>Pagar</Button>
            </div>
          </div>
        </Modal.Body>
      </div>
    );
  }
}

export default Checkout;
