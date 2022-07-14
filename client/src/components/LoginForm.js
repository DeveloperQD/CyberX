import React, {useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function LoginForm({user, setUser, login}) {
  const [validated, setValidated] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs(inputs => ( {...inputs, [e.target.name]: e.target.value}));
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    login(inputs);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="justify-content-center">
        <Col>
          <Form.Group controlId="username" className="mb-2">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={handleChange} name="username" placeholder="" type="text" required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a username
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Form.Group controlId="password" className="mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleChange} name="password" placeholder="" type="password" required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a password
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
          <Button variant="primary" className="fs-5 font-bold" onClick={handleSubmit}>Login</Button>
        </Col>
      </Row>
    </Form>
  )
}
