/* eslint-disable react/no-unused-state,react/no-unescaped-entities */
import React, { Component } from "react";
import PropertyList from "../../../../components/propertys/PropertyList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Col, Container, Row, Card } from 'reactstrap';
import { Link } from "react-router-dom";


class ViewProperty extends Component {
  render() {
    const { propertys, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (

      <div>

        <Card>
          <div xs={12} md={12} lg={6}>
            <div>
              <PropertyList propertys={propertys} />


            </div>
          </div>
        </Card>
      </div>





    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    propertys: state.firestore.ordered.propertys,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "propertys", orderBy: ["createdAt", "desc"] }
  ])
)(ViewProperty);





