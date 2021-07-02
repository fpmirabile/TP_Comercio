import * as React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import authApi, { LoginTokens } from "../../../api/models/auth";
import "./styles.scss";

interface PropsType {
  onClose: () => void;
  onLogin: (login: LoginTokens) => void;
}

interface StateType {
  username: string;
  password: string;
  showValidationError: boolean;
  errorMessage: string;
}

class LoginModal extends React.PureComponent<PropsType, StateType> {
  state: StateType = {
    username: "",
    password: "",
    showValidationError: true,
    errorMessage: "",
  };

  isValidForm = (): boolean => {
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({
        showValidationError: true,
        errorMessage: "El usuario o password ingresado es incorrecto.",
      });

      return false;
    }

    this.setState({
      showValidationError: false,
    });
    return true;
  };

  handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (this.isValidForm()) {
      const { username, password } = this.state;
      const { onLogin, onClose } = this.props;
      const loginResponse = await authApi.login(username, password);
      if (loginResponse) {
        onLogin(loginResponse);
        onClose();
        return;
      }

      this.setState({
        showValidationError: true,
        errorMessage: "No pudimos iniciar sesion, por favor intente mas tarde.",
      });
    }
  };

  handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    const { onClose } = this.props;
    const { showValidationError, errorMessage } = this.state;
    return (
      <div className="login">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmitForm}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={this.handleUsernameChange}
                type="email"
                placeholder="Ingresa tu email"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={this.handlePasswordChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {showValidationError && (
              <div>
                <span className="login-validation">{errorMessage}</span>
              </div>
            )}
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
