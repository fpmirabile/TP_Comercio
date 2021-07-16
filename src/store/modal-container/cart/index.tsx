import * as React from "react";
import { Modal, Button } from "react-bootstrap";
import ProductCart from "../../common/product-cart";
import cartApi, { CartItem } from "../../../api/models/cart";
import "./styles.scss";

interface PropsType {
  onClose: () => void;
  onCheckout: () => void;
  isUserLogged: boolean;
}

interface StateType {
  cartItems: CartItem[];
}

class Carrito extends React.PureComponent<PropsType, StateType> {
  state: StateType = {
    cartItems: [],
  };

  async componentDidMount() {
    const cart = await cartApi.get();
    if (cart) {
      this.setState({
        cartItems: cart.items,
      });
    }
  }

  handleCheckOut = () => {
    const { onCheckout } = this.props;
    onCheckout();
  };

  handleQuantityOnItem =
    (index: number) => async (e: React.ChangeEvent<HTMLInputElement>) => {
      const quantity = Number(e.target.value);
      if (isNaN(quantity) || quantity < 1) {
        return;
      }

      const items = this.state.cartItems;
      const currentItem = items[index];
      currentItem.quantity = quantity;
      currentItem.price = currentItem.product.msrp * quantity;
      if (currentItem.discount) {
        currentItem.discount = (currentItem.product.discount || 0) * quantity;
      }

      items[index] = currentItem;
      // Creo una copia del array, para reemplazar los punteros
      const newArray = items.slice();
      this.setState({
        cartItems: newArray,
      });
      await cartApi.update;
    };

  handleRemoveProduct = (prodId: string) => async () => {
    await cartApi.deleteItem(prodId);
    const newCartItems = await cartApi.get();
    this.setState({
      cartItems: newCartItems.items,
    });
  };

  renderProduct = (cartItem: CartItem, index: number) => {
    return (
      <ProductCart
        key={cartItem.product.id}
        item={cartItem}
        onQuantityChange={this.handleQuantityOnItem(index)}
        onRemoveProduct={this.handleRemoveProduct(cartItem.product.id)}
      />
    );
  };

  render() {
    const { isUserLogged } = this.props;
    const { cartItems } = this.state;
    const cartTotal = cartItems.reduce(
      (sum, current) =>
        sum + (current.discount ? current.discount : current.price),
      0
    );
    return (
      <div className="checkout">
        <Modal.Header closeButton>
          <Modal.Title>Tu Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="checkout-items-container">
            {cartItems.length === 0 && (
              <div className="no-items">
                <span className="legend">
                  Aun no se encuentran elementos en el carrito!
                </span>
                <span className="legend">
                  Aprovecha a comprar en nuestra tienda &#x1F600;
                </span>
              </div>
            )}
            {!isUserLogged && (
              <div className="no-sign-in">
                <span className="legend">
                  Recuerda que necesitas estar logueado para realizar las
                  compras
                </span>
              </div>
            )}
            {cartItems.map((item, index) => {
              return this.renderProduct(item, index);
            })}
          </div>
          {cartItems.length > 0 && (
            <div className="control-container">
              <div className="total">Total ${cartTotal}</div>
              <div className="button-container">
                <Button
                  disabled={cartItems.length === 0}
                  className="btn-pay"
                  onClick={this.handleCheckOut}
                >
                  Pagar
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </div>
    );
  }
}

export default Carrito;
