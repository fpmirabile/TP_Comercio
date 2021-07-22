/* eslint-disable no-lone-blocks */
import React from "react";
import "./styles.scss";
import { Col, Form, Button } from "react-bootstrap";
import ProductCart from "../../common/product-cart";
import cartApi, { CartItem } from "../../../api/models/cart";
import orderApi from "../../../api/models/order";

type DatosUsuario = {
  nombre: string;
  apellido: string;
  documento: string;
  direccion: string;
  piso: string;
  departamento: string;
  ciudad: string;
  codPostal: string;
  provincia: string;
};

type Tarjeta = {
  nombre: string;
  numero: string;
  mesVencimiento: string;
  yearVencimiento: string;
  csc: string;
};

interface StateType {
  usuario: DatosUsuario;
  tarjeta: Tarjeta;
  hasErrors: boolean;
  errorMessage: string;
  cartItems: CartItem[];
  cartId: string;
}

interface PropTypes {
  onCheckoutEnd: (operationNumber: string) => void;
  onRedirectToHome: () => void;
}

class Checkout extends React.PureComponent<PropTypes, StateType> {
  state: StateType = {
    usuario: {
      nombre: "",
      apellido: "",
      documento: "",
      direccion: "",
      piso: "",
      departamento: "",
      ciudad: "",
      codPostal: "",
      provincia: "CABA",
    },
    tarjeta: {
      nombre: "",
      numero: "",
      mesVencimiento: "",
      yearVencimiento: "",
      csc: "",
    },
    hasErrors: false,
    errorMessage: "",
    cartItems: [],
    cartId: "",
  };

  handleLoadPageData = async () => {
    const cart = await cartApi.get();
    if (cart && cart.items.length) {
      this.setState({
        cartItems: cart.items,
        cartId: cart.id,
      });
    } else {
      const { onRedirectToHome } = this.props;
      onRedirectToHome();
    }
  };

  componentDidMount() {
    this.handleLoadPageData();
  }

  componentDidUpdate() {
    if (!this.state.cartItems.length) {
      this.props.onRedirectToHome();
    }
  }

  formHasErrors(): boolean {
    let error = false;
    let campos = [];
    const { usuario, tarjeta } = this.state;
    const userKeys = Object.keys(usuario);
    const tarjetaKeys = Object.keys(tarjeta);

    userKeys.forEach((key) => {
      if (
        !usuario[key as keyof DatosUsuario] &&
        key !== "piso" &&
        key !== "departamento"
      ) {
        error = true;
        campos.push(key);
      }
    });

    tarjetaKeys.forEach((key) => {
      if (!tarjeta[key as keyof Tarjeta]) {
        error = true;
        campos.push(key);
      }
    });

    if (isNaN(Number(usuario.documento))) {
      error = true;
      campos.push("documento");
    }

    if (tarjeta.numero.length < 16 || isNaN(Number(tarjeta.numero))) {
      error = true;
      campos.push("numero de tarjeta no valido");
    }

    const yearVencimiento = Number("20" + tarjeta.yearVencimiento);
    if (isNaN(yearVencimiento)) {
      error = true;
      campos.push("vencimiento tarjeta, año no valida");
    }

    if (yearVencimiento < 0) {
      error = true;
      campos.push("vencimiento tarjeta, año no valido");
    }

    const mesVencimiento = Number(tarjeta.mesVencimiento);
    if (isNaN(mesVencimiento)) {
      error = true;
      campos.push("vencimiento tarjeta, mes no valido");
    }

    if (mesVencimiento > 12 || mesVencimiento < 1) {
      error = true;
      campos.push("vencimiento tarjeta, mes no valido");
    }

    if (!error) {
      const today = new Date();
      const fechaExpiracion = new Date(
        yearVencimiento,
        mesVencimiento - 1,
        today.getDate()
      );
      if (fechaExpiracion < today) {
        error = true;
        campos.push("La fecha de vencimiento no es correcta.");
      }
    }

    if (tarjeta.csc.length !== 3) {
      error = true;
      campos.push("numeros no validos csc");
    }

    this.setState({
      hasErrors: error,
      errorMessage: error
        ? `Parece que hay campos que no son validos: ${campos.join(", ")}`
        : "",
    });

    return error;
  }

  handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!this.formHasErrors()) {
      const { cartId } = this.state;
      const { onCheckoutEnd } = this.props;
      const order = await orderApi.buyCart("", cartId);
      if (order) {
        onCheckoutEnd(order.id);
        return;
      }

      this.setState({
        errorMessage:
          "Hubo un error al intentar realizar el pago, intentelo nuevamente.",
      });
    }
  };

  renderPreviewCart = (item: CartItem) => {
    return (
      <div className="product-separator">
        <ProductCart
          key={item.product.id}
          onQuantityChange={() => {}}
          onRemoveProduct={() => {}}
          item={item}
          hideInputs
        />
      </div>
    );
  };

  render() {
    const { cartItems } = this.state;
    const cartTotal = cartItems.reduce((prev, current) => {
      if (current.discount) {
        return prev + current.discount;
      }

      return prev + current.price;
    }, 0);
    return (
      <div className="final-checkout">
        <div className="title">Finalice su compra</div>
        <div className="form-and-list">
          <div className="list">
            {cartItems.map((item) => {
              return this.renderPreviewCart(item);
            })}
            <div className="total">
              <span className="total-sum">Total ${cartTotal}</span>
            </div>
          </div>
          <Form
            noValidate
            validated={this.state.hasErrors}
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="Nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.usuario.nombre}
                  onChange={(e) => {
                    this.setState({
                      usuario: {
                        ...this.state.usuario,
                        nombre: e.target.value,
                      },
                    });
                  }}
                  placeholder="Juan"
                />
                <Form.Control.Feedback />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.usuario.apellido}
                  placeholder="Perez"
                  onChange={(e) => {
                    this.setState({
                      usuario: {
                        ...this.state.usuario,
                        apellido: e.target.value,
                      },
                    });
                  }}
                />
                <Form.Control.Feedback>OK</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Documento (DNI)</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.usuario.documento}
                  placeholder="12345678"
                  onChange={(e) => {
                    if (isNaN(Number(e.target.value))) {
                      return;
                    }

                    this.setState({
                      usuario: {
                        ...this.state.usuario,
                        documento: e.target.value,
                      },
                    });
                  }}
                />
                <Form.Control.Feedback>OK</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.usuario.direccion}
                  placeholder="Calle 1234"
                  required
                  onChange={(e) => {
                    this.setState({
                      usuario: {
                        ...this.state.usuario,
                        direccion: e.target.value,
                      },
                    });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese una dirección
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="2" id="piso" controlId="piso">
                <Form.Label>Piso</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="-"
                  width={100}
                  value={this.state.usuario.piso}
                  onChange={(e) => {
                    if (isNaN(Number(e.target.value))) {
                      return;
                    }

                    this.setState({
                      usuario: {
                        ...this.state.usuario,
                        piso: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} md="2" id="departamento">
                <Form.Label>Departamento</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="-"
                  value={this.state.usuario.departamento}
                  onChange={(e) => {
                    this.setState({
                      usuario: {
                        ...this.state.usuario,
                        departamento: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  value={this.state.usuario.ciudad}
                  onChange={(e) => {
                    this.setState({
                      usuario: {
                        ...this.state.usuario,
                        ciudad: e.target.value,
                      },
                    });
                  }}
                  type="text"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese una ciudad
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="3"
                id="postal-code"
                controlId="postal-code"
              >
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  value={this.state.usuario.codPostal}
                  onChange={(e) => {
                    const codigoPostal = Number(e.target.value);
                    if (isNaN(codigoPostal) || codigoPostal <= 0) {
                      return;
                    }

                    this.setState({
                      usuario: {
                        ...this.state.usuario,
                        codPostal: e.target.value,
                      },
                    });
                  }}
                  type="numeric"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese un código postal
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row className="prov-pais">
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Seleccione una provincia"
                  required
                  value={this.state.usuario.provincia}
                  onChange={(e) => {
                    this.setState({
                      usuario: {
                        ...this.state.usuario,
                        provincia: e.target.value,
                      },
                    });
                  }}
                >
                  <option value="CABA">CABA</option>
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="Mendoza">Mendoza</option>
                  <option value="Cordoba">Cordoba</option>
                  <option value="Santa Fe">Santa Fe</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Por favor ingrese una provincia
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3">
                <Form.Label>Pais</Form.Label>
                <Form.Control type="text" placeholder="Argentina" disabled />
              </Form.Group>
            </Form.Row>
            <hr />
            <Form.Row>
              <Form.Group
                as={Col}
                md="6"
                id="cc-name"
                controlId="cc-name"
                autoComplete="off"
              >
                <Form.Label>Nombre y apellido de su tarjeta</Form.Label>
                <Form.Control
                  value={this.state.tarjeta.nombre}
                  onChange={(e) => {
                    this.setState({
                      tarjeta: {
                        ...this.state.tarjeta,
                        nombre: e.target.value,
                      },
                    });
                  }}
                  type="text"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingrese el nombre y apellido que figura en su
                  tarjeta
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom07">
                <Form.Label>Número de tarjeta</Form.Label>
                <Form.Control
                  value={this.state.tarjeta.numero}
                  onChange={(e) => {
                    if (isNaN(Number(e.target.value))) {
                      return;
                    }

                    this.setState({
                      tarjeta: {
                        ...this.state.tarjeta,
                        numero: e.target.value,
                      },
                    });
                  }}
                  type="numeric"
                  placeholder=""
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingrese un número de tarjeta valido.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Mes de Vencimiento</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="08"
                  id="cc-exp"
                  min={1}
                  max={12}
                  required
                  autoComplete="off"
                  value={this.state.tarjeta.mesVencimiento}
                  onChange={(e) => {
                    if (
                      isNaN(Number(e.target.value)) ||
                      e.target.value.length > 2
                    ) {
                      return;
                    }

                    this.setState({
                      tarjeta: {
                        ...this.state.tarjeta,
                        mesVencimiento: e.target.value,
                      },
                    });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingrese la fecha de vencimiento de su tarjeta.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Label>/</Form.Label>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Año de Vencimiento</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  placeholder="24"
                  id="cc-exp"
                  required
                  autoComplete="off"
                  value={this.state.tarjeta.yearVencimiento}
                  onChange={(e) => {
                    if (
                      isNaN(Number(e.target.value)) ||
                      e.target.value.length > 2
                    ) {
                      return;
                    }
                    this.setState({
                      tarjeta: {
                        ...this.state.tarjeta,
                        yearVencimiento: e.target.value,
                      },
                    });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingrese la fecha de vencimiento de su tarjeta.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>CSC</Form.Label>
                <Form.Control
                  type="numeric"
                  id="cc-csc"
                  placeholder="CSC"
                  required
                  value={this.state.tarjeta.csc}
                  onChange={(e) => {
                    if (isNaN(Number(e.target.value))) {
                      return;
                    }

                    this.setState({
                      tarjeta: {
                        ...this.state.tarjeta,
                        csc: e.target.value,
                      },
                    });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingrese el CSC de su tarjeta.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <div className="error-message">{this.state.errorMessage}</div>
            <div className="terms">
              Al pagar, usted esta aceptando nuestros terminos y condiciones.
            </div>
            <Button type="submit">Finalizar Compra</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Checkout;
