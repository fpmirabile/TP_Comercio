import * as React from "react";
import { Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router-dom";
import categoryApi, { Category } from "../../../../api/models/category";
import productApi, { Product } from "../../../../api/models/product";
import ProductForm from "../product-form";
import "./style.scss";

interface Params {
  id: string;
}

interface PropTypes extends RouteComponentProps<Params> {
  onCancel: () => void;
  onEditedProduct: () => void;
}

interface StateType {
  categories: Category[];
  product?: Product;
}

class EditProduct extends React.PureComponent<PropTypes, StateType> {
  state: StateType = {
    categories: [],
    product: undefined,
  };

  async componentDidMount() {
    const categories = await categoryApi.getAll();
    const product = await productApi.getId(this.props.match.params.id);

    this.setState({
      categories,
      product,
    });
  }

  handleEditProduct = async (
    name: string,
    price: number,
    categoryId: string,
    stock: number,
    discount?: number,
    image?: string
  ) => {
    const { product } = this.state;
    const { onEditedProduct } = this.props;
    if (!product) {
      return;
    }

    const editedProduct = await productApi.update(
      product.id,
      name,
      stock,
      price,
      categoryId,
      discount,
      image
    );
    if (editedProduct) {
      onEditedProduct();
    }
  };

  render() {
    const { product } = this.state;
    if (!product) {
      return null;
    }

    return (
      <div className="product-create-page">
        <Helmet>
          <title>Edita el producto {product.name} - Admin page</title>
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
                  saveButtonTitle="Guardar edicion"
                  product={product}
                  categories={this.state.categories}
                  onSubmit={this.handleEditProduct}
                />
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(EditProduct);
