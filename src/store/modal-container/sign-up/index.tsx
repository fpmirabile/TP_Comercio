import * as React from "react";
import { Modal, Form, Button, Col } from "react-bootstrap";
import "./styles.scss";

interface PropsType {
  onClose: () => void;
};

class SignUp extends React.PureComponent<PropsType> {
  handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
  }

  render() {
    const { onClose } = this.props;
    return (
      <div className="login">
        <Modal.Header closeButton>
          <Modal.Title>Registracion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmitForm}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formGroupRepeatPassword">
              <Form.Label>Repetir Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Row>
              <Col xs={12} md={6}>
                <Button variant="primary" type="submit">
                  Registrarse
                </Button>
              </Col>
              <Col className="cancel-button-container" xs={12} md={6}>
                <Button variant="secondary" onClick={onClose}>
                  Cerrar
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Modal.Body>
      </div>
    )
  }
}

export default SignUp;
