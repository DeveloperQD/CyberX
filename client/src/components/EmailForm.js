import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function EmailForm({data}) {
  const [validated, setValidated] = useState(false);

  useEffect(() => {

  }, [])

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (e) => {

  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="no-select">
      <Row className="mt-1 mb-2 justify-content-center">
        <Col>
          <Form.Group controlId="from">
            <Form.Label>From</Form.Label>
            <Form.Control onChange={handleChange} placeholder="example@gmail.com" type="text" defaultValue={data?.from || ""} required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a sender
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-2 justify-content-center">
        <Col>
          <Form.Group controlId="to">
            <Form.Label>To</Form.Label>
            <Form.Control onChange={handleChange} placeholder="example1@gmail.com; example2@gmail.com" type="text" defaultValue={data?.to || ""} required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide at least one recipient
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-2 justify-content-center">
        <Col>
          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control onChange={handleChange} placeholder="" type="text" defaultValue={data?.subject || ""}></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-2 justify-content-center">
        <Col>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={11} onChange={handleChange} placeholder="" type="text" defaultValue={data?.message || ""}></Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-start">
        <Col >
        {/* https://thewebdev.info/2022/04/21/how-show-only-button-with-file-input/ */}
          {/* <Button variant="white" className="px-1">
          <img src={require("../img/attachment_black.png")} alt="attachment" width="32" />
         </Button> */}
          <Form.Group controlId="file" className="mb-3">
            {/* <Form.Label><img src={require("../img/attachment_black.png")} alt="attachment" width="32" /></Form.Label> */}
            <Form.Control type="file" multiple />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-2 justify-content-start">
        <Col >
         {/* <p>Files</p>Map through selected files */}
        </Col>
      </Row>
      <Row className="mb-2 justify-content-center text-center">
        <Col>
          <Button variant="primary" type="submit" className="px-2 py-1 fs-5 font-weight-bold">Send Email</Button>
        </Col>
      </Row>
    </Form>
  )
}
