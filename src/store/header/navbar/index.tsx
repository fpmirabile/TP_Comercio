import * as React from "react";
import { Navbar } from "react-bootstrap";
import RightBar from "./right-bar";
import SearchForm from "./search-form";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./styles.scss";

interface PropType extends RouteComponentProps {
  isLogged: boolean;
  isAdmin: boolean;
}

class Nav extends React.PureComponent<PropType> {
  handleNavbarClick = () => {
    const { history } = this.props;
    history.push("/");
  };

  handleOnCartClick = () => {
    const { history, location } = this.props;
    history.push("/modals/checkout", { background: location });
  };

  handleAdminClick = () => {
    const { history } = this.props;
    history.push("/admin");
  };

  handleSearchClick = (searched: string) => {
    const { history } = this.props;
    history.push(`/products?search=${searched}`);
  };

  render() {
    const { location, isLogged, isAdmin } = this.props;
    const disabledCartButton = location.pathname.includes("create-order");
    return (
      <div className="nav">
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand onClick={this.handleNavbarClick}>
            Productos celiacos!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
          <SearchForm
            onSearchClick={this.handleSearchClick}
            isAdmin={isAdmin}
            onAdminClick={this.handleAdminClick}
            onCartClick={this.handleOnCartClick}
            disabledCartButton={disabledCartButton}
          />
          <RightBar isLogged={isLogged} location={location} />
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Nav);
