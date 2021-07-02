import * as React from "react";
import {
  Form,
  InputGroup,
  Card,
  Row,
  Col,
  Button,
  Container,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import categoryApi, { Category } from "../../../api/models/category";
import "./styles.scss";

interface StateType {
  name: string;
  price: number;
  discount?: number;
  stock: number;
  image?: string;
  showValidationError: boolean;
  errorMessage: string;
  base64TextString: string;
  categoryId?: string;
  categories: Category[];
  fileInputError: string;
}

class NewProduct extends React.PureComponent<{}, StateType> {
  state: StateType = {
    name: "",
    price: 0,
    discount: undefined,
    stock: 0,
    image: "",
    showValidationError: false,
    errorMessage: "",
    base64TextString: "",
    categoryId: undefined,
    categories: [],
    fileInputError: '',
  };

  async componentDidMount() {
    const categories = await categoryApi.getAll();
    if (categories) {
      this.setState({
        categories,
      });
    }
  }

  handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value,
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

  isValidProduct = (): boolean => {
    const { name, price, categoryId, stock, discount } = this.state;
    let error = true;
    let campos = [];
    // stock == null, porque 0 cuenta como !stock y puede ser 0 tranquilamente.
    if (!name || !price || !categoryId || stock == null) {
      error = false;
    }

    if (price <= 0 || stock <= 0) {
      error = false;
      campos.push("precio");
    }

    if (discount && (discount > price || discount < 0)) {
      error = false;
      campos.push("descuento");
    }

    this.setState({
      showValidationError: !error,
      errorMessage: `Hay campos vacios. ${
        campos.length
          ? "Se pueden ver errores en los siguientes campos: " +
            campos.join(", ")
          : ""
      }`,
    });

    return error;
  };

  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.isValidProduct()) {
    }
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
        fileInputError: '',
      });
    }
    reader.onerror = error => {
      this.setState({
        fileInputError: 'El archivo que seleccionaste no es soportado.'
      })
    }
  }

  render() {
    const { showValidationError, errorMessage, categories } = this.state;
    return (
      <div className="product-create-page">
        <Helmet>
          <title>Agrega tu producto - Admin page</title>
        </Helmet>
        <div className="title-container">
          <h3 className="title">Productos</h3>
        </div>

        <Container>
          <div className="create-product">
            <div>
              <Row>
                <Col>
                  <Form
                    onSubmit={this.handleSubmit}
                    noValidate
                    validated={showValidationError}
                  >
                    <div className="create-prod-title justify-content-left">
                      <h2>Crear Producto</h2>
                    </div>
                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Nombre del producto</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          onChange={this.handleProductNameChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Debe ingresar un nombre de producto
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control
                          as="select"
                          className="category-selector"
                          required
                          value={this.state.categoryId}
                          onChange={this.handleCategoryChange}
                        >
                          <option>Seleccione una categoria</option>
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
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Precio de lista</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">
                              $
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            required
                            type="number"
                            min={1}
                            placeholder="100"
                            value={this.state.price}
                            onChange={this.handlePriceChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            El precio ingresado no es correcto
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Precio con descuento</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">
                              $
                            </InputGroup.Text>
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
                    <Button
                      className="btn-crear"
                      variant="success"
                      type="submit"
                    >
                      Crear
                    </Button>
                  </Form>
                </Col>
                <Col md={6}>
                  <div className="product-preview">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={this.state.base64TextString ||
                          require(`../../../assets/images/product/img-no-disp.jpg`)
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
                        <Button className="btn-agregar">Agregar</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default NewProduct;
