import React, { PureComponent } from 'react';
import { Col, Container, Row ,ButtonToolbar,Button } from 'reactstrap';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DefaultButtons from '../components/DefaultButtons';
import * as jsPDF from 'jspdf'
import $ from 'jquery'
import kendo from '@progress/kendo-ui';

import { Editor } from '@progress/kendo-editor-react-wrapper';










class Pdf extends PureComponent {
  static propTypes = {
    newOrder:'',
    dispatch: '',
    t: '',
  };

  onDeleteRow = (index, e) => {
    e.preventDefault();
    const arrayCopy = [...this.props.newOrder];
    arrayCopy.splice(index, 1);
    //this.props.dispatch(deleteNewOrderTableData(arrayCopy));
  };

  downloadPdf(e){

 var pdf = new jsPDF('p', 'pt', 'a4');
pdf.addHTML($("#content"), function() {
  var output = pdf.output("datauristring");
  //pdf.output("datauri"); //This will output the PDF in a new window
});


  }



  render() {
      const { t, newOrder } = this.props;


      var CityTownName = localStorage.getItem("CityTownName");
      var LandlordName =localStorage.getItem("LandlordName");
      var NoOfVehiclesParkingSpace = localStorage.getItem("NoOfVehiclesParkingSpace");
      var PostalCode = localStorage.getItem("PostalCode");
      var Province = localStorage.getItem("Province");
      var RentalName = localStorage.getItem("RentalName");
      var StreetName = localStorage.getItem("StreetName");
      var tenantFname = localStorage.getItem("tenantFname");
      var tenantLname =localStorage.getItem("tenantLname");
      var StreetNumber =localStorage.getItem("StreetNumber");

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Lease Agreement PDF</h3>
          </Col>
        </Row>
        <Row>

        <Col md={4}>

        </Col>

        <Col md={4}>
         <ButtonToolbar>
     
          <Button color="primary">Print</Button>
          <Button color="success" onClick={(e)=>this.downloadPdf(e)}>Download</Button>
          
        </ButtonToolbar>
        </Col>
        <Col md={4}></Col>
        </Row>
         <Row>
        <Col md={12}>
         <div>

         <div >
         <div id="content">
        

                            




        <div style={{position: 'absolute', left: '50%', marginLeft: '-306px', top: '0px', width: '612px', height: '792px', borderStyle: 'outset', overflow: 'hidden'}}>

        
          <div style={{position: 'absolute', left: '0px', top: '0px'}}>
</div>
          <div style={{position: 'absolute', left: '380.28px', top: '34.68px'}} className="cls_003"><span className="cls_003">Residential Tenancy Agreement</span></div>
          <div style={{position: 'absolute', left: '380.28px', top: '51.48px'}} className="cls_003"><span className="cls_003">(Standard Form of Lease)</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '104.75px'}} className="cls_004"><span className="cls_004">Note</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '127.63px'}} className="cls_005"><span className="cls_005">This tenancy agreement (or lease) is required for tenancies entered into on </span><span className="cls_006">April 30, 2018 or later</span><span className="cls_005">. It does not apply to care</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '139.63px'}} className="cls_005"><span className="cls_005">homes, sites in mobile home parks and land lease communities, most social housing, certain other special tenancies or</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '151.63px'}} className="cls_005"><span className="cls_005">co-operative housing (see Part A of General Information).</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '169.66px'}} className="cls_005"><span className="cls_005">Residential tenancies in Ontario are governed by the </span><span className="cls_007">Residential Tenancies Act, 2006</span><span className="cls_005">. This agreement cannot take away a right</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '181.66px'}} className="cls_005"><span className="cls_005">or responsibility under the </span><span className="cls_007">Residential Tenancies Act, 2006</span><span className="cls_005">.</span></div>
          <div style={{position: 'absolute', left: '20.85px', top: '199.66px'}} className="cls_005"><span className="cls_005">Under the Ontario</span><span className="cls_007"> Human Rights Code</span><span className="cls_005">, everyone has the right to equal treatment in housing without discrimination or</span></div>
          <div style={{position: 'absolute', left: '20.85px', top: '211.63px'}} className="cls_005"><span className="cls_005">harassment.</span></div>
          <div style={{position: 'absolute', left: '20.85px', top: '229.63px'}} className="cls_005"><span className="cls_005">All sections of this agreement are mandatory and cannot be changed.</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '252.56px'}} className="cls_004"><span className="cls_004">1. Parties to the Agreement</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '274.91px'}} className="cls_006"><span className="cls_006">Residential Tenancy Agreement between:</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '295.91px'}} className="cls_006"><span className="cls_006">Landlord(s)</span></div>
          <div style={{position: 'absolute', left: '20.83px', top: '315.16px'}} className="cls_005"><span className="cls_005">Landlord’s Legal Name : {LandlordName} </span></div>
          
          <div style={{position: 'absolute', left: '20.84px', top: '377.78px'}} className="cls_006"><span className="cls_006">Note:</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '392.78px'}} className="cls_005"><span className="cls_005">See Part B in General Information</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '413.25px'}} className="cls_004"><span className="cls_004">and Tenant(s)</span></div>
          <div style={{position: 'absolute', left: '20.83px', top: '431.71px'}} className="cls_005"><span className="cls_005"> First Name : {tenantFname}</span></div>
          <div style={{position: 'absolute', left: '345.05px', top: '431.71px'}} className="cls_005"><span className="cls_005">Last Name : {tenantLname}</span></div>
         
          <div style={{position: 'absolute', left: '20.84px', top: '573.98px'}} className="cls_004"><span className="cls_004">2. Rental Unit</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '596.33px'}} className="cls_005"><span className="cls_005">The landlord will rent to the tenant the rental unit at:</span></div>
          <div style={{position: 'absolute', left: '20.83px', top: '613.59px'}} className="cls_005"><span className="cls_005">Unit</span></div>
          <div style={{position: 'absolute', left: '44.17px', top: '613.59px'}} className="cls_005"><span className="cls_005">(e.g., unit 1 or basement unit) : <p style={{margin:'-4px 1px',textAlign: 'left'}}>{RentalName}</p></span></div>
          <div style={{position: 'absolute', left: '218.84px', top: '613.59px'}} className="cls_005"><span className="cls_005">Street Number : <p style={{margin:'-4px 1px',textAlign: 'left'}}>{StreetNumber}</p></span></div>
          <div style={{position: 'absolute', left: '308.83px', top: '613.59px'}} className="cls_005"><span className="cls_005">Street Name : <p style={{margin:'-4px 1px',textAlign: 'left'}}>{StreetName}</p></span></div>
          <div style={{position: 'absolute', left: '20.83px', top: '640.59px'}} className="cls_005"><span className="cls_005">City/Town : {CityTownName}</span></div>
          <div style={{position: 'absolute', left: '308.83px', top: '640.59px'}} className="cls_005"><span className="cls_005">Province : {Province}</span></div>
          <div style={{position: 'absolute', left: '506.83px', top: '640.59px'}} className="cls_005"><span className="cls_005">Postal Code: <p style={{margin:'-4px 1px',textAlign: 'left'}}>{PostalCode}</p></span></div>
          <div style={{position: 'absolute', left: '20.83px', top: '667.59px'}} className="cls_005"><span className="cls_005">Number of vehicle parking spaces and description (e.g., indoor/outdoor, location) : {NoOfVehiclesParkingSpace}</span></div>
          <div style={{position: 'absolute', left: '20.83px', top: '698.74px'}} className="cls_005"><span className="cls_005">The rental unit is a unit in a condominium.</span></div>
          <div style={{position: 'absolute', left: '35.97px', top: '714.93px'}} className="cls_005"><input type='checkbox'  style={{margin: '0px -15px'}} /><span className="cls_005" style={{margin: '19px'}}>Yes</span></div>
          <div style={{position: 'absolute', left: '86.44px', top: '714.93px'}} className="cls_005"><input type='checkbox' style={{margin: '0px -15px'}} checked/><span className="cls_005" style={{margin: '19px'}}>No</span></div>
          <div style={{position: 'absolute', left: '19.42px', top: '731.03px'}} className="cls_005"><span className="cls_005">If yes, the tenant agrees to comply with the condominium declaration, by-laws and rules, as provided by the landlord.</span></div>
          <div style={{position: 'absolute', left: '20.84px', top: '766.74px'}} className="cls_002"><span className="cls_002">2229E (2018/01)</span></div>
          <div style={{position: 'absolute', left: '86.60px', top: '766.74px'}} className="cls_002"><span className="cls_002">© Queen's Printer for Ontario, 2018</span></div>
         
      </div>
      </div>
      </div>
      <div id="editor"></div>
</div>
      </Col>
      </Row>
        
        <Row>

    </Row>

    

       
       
      </Container>
    );
  }
}

export default connect(state => ({ newOrder: state.newOrder.items }))(translate('common')(Pdf));
