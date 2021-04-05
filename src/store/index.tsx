import * as React from "react";
import Header from "./header";
import PageContent from "./content";
import AboutUs from "./about-us";

class Store extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <PageContent />
        <AboutUs />
      </div>
    );
  }
}

export default Store;
