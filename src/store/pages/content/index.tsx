import * as React from "react";
import { Helmet } from "react-helmet";
import { LoggedUser } from "../..";
import TopSales from "./hot-sales";
import "./style.scss";

interface PropTypes {
  loggedUser?: LoggedUser;
}

class PageContent extends React.PureComponent<PropTypes> {
  render() {
    const { loggedUser } = this.props;
    return (
      <div className="main-content">
        <Helmet>
          <title>Almacen celiaco - los mejores productos! - Inicio</title>
        </Helmet>
        <TopSales enableAddButton={!!loggedUser} />
      </div>
    );
  }
}

export default PageContent;
