/* eslint-disable no-lone-blocks */
import React from "react";
import "./styles.scss";
import {
  Col,
  Form,
  Button,
  Container,
} from "react-bootstrap";

  class Checkout extends React.PureComponent<{},any> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props:any) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ''
      };
    }

  

    getValidationCard() {
      const length = this.state.value.length;
      const brand = this.state.value.substring(0,1);

      if((brand === '4' || brand === '5') &&  (length === 16)) {
        return 'success';
      } else if ((brand === '3')&&(length === 15)){
        return 'danger'
      } else {
        return 'error';
      }
    }
  
    handleChange(e:any) {
 
      this.setState({ value: e.target.value });
    }
    
    handleSubmit = (event: {
      currentTarget: any;
      preventDefault: () => void;
      stopPropagation: () => void;
    }) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{

      }
     
      
    };

    render(){
  return (
    <div className="final-checkout">
      <Container>
        <div className="title">Finalice su compra</div>
        <Form
          noValidate
          validated={false}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <Form.Row>
            <Form.Group 
              as={Col} 
              md="4"
              controlId="Nombre"
              validationState = {this.getValidationCard()} >
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                required type="text"
                value={this.state.value} 
                onChange = {this.handleChange}
                placeholder="Ejemplo: Mark" />
              <Form.Control.Feedback />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Apellido</Form.Label>
              <Form.Control 
                required
                type="text"
                //value={this.state.value} 
                placeholder="Ejemplo: Huck"
                onChange = {this.handleChange}
              />
              <Form.Control.Feedback>OK</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>Tipo Documento</Form.Label>
              <Form.Control required type="text" placeholder="DNI" />
              <Form.Control.Feedback>OK</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Documento</Form.Label>
              <Form.Control required type="text" placeholder="Ejemplo: 12345678" />
              <Form.Control.Feedback>OK</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo: Calle 1234" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese una dirección
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="1" id="piso" controlId="piso">
              <Form.Label>Piso</Form.Label>
              <Form.Control type="text" placeholder="-" />
            </Form.Group>

            <Form.Group as={Col} md="2" id="departamento">
              <Form.Label>Departamento</Form.Label>
              <Form.Control type="text" placeholder="-" />
      
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese una ciudad
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" id="postal-code" controlId="postal-code">
              <Form.Label>Código Postal</Form.Label>
              <Form.Control type="numeric" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese un código postal
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row className="prov-pais">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Provincia</Form.Label>
              <Form.Control as="select" placeholder="Seleccione una provincia" required>
                <option>CABA</option>
                <option>Buenos Aires</option>
                <option>Mendoza</option>
                <option>Cordoba</option>
                <option>Santa Fe</option>
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
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid">
                Por favor, ingrese el nombre y apellido que figura en su tarjeta
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom07">
              <Form.Label>Número de tarjeta</Form.Label>
              <Form.Control type="numeric" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Por favor, ingrese un número de tarjeta valido.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Fecha de Vencimiento</Form.Label>
              <Form.Control
                type="text"
                placeholder="AA/MM"
                id="cc-exp"
                required
                autoComplete="off"
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
              />
              <Form.Control.Feedback type="invalid">
                Por favor, ingrese el CSC de su tarjeta.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Check
              required
              label="Acepto los Terminos y Condiciones"
              feedback="Debe aceptar los terminos y condiciones"
            />
          </Form.Group>
          <Button type="submit">Finalizar Compra</Button>
        </Form>
      </Container>
    </div>
  );
}
}

export default Checkout;