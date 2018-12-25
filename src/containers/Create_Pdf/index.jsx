import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HorizontalForm from './components/HorizontalForm';
import showResults from '../Form/Show';
import Modal from '../../shared/components/Modal';




class Create_pdf extends PureComponent {
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

  render() {
    const { t, newOrder } = this.props;

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Lease Agreement</h3>
          </Col>
        </Row>
        <Row>
      <HorizontalForm onSubmit={showResults} />

         
    </Row>

       
       
      </Container>
    );
  }
}

export default connect(state => ({ newOrder: state.newOrder.items }))(translate('common')(Create_pdf));
