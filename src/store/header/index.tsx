import * as React from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/fontawesome-free-solid";
import Nav from "./navbar";
import Menu from "./menu";
import Promos from "./promos";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./style.scss";

interface PropTypes extends RouteComponentProps {
  isLogged: boolean;
  isAdmin: boolean;
}

class StoreHeader extends React.PureComponent<PropTypes> {
  render() {
    const { isLogged, isAdmin } = this.props;
    return (
      <div>
        <Nav isAdmin={isAdmin} isLogged={isLogged} />
        <header className="header">
          <div className="ordering">
            <div className="logo">
              <NavLink className="home-logo" to="/">
                <span className="logo-letra">Almacen</span>
                Celiaco
              </NavLink>
            </div>
            <div className="navigation">
              <ul className="navegation-list">
                <li className="navegation-item">
                  <NavLink className="item" to="/">
                    Inicio <i>/</i>
                  </NavLink>
                </li>
                <li className="navegation-item">
                  <NavLink className="item" to="/products">
                    Productos <i>/</i>
                  </NavLink>
                </li>
                <li className="navegation-item">
                  <NavLink className="item" to="/about-us">
                    Sobre Nosotros <i>/</i>
                  </NavLink>
                </li>
                <li className="navegation-item">
                  <NavLink className="item" to="/deals">
                    Ofertas <i>/</i>
                  </NavLink>
                </li>
              </ul>
              <div className="contact">
                <ul className="list">
                  <li className="item">
                    <FontAwesomeIcon icon={faPhone as IconProp} />
                    <a href="tel:0123234567">(+0123) 234 567</a>
                  </li>
                  <li className="item">
                    <FontAwesomeIcon icon={faEnvelope as IconProp} />
                    <a href="mailto:store@grocery.com">store@grocery.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="menu-promo-container">
          <Menu />
          <Promos />
        </div>
      </div>
    );
  }
}

export default withRouter(StoreHeader);
