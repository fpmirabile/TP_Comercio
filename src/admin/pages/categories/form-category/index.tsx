import * as React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { Category } from "../../../../api/models/category";
import "./style.scss";

interface PropTypes {
  category?: Category;
  saveButtonTitle: string;
  onCancel: () => void;
  onSubmit: (name: string) => void;
}

interface StateType {
  name: string;
  showValidationError: boolean;
  errorMessage: string;
}

class ProductForm extends React.PureComponent<PropTypes, StateType> {
  state: StateType = {
    name: "",
    showValidationError: false,
    errorMessage: "",
  };

  componentDidMount() {
    const { category } = this.props;
    if (category) {
      this.setState({
        name: category.name,
      });
    }
  }

  handleCategoryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  };

  isValidCategory = () => {
    const { name } = this.state;
    let valid = true;
    // stock == null, porque 0 cuenta como !stock y puede ser 0 tranquilamente.
    if (!name) {
      valid = false;
    }

    let errorMessage = "";
    if (!valid) {
      errorMessage = "Debe llenar el campo nombre";
    }

    this.setState({
      showValidationError: !valid,
      errorMessage,
    });

    return valid;
  };

  submitTrigger = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.isValidCategory()) {
      const { name } = this.state;
      this.props.onSubmit(name);
    }
  };

  render() {
    const { category } = this.props;
    const { showValidationError, errorMessage } = this.state;
    return (
      <div className="category-admin-form">
        <Form
          onSubmit={this.submitTrigger}
          noValidate
          validated={showValidationError}
        >
          <div className="create-category-title justify-content-left">
            <h2>{!!category ? 'Editar' : 'Crear'} Categoria</h2>
          </div>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Nombre de la categoria</Form.Label>
              <Form.Control
                required
                type="text"
                value={this.state.name}
                onChange={this.handleCategoryNameChange}
              />
              <Form.Control.Feedback type="invalid">
                Debe ingresar un nombre de producto
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <div className="error-message">{errorMessage}</div>
          <Button className="btn-crear" variant="success" type="submit">
            {this.props.saveButtonTitle}
          </Button>
          <Button
            onClick={this.props.onCancel}
            className="btn-cancelar"
            variant="success"
            type="submit"
          >
            Cancelar
          </Button>
        </Form>
      </div>
    );
  }
}

export default ProductForm;
