import * as React from "react";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import cartApi from "../../../api/models/cart";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";

interface PropTypes {
  id?: string;
  imageName?: string;
  title: string;
  discount?: number;
  price: number;
  enableAddButton: boolean;
}

class ProductCard extends React.PureComponent<PropTypes> {
  handleAddToCart = async () => {
    const { id } = this.props;
    if (!id) {
      return;
    }

    const cartUpdated = await cartApi.update(id, 1);
    if (cartUpdated) {
      toast.info("Producto agregado al carrito!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { top: 50 },
      });
    }
  };

  render() {
    const { imageName, title, discount, price, enableAddButton } = this.props;
    const currentPrice = discount && discount > 0 ? discount : price;
    return (
      <div className="product-category">
        <Card>
          <Card.Img
            variant="top"
            src={
              imageName ||
              require(`../../../assets/images/products/template.jpeg`).default
            }
            alt={title}
            className="product-image"
          />
          <Card.Body>
            <Card.Title>
              <Card.Title>{title}</Card.Title>
            </Card.Title>
            <Card.Text>
              <span className="actual-price">
                $
                {currentPrice}
              </span>
              {!!discount && (
                <span className="price-without-discount">${price}</span>
              )}
            </Card.Text>
            <Button
              disabled={!enableAddButton}
              onClick={this.handleAddToCart}
              className="btn-agregar"
            >
              Agregar
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
