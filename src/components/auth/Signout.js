import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <div>See you next time!</div>;
  }
}

export default connect(null, actions)(Signout);

// using compose so we can apply multiple HOCs to the same component neatly
