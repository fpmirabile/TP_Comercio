import * as React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";
import Topbar from "./top-bar";
import LeftBar from "./right-sidebar";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import NewProduct from "./pages/products/new-product";
import EditProduct from './pages/products/edit-product';
import Reports from "./pages/reports";
import Categories from './pages/categories'
import NewCategory from './pages/categories/new-category';
import EditCategory from './pages/categories/edit-category';
import { LoggedUser } from "../App";
import { toast } from 'react-toastify';
import classNames from "classnames";
import "./styles.scss";

interface StateType {
  expandSideBar: boolean;
}

interface PropTypes extends RouteComponentProps {
  loggedAdmin?: LoggedUser;
}

class AdminPage extends React.PureComponent<PropTypes, StateType> {
  state: StateType = {
    expandSideBar: true,
  };

  componentDidMount() {
    const { loggedAdmin, history } = this.props;
    if (!loggedAdmin || !loggedAdmin.isAdmin) {
      history.push("");
    }
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

  handleProductEdit = (id: string) => {
    const { history, match } = this.props;
    history.push(`${match.url}/products/edit/${id}`);
  }

  handleGoToProductList = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/products/`);
  }

  handleNewProductCreated = () => {
    const { history, match } = this.props;
    toast.success("Producto creado satisfactoriamente", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { top: 50 },
    });
    history.push(`${match.url}/products`);
  }
  
  handleProductEdited = () => {
    const { history, match } = this.props;
    toast.success("Producto editado satisfactoriamente", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { top: 50 },
    });
    history.push(`${match.url}/products`);
  }

  handleGoToCategoryList = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/categories/`);
  }

  handleCategoryEdited = () => {
    const { history, match } = this.props;
    toast.success("Categoria editada con exito!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { top: 50 },
    });
    history.push(`${match.url}/categories`);
  }

  handleNewCategory = () => {
    const { history, match } = this.props;
    toast.success("Categoria creada con exito!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { top: 50 },
    });
    history.push(`${match.url}/products`);
  }

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
            <Route path={`${match.url}/categories/new`}>
              <NewCategory onCancel={this.handleGoToCategoryList} onCreatedCategory={this.handleNewCategory} />
            </Route>
            <Route path={`${match.url}/categories/edit/:id`}>
              <EditCategory onCancel={this.handleGoToCategoryList} onEditDone={this.handleCategoryEdited} />
            </Route>
            <Route path={`${match.url}/categories`}>
              <Categories />
            </Route>
            <Route path={`${match.url}/products/edit/:id`}>
              <EditProduct onEditedProduct={this.handleProductEdited} onCancel={this.handleGoToProductList} />
            </Route>
            <Route path={`${match.url}/products/new`}>
              <NewProduct onCancel={this.handleGoToProductList} onCreatedProduct={this.handleNewProductCreated} />
            </Route>
            <Route path={`${match.url}/products`}>
              <Products onProductEditClick={this.handleProductEdit} onNewProductClick={this.handleNewProductClick} />
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
