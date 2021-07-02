import * as React from "react";
import { Helmet } from "react-helmet";
import TopSales from "./hot-sales";
import "./style.scss";

class PageContent extends React.PureComponent {
  render() {
    return (
      <div className="main-content">
        <Helmet>
          <title>Almacen celiaco - los mejores productos! - Inicio</title>
        </Helmet>
        <TopSales />
      </div>
    );
  }
}

export default PageContent;
