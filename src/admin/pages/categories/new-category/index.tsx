import * as React from "react";
import { Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import categoryApi from "../../../../api/models/category";
import CategoryForm from "../form-category";
import "./style.scss";

interface PropTypes {
  onCreatedCategory: () => void;
  onCancel: () => void;
}

class NewCategory extends React.PureComponent<PropTypes> {
  async componentDidMount() {
    const categories = await categoryApi.getAll();
    if (categories) {
      this.setState({
        categories,
      });
    }
  }

  handleCreateCategory = async (name: string) => {
    const { onCreatedCategory } = this.props;
    const newCategory = await categoryApi.create(name);

    if (newCategory) {
      onCreatedCategory();
    }
  };

  render() {
    return (
      <div className="category-create-page">
        <Helmet>
          <title>Agrega tu nueva categoria - Admin page</title>
        </Helmet>
        <div className="title-container">
          <h3 className="title">Categorias</h3>
        </div>
        <Container>
          <div className="category-product">
            <div>
              <Row>
                <CategoryForm
                  onCancel={this.props.onCancel}
                  saveButtonTitle="Crear"
                  onSubmit={this.handleCreateCategory}
                />
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default NewCategory;
