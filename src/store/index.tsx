import * as React from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
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

type LoggedUser = {
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

  render() {
    const { location, match } = this.props;
    const { loggedUser } = this.state;
    const isAdmin = loggedUser?.isAdmin || false;
    const background = location.state && location.state.background;
    return (
      <div>
        <Header isAdmin={isAdmin} isLogged={!!loggedUser} />
        <Switch location={background || location}>
          <Route path={`${match.url}products`}>
            <Products title="Productos" />
          </Route>
          <Route path={`${match.url}checkout`}>
            <Checkout />
          </Route>
          <Route path={`${match.url}/`}>
            <PageContent />
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
