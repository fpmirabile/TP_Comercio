import * as React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.scss";

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <div className="footer-top">
              <Col md={2} sm={6}>
                <h2 className="new-account-title">
                  Empieza una cuenta nueva hoy!
                </h2>
              </Col>
              <Col md={6} sm={6}>
                <Form>
                  <Form.Group controlId="sign-up">
                    <Form.Control
                      as="input"
                      placeholder="Ingresa tu email"
                      custom
                    />
                    <Button className="signup-button">Continuar</Button>
                  </Form.Group>
                </Form>
              </Col>
              <Col md={4} sm={12}>
                <div className="help">
                  <h4>Preguntas? Comunicate al 12 34 56 78.</h4>
                </div>
              </Col>
            </div>
            <div className="footer-bottom">
                <Col md={6} sm={6}>
                </Col>
                <Col md={6} sm={6}>
                </Col>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
