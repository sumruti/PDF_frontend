import React, { Component } from "react";
import { connect } from "react-redux";
import { PdfFormData } from "../../redux/actions/pdfForm";
import { Card, CardBody, Col, Row, Button, ButtonToolbar } from 'reactstrap';
import renderSelectField from '../../shared/components/form/Select';
import renderMultiSelectField from '../../shared/components/form/MultiSelect';
import { Redirect,Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import renderCheckBoxField from '../../shared/components/form/CheckBox';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import renderDatePickerField from '../../shared/components/form/DatePicker';
import renderDateTimePickerField from '../../shared/components/form/DateTimePicker';
import renderRadioButtonField from '../../shared/components/form/RadioButton';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import CheckIcon from 'mdi-react/CheckIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Modal from '../../shared/components/Modal';
import swal from 'sweetalert';
import $ from "jquery";








class CreatePdf extends Component {

 


    constructor() {
    super();
    this.state = {
      LandlordName: '',
      tenantFname: '',
      tenantLname: '',
      RentalUnitName: '',
      StreetName: '',
      StreetNumber: '',
      CityTownName: '',
      Province: '',
      PostalCode: '',
      NoOfVehiclesParkingSpace: '',
      Rentalunitinacondominium: '',
      ContactUnit: '',
      ContactStreetName: '',
      ContactStreetNumber: '',
      ContactCityTownName: '',
      ContactProvince: '',
      ContactPostalCode: '',
      ContactPoBox: '',
      condominium: '',
      Boththelandlordandtenant: '',
      landlordisprovidingphone: '',
      tenancystartson: null,
      tenancyendingon: null,
      Gas: '',
      Airconditioning: '',
      Additionalstoragespace: '',
      OnSiteLaundry: '',
      GuestParking: '',
      other: '',
      utilitiesresponsibility: '',
      Heat: '',
      Water: '',
      RentDiscounts: '',
      Rent_is_to_paid: '',
      Otherservices_and_utilities: '',
      ParkingIfApplicatble: '',
      Baserent: '',
      TotalRent: '',
      Rentispayableto: '',
      TheTenantWillPayPartialRentof: '',
      partialrentofprice: '',
      ThisPartialRentCoversFrom: '',
      ThisPartialRentCoversto: '',
      landlordSAdministration: '',
      KeyDeposit: '',
      Smoking: '',
      AdditionalTerms: '',
      LandlordNameSigningAgreement: '',
      LandlordSignature: '',
      LandlordAgreementDate: '',
      TenantAgreementName: '',
      TenantAgreementSignature: '',
      TenantAgreementDate: '',
      TenantInsurance   : '',
      Amonthlytenancy   : '',
      Othertenanc   : '',
      RentDeposit   : '',
      Pdflink:'',
       modal: false,
       counter:1
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

  RentalUnitName (e) {
    this.setState({
      RentalUnitName: e.target.value
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


  Rentalunitinacondominium (e) {
     this.setState({
      Rentalunitinacondominium: e.target.value
 });
      }


 ContactUnit (e) {
     this.setState({
      ContactUnit: e.target.value
 });
 }

ContactStreetName(e) {
     this.setState({
      ContactStreetName: e.target.value
 });
      }


ContactStreetNumber (e){
     this.setState({
      ContactStreetNumber: e.target.value
 });
      }


 ContactCityTownName(e){
     this.setState({
      ContactCityTownName: e.target.value
 });
      }

ContactProvince (e) {
     this.setState({
      ContactProvince: e.target.value
 });
      }


 ContactPostalCode(e) {
     this.setState({
      ContactPostalCode: e.target.value
 });
      }

ContactPoBox (e) {
     this.setState({
      ContactPoBox: e.target.value
 });
      }
condominium (e) {
     this.setState({
      condominium: e.target.value
 });
}
Boththelandlordandtenant (e) {
     this.setState({
      Boththelandlordandtenant: e.target.value
 });
}
landlordisprovidingphone (e) {
     this.setState({
      landlordisprovidingphone: e.target.value
 });
}
tenancystartson (date) {
     this.setState({
      tenancystartson: date
 });
}
tenancyendingon (date) {
     this.setState({
      tenancyendingon: date
 });
}
Gas (e) {
     this.setState({
      Gas: e.target.value
 });
}
Airconditioning (e) {
     this.setState({
      Airconditioning: e.target.value
 });
}
Additionalstoragespace (e) {
     this.setState({
      Additionalstoragespace: e.target.value
 });
}
OnSiteLaundry (e) {
     this.setState({
      OnSiteLaundry: e.target.value
 });
}
GuestParking (e) {
     this.setState({
      GuestParking: e.target.value
 });
}

other (e) {
     this.setState({
      other: e.target.value
 });
}
utilitiesresponsibility (e) {
     this.setState({
      utilitiesresponsibility: e.target.value
 });
}
Heat (e) {
     this.setState({
      Heat: e.target.value
 });
}

Water (e) {
     this.setState({
      Water: e.target.value
 });
}
RentDiscounts (e) {
     this.setState({
      RentDiscounts: e.target.value
 });
}
Rent_is_to_paid (e) {
     this.setState({
      Rent_is_to_paid: e.target.value
 });
}
Otherservices_and_utilities (e) {
     this.setState({
      Otherservices_and_utilities: e.target.value
 });
}
ParkingIfApplicatble (e) {
     this.setState({
      ParkingIfApplicatble: e.target.value
 });
}
Baserent (e) {
     this.setState({
      Baserent: e.target.value
 });
}
TotalRent (e) {
     this.setState({
      TotalRent: e.target.value
 });
}
Rentispayableto (e) {
     this.setState({
      Rentispayableto: e.target.value
 });
}
TheTenantWillPayPartialRentof (Date) {
     this.setState({
      TheTenantWillPayPartialRentof: Date
 });
}
partialrentofprice (e) {
     this.setState({
      partialrentofprice: e.target.value
 });
}
ThisPartialRentCoversFrom (Date) {
     this.setState({
      ThisPartialRentCoversFrom: Date
 });
}
ThisPartialRentCoversto (Date) {
     this.setState({
      ThisPartialRentCoversto: Date
 });
}

landlordSAdministration (e) {
     this.setState({
      landlordSAdministration: e.target.value
 });
}
TenantInsurance (e) {
     this.setState({
      TenantInsurance: e.target.value
 });
}
KeyDeposit (e) {
     this.setState({
      KeyDeposit: e.target.value
 });
}RentDeposit (e) {
     this.setState({
      RentDeposit: e.target.value
 });
}
Smoking (e) {
     this.setState({
      Smoking: e.target.value
 });
}
AdditionalTerms (e) {
     this.setState({
      AdditionalTerms: e.target.value
 });
}

LandlordNameSigningAgreement (e) {
     this.setState({
      LandlordNameSigningAgreement: e.target.value
 });
}
LandlordSignature (e) {
     this.setState({
      LandlordSignature: e.target.value
 });
}
TenantAgreementName (e) {
     this.setState({
      TenantAgreementName: e.target.value
 });
}
TenantAgreementSignature (e) {
     this.setState({
      TenantAgreementSignature: e.target.value
 });
}
LandlordAgreementDate (date) {
     this.setState({
      LandlordAgreementDate: date
 });
}
TenantAgreementDate (date) {
     this.setState({
      TenantAgreementDate: date
 });
}
Amonthlytenancy (e) {
     this.setState({
      Amonthlytenancy: e.target.value
 });
}
Othertenanc (e) {
     this.setState({
      Othertenanc: e.target.value
 });
}


AddTenant(e){
    var max_fields_limit      = 4; //set limit for maximum input fields
    //initialize counter for text box
    //$('.add_more_button').click(function(e){ //click event on add more fields button having class add_more_button
        //e.preventDefault();
        if(this.state.counter <= max_fields_limit){ //check conditions
            this.state.counter++
            var appendHtml = '<div id="delete_'+this.state.counter+'">'+
            '<div class="row">'+
            '<div class="col-md-5">'+
            '<div class="form__form-group">'+
            '<span class="form__form-group-label">Tenant First Name</span>'+
            '<div class="form__form-group-field">'+
            '<input name="tenantFname[]" id="fTenant" type="text" placeholder="First Name" />'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class="col-md-5">'+
            '<div class="form__form-group">'+
            '<span class="form__form-group-label">Tenant Last Name</span>'+
            '<div class="form__form-group-field">'+
            '<input name="tenantLname[]" id="lTenant" type="text" placeholder="Last Name" />'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class="col-md-2"><button type="button" class="btn btn-danger" value="'+this.state.counter+'"  id="remove_field" >Remove</button></div>'+
            '</div>'+
            '</div>';
            $('.append_filed').append(appendHtml); //add input field
        }

        
                                        
    //});

    $('.append_filed').on("click","#remove_field", function(e){ //user click on remove text links
        $('#delete_'+e.target.value).remove();
    })

}


save (e) {

 
var tenantFname = $("input[name='tenantFname[]']").map(function(){return $(this).val();}).get();
var tenantLname = $("input[name='tenantLname[]']").map(function(){return $(this).val();}).get();
  
     
    const params = {
        LandlordName:this.state.LandlordName,
        tenantFname:tenantFname,
        tenantLname:tenantLname,
        RentalUnitName:this.state.RentalUnitName,
        StreetName:this.state.StreetName,
        StreetNumber:this.state.StreetNumber,
        CityTownName:this.state.CityTownName,
        Province:this.state.Province,
        PostalCode:this.state.PostalCode,
        NoOfVehiclesParkingSpace:this.state.NoOfVehiclesParkingSpace,
        Rentalunitinacondominium:this.state.Rentalunitinacondominium,
        ContactUnit:this.state.ContactUnit,
        ContactStreetName:this.state.ContactStreetName,
        ContactStreetNumber:this.state.ContactStreetNumber,
        ContactCityTownName:this.state.ContactCityTownName,
        ContactProvince:this.state.ContactProvince,
        ContactPostalCode:this.state.ContactPostalCode,
        ContactPoBox:this.state.ContactPoBox,
        condominium:this.state.condominium,
        Boththelandlordandtenant:this.state.Boththelandlordandtenant,
        landlordisprovidingphone:this.state.landlordisprovidingphone,
        tenancystartson:this.state.tenancystartson,
        tenancyendingon:this.state.tenancyendingon,
        Gas:this.state.Gas,
        Airconditioning:this.state.Airconditioning,
        Additionalstoragespace:this.state.Additionalstoragespace,
        OnSiteLaundry:this.state.OnSiteLaundry,
        GuestParking:this.state.GuestParking,
        other:this.state.other,
        utilitiesresponsibility:this.state.utilitiesresponsibility,
        Heat:this.state.Heat,
        Water:this.state.Water,
        RentDiscounts:this.state.RentDiscounts,
        Rent_is_to_paid:this.state.Rent_is_to_paid,
        Otherservices_and_utilities:this.state.Otherservices_and_utilities,
        ParkingIfApplicatble:this.state.ParkingIfApplicatble,
        Baserent:this.state.Baserent,
        TotalRent:this.state.TotalRent,
        Rentispayableto:this.state.Rentispayableto,
        TheTenantWillPayPartialRentof:this.state.TheTenantWillPayPartialRentof,
        partialrentofprice:this.state.partialrentofprice,
        ThisPartialRentCoversFrom:this.state.ThisPartialRentCoversFrom,
        ThisPartialRentCoversto:this.state.ThisPartialRentCoversto,
        landlordSAdministration:this.state.landlordSAdministration,
        KeyDeposit:this.state.KeyDeposit,
        Smoking:this.state.Smoking,
        AdditionalTerms:this.state.AdditionalTerms,
        LandlordNameSigningAgreement:this.state.LandlordNameSigningAgreement,
        LandlordSignature:this.state.LandlordSignature,
        LandlordAgreementDate:this.state.LandlordAgreementDate,
        TenantAgreementName:this.state.TenantAgreementName,
        TenantAgreementSignature:this.state.TenantAgreementSignature,
        TenantAgreementDate:this.state.TenantAgreementDate,
        TenantInsurance:this.state.TenantInsurance,
        Amonthlytenancy:this.state.Amonthlytenancy,
        Othertenanc:this.state.Othertenanc,
        RentDeposit:this.state.RentDeposit,

    }
  axios.post('http://localhost:5060/PdfDetails', params)
    .then(res=> this.setState({Pdflink:res.data.link}))
    .catch(err=>console.log(err.response.data));
  }


            //this.props.PdfFormData(this.state);
           
    



 /* handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push("/");
  };*/
  render() {
    const { disabled, className, name, label, radioValue, value,color, btn, title, message, colored, header, } = this.props;
    const { Pdflink } = this.state;
    console.log(Pdflink)

    /*if(Pdflink){
        $('#exampleModal').modal('show');
    }*/
    

 const RadioButtonClass = classNames({
      'radio-btn': true,
      disabled,
    });

 if(Pdflink){
  var myhtml = document.createElement("div");
   myhtml.innerHTML = "You have successfully create PDF <a target='_blank' href="+Pdflink+">Download Pdf</b>  "
  swal({
        title: "Lease PDF", 
        content: myhtml,

      });
}

      return (
           <div clsssName="main">
           {Pdflink ? <a href={Pdflink}>Link download</a> : ''}
                          <Card>
                     <CardBody>
                          <Row>
                               <Col md={12}>
                                    <div className="card__title">
                                        <h5 className="bold-text">Parties to the Agreement </h5>
                                        <h5 className="subhead">Residential Tenancy Agreement between: </h5>
                                        <h5 className="subhead">Landlord(s) </h5>
                                    </div>
                                    <form className="form form--horizontal">
                                      <div className="form__form-group">
                                        <span className="form__form-group-label">Landlord’s  Name</span>
                                        <div className="form__form-group-field">
                                          <input
                                            name="LandlordName"
                                            type="text"
                                            id="fTenant"
                                            placeholder="Landlord’s  Name"
                                            onChange={(e)=>this.LandlordName(e)}
                                          />
                                        </div>

                                      </div>
                                      <Row>
                                      <Col md={5}>
                                      <div className="form__form-group">
                                        <span className="form__form-group-label">Tenant First Name</span>
                                        <div className="form__form-group-field">
                                          <input
                                            name="tenantFname[]"
                                            component="input"
                                            type="text"
                                            placeholder="First Name"
                                            id="lTenant"
                                            onChange={(e)=>this.tenantFname(e)}
                                            
                                          />
                                        </div>
                                      </div>
                                      </Col>
                                      <Col md={5}>
                                      <div className="form__form-group">
                                        <span className="form__form-group-label">Tenant Last Name</span>
                                        <div className="form__form-group-field">
                                          <input
                                            name="tenantLname[]"
                                            type="text"
                                            placeholder="Last Name"
                                            onChange={(e)=>this.tenantLname(e)}
                                          />
                                        </div>
                                      </div>
                                      </Col>
                                      <Col md={2}>
                                       <Button color="primary" type="button"  onClick={(e)=>this.AddTenant(e)}>Add</Button>

                                      </Col>

                                      </Row>
                                      <div className="append_filed"></div>
                                      <div className="card__title">
                                          <h5 className="bold-text"> Rental Unit  </h5>
                                          <h5 className="subhead">The landlord will rent to the tenant the rental unit at:</h5>
                                      </div>
                                      <div className="form__form-group">
                                            <span className="form__form-group-label">Rental Unit  Name</span>
                                            <div className="form__form-group-field">
                                                <input
                                                    name="RentalUnitName"
                                                    type="text"
                                                    placeholder="Rental Unit Name"
                                                    onChange={(e) => this.RentalUnitName(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form__form-group">
                                            <span className="form__form-group-label">Street Name</span>
                                            <div className="form__form-group-field">
                                                <input
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
                                                <input
                                                    name="StreetNumber"
                                                    type="text"
                                                    placeholder="Street Number"
                                                    onChange={(e) => this.StreetNumber(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form__form-group">
                                            <span className="form__form-group-label">City/Town Name</span>
                                            <div className="form__form-group-field">
                                                <input
                                                    name="CityTownName"
                                                    type="text"
                                                    placeholder="City/Town Name"
                                                    onChange={(e) => this.CityTownName(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form__form-group">
                                            <span className="form__form-group-label">Province</span>
                                            <div className="form__form-group-field">
                                                <input
                                                    name="Province"
                                                    type="text"
                                                    placeholder="Province"
                                                    onChange={(e) => this.Province(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form__form-group">
                                            <span className="form__form-group-label">Postal Code</span>
                                            <div className="form__form-group-field">
                                                <input
                                                    name="PostalCode"
                                                    type="text"
                                                    placeholder="Postal Code"
                                                    onChange={(e) => this.PostalCode(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form__form-group">
                                            <span className="form__form-group-label">No. Of Vehicles Parking Space </span>
                                            <div className="form__form-group-field">
                                                <input
                                                    name="NoOfVehiclesParkingSpace"
                                                    type="text"
                                                    placeholder="No. Of Vehicles Parking Space"
                                                    onChange={(e) => this.NoOfVehiclesParkingSpace(e)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form__form-group">
                                          <span className="form__form-group-label">Is Rental unit in a condominium?</span>
                                          <div className="form__form-group-field">
                                             <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                <input
                                                  className="radio-btn__radio"
                                                  name="radio3"
                                                  type="radio"
                                                  onChange={(e)=>this.condominium(e)}
                                                  value="1"
                                                />
                                                <span className="radio-btn__radio-custom" />
                                                {className === 'button' ?
                                                  <span className="radio-btn__label-svg">
                                                    <CheckIcon className="radio-btn__label-check" />
                                                    <CloseIcon className="radio-btn__label-uncheck" />
                                                  </span> : ''}
                                                <span className="radio-btn__label">Yes</span>
                                              </label>

                                            <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                <input
                                                  className="radio-btn__radio"
                                                  name="radio3"
                                                  type="radio"
                                                  onChange={(e)=>this.condominium(e)}
                                                  value="1"
                                                />
                                              <span className="radio-btn__radio-custom" />
                                                {className === 'button' ?
                                                  <span className="radio-btn__label-svg">
                                                    <CheckIcon className="radio-btn__label-check" />
                                                    <CloseIcon className="radio-btn__label-uncheck" />
                                                  </span> : ''}
                                                <span className="radio-btn__label">No</span>
                                            </label>


                                          </div>
                                      </div>
                                      <div className="card__title">
                                        <h5 className="bold-text"> Contact Information   </h5>
                                        <h5 className="subhead">Address for Giving Notices or Documents to the Landlord</h5>
                                      </div>

                                       <div className="form__form-group">
                                        <span className="form__form-group-label"> Unit</span>
                                        <div className="form__form-group-field">
                                                <input
                                                    name="ContactUnit"
                                                    component="input"
                                                    type="text"
                                                    placeholder="Rental Unit Name"
                                                    onChange={(e) => this.ContactUnit(e)}
                                                />
                                              </div>
                                        </div>
                                            <div className="form__form-group">
                                                <span className="form__form-group-label">Street Name</span>
                                                <div className="form__form-group-field">
                                                    <input
                                                        name="StreetName"
                                                        component="input"
                                                        type="text"
                                                        placeholder="Street Name"
                                                        onChange={(e) => this.ContactStreetName(e)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form__form-group">
                                                <span className="form__form-group-label">Street Number</span>
                                                <div className="form__form-group-field">
                                                    <input
                                                        name="StreetNumber"
                                                        component="input"
                                                        type="text"
                                                        placeholder="Street Number"
                                                        onChange={(e) => this.ContactStreetNumber(e)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form__form-group">
                                                <span className="form__form-group-label">City/Town Name</span>
                                                <div className="form__form-group-field">
                                                    <input
                                                        name="CityTownName"
                                                        component="input"
                                                        type="text"
                                                        placeholder="City/Town Name"
                                                        onChange={(e) => this.ContactCityTownName(e)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form__form-group">
                                                <span className="form__form-group-label">Province</span>
                                                <div className="form__form-group-field">
                                                    <input
                                                        name="Province"
                                                        component="input"
                                                        type="text"
                                                        placeholder="Province"
                                                        onChange={(e) => this.ContactProvince(e)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form__form-group">
                                                <span className="form__form-group-label">Postal Code/ZIP Code</span>
                                                <div className="form__form-group-field">
                                                    <input
                                                        name="PostalCode"
                                                        component="input"
                                                        type="text"
                                                        placeholder="Postal Code/ZIP Code"
                                                        onChange={(e) => this.ContactPostalCode(e)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form__form-group">
                                                <span className="form__form-group-label">PO Box </span>
                                                <div className="form__form-group-field">
                                                    <input
                                                        name="NoOfVehiclesParkingSpace"
                                                        component="input"
                                                        type="text"
                                                        placeholder="PO Box"
                                                        onChange={(e) => this.ContactPoBox(e)}
                                                    />
                                                </div>
                                            </div> 
                                          

                                            <div className="form__form-group">
                                              <Row>
                                                 <Col md={12}>
                                                    <span className="form__form-group-label custom_class">Both the landlord and tenant agree to receive notices and documents by email, where allowed by the Landlord and Tenant Board’s Rules of Practice. </span>
                                                 </Col>
                                                  <Col md={12}>  
                                                    <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                <input
                                                  className="radio-btn__radio"
                                                  name="radio1"
                                                  type="radio"
                                                  onChange={(e)=>this.Boththelandlordandtenant(e)}
                                                  value="1"
                                                  disabled={disabled}
                                                />
                                                <span className="radio-btn__radio-custom" />
                                                {className === 'button' ?
                                                  <span className="radio-btn__label-svg">
                                                    <CheckIcon className="radio-btn__label-check" />
                                                    <CloseIcon className="radio-btn__label-uncheck" />
                                                  </span> : ''}
                                                <span className="radio-btn__label">Yes</span>
                                              </label>

                                            <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                <input
                                                  className="radio-btn__radio"
                                                  name="radio1"
                                                  type="radio"
                                                  onChange={(e)=>this.Boththelandlordandtenant(e)}
                                                  value="0"
                                                  disabled={disabled}
                                                />
                                              <span className="radio-btn__radio-custom" />
                                                {className === 'button' ?
                                                  <span className="radio-btn__label-svg">
                                                    <CheckIcon className="radio-btn__label-check" />
                                                    <CloseIcon className="radio-btn__label-uncheck" />
                                                  </span> : ''}
                                                <span className="radio-btn__label">No</span>
                                            </label>
                                                  </Col>
                                                </Row>
                                            </div>
                                            
                                          
                                            <div className="form__form-group">
                                            <Row>
                                             <Col md={12}>
                                               <span className="form__form-group-label custom_class">The landlord is providing phone and/or email contact information for emergencies or day-to-day communications </span>
                                             </Col>
                                              <Col md={12}> 
                                                    <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio2"
                                                      type="radio"
                                                      onChange={(e)=>this.landlordisprovidingphone(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                    <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Yes</span>
                                                  </label>

                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio2"
                                                      type="radio"
                                                      onChange={(e)=>this.landlordisprovidingphone(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">No</span>
                                                </label>
                                              </Col>
                                            </Row>

                                           </div>
                                           <div className="card__title">
                                                <h5 className="bold-text"> Term of Tenancy Agreement    </h5>
                                          </div>
                                         <div className="form__form-group">
                                            <span className="form__form-group-label">This tenancy starts on</span>
                                            <div className="form__form-group-field">
                                                <div className="date-picker">
                                                <DatePicker
                                                  className="form__form-group-datepicker"
                                                  selected={this.state.tenancystartson}
                                                  onChange={(e)=>this.tenancystartson(e)}
                                                  dateFormat="LL"
                                                />
                                              </div>
                                                <div className="form__form-group-icon">
                                                  <CalendarBlankIcon />
                                              </div>
                                            </div>
                                        </div>
                                        <div className="form__form-group">
                                          <span className="form__form-group-label">This tenancy ending on</span>
                                            <div className="form__form-group-field">
                                                <div className="date-picker">
                                                <DatePicker
                                                  className="form__form-group-datepicker"
                                                  selected={this.state.tenancyendingon}
                                                  onChange={(e)=>this.tenancyendingon(e)}
                                                  dateFormat="LL"
                                                />
                                              </div>
                                            <div className="form__form-group-icon">
                                                <CalendarBlankIcon />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="form__form-group">
                                            <span className="form__form-group-label">A monthly tenancy:</span>
                                             <div className="form__form-group-field">
                                                    <input
                                                        name="PostalCode"
                                                        component="input"
                                                        type="text"
                                                        placeholder=""
                                                        onChange={(e) => this.Amonthlytenancy(e)}
                                                    />
                                            </div>
                                        </div>

                                        <div className="form__form-group">
                                            <span className="form__form-group-label">Other (such as daily, weekly, please specify):</span>
                                             <div className="form__form-group-field">
                                                    <input
                                                        name="Othertenanc"
                                                        component="input"
                                                        type="text"
                                                        placeholder=""
                                                        onChange={(e) => this.Othertenanc(e)}
                                                    />
                                            </div>
                                        </div>

                                        <div className="card__title">
                                            <h5 className="bold-text"> Rent   </h5>
                                         </div>

                                         <div className="form__form-group">
                                            <span className="form__form-group-label">Rent is to be paid on the </span>
                                            <div className="form__form-group-field">
                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio21"
                                                      type="radio"
                                                      onChange={(e)=>this.Rent_is_to_paid(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Month</span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio21"
                                                      type="radio"
                                                      onChange={(e)=>this.Rent_is_to_paid(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Other</span>
                                                </label>
                                            </div>
                                        </div> 

                                         <div className="card__title">
                                               <h5 className="subhead"> The tenant will pay the following rent: </h5>
                                        </div>

                                         <div className="form__form-group">
                                            <span className="form__form-group-label">Base rent for the rental unit:</span>
                                             <div className="form__form-group-field">
                                                    <input
                                                        name="Baserent"
                                                        component="input"
                                                        type="text"
                                                        placeholder=""
                                                        onChange={(e) => this.Baserent(e)}
                                                    />
                                            </div>
                                        </div>

                                         <div className="form__form-group">
                                            <span className="form__form-group-label">Parking (if applicable):</span>
                                             <div className="form__form-group-field">
                                                    <input
                                                        name="ParkingIfApplicatble"
                                                        component="input"
                                                        type="text"
                                                        placeholder=""
                                                        onChange={(e) => this.ParkingIfApplicatble(e)}
                                                    />
                                            </div>
                                        </div>
                                        <div className="form__form-group">
                                            <span className="form__form-group-label">Other services and utilities (specify if applicable:</span>
                                             <div className="form__form-group-field">
                                                    <input
                                                        name="Otherservices_and_utilities"
                                                        component="input"
                                                        type="text"
                                                        placeholder=""
                                                        onChange={(e) => this.Otherservices_and_utilities(e)}
                                                    />
                                            </div>
                                        </div>

                                        <div className="form__form-group">
                                            <span className="form__form-group-label">Total Rent (Lawful Rent):</span>
                                             <div className="form__form-group-field">
                                                    <input
                                                        name="TotalRent"
                                                        component="input"
                                                        type="text"
                                                        placeholder=""
                                                        onChange={(e) => this.TotalRent(e)}
                                                    />
                                            </div>
                                        </div>
                                        <div className="form__form-group">
                                            <span className="form__form-group-label">Rent is payable to:</span>
                                             <div className="form__form-group-field">
                                                    <input
                                                        name="Rentispayableto"
                                                        component="input"
                                                        type="text"
                                                        placeholder=""
                                                        onChange={(e) => this.Rentispayableto(e)}
                                                    />
                                            </div>
                                        </div>
                                        <div className="card__title">
                                               <h5 className="subhead"> Rent will be paid using the following methods:: </h5>
                                        </div>

                                        <div className="form__form-group">

                                            <span className="form__form-group-label">The tenant will pay a partial rent of $ :</span>
                                             <div className="form__form-group-field">
                                                    <input
                                                        name="Rentispayableto"
                                                        component="input"
                                                        type="text"
                                                        placeholder=""
                                                        onChange={(e) => this.partialrentofprice(e)}
                                                    />
                                            </div>
                                        </div>

                                        <div className="form__form-group">
                                          <span className="form__form-group-label">The tenant will pay a partial rent of date </span>
                                            <div className="form__form-group-field">
                                                <div className="date-picker">
                                                <DatePicker
                                                  className="form__form-group-datepicker"
                                                  selected={this.state.TheTenantWillPayPartialRentof}
                                                  onChange={(e)=>this.TheTenantWillPayPartialRentof(e)}
                                                  dateFormat="LL"
                                                />
                                              </div>
                                            <div className="form__form-group-icon">
                                                <CalendarBlankIcon />
                                            </div>
                                        </div>
                                        </div>
                                      <div className="form__form-group">
                                          <span className="form__form-group-label">This partial rent covers the rental of the unit from</span>
                                            <div className="form__form-group-field">
                                                <div className="date-picker">
                                                <DatePicker
                                                  className="form__form-group-datepicker"
                                                  selected={this.state.ThisPartialRentCoversFrom}
                                                  onChange={(e)=>this.ThisPartialRentCoversFrom(e)}
                                                  dateFormat="LL"
                                                />
                                              </div>
                                            <div className="form__form-group-icon">
                                                <CalendarBlankIcon />
                                            </div>
                                          </div>
                                        </div>

                                         <div className="form__form-group">
                                          <span className="form__form-group-label">This partial rent covers the rental of the unit to</span>
                                            <div className="form__form-group-field">
                                                <div className="date-picker">
                                                <DatePicker
                                                  className="form__form-group-datepicker"
                                                  selected={this.state.ThisPartialRentCoversto}
                                                  onChange={(e)=>this.ThisPartialRentCoversto(e)}
                                                  dateFormat="LL"
                                                />
                                              </div>
                                            <div className="form__form-group-icon">
                                                <CalendarBlankIcon />
                                            </div>
                                          </div>
                                        </div>
                                         <div className="form__form-group">

                                            <span className="form__form-group-label">The tenant will have to pay the landlord’s administration charge of $ :</span>
                                             <div className="form__form-group-field">
                                                    <input
                                                        name="Rentispayableto"
                                                        component="input"
                                                        type="text"
                                                        placeholder=""
                                                        onChange={(e) => this.landlordSAdministration(e)}
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
                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio12"
                                                      type="radio"
                                                      onChange={(e)=>this.Gas(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Yes</span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio12"
                                                      type="radio"
                                                      onChange={(e)=>this.Gas(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">No</span>
                                                </label>
                                            </div>
                                        </div> 

                                        <div className="form__form-group">
                                            <span className="form__form-group-label">Air conditioning  </span>
                                            <div className="form__form-group-field">
                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio13"
                                                      type="radio"
                                                      onChange={(e)=>this.Airconditioning(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Yes</span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio13"
                                                      type="radio"
                                                      onChange={(e)=>this.Airconditioning(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">No</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form__form-group">
                                         <span className="form__form-group-label">Additional storage space   </span>
                                            <div className="form__form-group-field">
                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio14"
                                                      type="radio"
                                                      onChange={(e)=>this.Additionalstoragespace(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Yes</span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio14"
                                                      type="radio"
                                                      onChange={(e)=>this.Additionalstoragespace(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">No</span>
                                                </label>
                                            </div>

                                            </div>
                                            <div className="form__form-group">
                                             <span className="form__form-group-label">On-Site Laundry   </span>
                                                <div className="form__form-group-field">
                                                    <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio15"
                                                      type="radio"
                                                      onChange={(e)=>this.OnSiteLaundry(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Yes</span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio15"
                                                      type="radio"
                                                      onChange={(e)=>this.OnSiteLaundry(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">No</span>
                                                </label>
                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio15"
                                                      type="radio"
                                                      onChange={(e)=>this.OnSiteLaundry(e)}
                                                      value="2"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">No Charge </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio15"
                                                      type="radio"
                                                      onChange={(e)=>this.OnSiteLaundry(e)}
                                                      value="3"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Pay Per use</span>
                                                </label>
                                                    
                                                </div>
                                         </div>
                                        <div className="form__form-group">
                                          <span className="form__form-group-label">Guest Parking </span>
                                            <div className="form__form-group-field">
                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio16"
                                                      type="radio"
                                                      onChange={(e)=>this.GuestParking(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Yes</span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio16"
                                                      type="radio"
                                                      onChange={(e)=>this.GuestParking(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">No</span>
                                                </label>
                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio16"
                                                      type="radio"
                                                      onChange={(e)=>this.GuestParking(e)}
                                                      value="2"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">No Charge </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio16"
                                                      type="radio"
                                                      onChange={(e)=>this.GuestParking(e)}
                                                      value="3"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Pay Per use</span>
                                                </label>
                                                </div>

                                            </div>

                                            <div className="form__form-group">
                                            <span className="form__form-group-label">Other</span>
                                                <div className="form__form-group-field">
                                                    <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio17"
                                                      type="radio"
                                                      onChange={(e)=>this.other(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Yes </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio17"
                                                      type="radio"
                                                      onChange={(e)=>this.other(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">No</span>
                                                </label>
                                                </div>
                                            </div>
                                            <div className="form__form-group">
                                             <span className="form__form-group-label">Provide details about services</span>
                                                <div className="form__form-group-field">
                                                    <input
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
                                                  <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio18"
                                                      type="radio"
                                                      onChange={(e)=>this.utilitiesresponsibility(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Landlord </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio18"
                                                      type="radio"
                                                      onChange={(e)=>this.utilitiesresponsibility(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Tenant</span>
                                                </label>
                                                </div>
                                                </div>

                                            <div className="form__form-group">
                                              <span className="form__form-group-label">Heat  </span>
                                                <div className="form__form-group-field">
                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio19"
                                                      type="radio"
                                                      onChange={(e)=>this.Heat(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Landlord </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio19"
                                                      type="radio"
                                                      onChange={(e)=>this.Heat(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Tenant</span>
                                                </label>

                                                </div>
                                            </div>

                                            <div className="form__form-group">
                                               <span className="form__form-group-label">Water  </span>
                                                <div className="form__form-group-field">
                                                    <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio20"
                                                      type="radio"
                                                      onChange={(e)=>this.Water(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Landlord </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio20"
                                                      type="radio"
                                                      onChange={(e)=>this.Water(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">Tenant</span>
                                                </label>

                                                </div>
                                                </div>
                                                <div className="card__title">
                                                    <h5 className="bold-text">  Rent Discounts   </h5>
                                                    <h5 className="subhead"> Select one:  </h5>
                                                </div>
                                                <div className="form__form-group-field">

                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio31"
                                                      type="radio"
                                                      onChange={(e)=>this.RentDiscounts(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">There is no rent discount. </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio31"
                                                      type="radio"
                                                      onChange={(e)=>this.RentDiscounts(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">The lawful rent will be discounted as follow</span>
                                                </label>
                                                </div>

                                                <div className="card__title">
                                                    <h5 className="bold-text">   Rent Deposit    </h5>
                                                    <h5 className="subhead"> Select one:  </h5>
                                                </div>
                                                <div className="form__form-group-field">

                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio41"
                                                      type="radio"
                                                      onChange={(e)=>this.RentDeposit (e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">There is no rent discount. </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio41"
                                                      type="radio"
                                                      onChange={(e)=>this.RentDeposit(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">The lawful rent will be discounted as follow</span>
                                                </label>
                                                </div>

                                                <div className="card__title">
                                                    <h5 className="bold-text">  Key Deposit  </h5>
                                                    <h5 className="subhead"> Select one:  </h5>
                                                </div>
                                                <div className="form__form-group-field">

                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio22"
                                                      type="radio"
                                                      onChange={(e)=>this.KeyDeposit(e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">A key deposit is not required. </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio22"
                                                      type="radio"
                                                      onChange={(e)=>this.KeyDeposit(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">The tenant will pay a refundable key deposit </span>
                                                </label>
                                                </div>

                                                 <div className="card__title">
                                                    <h5 className="bold-text">  Smoking   </h5>
                                                    <h5 className="subhead"> Select one:  </h5>
                                                </div>
                                                <div className="form__form-group-field">

                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio23"
                                                      type="radio"
                                                      onChange={(e)=>this.Smoking (e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">A key deposit is not required. </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio23"
                                                      type="radio"
                                                      onChange={(e)=>this.Smoking(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">The tenant will pay a refundable key deposit </span>
                                                </label>
                                                </div> 

                                             <div className="card__title">
                                                    <h5 className="bold-text">  Tenant’s Insurance   </h5>
                                                    <h5 className="subhead"> Select one:  </h5>
                                                </div>
                                                <div className="form__form-group-field">

                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio24"
                                                      type="radio"
                                                      onChange={(e)=>this.TenantInsurance (e)}
                                                      value="0"
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">There are no tenant insurance requirements. </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio24"
                                                      type="radio"
                                                      onChange={(e)=>this.TenantInsurance(e)}
                                                      value="1"
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">The tenant must have liability insurance at all times. If the landlord asks for proof of coverage, the tenant must provide it. It is up to the tenant to get contents insurance if they want it. </span>
                                                  </label>
                                                </div>

                                                 <div className="card__title">
                                                    <h5 className="bold-text">   Additional Terms  </h5>
                                                    <h5 className="subhead"> The landlord and tenant may want to get legal advice before agreeing to any additional terms.  </h5>
                                                    <h5 className="subhead"> Select one:  </h5>
                                                </div>
                                                <div className="form__form-group-field">

                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio25"
                                                      type="radio"
                                                      onChange={(e)=>this.AdditionalTerms (e)}
                                                      value="0"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">There are no additional terms </span>
                                                </label>


                                                <label className={`${RadioButtonClass}${className ? ` radio-btn--${className}` : ''}`}>
                                                    <input
                                                      className="radio-btn__radio"
                                                      name="radio25"
                                                      type="radio"
                                                      onChange={(e)=>this.AdditionalTerms(e)}
                                                      value="1"
                                                      disabled={disabled}
                                                    />
                                                  <span className="radio-btn__radio-custom" />
                                                    {className === 'button' ?
                                                      <span className="radio-btn__label-svg">
                                                        <CheckIcon className="radio-btn__label-check" />
                                                        <CloseIcon className="radio-btn__label-uncheck" />
                                                      </span> : ''}
                                                    <span className="radio-btn__label">This tenancy agreement includes an attachment with additional terms that the landlord and tenant agreed to.  </span>
                                                  </label>
                                                </div>

                                                <div className="card__title">
                                                    <h5 className="bold-text">  Signatures  </h5>
                                                    <h5 className="subhead"> By signing this agreement, the landlord(s) and the tenant(s) agree to follow its terms.  </h5>
                                                    <h5 className="subhead"> Unless otherwise agreed in the additional terms under Section 15, if there is more than one tenant, each tenant is responsible for all tenant obligations under this agreement, including the full amount of rent.   </h5>
                                                    <h5 className="bold-text">  Landlord(s):  </h5>
                                                </div>

                                                    <div className="form__form-group">
                                                        <span className="form__form-group-label">Name</span>
                                                        <div className="form__form-group-field">
                                                          <input
                                                            name="LandlordName"
                                                            type="text"
                                                            placeholder="Landlord’s  Name"
                                                            onChange={(e)=>this.LandlordNameSigningAgreement(e)}
                                                          />
                                                    </div>
                                                    </div>
                                           
                                                    <div className="form__form-group">
                                                        <span className="form__form-group-label">Signature</span>
                                                        <div className="form__form-group-field">
                                                          <input
                                                            name="LandlordName"
                                                            type="text"
                                                            placeholder="Landlord’s  Name"
                                                            onChange={(e)=>this.LandlordSignature(e)}
                                                          />
                                                    </div>
                                                    </div>
                                             
                                                     <div className="form__form-group">
                                                        <span className="form__form-group-label">Date</span>
                                                        <div className="form__form-group-field">
                                                            <div className="date-picker">
                                                            <DatePicker
                                                              className="form__form-group-datepicker"
                                                              selected={this.state.LandlordAgreementDate}
                                                              onChange={(e)=>this.LandlordAgreementDate(e)}
                                                              dateFormat="LL"
                                                            />
                                                          </div>
                                                            <div className="form__form-group-icon">
                                                              <CalendarBlankIcon />
                                                          </div>
                                                        </div>
                                                    </div>
                                              

                                                 <div className="card__title">
                                                  <h5 className="bold-text">  Tenant(s):  </h5>
                                                </div>

                                              
                                                    <div className="form__form-group">
                                                        <span className="form__form-group-label">Name</span>
                                                        <div className="form__form-group-field">
                                                          <input
                                                            name="LandlordName"
                                                            type="text"
                                                            placeholder="Landlord’s  Name"
                                                            onChange={(e)=>this.TenantAgreementName(e)}
                                                          />
                                                    </div>
                                                    </div>
                                              
                                                    <div className="form__form-group">
                                                        <span className="form__form-group-label">Signature</span>
                                                        <div className="form__form-group-field">
                                                          <input
                                                            name="LandlordName"
                                                            type="text"
                                                            placeholder="Landlord’s  Name"
                                                            onChange={(e)=>this.TenantAgreementSignature(e)}
                                                          />
                                                    </div>
                                                    </div>
                                             
                                                     <div className="form__form-group">
                                                        <span className="form__form-group-label">Date</span>
                                                        <div className="form__form-group-field">
                                                            <div className="date-picker">
                                                            <DatePicker
                                                              className="form__form-group-datepicker"
                                                              selected={this.state.TenantAgreementDate}
                                                              onChange={(e)=>this.TenantAgreementDate(e)}
                                                              dateFormat="LL"
                                                            />
                                                          </div>
                                                            <div className="form__form-group-icon">
                                                              <CalendarBlankIcon />
                                                          </div>
                                                        </div>
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

                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                             <h1>Download  <a hrf={Pdflink}>Link</a></h1>
                            </div>
                            
                          </div>
                        </div>
                      </div>


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
    PdfFormData: project => dispatch(PdfFormData(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePdf);
