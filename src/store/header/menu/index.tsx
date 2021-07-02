import * as React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const menu: React.FunctionComponent = () => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <NavLink to="/products?category=harinas">Harinas</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/products?category=galletitas">Galletitas</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/products?category=pan">Pan</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/products?category=pastas">Pastas</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/products?category=cervezas">Cervezas</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/products?category=pizzas">Pizzas</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/products?category=budines">Budines</NavLink>
      </li>
      <li className="menu-item">
        <NavLink to="/products?category=otros">Otros</NavLink>
      </li>
    </ul>
  );
};

export default menu;
