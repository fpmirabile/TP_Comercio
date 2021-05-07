import * as React from "react";
import ProductCard from "../../../common/product-card";
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
        <div className="title">Los Más vendidos</div>
        <div className="products">
          <ProductCard
            productName="Producto"
            type={0}
            title="Titulo"
            imageName="41.png"
            offer={0}
            price={123}
          />
          <ProductCard
            productName="Producto"
            type={0}
            title="Titulo"
            imageName="41.png"
            offer={0}
            price={123}
          />
          <ProductCard
            productName="Producto"
            type={0}
            title="Titulo"
            imageName="41.png"
            offer={0}
            price={123}
          />
          <ProductCard
            productName="Producto"
            type={0}
            title="Titulo"
            imageName="41.png"
            offer={0}
            price={123}
          />
        </div>
      </div>
    );
  }
}

export default HotSales;
