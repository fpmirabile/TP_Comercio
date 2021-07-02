import * as React from "react";
import productApi, { Product } from "../../../../api/models/product";
import ProductCard from "../../../common/product-card";
import "./styles.scss";

interface StateType {
  products: Product[];
}

interface PropTypes {
  enableAddButton: boolean;
}

class HotSales extends React.PureComponent<PropTypes, StateType> {
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
    const { enableAddButton } = this.props;
    return (
      <div className="hot-sales-container">
        <div className="title">Los más vendidos</div>
        <div className="products">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.name}
                imageName={product.imageUrl}
                discount={product.discount}
                price={product.msrp}
                enableAddButton={enableAddButton}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HotSales;
