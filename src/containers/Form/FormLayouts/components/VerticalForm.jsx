import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

import EyeIcon from 'mdi-react/EyeIcon';
import renderCheckBoxField from '../../../../shared/components/form/CheckBox';
import { connect } from "react-redux";
import { createProperty } from "../../../../redux/actions/propertyActions";
import { Redirect } from "react-router-dom";

class VerticalForm extends PureComponent {

  state = {
    address: "",
    unit: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProperty(this.state);
    this.props.history.push("/dashboard_default");
  };

  static propTypes = {
    t: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  render() {
    const { auth, t, reset } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <Col xs={20} md={16} lg={16} xl={10}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('Create Property')}</h5>
              <h5 className="subhead">Labels are above fields</h5>
            </div>
            <form className="form form--horizontal" onSubmit={this.handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">address</span>
                <div className="form__form-group-field">
                  <input name='address' type="text" id="address" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">unit</span>
                <div className="form__form-group-field">
                  <input
                    name="unit"
                    id="unit"
                    type='text'
                    onChange={this.handleChange}
                  />

                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Url</span>
                <div className="form__form-group-field">
                  <Field
                    name="url"
                    component="input"
                    type="url"
                    placeholder="https://themeforest.net"
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Password</span>
                <div className="form__form-group-field">
                  <Field
                    name="password"
                    component="input"
                    type={this.state.showPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  <button
                    className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
                    onClick={e => this.showPassword(e)}
                  ><EyeIcon />
                  </button>
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
              <ButtonToolbar className="form__button-toolbar">
                <Button color="primary" type="submit">Submit</Button>
                <Button type="button" onClick={reset}>
                  Cancel
                </Button>
              </ButtonToolbar>
            </form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProperty: property => dispatch(createProperty(property))
  };
};

VerticalForm = connect(
  mapStateToProps,
  mapDispatchToProps)
  (VerticalForm);

export default reduxForm({
  form: 'vertical_form_layout', // a unique identifier for this form
})(translate('common')(VerticalForm));
