import * as React from "react";
import { Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router-dom";
import categoryApi, { Category } from "../../../../api/models/category";
import CategoryForm from "../form-category";
import "./style.scss";

interface Params {
  id: string;
}

interface PropTypes extends RouteComponentProps<Params> {
  onCancel: () => void;
  onEditDone: () => void;
}

interface StateType {
  category?: Category;
}

class EditCategory extends React.PureComponent<PropTypes, StateType> {
  state: StateType = {
    category: undefined,
  };

  async componentDidMount() {
    const category = await categoryApi.getId(this.props.match.params.id);
    this.setState({
      category,
    });
  }

  handleEditCategory = async (name: string) => {
    const { category } = this.state;
    const { onEditDone } = this.props;
    if (!category) {
      return;
    }

    const eCategory = await categoryApi.update(category.id, name);
    if (eCategory) {
      onEditDone();
    }
  };

  render() {
    const { category } = this.state;
    if (!category) {
      return null;
    }

    return (
      <div className="category-create-page">
        <Helmet>
          <title>Edita la categoria {category.name} - Admin page</title>
        </Helmet>
        <div className="title-container">
          <h3 className="title">Categorias</h3>
        </div>

        <Container>
          <div className="create-category">
            <div>
              <Row>
                <CategoryForm
                  onCancel={this.props.onCancel}
                  saveButtonTitle="Guardar edicion"
                  category={category}
                  onSubmit={this.handleEditCategory}
                />
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(EditCategory);
