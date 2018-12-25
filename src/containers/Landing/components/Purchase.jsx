import React from 'react';
import { Col, Row, Container } from 'reactstrap';

const Purchase = () => (
  <section className="landing__section">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="landing__section-title">Get the <b> TenantFlow Core Platform</b> only for
                $25 and save your time and energy
          </h3>
          <div className="landing__center-btn">
            <a
              className="landing__btn landing__btn--gradient"
              target="_blank"
              rel="noopener noreferrer"
              href="https://themeforest.net/item/easypro-developer-friendly-react-bootstrap-4-admin-template/21798550"
            >
              Purchase now for $25
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Purchase;
