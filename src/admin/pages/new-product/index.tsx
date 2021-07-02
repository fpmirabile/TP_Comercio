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
import "./styles.scss";

interface StateType {
  name: string;
  price: number;
  discount: number;
  stock: number;
  image?: string;
  showValidationError: boolean;
  errorMessage: string;
  base64TextString: string;
  category: string;
}

class NewProduct extends React.PureComponent<StateType> {
  state: StateType = {
    name: "",
    price: 0.0,
    discount: 0.0,
    stock: 0.0,
    image: "",
    showValidationError: true,
    errorMessage: "Nombre de producto invalido",
    base64TextString: "",
    category: "",
  };

  
  handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.target.value
    });
  }

  handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      price: event.target.value
    });
  }
  
  handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      discount: event.target.value
    });
  }

  handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      category: event.target.value
    });
  }


  render() {
    const { showValidationError, errorMessage } = this.state;
    return (
      <div className="product-page">
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
              <Form noValidate validated={!showValidationError}>
                <div className="create-prod-title justify-content-left">
                  <h2>Crear Producto</h2>
                </div>
                
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control 
                    required
                     type="text"
                     onChange={this.handleProductNameChange}
                     />
                    <Form.Control.Feedback>Genial!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control 
                      as="select" 
                      required
                      onChange={this.handleCategoryChange}
                    >
                      <option>Seleccione una categoria</option>
                      <option>Harinas</option>
                      <option>Galletitas</option>
                      <option>Pan</option>
                      <option>Pastas</option>
                      <option>Cervezas</option>
                      <option>Pizzas</option>
                      <option>Budines</option>
                      <option>Otros</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Por favor ingrese una provincia
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Precio de lista</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          $
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        required
                        type="text"
                        placeholder="0.00"
                        //aria-describedby="inputGroupPrepend"
                        onChange={this.handlePriceChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Precio con descuento</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          $
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        required
                        type="text"
                        placeholder="0.00"
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
                    />
                  </Form.Group>
                </Form.Row>
                <Button className="btn-crear" variant="success" type="submit">Crear</Button>
              </Form>
              </Col>
              <Col md={6}>
                <div className="product-category">
                <Card>
                  <Card.Img
                    variant="top"
                    src={
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
                      <span className="actual-price">${this.state.price}</span>
                      <span className="price-without-discount">
                        ${this.state.discount}
                      </span>
                    </Card.Text>
                    <a href="#" className="btn-agregar">
                      Agregar
                    </a>
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
