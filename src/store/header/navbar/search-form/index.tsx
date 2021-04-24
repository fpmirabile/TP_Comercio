import * as React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Cart from "./cart";
import "./styles.scss";

class SearchForm extends React.PureComponent {
  render() {
    return (
      <div className="search-form">
        <Form className="navbar-form" inline>
          <FormControl
            type="text"
            placeholder="Buscar Productos"
            className="navbar-input"
          />
          <Button className="navbar-button" variant="outline-success" />
        </Form>
        <Cart />
      </div>
    );
  }
}

export default SearchForm;
