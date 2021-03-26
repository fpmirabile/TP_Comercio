import * as React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./style.scss";

class SearchForm extends React.PureComponent {
  
  render() {
    return (
      <Form className="navbar-form" inline>
        <FormControl
          type="text"
          placeholder="Buscar Productos"
          className="navbar-input"
        />
      <Button className="navbar-button" variant="outline-success">Search</Button>
      </Form>
  );
  }
}

export default SearchForm;
