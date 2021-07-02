import * as React from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import queryString from "query-string";
import Header from "./header";
import Footer from "./footer";
import PageContent from "./pages/content";
import Products from "./pages/products";
import ModalContainer from "./modal-container";
import NotFound from "./pages/error-pages/not-found";
import Checkout from "./pages/final-checkout/index";
import { LoginTokens } from "../api/models/auth";
import { getSession, setSession } from "../api/session";
import userApi from "../api/models/user";
import AboutUs from "./pages/about-us";

export type LoggedUser = {
  email: string;
  id: string;
  isAdmin: boolean;
};

interface StateType {
  loggedUser?: LoggedUser;
}

class Store extends React.PureComponent<RouteComponentProps, StateType> {
  state: StateType = {
    loggedUser: undefined,
  };

  async componentDidMount() {
    const tokens = getSession();
    if (tokens) {
      const me = await userApi.me();
      this.setState({
        loggedUser: me,
      });
    }
  }

  handleUserLogin = ({ tokens, user }: LoginTokens) => {
    setSession({ jwt: tokens.token, refresh: tokens.refreshToken });
    this.setState({
      loggedUser: user,
    });
  };

  handleCheckoutEnd = () => {
    const { history, location } = this.props;
    history.push("/modals/alerta", { background: location });
  };

  handleRedirectToHomePage = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { location, match } = this.props;
    const { loggedUser } = this.state;
    const isAdmin = loggedUser?.isAdmin || false;
    const background = location.state && location.state.background;
    const categoryName =
      (queryString.parse(location.search).category as string) || undefined;
    const search =
      (queryString.parse(location.search).search as string) || undefined;
    return (
      <div>
        <Header isAdmin={isAdmin} isLogged={!!loggedUser} />
        <ToastContainer />
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
          <Route path={`${match.url}create-order`}>
            <Checkout
              onRedirectToHome={this.handleRedirectToHomePage}
              onCheckoutEnd={this.handleCheckoutEnd}
            />
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
            children={<ModalContainer onLogin={this.handleUserLogin} />}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Store);
