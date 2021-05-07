import * as React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserDropdown from "./user-dropdown";
import classNames from "classnames";
import "./styles.scss";

interface PropType {
  expandedSideBar: boolean;
  onHamburgerClick: () => void;
}

class Topbar extends React.PureComponent<PropType> {
  render() {
    const { expandedSideBar, onHamburgerClick } = this.props;
    const topBarClasses = classNames('top-bar', { 'expanded': expandedSideBar })
    return (
      <Navbar className={topBarClasses}>
        <Navbar.Brand onClick={onHamburgerClick}>
          <div className="nav-bar-toggle">
            <Button className="btn-toggle">
              <FontAwesomeIcon icon="bars" />
            </Button>
          </div>
        </Navbar.Brand>
        <Nav className="ml-auto right-buttons">
          <UserDropdown />
        </Nav>
      </Navbar>
    );
  }
}

export default Topbar;
