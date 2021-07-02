import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./store";
import Admin from "./admin";
import "./App.scss";


export default class App extends React.PureComponent {
  render() {
    return (
      // Browser router porque queremos las url identicas sin #
      <BrowserRouter>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Store />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
