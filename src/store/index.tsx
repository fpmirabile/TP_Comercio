import * as React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./header";
import PageContent from "./content";
import NotFound from "./error-pages/not-found";

class Store extends React.PureComponent {
  render() {
    return (
      // Browser router porque queremos las url identicas sin #
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <PageContent />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Store;
