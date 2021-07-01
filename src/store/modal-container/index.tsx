import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Login from "./login";
import SignUp from "./sign-up";
import Carrito from "./carrito";
import Confirm from "./confirm";
import OperationOK from "./alerta";

interface MatchParams {
  name: string;
}

interface StateProps {
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

  handleCheckout = () =>{
    const{ history } = this.props;
    history.push("/checkout");
  }

  handleConfirm = () =>{
    const{ history } = this.props;
    history.push("/confirm");
  }

  handleOK = () =>{
    const{ history } = this.props;
    history.push("/alerta");
  }

  render() {
    const { match } = this.props;
    const { show } = this.state;
    const { name } = match.params;
    return (

      <Modal centered show={show} onHide={this.handleClose} onExited={this.handleGoBackHistory}>
        {name === 'login' && <Login onClose={this.handleClose} />}
        {name === 'sign-up' && <SignUp onClose={this.handleClose} />}
        {name === 'checkout' && <Carrito onClose={this.handleClose} onCheckout={this.handleCheckout} />}
        {name === 'confirm' && <Confirm onClose={this.handleClose} onConfirm={this.handleConfirm} />}
        {name === 'alerta' && <OperationOK onClose={this.handleClose} operationNumber="999234782" type="danger" />}
      </Modal>
    );
  }
}

export default withRouter(ModalContainer);
