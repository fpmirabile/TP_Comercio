import * as React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
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
      this.setState((prevState) => {
        return {
          products: prevState.products.concat(pagedProducts),
          page: resetPage || page
        };
      });
    } else {
      this.setState({
        hideShowMoreButton: true,
      });
    }
  };

  componentDidMount() {
    const { products } = this.state;
    if (!products.length) {
      this.handleLoadProducts();
    }
  }

  // Necesitamos reworkear esto
  UNSAFE_componentWillReceiveProps(next: PropTypes) {
    if (this.props.search !== next.search) {
      this.handleLoadProducts(0);
    }
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
    return (
      <Col key={catId} md={3} sm={6} xs={12}>
        <ProductCard
          id={prodId}
          title={productName}
          imageName={image}
          discount={discount}
          price={price}
        />
      </Col>
    );
  };

  render() {
    const { categoryName } = this.props;
    const { products, hideShowMoreButton } = this.state;
    return (
      <div className="products-page">
        <Container>
          <div className="title">
            Productos
            {categoryName ? ` de ${categoryName}` : ''}
          </div>
          <Row>
            {products.map((product) =>
              this.renderProduct(
                product.id,
                product.category.id,
                product.name,
                product.msrp,
                product.imageUrl,
                product.discount
              )
            )}
          </Row>
          {!hideShowMoreButton && (
            <Button
              className="show-more-products"
              onClick={this.handleLoadMore}
            >
              Mostrar más
            </Button>
          )}
        </Container>
      </div>
    );
  }
}

export default Products;
