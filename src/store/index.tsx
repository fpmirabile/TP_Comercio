import * as React from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import queryString from "query-string";
import Header from "./header";
import Footer from "./footer";
import Logout from "./pages/logout";
import PageContent from "./pages/content";
import Products from "./pages/products";
import ModalContainer from "./modal-container";
import NotFound from "./pages/error-pages/not-found";
import Checkout from "./pages/final-checkout/index";
import AboutUs from "./pages/about-us";
import Orders from "./pages/orders";
import { LoggedUser } from "../App";
import { LoginTokens } from "../api/models/auth";

interface PropTypes extends RouteComponentProps {
  loggedUser?: LoggedUser;
  onUserLogin: (login: LoginTokens) => void;
  onLogout: () => void;
}

class Store extends React.PureComponent<PropTypes> {
  handleCheckoutEnd = (operationNumber: string) => {
    const { history, location } = this.props;
    history.push("/modals/alerta", { background: location, operationNumber });
  };

  handleRedirectToHomePage = () => {
    const { history } = this.props;
    history.push("/");
  };

  handleLogout = () => {
    const { onLogout } = this.props;
    onLogout();
    this.handleRedirectToHomePage();
  };

  render() {
    const { location, match, loggedUser, onUserLogin } = this.props;
    const isAdmin = loggedUser?.isAdmin || false;
    const background = location.state && location.state.background;
    const categoryName =
      (queryString.parse(location.search).category as string) || undefined;
    const search =
      (queryString.parse(location.search).search as string) || undefined;
    return (
      <div>
        <Header isAdmin={isAdmin} isLogged={!!loggedUser} />
        <Switch location={background || location}>
          <Route path={[`${match.url}products`, `${match.url}deals`]}>
            <Products
              enableAddButton={!!loggedUser}
              categoryName={categoryName}
              search={search}
              onlyDiscount={location.pathname.indexOf("deals") > 0}
            />
          </Route>
          <Route path={`${match.url}about-us`}>
            <AboutUs />
          </Route>
          <Route path={`${match.url}orders`}>
            <Orders />
          </Route>
          <Route path={`${match.url}create-order`}>
            <Checkout
              onRedirectToHome={this.handleRedirectToHomePage}
              onCheckoutEnd={this.handleCheckoutEnd}
            />
          </Route>
          <Route path={`${match.url}logout`}>
            <Logout onLogout={this.handleLogout} />
          </Route>

          <Route path={`${match.url}/`}>
            <PageContent loggedUser={loggedUser} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {background && (
          <Route
            path={`/modals/:name`}
            children={
              <ModalContainer
                isUserLogged={!!loggedUser}
                onLogin={onUserLogin}
              />
            }
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Store);
