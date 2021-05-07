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

class Store extends React.PureComponent<RouteComponentProps> {
  render() {
    const { location, match } = this.props;
    const background = location.state && location.state.background;
    return (
      <div>
        <Header />
        <Switch location={background || location}>
        <Route path={`${match.url}/products`}>
            <Products title="Productos" />
          </Route>
          <Route path={`${match.url}/`}>
            <PageContent />
          </Route>
          <Route path={`${match.url}/*`}>
            <NotFound />
          </Route>
        </Switch>
        {background && (
          <Route path={`/modals/:name`} children={<ModalContainer />} />
        )}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Store);
