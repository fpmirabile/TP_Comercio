import * as React from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";

interface PropTypes {
  onCartClick: () => void;
}

class Cart extends React.PureComponent<PropTypes> {
  render() {
    const { onCartClick } = this.props;
    return (
      <div className="cart-button">
        <Button className="btn-carrito" onClick={onCartClick}>
            Ir al carrito    
            <img alt="imagen" src={require("../../../../../assets/images/cart.png").default} />
        </Button>
      </div>
    );
  }
}

export default Cart;