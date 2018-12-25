import React from "react";
import moment from "moment";

const TenantSummary = ({ tenant }) => {
  return (
    <div className="card z-depth-0 tenant-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{tenant.name}</span>

        <p className="grey-text">
          {moment(tenant.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default TenantSummary;
