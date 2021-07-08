import * as React from "react";
import { Container, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router-dom";
import orderApi, {
  getStatusText,
  Order,
  OrderItem,
} from "../../../api/models/order";
import "./style.scss";

interface StateType {
  orders: Order[];
}

class Orders extends React.PureComponent<RouteComponentProps, StateType> {
  state: StateType = {
    orders: [],
  };

  async componentDidMount() {
    const orders = await orderApi.get();

    this.setState({
      orders,
    });
  }

  handleDetalle = (order: Order) => () => {
    const { history, match } = this.props;
    history.push(`${match.url}/${order.id}`, {
      details: order.details,
    });
  };

  getOrderTotal = (items: OrderItem[]): number => {
    const total = items.reduce((sum, actual) => {
      return sum + (actual.discount ? actual.discount : actual.price);
    }, 0);

    return total;
  };

  render() {
    const { orders } = this.state;
    return (
      <div className="orders-admin-page">
        <Helmet>
          <title>Ordenes de tu negocio - Admin page</title>
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
                    <th>ID</th>
                    <th style={{ textAlign: "right" }}>Usuario</th>
                    <th style={{ textAlign: "right" }}>Estado</th>
                    <th style={{ textAlign: "right" }}>Total</th>
                    <th style={{ textAlign: "right" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => {
                    return (
                      <tr key={order.id} className="body-column">
                        <td>{order.id}</td>
                        <td style={{ textAlign: "right" }}>
                          {order.user.email}
                        </td>
                        <td style={{ textAlign: "right" }}>
                          {getStatusText(order.status)}
                        </td>
                        <td style={{ textAlign: "right" }}>
                          ${this.getOrderTotal(order.details)}
                        </td>
                        <td className="category-action-buttons">
                          <Button
                            onClick={this.handleDetalle(order)}
                            variant="info"
                          >
                            Ver detalle
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {!orders.length && (
                <div className="no-data-loaded">
                  <span>No hay ordenes cargadas</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Orders);
