import * as React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";
import Topbar from "./top-bar";
import RightBar from "./right-sidebar";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Reports from "./pages/reports";
import classNames from "classnames";
import "./styles.scss";

interface StateType {
  expandSideBar: boolean;
}

class AdminPage extends React.PureComponent<RouteComponentProps, StateType> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      expandSideBar: true,
    };
  }

  handleHamburgerClick = () => {
    const { expandSideBar } = this.state;
    this.setState({
      expandSideBar: !expandSideBar,
    });
  };

  handleHomeClick = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/`);
  };

  handleProductClick = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/products`);
  };

  handleReportClick = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/charts`);
  };

  render() {
    const { expandSideBar } = this.state;
    const { match } = this.props;
    const bodyMarginClass = classNames("page-body", {
      expanded: expandSideBar,
    });
    return (
      <div>
        <RightBar
          expandedSidebar={expandSideBar}
          onHomeClick={this.handleHomeClick}
          onProductClick={this.handleProductClick}
          onReportClick={this.handleReportClick}
        />
        <Topbar
          expandedSideBar={expandSideBar}
          onHamburgerClick={this.handleHamburgerClick}
        />
        <div className={bodyMarginClass}>
          <Switch>
            <Route path={`${match.url}/products`}>
              <Products />
            </Route>
            <Route path={`${match.url}/charts`}>
              <Reports />
            </Route>
            <Route path={`${match.url}/`}>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminPage);
