import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/authActions";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderCheckBoxField from './../../shared/components/form/CheckBox';

class SignIn extends PureComponent {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Email</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <input
              name="email"
              type="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <input
              name="password"
              id="password"
              type="password"
              onChange={this.handleChange}
            />

          </div>
          <div className="account__forgot-password">
            <a href="/">Forgot a password?</a>
          </div>
        </div>
        <div className="form__form-group">
          <div className="form__form-group-field">
            <Field
              name="remember_me"
              component={renderCheckBoxField}
              label="Remember me"
            />
          </div>
        </div>
        <div className="account__btns">
          <button className="btn btn-primary account__btn">Login</button>
          {authError ? <p>{authError}</p> : null}

          <Link className="btn btn-outline-primary account__btn" to="/register">Create
            Account
            </Link>
        </div>
      </form>
    );
  }
}


const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

SignIn = connect(
  mapStateToProps,
  mapDispatchToProps)
  (SignIn);

export default reduxForm({
  form: 'SignIn', // a unique identifier for this form
})(SignIn);


