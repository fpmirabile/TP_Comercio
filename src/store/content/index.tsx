import * as React from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import SearchBlock from "./search-block";
import Categories from "./categories";
import TrendingBlock from "./trending-block";
import "./style.scss";

class PageContent extends React.PureComponent {
  render() {
    return (
      <div className="main-content">
        <Helmet>
          <title>Venta de comodidad - Home Page</title>
        </Helmet>
        <Container>
          <SearchBlock />
          <Categories />
        </Container>
        <TrendingBlock />
      </div>
    );
  }
}

export default PageContent;
