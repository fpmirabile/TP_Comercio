import * as React from "react";
import productApi, { Product } from "../../../../api/models/product";
import ProductCard from "../../../common/product-card";
import "./styles.scss";

interface StateType {
  products: Product[];
}

class HotSales extends React.PureComponent {
  state: StateType = {
    products: [],
  };

  async componentDidMount() {
    const { products } = this.state;
    if (!products.length) {
      const products = await productApi.topSell();
      this.setState({
        products,
      });
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div className="hot-sales-container">
        <div className="title">Los más vendidos</div>
        <div className="products">
          {products.map((product) => {
            return (
              <ProductCard
                title={product.name}
                imageName={product.imageUrl}
                discount={product.discount}
                price={product.msrp}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HotSales;
