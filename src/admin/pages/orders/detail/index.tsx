import * as React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { OrderItem } from "../../../../api/models/order";
import "./style.scss";

interface Params {
  orderId: string;
}

class Orders extends React.PureComponent<RouteComponentProps<Params>> {
  render() {
    const { details } = this.props.location.state;
    const { orderId } = this.props.match.params;

    return (
      <div className="orders-admin-page">
        <Helmet>
          <title>Detalle orden #{orderId}</title>
        </Helmet>
        <div className="title-container">
          <h3 className="title">Ordenes</h3>
        </div>
        <Container>
          <div className="orders-table">
            <div className="table-title ">
              <h2>Listado de ordenes ejecutadas</h2>
            </div>
            <div className="table-content">
              <table className="table">
                <thead>
                  <tr className="head-column">
                    <th>Producto</th>
                    <th style={{textAlign: 'right'}}>Precio del item</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((detail: OrderItem) => {
                    return (
                      <tr key={detail.product.id} className="body-column">
                        <td>{detail.product.name}</td>
                        <td style={{textAlign: 'right'}}>${detail.discount ? detail.discount : detail.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Orders);
