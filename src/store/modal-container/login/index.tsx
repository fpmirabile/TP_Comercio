import * as React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { setItem } from "../../../helpers/local-storage";
import "./styles.scss";

interface PropsType {
  onClose: () => void;
};

interface StateType {
  email: string;
  password: string;
}

class LoginModal extends React.PureComponent<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmitForm = (e: React.FormEvent) => {
    const { email } = this.state;
    const { onClose } = this.props;
    if (email === "admin@admin.com") {
      setItem("isAdmin", "true");
    }
    
    e.preventDefault();
    onClose();
  }

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    const { onClose } = this.props;
    return (
      <div className="login">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmitForm}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={this.handleEmailChange} type="email" placeholder="Ingresa tu email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={this.handlePasswordChange} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Row>
              <Col xs={12} md={6}>
                <Button variant="primary" type="submit">
                  Login
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
    );
  }
}

export default LoginModal;
