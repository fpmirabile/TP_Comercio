import * as React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import RightButtons from "./right-buttons";
import "./styles.scss";

interface PropTypes {
  isAdmin: boolean;
  onCartClick: () => void;
  onAdminClick: () => void;
}

class SearchForm extends React.PureComponent<PropTypes> {
  render() {
    const { isAdmin, onCartClick, onAdminClick } = this.props;
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
        <RightButtons isAdmin={isAdmin} onAdminClick={onAdminClick} onCartClick={onCartClick} />
      </div>
    );
  }
}

export default SearchForm;
