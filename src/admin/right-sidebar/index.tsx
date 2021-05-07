import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import * as React from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";

interface PropType {
  expandedSidebar: boolean;
  onHomeClick: () => void;
  onReportClick: () => void;
  onProductClick: () => void;
}

class RightBar extends React.PureComponent<PropType> {
  render() {
    const {
      expandedSidebar,
      onHomeClick,
      onReportClick,
      onProductClick,
    } = this.props;
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
                    <Button onClick={onHomeClick} className="btn-admin-link">
                      <FontAwesomeIcon icon="home" />
                      <span className="button-title">Inicio</span>
                    </Button>
                  </li>
                  <li className="admin-link-section">
                    <Button onClick={onProductClick} className="btn-admin-link">
                      <FontAwesomeIcon icon="shopping-cart" />
                      <span className="button-title">Productos</span>
                    </Button>
                  </li>
                  <li className="admin-link-section">
                    <Button onClick={onReportClick} className="btn-admin-link">
                      <FontAwesomeIcon icon="table" />
                      <span className="button-title">Reportes</span>
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

export default RightBar;
