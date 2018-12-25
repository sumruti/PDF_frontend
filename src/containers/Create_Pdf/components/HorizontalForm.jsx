import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Row, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import renderFileInputField from '../../../shared/components/form/FileInput';
import renderSelectField from '../../../shared/components/form/Select';
import renderMultiSelectField from '../../../shared/components/form/MultiSelect';
import { Redirect,Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import renderCheckBoxField from '../../../shared/components/form/CheckBox';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import renderDatePickerField from '../../../shared/components/form/DatePicker';
import renderDateTimePickerField from '../../../shared/components/form/DateTimePicker';




class HorizontalForm extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
      LandlordName: '',
      tenantFname: '',
      tenantLname: '',
      RentalName: '',
      StreetName: '',
      StreetNumber: '',
      CityTownName: '',
      Province: '',
      PostalCode: '',
      NoOfVehiclesParkingSpace: '',
    };
  }

  

  LandlordName(e){
    this.setState({
      LandlordName: e.target.value
    });
  };

  tenantFname(e) {
    this.setState({
      tenantFname: e.target.value
    });
  };

  tenantLname (e) {
    this.setState({
      tenantLname: e.target.value
    });
  };

  RentalName (e) {
    this.setState({
      RentalName: e.target.value
    });
  }; 

  StreetName (e) {
    this.setState({
      StreetName: e.target.value
    });
  }; 

   StreetNumber (e) {
    this.setState({
      StreetNumber: e.target.value
    });
  }; 

 CityTownName (e) {
    this.setState({
      CityTownName: e.target.value
    });
  };

  Province (e) {
    this.setState({
      Province: e.target.value
    });
  };
  
  PostalCode (e) {
    this.setState({
      PostalCode: e.target.value
    });
  };
  
 NoOfVehiclesParkingSpace (e) {
    this.setState({
      NoOfVehiclesParkingSpace: e.target.value
    });
  };



 

  save(e){
    

    localStorage.setItem("CityTownName", this.state.CityTownName);
    localStorage.setItem("LandlordName", this.state.LandlordName);
    localStorage.setItem("NoOfVehiclesParkingSpace", this.state.NoOfVehiclesParkingSpace);
    localStorage.setItem("PostalCode", this.state.PostalCode);
    localStorage.setItem("Province", this.state.Province);
    localStorage.setItem("RentalName", this.state.RentalName);
    localStorage.setItem("StreetName", this.state.StreetName);
    localStorage.setItem("StreetNumber", this.state.StreetNumber);
    localStorage.setItem("tenantFname", this.state.tenantFname);
    localStorage.setItem("tenantLname", this.state.tenantLname);

    window.location = '/tenantflow/pdf';
    console.log(this.state)
  }

  render() {
    const { handleSubmit, reset, t } = this.props;
    const { LandlordName, LastName, FirstName } = this.state;

      return (

          <Col md={12}>
            <Card>
             <CardBody>
              <Row>
              <Col md={12}>
            
                  
     
            <div className="card__title">
              <h5 className="bold-text">Parties to the Agreement </h5>
              <h5 className="subhead">Residential Tenancy Agreement between: </h5>
              <h5 className="subhead">Landlord(s) </h5>
            </div>
            <form className="form form--horizontal" onSubmit={handleSubmit}>
              <div className="form__form-group">
                <span className="form__form-group-label">Landlord’s  Name</span>
                <div className="form__form-group-field">
                  <Field
                    name="LandlordName"
                    component="input"
                    type="text"
                    placeholder="Landlord’s  Name"
                    onChange={(e)=>this.LandlordName(e)}
                  />
                </div>

              </div>
              
              <div className="form__form-group">
                <span className="form__form-group-label">Tenant First Name</span>
                <div className="form__form-group-field">
                  <Field
                    name="tenantFname"
                    component="input"
                    type="text"
                    placeholder="First Name"
                    onChange={(e)=>this.tenantFname(e)}
                    
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Tenant Last Name</span>
                <div className="form__form-group-field">
                  <Field
                    name="tenantLname"
                    component="input"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e)=>this.tenantLname(e)}
                  />
                </div>
              </div>
               <div className="card__title">
                  <h5 className="bold-text"> Rental Unit  </h5>
                  <h5 className="subhead">The landlord will rent to the tenant the rental unit at:</h5>
                </div>
              <div className="form__form-group">
                    <span className="form__form-group-label">Rental Unit  Name</span>
                    <div className="form__form-group-field">
                        <Field
                            name="RentalName"
                            component="input"
                            type="text"
                            placeholder="Rental Unit Name"
                            onChange={(e) => this.RentalName(e)}
                        />
                    </div>
                </div>
                        <div className="form__form-group">
                            <span className="form__form-group-label">Street Name</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="StreetName"
                                    component="input"
                                    type="text"
                                    placeholder="Street Name"
                                    onChange={(e) => this.StreetName(e)}
                                />
                            </div>
                        </div>

                        <div className="form__form-group">
                            <span className="form__form-group-label">Street Number</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="StreetNumber"
                                    component="input"
                                    type="text"
                                    placeholder="Street Number"
                                    onChange={(e) => this.StreetNumber(e)}
                                />
                            </div>
                        </div>
                        <div className="form__form-group">
                            <span className="form__form-group-label">City/Town Name</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="CityTownName"
                                    component="input"
                                    type="text"
                                    placeholder="City/Town Name"
                                    onChange={(e) => this.CityTownName(e)}
                                />
                            </div>
                        </div>
                        <div className="form__form-group">
                            <span className="form__form-group-label">Province</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="Province"
                                    component="input"
                                    type="text"
                                    placeholder="Province"
                                    onChange={(e) => this.Province(e)}
                                />
                            </div>
                        </div>
                        <div className="form__form-group">
                            <span className="form__form-group-label">Postal Code</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="PostalCode"
                                    component="input"
                                    type="text"
                                    placeholder="Postal Code"
                                    onChange={(e) => this.PostalCode(e)}
                                />
                            </div>
                        </div>
                        <div className="form__form-group">
                            <span className="form__form-group-label">No. Of Vehicles Parking Space </span>
                            <div className="form__form-group-field">
                                <Field
                                    name="NoOfVehiclesParkingSpace"
                                    component="input"
                                    type="text"
                                    placeholder="No. Of Vehicles Parking Space"
                                    onChange={(e) => this.NoOfVehiclesParkingSpace(e)}
                                />
                            </div>
                        </div>
                        <div className="form__form-group">
                                  <span className="form__form-group-label">Is Rental unit in a condominium?</span>
                                  <div className="form__form-group-field">
                                    <Field
                                        name="checkbox_one"
                                        component={renderCheckBoxField}
                                        label="Yes"
                                        defaultChecked
                                    />
                                    <Field
                                        name="checkbox_one"
                                        component={renderCheckBoxField}
                                        label="No"
                                       
                                    />
                                  </div>

                              </div>
                         <div className="card__title">
                            <h5 className="bold-text"> Contact Information   </h5>
                            <h5 className="subhead">Address for Giving Notices or Documents to the Landlord</h5>
                          </div>

                           <div className="form__form-group">
                    <span className="form__form-group-label"> Unit</span>
                    <div className="form__form-group-field">
                        <Field
                            name="RentalName"
                            component="input"
                            type="text"
                            placeholder="Rental Unit Name"
                            onChange={(e) => this.RentalName(e)}
                        />
                    </div>
                </div>
                        <div className="form__form-group">
                            <span className="form__form-group-label">Street Name</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="StreetName"
                                    component="input"
                                    type="text"
                                    placeholder="Street Name"
                                    onChange={(e) => this.StreetName(e)}
                                />
                            </div>
                        </div>

                        <div className="form__form-group">
                            <span className="form__form-group-label">Street Number</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="StreetNumber"
                                    component="input"
                                    type="text"
                                    placeholder="Street Number"
                                    onChange={(e) => this.StreetNumber(e)}
                                />
                            </div>
                        </div>
                        <div className="form__form-group">
                            <span className="form__form-group-label">City/Town Name</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="CityTownName"
                                    component="input"
                                    type="text"
                                    placeholder="City/Town Name"
                                    onChange={(e) => this.CityTownName(e)}
                                />
                            </div>
                        </div>
                        <div className="form__form-group">
                            <span className="form__form-group-label">Province</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="Province"
                                    component="input"
                                    type="text"
                                    placeholder="Province"
                                    onChange={(e) => this.Province(e)}
                                />
                            </div>
                        </div>
                        <div className="form__form-group">
                            <span className="form__form-group-label">Postal Code/ZIP Code</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="PostalCode"
                                    component="input"
                                    type="text"
                                    placeholder="Postal Code/ZIP Code"
                                    onChange={(e) => this.PostalCode(e)}
                                />
                            </div>
                        </div>
                        <div className="form__form-group">
                            <span className="form__form-group-label">PO Box </span>
                            <div className="form__form-group-field">
                                <Field
                                    name="NoOfVehiclesParkingSpace"
                                    component="input"
                                    type="text"
                                    placeholder="PO Box"
                                    onChange={(e) => this.NoOfVehiclesParkingSpace(e)}
                                />
                            </div>
                        </div> 
                        {/*<div className="form__form-group">
                                                          <span className="form__form-group-label">Both the landlord and tenant agree to receive notices and documents by email, where allowed by the Landlord and Tenant Board’s Rules of Practice. </span>
                                                          <div className="form__form-group-field">
                                                            <Field
                                                                name="checkbox_one"
                                                                component={renderCheckBoxField}
                                                                label="Yes"
                                                                defaultChecked
                                                            />
                                                            <Field
                                                                name="checkbox_one"
                                                                component={renderCheckBoxField}
                                                                label="No"
                                                               
                                                            />
                                                          </div>
                        
                                                      </div>
                        
                                                      <div className="form__form-group">
                                                          <span className="form__form-group-label">The landlord is providing phone and/or email contact information for emergencies or day-to-day communications </span>
                                                          <div className="form__form-group-field">
                                                            <Field
                                                                name="checkbox_one"
                                                                component={renderCheckBoxField}
                                                                label="Yes"
                                                                defaultChecked
                                                            />
                                                            <Field
                                                                name="checkbox_one"
                                                                component={renderCheckBoxField}
                                                                label="No"
                                                               
                                                            />
                                                          </div>
                        
                                                      </div>*/}

                          <div className="card__title">
                            <h5 className="bold-text"> Term of Tenancy Agreement    </h5>
                          </div>
                         
                         <div className="form__form-group">
                          <span className="form__form-group-label">This tenancy starts on</span>
                          <div className="form__form-group-field">
                            <Field
                              name="default_date"
                              component={renderDatePickerField}
                            />
                            <div className="form__form-group-icon">
                              <CalendarBlankIcon />
                            </div>
                          </div>
                        </div>
                         <div className="form__form-group">
                          <span className="form__form-group-label">This tenancy ending on</span>
                          <div className="form__form-group-field">
                            <Field
                              name="default_date"
                              component={renderDatePickerField}
                            />
                            <div className="form__form-group-icon">
                              <CalendarBlankIcon />
                            </div>
                          </div>
                        </div>
                         <div className="form__form-group">
                           <span className="form__form-group-label">A monthly tenancy  </span>

                            <Field
                                name="checkbox_one"
                                component={renderCheckBoxField}
                                label=""
                                defaultChecked
                            />

                           
                        </div> 

                           <div className="form__form-group">
                            <span className="form__form-group-label">Other (such as daily, weekly, please specify):</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="PostalCode"
                                    component="input"
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => this.PostalCode(e)}
                                />
                            </div>
                        </div>

                        
                           <div className="card__title">
                            <h5 className="bold-text"> Services and Utilities   </h5>
                            <h5 className="subhead">The following services are included in the lawful rent for the rental unit, as specified: </h5>
                          </div>

                            <div className="form__form-group">
                              <span className="form__form-group-label">Gas </span>
                              <div className="form__form-group-field">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Yes"
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No"
                                   
                                />
                              </div>

                          </div> 

                          <div className="form__form-group">
                              <span className="form__form-group-label">Air conditioning  </span>
                              <div className="form__form-group-field">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Yes"
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No"
                                   
                                />
                              </div>

                          </div>

                          <div className="form__form-group">
                              <span className="form__form-group-label">Additional storage space   </span>
                              <div className="form__form-group-field">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Yes"
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No"
                                   
                                />
                              </div>

                          </div>
                          <div className="form__form-group">
                              <span className="form__form-group-label">On-Site Laundry   </span>
                              <div className="form__form-group-field">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Yes"
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No"
                                   
                                />
                                 <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No Charge "
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Pay Per use "
                                   
                                />
                              </div>

                          </div>
                          <div className="form__form-group">
                              <span className="form__form-group-label">Guest Parking </span>
                              <div className="form__form-group-field">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Yes"
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No"
                                   
                                />
                                 <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No Charge "
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Pay Per use "
                                   
                                />
                              </div>

                          </div>

                          <div className="form__form-group">
                              <span className="form__form-group-label">Other</span>
                              <div className="form__form-group-field">



                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Yes"
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No"
                                   
                                />
                                
                              </div>

                          </div>
                          <div className="form__form-group">
                            <span className="form__form-group-label">Provide details about services</span>
                            <div className="form__form-group-field">
                              <Field
                                name="disableInput"
                                component="input"
                                type="text"
                                placeholder=""
                                
                              />
                            </div>
                          </div>

                          <div className="card__title">
                            <h5 className="subhead"> The following utilities are the responsibility of: </h5>
                          </div>

                          <div className="form__form-group">
                              <span className="form__form-group-label">Electricity </span>
                              <div className="form__form-group-field">



                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Yes"
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No"
                                   
                                />
                                
                              </div>

                          </div>

                           <div className="form__form-group">
                              <span className="form__form-group-label">Heat  </span>
                              <div className="form__form-group-field">



                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Yes"
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No"
                                   
                                />
                                
                              </div>

                          </div>

                           <div className="form__form-group">
                              <span className="form__form-group-label">Water  </span>
                              <div className="form__form-group-field">



                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Yes"
                                    defaultChecked
                                />
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="No"
                                   
                                />
                                
                              </div>

                          </div>

                           <div className="card__title">
                           <h5 className="bold-text">  Rent Discounts   </h5>
                            <h5 className="subhead"> Select one:  </h5>
                          </div>

                          <div className="form__form-group">



                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="There is no rent discount"
                                    defaultChecked
                                />
                               
                                

                          </div>

                          <div className="form__form-group">



                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="The lawful rent will be discounted as follows"
                                    defaultChecked
                                />
                               
                                

                          </div> 


                          <div className="card__title">
                           <h5 className="bold-text">   Rent Deposit    </h5>
                            <h5 className="subhead"> Select one:  </h5>
                          </div>

                          <div className="form__form-group">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="A rent deposit is not required"
                                    defaultChecked
                                />
                          </div>

                          <div className="form__form-group">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="The lawful rent will be discounted as follows:"
                                    defaultChecked
                                />
                          </div>

                          <div className="card__title">
                           <h5 className="bold-text">    Key Deposit     </h5>
                            <h5 className="subhead"> Select one:  </h5>
                          </div>

                          <div className="form__form-group">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="A key deposit is not required. "
                                    defaultChecked
                                />
                          </div>

                          <div className="form__form-group">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="The tenant will pay a refundable key"
                                    defaultChecked
                                />
                          </div>

                          <div className="card__title">
                           <h5 className="bold-text">    Smoking      </h5>
                            <h5 className="subhead"> Select one:  </h5>
                          </div>

                          <div className="form__form-group">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="None  "
                                    defaultChecked
                                />
                          </div>

                          <div className="form__form-group">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="Smoking rules "
                                    defaultChecked
                                />
                          </div>
                          
                           <div className="card__title">
                           <h5 className="bold-text">    Tenant’s Insurance       </h5>
                            <h5 className="subhead"> Select one:  </h5>
                          </div>

                          <div className="form__form-group">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="There are no tenant insurance requirements.   "
                                    defaultChecked
                                />
                          </div>

                          <div className="form__form-group">
                                <Field
                                    name="checkbox_one"
                                    component={renderCheckBoxField}
                                    label="The tenant must have liability insurance at all times. If the landlord asks for proof of coverage, the tenant must provide it.  It is up to the tenant to get contents insurance if they want it.   "
                                    defaultChecked
                                />
                          </div>


               
            </form>
                     
                  
                  
              </Col>
              

                  </Row>
                   <ButtonToolbar className="form__button-toolbar">
                      <Button color="primary" type="button"  onClick={(e)=>this.save(e)}>Submit</Button>
                      <Button type="button">
                        Cancel
                      </Button>
                    </ButtonToolbar>
                   
                   </CardBody>


                  </Card>
                 
        </Col>

    );
  }
}

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(translate('common')(HorizontalForm));
