import * as React from "react";
import { Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import productApi, { Product } from "../../../api/models/product";
import { toast } from "react-toastify";
import "./styles.scss";

interface PropType {
  onNewProductClick: () => void;
  onProductEditClick: (id: string) => void;
}

interface StateType {
  products: Product[];
  page: number;
  pageSize: number;
}

class AdminProducts extends React.PureComponent<PropType> {
  state: StateType = {
    page: 1,
    pageSize: 10,
    products: [],
  };

  handleLoadProducts = async (newPage?: number, newPageSize?: number) => {
    const { page, pageSize } = this.state;
    const products = await productApi.search(
      newPage || page,
      newPageSize || pageSize
    );
    if (products) {
      this.setState({
        products,
        page: newPage || page,
        pageSize: newPageSize || pageSize,
      });
    }
  };

  componentDidMount() {
    this.handleLoadProducts();
  }

  handleDeleteProduct = (product: Product) => async () => {
    const deleteOp = await productApi.delete(product.id);
    if (deleteOp.operation) {
      toast.success("Producto eliminado!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { top: 50 },
      });
      this.handleLoadProducts();
    } else {
      toast.error("No se pudo eliminar el producto", {
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

  selectProductToEdit = (id: string) => () => {
    this.props.onProductEditClick(id);
  }

  render() {
    const { products } = this.state;
    const { onNewProductClick } = this.props;
    return (
      <div className="product-admin-page">
        <Helmet>
          <title>Maneja tus productos - Admin page</title>
        </Helmet>
        <div className="title-container">
          <h3 className="title">Productos</h3>
        </div>
        <Container>
          <div className="product-table">
            <div className="table-title ">
              <h2>Listado de productos</h2>
              <div>
                <Button onClick={onNewProductClick} variant="success">
                  Nuevo
                </Button>
              </div>
            </div>
            <div className="table-content">
              <table className="table">
                <thead>
                  <tr className="head-column">
                    <th>SKU</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th className="product-column-right">Stock</th>
                    <th className="product-column-right">Precio descuento</th>
                    <th style={{ textAlign: "right" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    return (
                      <tr key={product.id} className="body-column">
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>${product.msrp}</td>
                        <td className="product-column-right">{product.stock}</td>
                        <td className="product-column-right">
                          {product.discount
                            ? `$${product.discount}`
                            : "No tiene"}
                        </td>
                        <td className="product-action-buttons">
                          <Button onClick={this.selectProductToEdit(product.id)} variant="info">Editar</Button>
                          <Button
                            onClick={this.handleDeleteProduct(product)}
                            variant="danger"
                          >
                            Eliminar
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {!products.length && (
                <div className="no-products-loaded">
                  <span>No hay productos cargados</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default AdminProducts;
