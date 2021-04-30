import * as React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const menu: React.FunctionComponent = () => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <NavLink to="/product?q=harinas">Harinas</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/product?q=galletitas">Galletitas</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/product?q=pan">Pan</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/product?q=pastas">Pastas</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/product?q=cervezas">Cervezas</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/product?q=pizzas">Pizzas</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/product?q=budines">Budines</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/product?q=otros">Otros</NavLink>
      </li>
    </ul>
  );
};

export default menu;
