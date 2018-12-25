import React, { Component } from "react";
import { connect } from "react-redux";
import { createTenant } from "../../store/actions/tenantActions";
import { Redirect } from "react-router-dom";

class CreateTenant extends Component {
  state = {
    name: "",
    last: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createTenant(this.state);
    this.props.history.push("/viewproperties");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a New Tenant</h5>
          <div className="input-field">
            <input type="text" id="name" onChange={this.handleChange} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <textarea
              id="last"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="last">Last</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
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
    createTenant: tenant => dispatch(createTenant(tenant))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTenant);
