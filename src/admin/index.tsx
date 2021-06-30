import * as React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";
import Topbar from "./top-bar";
import LeftBar from "./right-sidebar";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import NewProduct from "./pages/new-product";
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

  handleNewProductClick = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/products/new`);
  };

  render() {
    const { expandSideBar } = this.state;
    const { match } = this.props;
    const bodyMarginClass = classNames("page-body", {
      expanded: expandSideBar,
    });

    return (
      <div>
        <LeftBar expandedSidebar={expandSideBar} />
        <Topbar
          expandedSideBar={expandSideBar}
          onHamburgerClick={this.handleHamburgerClick}
        />
        <div className={bodyMarginClass}>
          <Switch>
            <Route path={`${match.url}/products/new`}>
              <NewProduct />
            </Route>
            <Route path={`${match.url}/products`}>
              <Products onNewProductClick={this.handleNewProductClick} />
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
