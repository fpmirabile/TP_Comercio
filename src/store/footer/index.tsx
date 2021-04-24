import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Column, { MapaSitio } from "./link-column";
import Banners from "./banners";
import "./style.scss";

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col md={3}>
              <Column title="Informacion" links={informacion} />
            </Col>
            <Col md={3}>
              <Column title="Que vendemos?" links={contenido} />
            </Col>
            <Col md={6}>
              <Banners />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;

const informacion: Array<MapaSitio> = [
  {
    title: "Sobre nosotros",
    link: "/about-us",
  },
  {
    title: "Ofertas",
    link: "/deals",
  },
];

const contenido: Array<MapaSitio> = [
  {
    title: "Galletitas y snacks",
    link: "/",
  },
  {
    title: "Harinas",
    link: "",
  },
  {
    title: "Panificados",
    link: "",
  },
  {
    title: "Pastas de arroz",
    link: "",
  },
  {
    title: "Varios",
    link: "",
  },
]