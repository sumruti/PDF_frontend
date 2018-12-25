import React from "react";
import moment from "moment";

const PropertySummary = ({ property }) => {
  return (
    <div className="card z-depth-0 propertt-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{property.address}</span>

        <p className="grey-text">
          {moment(property.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default PropertySummary;
