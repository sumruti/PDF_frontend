import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, Col, Row, Button, ButtonToolbar } from 'reactstrap';

import { Redirect,Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';

import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import CheckIcon from 'mdi-react/CheckIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import PropTypes from 'prop-types';








class Downloadpdf extends Component {

 


   
  render() {
    const { disabled, className, name, label, radioValue, value,color, btn, title, message, colored, header, } = this.props;
    
    



      return (
           <div clsssName="main">
          
                                
                          <ButtonToolbar className="form__button-toolbar">
                           <Button color="primary" type="button"  ><a href="http://localhost:5060/result.pdf">Download</a></Button>
                                <Button type="button">
                                Cancel
                                </Button>
                        </ButtonToolbar>

                    

            </div>
   );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};


export default connect(mapStateToProps)(Downloadpdf);
