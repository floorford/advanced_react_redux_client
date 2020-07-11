import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signin extends React.Component {
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    // comes from redux-form
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email:</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button type="none">Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
  };
}

export default compose(
  // map state to props, map dispatch to props
  connect(mapStateToProps, actions),
  reduxForm({ form: "signin" })
)(Signin);

// using compose so we can apply multiple HOCs to the same component neatly
