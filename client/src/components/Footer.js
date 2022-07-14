import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="w-100 p-2 border-top no-select mt-auto" style={{height: "50px"}}>
      <Row className="h-100">
        <Col className="ps-2 my-auto">
          © 2022 Deloitte Österreich
        </Col>
      </Row>
    </footer>
  )
}
