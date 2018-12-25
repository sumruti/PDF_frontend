import React, { Component } from "react";
import { connect } from "react-redux";
import { createProperty } from "../../store/actions/propertyActions";
import { Redirect } from "react-router-dom";

class CreateProperty extends Component {
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
    this.props.history.push("/viewproperties");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a new Property</h5>
          <div className="input-field">
            <input type="text" id="address" onChange={this.handleChange} />
            <label htmlFor="address">Address</label>
          </div>
          <div className="input-field">
            <textarea
              id="unit"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="unit">Unit</label>
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
    createProperty: property => dispatch(createProperty(property))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProperty);
