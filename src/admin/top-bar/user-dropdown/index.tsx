import * as React from "react";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import "./styles.scss";

class UserDropdown extends React.PureComponent {
  render() {
    return (
      <Dropdown className="user-dropdown">
        <DropdownToggle>
          <img className="user-avatar" alt="userimg" src={require("../../../assets/images/admin/user/img.jpg").default} />
          <span className="user-name">Usuario Admin</span>
        </DropdownToggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Perfil</Dropdown.Item>
          <Dropdown.Item eventKey="2">Configuracion</Dropdown.Item>
          <Dropdown.Item eventKey="3">Ayuda</Dropdown.Item>
          <Dropdown.Item eventKey="4">Cerrar sesion</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default UserDropdown;
