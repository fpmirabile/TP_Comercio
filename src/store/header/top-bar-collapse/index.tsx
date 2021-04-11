import * as React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";

class TopbarCollapse extends React.PureComponent {
  render() {
    return (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/">
            Inicio
          </NavLink>
          <NavLink className="nav-link" to="/about-us">
            Sobre la tienda
          </NavLink>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavLink className="dropdown-item" to="/product/muebles">
              Muebles
            </NavLink>
            <NavLink className="dropdown-item" to="/product/sillones">
              Sillones
            </NavLink>
            <NavLink className="dropdown-item" to="/product/sillas">
              Sillas
            </NavLink>
            <NavLink className="dropdown-item" to="/product/camas">
              Camas
            </NavLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    );
  }
}

export default TopbarCollapse;
