import * as React from "react";
import { Container, Button } from "react-bootstrap";
import productApi, { Product } from "../../../api/models/product";
import ProductCard from "../../common/product-card";
import "./styles.scss";

interface StateType {
  products: Product[];
  page: number;
  pageSize: number;
  hideShowMoreButton: boolean;
}

interface PropTypes {
  onlyDiscount?: boolean;
  categoryId?: string;
  categoryName?: string;
  search?: string;
  enableAddButton: boolean;
}

class Products extends React.PureComponent<PropTypes, StateType> {
  state: StateType = {
    pageSize: 20,
    page: 1,
    products: [],
    hideShowMoreButton: false,
  };

  handleLoadProducts = async (resetPage?: number) => {
    const { onlyDiscount, categoryId, search, categoryName } = this.props;
    const { page, pageSize } = this.state;
    const pagedProducts = await productApi.search(
      resetPage || page,
      pageSize,
      categoryId,
      categoryName,
      search,
      onlyDiscount
    );

    if (pagedProducts?.length) {
      const nextPage = await productApi.search(
        (resetPage || page) + 1,
        pageSize,
        categoryId,
        categoryName,
        search,
        onlyDiscount
      );

      this.setState((prevState) => {
        return {
          products: prevState.products.concat(pagedProducts),
          page: resetPage || page,
          hideShowMoreButton: !!nextPage,
        };
      });
    }
  };

  componentDidMount() {
    const { products } = this.state;
    if (!products.length) {
      this.handleLoadProducts();
    }
  }

  cleanProducts = () => {
    this.setState({
      products: [],
    });
  };

  // Necesitamos reworkear esto
  componentDidUpdate(next: PropTypes) {
    const propsKeys = Object.keys(this.props) as Array<keyof PropTypes>;
    propsKeys.forEach((key) => {
      if (this.props[key] !== next[key]) {
        this.cleanProducts();
        this.handleLoadProducts(0);
      }
    });
  }

  handleLoadMore = () => {
    const { page } = this.state;
    this.handleLoadProducts(page + 1);
  };

  renderProduct = (
    prodId: string,
    catId: string,
    productName: string,
    price: number,
    image?: string,
    discount?: number
  ) => {
    const { enableAddButton } = this.props;
    return (
      <ProductCard
        id={prodId}
        title={productName}
        imageName={image}
        discount={discount}
        price={price}
        enableAddButton={enableAddButton}
      />
    );
  };

  render() {
    const { categoryName, onlyDiscount } = this.props;
    const { products, hideShowMoreButton } = this.state;
    return (
      <div className="products-page">
        <Container className="container-xl">
          <div className="title">
            {onlyDiscount ? "Ofertas" : "Productos"}
            {categoryName && !onlyDiscount ? ` de ${categoryName}` : ""}
          </div>
          <div className="home-products-list">
            {products.map((product) => {
              return this.renderProduct(
                product.id,
                product.category.id,
                product.name,
                product.msrp,
                product.imageUrl,
                product.discount
              );
            })}
          </div>
          {!hideShowMoreButton && (
            <Button
              className="show-more-products"
              onClick={this.handleLoadMore}
            >
              Mostrar más
            </Button>
          )}
          {products.length === 0 && (
            <div className="no-products">
              <span className="legends">
                No se encuentran productos en esta categoria &#x1F605;
              </span>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default Products;
