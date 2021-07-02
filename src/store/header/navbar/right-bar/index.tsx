import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";

interface PropsTypes {
  location: RouteComponentProps["location"];
  isLogged: boolean;
};

class RightBar extends React.PureComponent<PropsTypes> {
  renderOrderNav = () => {
    return (
      <div className="ml-auto nav-right-bar">
        <Nav>
          <NavLink
            className="nav-link"
            to={{
              pathname: "/orders",
            }}
          >
            Mis ordenes
          </NavLink>
        </Nav>
      </div>
    );
  }

  render() {
    const { location, isLogged } = this.props;
    if (isLogged) {
      return this.renderOrderNav();
    }

    return (
      <div className="ml-auto nav-right-bar">
        <Nav>
          <NavLink
            className="nav-link"
            to={{
              pathname: "/modals/login",
              state: { background: location },
            }}
          >
            Login
          </NavLink>
          <NavLink
            className="nav-link"
            to={{
              pathname: "/modals/sign-up",
              state: { background: location },
            }}
          >
            Registrarse
          </NavLink>
        </Nav>
      </div>
    );
  }
}

export default RightBar;
