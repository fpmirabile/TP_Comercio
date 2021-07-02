import * as React from "react";
import { Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import categoryApi, { Category } from "../../../../api/models/category";
import productApi from "../../../../api/models/product";
import ProductForm from "../product-form";
import "./styles.scss";

interface PropTypes {
  onCreatedProduct: () => void;
  onCancel: () => void;
}

interface StateType {
  categories: Category[];
}

class NewProduct extends React.PureComponent<PropTypes, StateType> {
  state: StateType = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await categoryApi.getAll();
    if (categories) {
      this.setState({
        categories,
      });
    }
  }

  handleCreateProduct = (
    name: string,
    price: number,
    categoryId: string,
    stock: number,
    discount?: number,
    image?: string
  ) => {
    this.handleProductAPICall(name, price, categoryId, stock, discount, image);
  };

  handleProductAPICall = async (
    name: string,
    price: number,
    categoryId: string,
    stock: number,
    discount?: number,
    image?: string
  ) => {
    const { onCreatedProduct } = this.props;
    const newProduct = await productApi.create(
      name,
      stock,
      price,
      categoryId,
      discount,
      image
    );

    if (newProduct) {
      onCreatedProduct();
    }
  };

  render() {
    return (
      <div className="product-create-page">
        <Helmet>
          <title>Agrega tu producto - Admin page</title>
        </Helmet>
        <div className="title-container">
          <h3 className="title">Productos</h3>
        </div>

        <Container>
          <div className="create-product">
            <div>
              <Row>
                <ProductForm
                  onCancel={this.props.onCancel}
                  saveButtonTitle="Crear"
                  categories={this.state.categories}
                  onSubmit={this.handleCreateProduct}
                />
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default NewProduct;
