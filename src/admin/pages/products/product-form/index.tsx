import * as React from "react";
import { Col, Form, InputGroup, Button, Card } from "react-bootstrap";
import { Category } from "../../../../api/models/category";
import { Product } from "../../../../api/models/product";
import "./style.scss";

interface PropTypes {
  product?: Product;
  categories: Category[];
  saveButtonTitle: string;
  onCancel: () => void;
  onSubmit: (
    name: string,
    price: number,
    categoryId: string,
    stock: number,
    discount?: number,
    image?: string
  ) => void;
}

interface StateType {
  name: string;
  price: number;
  discount?: number;
  stock: number;
  showValidationError: boolean;
  errorMessage: string;
  base64TextString: string;
  imageUrl?: string;
  categoryId: string;
  fileInputError: string;
}

class ProductForm extends React.PureComponent<PropTypes, StateType> {
  state: StateType = {
    name: "",
    price: 0,
    discount: undefined,
    stock: 0,
    showValidationError: false,
    errorMessage: "",
    base64TextString: "",
    categoryId: "",
    fileInputError: "",
    imageUrl: undefined,
  };

  componentDidMount() {
    const { product } = this.props;
    if (product) {
      this.setState({
        name: product.name,
        categoryId: product.category.id,
        price: product.msrp,
        stock: product.stock,
        discount: product.discount,
        base64TextString: "",
        imageUrl: product.imageUrl,
      });
    }
  }

  handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const stockN = Number(value);
    if (isNaN(stockN)) {
      return;
    }

    this.setState({
      stock: stockN,
    });
  };

  handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const priceNumber = Number(value);
    if (isNaN(priceNumber)) {
      return;
    }

    this.setState({
      price: priceNumber,
    });
  };

  handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const discountNumber = Number(value);
    if (isNaN(discountNumber)) {
      return;
    }

    this.setState({
      discount: discountNumber,
    });
  };

  handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      categoryId: event.target.value,
    });
  };

  handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) {
      return;
    }

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        base64TextString: reader.result as string,
        fileInputError: "",
      });
    };
    reader.onerror = (error) => {
      this.setState({
        fileInputError: "El archivo que seleccionaste no es soportado.",
      });
    };
  };

  isValidProduct = () => {
    const { name, price, categoryId, stock, discount } = this.state;
    let valid = true;
    let campos = [];
    // stock == null, porque 0 cuenta como !stock y puede ser 0 tranquilamente.
    if (!name || !price || !categoryId || stock == null) {
      valid = false;
    }

    if (categoryId === "-1") {
      valid = false;
      campos.push("categoria");
    }

    if (price <= 0) {
      valid = false;
      campos.push("precio");
    }

    if (stock <= 0) {
      valid = false;
      campos.push("stock");
    }

    if (discount && (discount > price || discount < 0)) {
      valid = false;
      campos.push("descuento");
    }
    let errorMessage = "";

    if (!valid) {
      errorMessage = `Hay campos vacios. ${
        campos.length
          ? "Se pueden ver errores en los siguientes campos: " +
            campos.join(", ")
          : ""
      }`;
    }

    this.setState({
      showValidationError: !valid,
      errorMessage,
    });

    return valid;
  };

  submitTrigger = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.isValidProduct()) {
      const {
        name,
        price,
        categoryId,
        stock,
        discount,
        base64TextString: image,
      } = this.state;
      this.props.onSubmit(name, price, categoryId, stock, discount, image);
    }
  };

  render() {
    const { categories } = this.props;
    const { showValidationError, errorMessage } = this.state;
    return (
      <div className="product-admin-form">
        <Col>
          <Form
            onSubmit={this.submitTrigger}
            noValidate
            validated={showValidationError}
          >
            <div className="create-prod-title justify-content-left">
              <h2>Crear Producto</h2>
            </div>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.name}
                  onChange={this.handleProductNameChange}
                />
                <Form.Control.Feedback type="invalid">
                  Debe ingresar un nombre de producto
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Categoría</Form.Label>
                <Form.Control
                  as="select"
                  className="category-selector"
                  required
                  value={this.state.categoryId}
                  onChange={this.handleCategoryChange}
                >
                  <option value="-1">Seleccione una categoria</option>
                  {categories.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                  {/*
                          <option>Harinas</option>
                          <option>Galletitas</option>
                          <option>Pan</option>
                          <option>Pastas</option>
                          <option>Cervezas</option>
                          <option>Pizzas</option>
                          <option>Budines</option>
                          <option>Otros</option> */}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Debe seleccionar una categoria para el producto
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Precio de lista</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    required
                    type="number"
                    min={1}
                    placeholder="100"
                    value={this.state.price === 0 ? "" : this.state.price}
                    onChange={this.handlePriceChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    El precio ingresado no es correcto
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Precio con descuento</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    min={1}
                    value={this.state.discount}
                    placeholder="100 (Opcional)"
                    onChange={this.handleDiscountChange}
                  />
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationStock">
                <Form.Label>Stock</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    required
                    type="number"
                    min={1}
                    placeholder="100"
                    value={this.state.stock ? this.state.stock : ""}
                    onChange={this.handleStockChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    El stock ingresado no es correcto
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.File
                  className="position-relative"
                  required
                  name="file"
                  label="Imagen"
                  type="submit"
                  accept=".jpeg, .png, .jpg"
                  id="imagenProducto"
                  isValid={!this.state.fileInputError}
                  onChange={this.handleFileUpload}
                />
                <Form.Control.Feedback>
                  {this.state.fileInputError}
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
        </Col>
        <Col md={6}>
          <div className="product-preview">
            <Card>
              <Card.Img
                variant="top"
                src={
                  this.state.imageUrl ||
                  this.state.base64TextString ||
                  require(`../../../../assets/images/product/img-no-disp.jpg`)
                    .default
                }
                alt={this.state.name}
              />
              <Card.Body>
                <Card.Title>
                  <Card.Title>{this.state.name}</Card.Title>
                </Card.Title>
                <Card.Text>
                  <span className="actual-price">
                    $
                    {this.state.discount
                      ? this.state.discount
                      : this.state.price}
                  </span>
                  {this.state.discount && (
                    <span className="price-without-discount">
                      ${this.state.price}
                    </span>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </div>
    );
  }
}

export default ProductForm;
