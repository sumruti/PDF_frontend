import { Card, CardBody, Col, Badge, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class BasicTable extends Component {
  state = {};

  render() {
    const { propertys } = this.props;


    return (

      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{('tables.basic_tables.basic_table')}</h5>
              <h5 className="subhead">Use default table</h5>
            </div>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>address</th>
                  <th>unit</th>
                  <th>Username</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {propertys.map(property => (
                  <tr>
                    <td>{propertys.address}</td>
                    <td>{propertys.unit}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    );

  }
}

BasicTable.propTypes = {
  firestore: PropTypes.object.isRequired,
  propertys: PropTypes.array,

};
export default compose(
  firestoreConnect([{ collection: "propertys" }]),
  connect((state, props) => ({
    propertys: state.firestore.ordered.propertys,

  }))
)(BasicTable);



