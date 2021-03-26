import * as React from "react";
import Header from "./header";
import PageContent from "./content";

class Store extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <PageContent />
      </div>
    );
  }
}

export default Store;
