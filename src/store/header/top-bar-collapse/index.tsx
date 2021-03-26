import * as React from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
  } from "react-bootstrap";

import "./style.scss";

class TopbarCollapse extends React.PureComponent {
  render() {
    return (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Sobre la tienda</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Muebles</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Sillones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sillas</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="#action/3.4">Camas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    );
  }
}

export default TopbarCollapse;
