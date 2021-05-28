import * as React from "react";
import { Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./styles.scss";

interface PropType {
  onNewProductClick: () => void;
}

class AdminProducts extends React.PureComponent<PropType> {
  render() {
    const { onNewProductClick } = this.props;
    return (
      <div className="product-page">
        <Helmet>
          <title>Maneja tus productos - Admin page</title>
        </Helmet>
        <div className="title-container">
          <h3 className="title">Productos</h3>
        </div>
        <Container>
          <div className="product-table">
            <div className="table-title">
              <h2>Listado de productos</h2>
              <div>
                <Button onClick={onNewProductClick} variant="success">Nuevo</Button>
              </div>
            </div>
            <div className="table-content">
              <table className="table">
                <thead>
                  <tr className="head-column">
                    <th>SKU</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(Array(10).keys()).map((colums) => (
                    <tr className="body-column">
                      <td>f3ce1426-a7cc-470a-bbfa-3f9828075eaa</td>
                      <td>Cereal</td>
                      <td>$10</td>
                      <td>
                        <Button variant="primary">Ver</Button>
                        <Button variant="info">Editar</Button>
                        <Button variant="danger">Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default AdminProducts;
