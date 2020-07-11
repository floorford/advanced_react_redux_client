// HOC - leading lowercase as not a component/class
// suggests exported default is a function

import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldRedirectHome();
    }

    componentDidUpdate() {
      this.shouldRedirectHome();
    }

    shouldRedirectHome() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  // null cos doesn't need any state as props
  return connect(mapStateToProps)(ComposedComponent);
};

// imagine we're in CommentBox.js

// import requireAuth from 'components/requireAuth.js
// class CommentBox extends .. {}
// export default requireAuth(CommentBox);
// that's how we're using the HOC - like connect!
