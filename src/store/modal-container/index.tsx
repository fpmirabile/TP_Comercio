import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Login from "./login";

type StateProps = {
  show: boolean;
};

class ModalContainer extends React.PureComponent<
  RouteComponentProps,
  StateProps
> {
  constructor(props: RouteComponentProps) {
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
    const { show } = this.state;
    return (
      <Modal centered show={show} onHide={this.handleClose} onExited={this.handleGoBackHistory}>
        <Login onClose={this.handleClose} />
      </Modal>
    );
  }
}

export default withRouter(ModalContainer);
