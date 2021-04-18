import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import TopbarCollapse from "./top-bar-collapse";
import SearchForm from "./search-form";
import "./style.scss";

class StoreHeader extends React.PureComponent<RouteComponentProps> {
  handleNavbarClick = () => {
    const { history } = this.props;
    history.push("/");
  }

  render() {
    const { location } = this.props;
    return (
      <header className="header">
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand onClick={this.handleNavbarClick}>Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
          <SearchForm />
          <TopbarCollapse location={location} />
        </Navbar>
      </header>
    );
  }
}

export default withRouter(StoreHeader);
