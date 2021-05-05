import * as React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Cart from "./cart";
import "./styles.scss";

interface PropTypes {
  onCartClick: () => void;
}

class SearchForm extends React.PureComponent<PropTypes> {
  render() {
    const { onCartClick } = this.props;
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
        <Cart onCartClick={onCartClick} />
      </div>
    );
  }
}

export default SearchForm;
