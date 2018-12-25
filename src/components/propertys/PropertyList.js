import React from "react";
import PropertySummary from "./PropertySummary";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";

const PropertyList = ({ propertys }) => {
  return (

    <body className="">

      <Container>
        <Row>
          <div xs="12" sm="6" md="8">

            <div>

              {propertys &&
                propertys.map(property => {
                  return (
                    <Link to={"/property/" + property.id} key={property.id}
                      style={{
                        height: "250px",
                        width: "3em",
                        textDecoration: "none",
                        cursor: "pointer"
                      }} className="text-center jumbotron fa fa-home fa-5x"
                    >
                      <PropertySummary property={property} />


                    </Link>
                  );
                })}

            </div>
          </div>
        </Row>
      </Container>
    </body>
  );
};

export default PropertyList;





