import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Login from "./login";
import SignUp from "./sign-up";
import Checkout from "./checkout";

interface MatchParams {
  name: string;
}

type StateProps = {
  show: boolean;
};

class ModalContainer extends React.PureComponent<
  RouteComponentProps<MatchParams>,
  StateProps
> {
  constructor(props: RouteComponentProps<MatchParams>) {
    super(props);
    this.state = {
      show: true,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleGoBackHistory = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { match } = this.props;
    const { show } = this.state;
    const { name } = match.params;
    return (
      <Modal centered show={show} onHide={this.handleClose} onExited={this.handleGoBackHistory}>
        {name === 'login' && <Login onClose={this.handleClose} />}
        {name === 'sign-up' && <SignUp onClose={this.handleClose} />}
        {name === 'checkout' && <Checkout onClose={this.handleClose} />}
      </Modal>
    );
  }
}

export default withRouter(ModalContainer);
