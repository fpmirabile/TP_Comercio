import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import * as React from "react";
import { Button } from "react-bootstrap";
import { withRouter, RouteComponentProps } from "react-router";
import "./styles.scss";

interface PropType extends RouteComponentProps {
  expandedSidebar: boolean;
}

class LeftBar extends React.PureComponent<PropType> {
  handleHomeClick = () => {
    const { history, match } = this.props;
    history.push(`${match.url}`);
  };

  handleProductClick = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/products`);
  };

  handleOrdersClick = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/orders`);
  };

  handleGoToTheSite = () => {
    const { history } = this.props;
    history.push("/");
  };

  handleCategoryClick = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/categories`);
  };

  render() {
    const { expandedSidebar } = this.props;
    const rightBarClasses = classNames("right-bar", {
      expanded: expandedSidebar,
    });

    return (
      <div className={rightBarClasses}>
        {expandedSidebar && (
          <div>
            <div className="profile-section">
              <img
                className="user-img"
                alt="user-img"
                src={require("../../assets/images/admin/user/img.jpg").default}
              />
              <div className="welcome-text">
                <span>Welcome,</span>
                <span className="name">John Doe</span>
              </div>
            </div>
            <div className="sidebar-menu">
              <div className="sidebar-section">
                <h3 className="title">General</h3>
                <ul className="admin-link">
                  <li className="admin-link-section">
                    <Button
                      onClick={this.handleHomeClick}
                      className="btn-admin-link"
                    >
                      <FontAwesomeIcon icon="home" />
                      <span className="button-title">Inicio</span>
                    </Button>
                  </li>
                  <li className="admin-link-section">
                    <Button
                      onClick={this.handleProductClick}
                      className="btn-admin-link"
                    >
                      <FontAwesomeIcon icon="shopping-cart" />
                      <span className="button-title">Productos</span>
                    </Button>
                  </li>
                  <li className="admin-link-section">
                    <Button
                      onClick={this.handleCategoryClick}
                      className="btn-admin-link"
                    >
                      <FontAwesomeIcon icon="list-ul" />
                      <span className="button-title">Categorias</span>
                    </Button>
                  </li>
                  <li className="admin-link-section">
                    <Button
                      onClick={this.handleOrdersClick}
                      className="btn-admin-link"
                    >
                      <FontAwesomeIcon icon="table" />
                      <span className="button-title">Ordenes</span>
                    </Button>
                  </li>
                  <li className="admin-link-section">
                    <Button
                      onClick={this.handleGoToTheSite}
                      className="btn-admin-link"
                    >
                      <FontAwesomeIcon icon="backward" />
                      <span className="button-title">Volver al sitio</span>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(LeftBar);
