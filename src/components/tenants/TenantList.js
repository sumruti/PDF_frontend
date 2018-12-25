import React from "react";
import TenantSummary from "./TenantSummary";
import { Link } from "react-router-dom";

const TenantList = ({ tenantss }) => {
  return (
    <div className="tenant-list section">
      {tenants &&
        tenants.map(tenant => {
          return (
            <Link to={"/tenant/" + tenant.id} key={tenant.id}>
              <TenantSummary tenant={tenant} />
            </Link>
          );
        })}
    </div>
  );
};

export default TenantList;
