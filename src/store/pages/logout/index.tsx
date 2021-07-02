import * as React from "react";
import { removeSession } from "../../../api/session";

interface PropTypes {
  onLogout: () => void;
}

class Logout extends React.PureComponent<PropTypes> {
  componentDidMount() {
    const { onLogout } = this.props;
    removeSession();
    onLogout();
  }

  render() {
    return null;
  }
}

export default Logout;
