import * as React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export interface MapaSitio {
  title: string;
  link: string;
}

type PropsType = {
  title: string;
  links: Array<MapaSitio>;
};

class LinkColumn extends React.PureComponent<PropsType> {
  render() {
    const { title, links } = this.props;
    return (
      <div className="link-column">
        <h4 className="title">{title}</h4>
        <ul className="list">
          {links.map((link) => (
            <li key={link.link} className="list-link">
              <NavLink className="nav-link" to={link.link}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LinkColumn;
