import * as React from "react";
import { Card } from "react-bootstrap";
import "./style.scss";

type PropTypes = {
    categoryName: string;
    imageName: string;
};

class Category extends React.PureComponent<PropTypes> {
  render() {
    const { imageName, categoryName } = this.props;
    return (
      <div className="product-category">
        <Card>
          <Card.Img
            src={require(`../../../../assets/images/product/${imageName}`).default}
            alt={categoryName}
          />
          <Card.ImgOverlay>
            <Card.Title>{categoryName}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Category;
