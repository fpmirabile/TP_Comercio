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
   // items: OrderItem[],
   items: Array<{
    product:{name:String,id?:string},
    quantity:number,
    price:number,
    discount:number
  }>,
    createdAt: string
  ) => {

    const importeTotal = items.reduce((acc,current) => {
      return current.discount ? acc+current.discount : acc+current.price;
    },0);

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


  renderDetalle = (
    //product: Product,
    items: Array<{
        product:{name:String,id?:string},
        quantity:number,
        price:number,
        discount:number
      }>,
  ) => {
return(
<tr className="collapse" colSpan={12}>
<td className="collapse show collapse-root">
  <Table className="collapse show" hover size="sm">
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
      <tbody>
      {items.map((item) => {
        return this.renderItem(
          item.product,
          item.quantity,
          item.price,
          item.discount
        );
      })}</tbody>
    </thead>
  </Table>
</td>
</tr>)
};


renderItem = (
    //product: Product,
    product:{name:String},
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
          {temporal.length !== 0 &&( 
          <Table hover>
            <thead>
              <tr>
                <th colSpan={1}></th>
                <th colSpan={2}>Nº de Orden</th>
                <th colSpan={2}>Fecha de compra</th>
                <th colSpan={3}>Estado</th>
                <th colSpan={2}>Importe Total</th>
              </tr>
            </thead>
            <tbody>
            {//orders.map((order) => {
              temporal.map((order) => {
                  return (
                    {this.renderOrder(
                    order.id,
                    order.status,
                    order.items,
                    order.createdAt
                  )}
                  {this.renderDetalle(order.items)}
                  )
                })}
          </tbody>
          </Table>)
          }
          {temporal.length === 0 && (
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

const temporal: Array<{
  id: string,
  status: string,
  items: Array<{
    product:{name:String},
    quantity:number,
    price:number,
    discount:number
  }>,
  createdAt: string
}> = [
  {
    id: "454645645632",
    status: "Entregado",
    items:
    [{
       product: {name:"Banana"},
       quantity: 2,
       price: 25,
       discount: 20
    },
    {
      product: {name:"Fideos"},
      quantity: 1,
      price: 11,
      discount: 7
   }] ,
    createdAt: "2021-07-10"
  },
  {
    id: "57363364565",
    status: "En camino",
    items:
    [{
       product: {name:"Arroz"},
       quantity: 5,
       price: 10,
       discount: 0
    }] ,
    createdAt: "2020-04-08"
  },
];

