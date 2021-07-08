import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Login from "./login";
import SignUp from "./sign-up";
import Cart from "./cart";
import Confirm from "./confirm";
import OperationOK from "./alerta";
import { LoginTokens } from "../../api/models/auth";

interface MatchParams {
  name: string;
}

interface StateProps {
  show: boolean;
}

interface PropTypes extends RouteComponentProps<MatchParams> {
  onLogin: (login: LoginTokens) => void;
  isUserLogged: boolean;
}

class ModalContainer extends React.PureComponent<PropTypes, StateProps> {
  constructor(props: PropTypes) {
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
  };

  handleCheckout = () => {
    const { history } = this.props;
    history.push("/create-order");
  };

  handleConfirm = () => {
    const { history } = this.props;
    history.push("/confirm");
  };

  handleOK = () => {
    const { history } = this.props;
    history.push("/alerta");
  };

  handleGoToHomePage = () => {
    const { history } = this.props;
    history.push("");
  };

  render() {
    const { match, onLogin, isUserLogged } = this.props;
    const { show } = this.state;
    const { name } = match.params;
    return (
      <Modal
        centered
        show={show}
        onHide={this.handleClose}
        onExited={this.handleGoBackHistory}
      >
        {name === "login" && (
          <Login onClose={this.handleClose} onLogin={onLogin} />
        )}
        {name === "sign-up" && <SignUp onClose={this.handleClose} />}
        {name === "checkout" && (
          <Cart
            isUserLogged={isUserLogged}
            onClose={this.handleClose}
            onCheckout={this.handleCheckout}
          />
        )}
        {name === "confirm" && (
          <Confirm onClose={this.handleClose} onConfirm={this.handleConfirm} />
        )}
        {name === "alerta" && (
          <OperationOK
            onConfirm={this.handleGoToHomePage}
            operationNumber="999234782"
            type="success"
          />
        )}
      </Modal>
    );
  }
}

export default withRouter(ModalContainer);
