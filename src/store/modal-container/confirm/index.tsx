import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Modal, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./styles.scss";

interface PropsType {
  onClose: () => void;
  onConfirm: () => void;
}

class Confirm extends React.PureComponent<PropsType> {
  handleConfirm = () => {
    const { onConfirm } = this.props;
    //Validar el carrito
    onConfirm();
  };

  render() {
    return (
      <div className="checkout">
        <Modal.Header closeButton>
          <Modal.Title>Valide que sus datos sean correctos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <Row className="">
              <Col md="2">
                <label>Nombre:</label>{" "}
              </Col>
              <Col md="4">
                <Form.Group as={Col}>
                  <Form.Control
                    className="text-center"
                    type="text"
                    placeholder="Nicolas"
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col md="2">
                <label>Apellido:</label>{" "}
              </Col>
              <Col md="4">
                <Form.Group as={Col}>
                  <Form.Control
                    className="text-center"
                    type="text"
                    placeholder="Gastiazoro"
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="">
              <Col md="2">
                <label>Dirección:</label>
              </Col>
              <Col md="10">
                <Form.Group as={Col}>
                  <Form.Control
                    className="text-center"
                    type="text"
                    placeholder="Av. Boulevard Buenos Aires 1234"
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="">
              <Col md="2">
                <label>Ciudad:</label>
              </Col>
              <Col md="6">
                <Form.Group as={Col}>
                  <Form.Control
                    className="text-center"
                    type="text"
                    placeholder="Luis Guillon"
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col md="1">
                <label>C.P.:</label>
              </Col>
              <Col md="3">
                <Form.Group as={Col}>
                  <Form.Control
                    className="text-center"
                    type="text"
                    placeholder="1838"
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="2">
                <label>Provincia:</label>
              </Col>
              <Col md="6">
                <Form.Group as={Col}>
                  <Form.Control
                    className="text-center"
                    type="text"
                    placeholder="Buenos Aires"
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="">
              <Col md="2">
                <label>Tarjeta:</label>
              </Col>
              <Col md="6">
                <Form.Group as={Col}>
                  <Form.Control
                    className="text-center"
                    type="text"
                    placeholder="444444XXXXXX4444"
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col md="1">
                <label>Venc.:</label>
              </Col>
              <Col md="3">
                <Form.Group as={Col}>
                  <Form.Control
                    className="text-center"
                    type="text"
                    placeholder="09/24"
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md="4">
              <Alert className="total-factura" variant="warning">
                <b>Total a abonar:     </b> $ 1.500,00
              </Alert>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">Cancelar</Button>
          <Button variant="success">Confirmar</Button>
        </Modal.Footer>
      </div>
    );
  }
}

export default Confirm;
