import * as React from "react";
import { Navbar } from "react-bootstrap";
import TopbarCollapse from './top-bar-collapse'
import SearchForm from './search-form';

import "./style.scss";

class StoreHeader extends React.PureComponent {
  render() {
    // TODO: cuando la pantalla se hace mobile, hay que mover el form control a un componente distinto y debe ser
    // Posicion absoluta. Este se oculta cuando la pantalla es igual o mayor a una tablet de nuevo.
    return (
      <header className="header">
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
          <SearchForm /> 
          <TopbarCollapse />
        </Navbar>
      </header>
    );
  }
}

export default StoreHeader;
