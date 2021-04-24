import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";

class Banners extends React.PureComponent {
  render() {
    return (
      <div className="banners">
        <Row>
          <Col md={6}>
            <h4 className="title pagos">Pagos seguros</h4>
            <img alt="medios de pago" src="/images/card.png" />
          </Col>
          <Col md={6}>
            <h4 className="title">Conectate con nosotros</h4>
            <ul className="icon-list">
              <li className="list-item">
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li className="list-item">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="list-item">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Banners;
