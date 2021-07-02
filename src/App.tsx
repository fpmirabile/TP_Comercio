import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./store";
import Admin from "./admin";
import { ToastContainer } from 'react-toastify';
import "./App.scss";
import { getSession, setSession } from "./api/session";
import userApi from "./api/models/user";
import { LoginTokens } from "./api/models/auth";

export type LoggedUser = {
  email: string;
  id: string;
  isAdmin: boolean;
};

declare global {
  interface Window { me: LoggedUser; }
}

interface StateType {
  loggedUser?: LoggedUser;
}

export default class App extends React.PureComponent<{}, StateType> {
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
    } else {
      this.setState({
        loggedUser: undefined,
      })
    }
  }

  handleUserLogin = ({ tokens, user }: LoginTokens) => {
    setSession({ jwt: tokens.token, refresh: tokens.refreshToken });
    this.setState({
      loggedUser: user,
    });
    window.me = user;
  }

  render() {
    return (
      // Browser router porque queremos las url identicas sin #
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          <Route path="/admin">
            <Admin loggedAdmin={this.state.loggedUser} />
          </Route>
          <Route path="/">
            <Store onUserLogin={this.handleUserLogin} loggedUser={this.state.loggedUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
