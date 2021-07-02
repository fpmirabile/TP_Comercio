import * as React from "react";
import { Container, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router-dom";
import categoryApi, { Category } from "../../../api/models/category";
import "./style.scss";

interface StateType {
  categories: Category[];
}

class Categories extends React.PureComponent<RouteComponentProps, StateType> {
  state: StateType = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await categoryApi.getAll();

    this.setState({
      categories,
    })
  }

  handleNewCategoryClick = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/new`);
  }

  handleEditCategoryClick = (id: string) => () => {
    const { history, match } = this.props;
    history.push(`${match.url}/edit/${id}`);
  }

  // handleRemoveCategoryClick = () => {}

  render() {
    const { categories } = this.state;
    return (
      <div className="category-admin-page">
        <Helmet>
          <title>Controlas las categorias de tu negocio - Admin page</title>
        </Helmet>
        <div className="title-container">
          <h3 className="title">Categorias</h3>
        </div>
        <Container>
          <div className="category-table">
            <div className="table-title ">
              <h2>Listado de categorias</h2>
              <div>
                <Button onClick={this.handleNewCategoryClick} variant="success">
                  Nuevo
                </Button>
              </div>
            </div>
            <div className="table-content">
              <table className="table">
                <thead>
                  <tr className="head-column">
                    <th>Nombre</th>
                    <th>ID</th>
                    <th style={{ textAlign: "right" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => {
                    return (
                      <tr key={category.id} className="body-column">
                        <td>{category.name}</td>
                        <td>{category.id}</td>
                        <td className="category-action-buttons">
                          <Button onClick={this.handleEditCategoryClick(category.id)} variant="info">Editar</Button>
                          {/* <Button
                            onClick={this.handleRemoveCategoryClick}
                            variant="danger"
                          >
                            Eliminar
                          </Button> */}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {!categories.length && (
                <div className="no-data-loaded">
                  <span>No hay categorias cargadas</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Categories);
