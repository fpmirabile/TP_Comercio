import * as React from "react";
import { Button, Alert } from "react-bootstrap";
import "./styles.scss";

interface PropTypes {
  onConfirm: () => void;
  operationNumber: string;
  type: string;
}

class OperationOK extends React.PureComponent<PropTypes> {

  render() {
    const { operationNumber, onConfirm, type } = this.props;
    if (type === "success") {
      return (
        <Alert show variant={type}>
          <Alert.Heading>Operación Exitosa</Alert.Heading>
          <hr />
          <p>
            Su operación con código{" "}
            <span>
              <b>{operationNumber}</b>
            </span>{" "}
            ha finalizado de forma exitosa.
          </p>
          <p>¡Muchas gracias por confiar en nosotros!</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="outline-success" onClick={onConfirm}>
              Cerrar
            </Button>
          </div>
        </Alert>
      );
    } else {
      return (
        <Alert show variant={type}>
          <Alert.Heading>Operación Denegada</Alert.Heading>
          <hr />
          <p className="principalMessage">
            Su operación no a podido ser procesada.
          </p>
          <p>Reintente nuevamente en unos minutos.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="outline-danger" onClick={onConfirm}>
              Cerrar
            </Button>
          </div>
        </Alert>
      );
    }
  }
}

export default OperationOK;
