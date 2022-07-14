import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Plus from '../img/plus.svg';

export default function Join() {

  return (
    <Container className="page">
      <div className="page-wrapper">
        <Header showLoginLink={false} />
        <Row className="justify-content-center">
          <Col sm={12} md={8} lg={6} >
            <Row className="mt-5 justify-content-center text-center">
              <Col>
                <p className="fs-3">StoryConfig</p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col>

              </Col>
            </Row>

            <Row className="mt-3 text-center">
              <Col>
                <Button variant="primary">
                  <img src={Plus} alt="Add" height="40" width="40" />
                </Button>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
      <Footer />
    </Container>
  )
}
