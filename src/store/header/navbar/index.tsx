import * as React from "react";
import { Navbar } from "react-bootstrap";
import RightBar from "./right-bar";
import SearchForm from "./search-form";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./styles.scss";

class Nav extends React.PureComponent<RouteComponentProps> {
  handleNavbarClick = () => {
    const { history } = this.props;
    history.push("/");
  }

  handleOnCartClick = () => {
    const { history, location } = this.props;
    history.push("/modals/checkout", { background: location });
  }

  render() {
    const { location } = this.props;
    return (
      <div className="nav">
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand onClick={this.handleNavbarClick}>
            Productos celiacos!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
          <SearchForm onCartClick={this.handleOnCartClick} />
          <RightBar location={location} />
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Nav);