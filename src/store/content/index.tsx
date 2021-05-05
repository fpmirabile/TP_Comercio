import * as React from "react";
import { Helmet } from "react-helmet";
import Promos from "./promos";
import HotSales from "./hot-sales";
import "./style.scss";

class PageContent extends React.PureComponent {
  render() {
    return (
      <div className="main-content">
        <Helmet>
          <title>Almacen celiaco - los mejores productos! - Inicio</title>
        </Helmet>
        <Promos />
        <HotSales products={{ name: "asd", image: "asd"}} />
      </div>
    );
  }
}

export default PageContent;
