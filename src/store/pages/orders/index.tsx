import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import * as React from "react";
import { Table, Container } from "react-bootstrap";
import orderApi, { getStatusText, Order, OrderItem } from "../../../api/models/order";
import { Product } from "../../../api/models/product";
import "./styles.scss";

interface StateType {
  orders: Order[];
  expandedRow: number;
}

class Orders extends React.PureComponent<{}, StateType> {
  state: StateType = {
    orders: [],
    expandedRow: -1,
  };

  async componentDidMount() {
    const { orders } = this.state;
    if (!orders.length) {
      const orders = await orderApi.getMyOrders() || [];
      this.setState({
        orders,
      });
    }
  }

  handleExpansion = (index: number) => () => {
    const { expandedRow } = this.state;
    const currentIndex = index === expandedRow ? -1 : index
    this.setState({
      expandedRow: currentIndex,
    })
  }

  renderOrder = (
    idOrden: string,
    status: string,
    totalPrice: number,
    createdAt: string,
    index: number,
    expanded: boolean,
  ) => {
    return (
      <tr key={idOrden} className="clickable" onClick={this.handleExpansion(index)}>
        <td colSpan={1}>
          <FontAwesomeIcon icon={expanded ? 'arrow-up' : 'arrow-down'} />
        </td>
        <td colSpan={2}>{idOrden}</td>
        <td colSpan={2}>{createdAt}</td>
        <td colSpan={3}>{getStatusText(status)}</td>
        <td colSpan={2}>${totalPrice}</td>
      </tr>
    );
  };

  renderDetalle = (items: OrderItem[], expanded: boolean) => {
    const classes = classNames('collapse', { show: expanded })
    return (
      <tr className={classes}>
        <td className="collapse show collapse-root" colSpan={12}>
          <Table className="collapse show items-table" hover size="sm">
            <thead className="collapse show">
              <tr className="collapse show">
                <th className="collapse show" colSpan={3}>
                  Producto
                </th>
                <th className="collapse show" colSpan={3}>
                  Cantidad
                </th>
                <th className="collapse show" colSpan={3}>
                  Precio Unitario
                </th>
                <th className="collapse show" colSpan={3}>
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return this.renderItem(
                  item.product,
                  item.quantity,
                  item.price,
                  item.discount
                );
              })}
            </tbody>
          </Table>
        </td>
      </tr>
    );
  };

  renderItem = (
    product: Product,
    quantity: number,
    price: number,
    discount?: number
  ) => {
    const precio = discount ?? price;
    const subtotal = precio * quantity;
    return (
      <tr>
        <td colSpan={3}>{product.name}</td>
        <td colSpan={3}>{quantity}</td>
        <td className="text-success" colSpan={3}>
          $ {precio}
        </td>
        <td className="text-success" colSpan={3}>
          $ {subtotal}
        </td>
      </tr>
    );
  };

  render() {
    const { orders, expandedRow } = this.state;    
    return (
      <div className="orders">
        <Container>
          <div className="title">Mis Ordenes</div>
          {orders && orders.length > 0 && (
            <Table hover>
              <thead className="thead-principal">
                <tr>
                  <th colSpan={1}>Detalle</th>
                  <th colSpan={2}>Nº de Orden</th>
                  <th colSpan={2}>Fecha de compra</th>
                  <th colSpan={3}>Estado</th>
                  <th colSpan={2}>Importe Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  const total = order.details.reduce((acc, current) => {
                    return current.discount ? acc + current.discount : acc + current.price;
                  }, 0);
                  const expanded = index === expandedRow;
                  return (
                    <React.Fragment>
                      {this.renderOrder(
                        order.id,
                        order.status,
                        total,
                        order.createdAt,
                        index,
                        expanded,
                      )}
                      {this.renderDetalle(order.details, expanded)}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </Table>
          )}
          {orders.length === 0 && (
            <div className="no-orders">
              <span className="legends">
                No se han encontrado ordenes para tu usuario &#x1F605;
              </span>
            </div>
          )}
        </Container>
      </div>
    );
  }
}
export default Orders;
