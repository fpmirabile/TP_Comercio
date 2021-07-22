import * as React from "react";
import { Row, Table, Col, Container } from "react-bootstrap";
import orderApi, { Order, OrderItem } from "../../../api/models/order";
import productApi, { Product } from "../../../api/models/product";
import "./styles.scss";

interface StateType {
  orders: Order[];
  page: number;
  pageSize: number;
  hideShowMoreButton: boolean;
}

interface PropTypes {
  title: string;
}

class Orders extends React.PureComponent<PropTypes> {
  onClickHandler = (e) => {
    const hiddenElement = e.currentTarget.nextSibling;
    hiddenElement.className.indexOf("collapse show") > -1
      ? hiddenElement.classList.remove("show")
      : hiddenElement.classList.add("show");
  };

  state: StateType = {
    pageSize: 20,
    page: 1,
    orders: [],
    hideShowMoreButton: false,
  };

  renderOrder = (
    idOrden: string,
    status: string,
    items: OrderItem[],
    createdAt: string
  ) => {
    const importeTotal = items.reduce((acc, current) => {
      return current.discount ? acc + current.discount : acc + current.price;
    }, 0);

    return (
      <tr key={idOrden} onClick={this.onClickHandler}>
        <td colSpan={1}>...</td>
        <td colSpan={2}>{idOrden}</td>
        <td colSpan={2}>{createdAt}</td>
        <td colSpan={3}>{status}</td>
        <td colSpan={2}>{importeTotal}</td>
      </tr>
    );
  };

  renderDetalle = (items: OrderItem[]) => {
    return (
      <tr className="collapse">
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
    discount: number
  ) => {
    let precio = 0;

    if (discount === 0) {
      precio = price;
    } else {
      precio = discount;
    }
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
    const { title } = this.props;
    const { orders } = this.state;
    return (
      <div className="orders">
        <Container>
          <div className="title">{title}</div>
          {orders.length !== 0 && (
            <Table hover>
              <thead className="thead-principal">
                <tr>
                  <th colSpan={1}></th>
                  <th colSpan={2}>Nº de Orden</th>
                  <th colSpan={2}>Fecha de compra</th>
                  <th colSpan={3}>Estado</th>
                  <th colSpan={2}>Importe Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return (
                    <React.Fragment>
                      {this.renderOrder(
                        order.id,
                        order.status,
                        order.items,
                        order.createdAt
                      )}
                      {this.renderDetalle(order.items)}
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
