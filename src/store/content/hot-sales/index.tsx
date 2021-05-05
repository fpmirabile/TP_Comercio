import * as React from "react";
import ProductCard from "../../common/product-card";
import "./styles.scss";

interface Product {
  image: string;
  name: string;
}

interface PropTypes {
  products: Product;
}

class HotSales extends React.PureComponent<PropTypes> {
  render() {
    // const { products } = this.props;
    return (
      <div className="hot-sales-container">
        <div className="title">Ofertas</div>
        <div className="products">
          <ProductCard image="" name="" />
					<ProductCard image="" name="" />
					<ProductCard image="" name="" />
					<ProductCard image="" name="" />
        </div>
      </div>
    );
  }
}

export default HotSales;
