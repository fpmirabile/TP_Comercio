import * as React from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";

class Cart extends React.PureComponent {
  render() {
    return (
      <div className="cart-button">
        <Button className="btn-carrito">
            Ir al carrito    
            <img alt="imagen" src={require("../../../../../assets/images/cart.png").default} />
        </Button>
      </div>
    );
  }
}

export default Cart;
