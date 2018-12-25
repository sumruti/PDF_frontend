import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const background = `${process.env.PUBLIC_URL}/img/landing/header_bg.png`;
const img = `${process.env.PUBLIC_URL}/img/landing/macbook.png`;

const Header = ({ onClick }) => (
  <div className="landing__header" style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <Row>
        <Col md={12}>
          <h2 className="landing__header-title">The best real estate platform money can buy
            <b> Artificial Intelligence</b> Insight <br />+ <b>into all your properties</b>
          </h2>
          <p className="landing__header-subhead">Use the latest real estate technology to run your business efficiently{' '}
            <Link className="landing__header-subhead-update" to="/documentation/changelog" target="_blank">
              freshest updates
            </Link>.
          </p>
          <Link className="landing__btn landing__btn--header" to="/documentation/introduction" target="_blank">
            See our pricing
          </Link>
          <button className="landing__btn landing__btn--header" onClick={onClick}>
            Sign In Now
          </button>
          <img className="landing__header-img" src={img} alt="macbook" />
        </Col>
      </Row>
    </Container>
  </div>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
