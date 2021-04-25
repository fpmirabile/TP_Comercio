import * as React from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import PageContent from "./content";
import ModalContainer from "./modal-container";
import NotFound from "./error-pages/not-found";
import Products from "./products";

class Store extends React.PureComponent<RouteComponentProps> {
  render() {
    const { location } = this.props;
    const background = location.state && location.state.background;
    return (
      <div>
        <Header />
        <Switch location={background || location}>
          <Route path="/" exact>
            <PageContent />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {background && (
          <Route path="/modals/:name" children={<ModalContainer />} />
        )}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Store);
