import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const PropertyDetails = props => {
  const { property, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (property) {
    return (
      <div className="container section property-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{property.address}</span>
            <p>{property.unit}</p>s
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{moment(property.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const propertys = state.firestore.data.property;
  const property = propertys ? propertys[id] : null;
  return {
    property: property,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "propertys"
    }
  ])
)(PropertyDetails);
