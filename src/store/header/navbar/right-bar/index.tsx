import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";

type PropsType = {
  location: RouteComponentProps["location"];
};

class RightBar extends React.PureComponent<PropsType> {
  render() {
    const { location } = this.props;
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
