import * as React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import RightButtons from "./right-buttons";
import "./styles.scss";

interface PropTypes {
  isAdmin: boolean;
  onCartClick: () => void;
  onAdminClick: () => void;
  onSearchClick: (searched: string) => void;
}

interface StateType {
  search: string;
}

class SearchForm extends React.PureComponent<PropTypes, StateType> {
  state: StateType = {
    search: "",
  };

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.handleSearchButtonClick();
  }

  handleSearchButtonClick = () => this.props.onSearchClick(this.state.search);

  render() {
    const { isAdmin, onCartClick, onAdminClick } = this.props;
    return (
      <div className="search-form">
        <Form className="navbar-form" inline onSubmit={this.handleOnSubmit}>
          <FormControl
            type="text"
            placeholder="Buscar Productos"
            className="navbar-input"
            onChange={this.handleSearchChange}
          />
          <Button
            onClick={this.handleSearchButtonClick}
            className="navbar-button"
            variant="outline-success"
          />
        </Form>
        <RightButtons
          isAdmin={isAdmin}
          onAdminClick={onAdminClick}
          onCartClick={onCartClick}
        />
      </div>
    );
  }
}

export default SearchForm;
