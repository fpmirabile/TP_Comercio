import * as React from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";

interface PropTypes {
  isAdmin: boolean;
  onCartClick: () => void;
  onAdminClick: () => void;
  disabledCartButton: boolean;
}

class RightButtons extends React.PureComponent<PropTypes> {
  render() {
    const { disabledCartButton, isAdmin, onCartClick, onAdminClick } = this.props;
    return (
      <div className="cart-button">
        <Button disabled={disabledCartButton} className="btn-carrito" onClick={onCartClick}>
            Ir al carrito    
            <img alt="imagen" src={require("../../../../../assets/images/cart.png").default} />
        </Button>
        {isAdmin && <Button className="btn-admin" onClick={onAdminClick}>
          Panel admin
        </Button>}
      </div>
    );
  }
}

export default RightButtons;
