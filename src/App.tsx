import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Store from "./store";
import "./App.scss";

export default class App extends React.PureComponent {
  render() {
    return (
      // Browser router porque queremos las url identicas sin #
      <BrowserRouter>
        <Store />
      </BrowserRouter>
    );
  }
}
