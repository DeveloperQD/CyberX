import React, {useEffect, useContext} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import RegistrationForm from '../components/RegistrationForm.js';
import { NavLink, useNavigate } from "react-router-dom";
import {SocketContext} from '../components/SocketContext'

export default function Registration({ user, setUser }) {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  useEffect(() => {
    socket.on('registration_success', (data) => {
      navigate("/login");
    });
    socket.on('registration_failure', (data) => {
      console.log(data)
    });

    return () => {
      socket.off('registration_success');
      socket.off('registration_failure');
    };
  }, []);

  function register(data){
    socket.emit("registration", data)
  }

  return (
    <Container className="page no-select">
      <div className="page-wrapper">
        <Header showRegistration={false} showLogin={true}/>
        <Row className="justify-content-center">
          <Col sm={12} md={8} lg={6}>
            <Row className="mt-5 justify-content-center">
              <Col>
                <RegistrationForm user={user} setUser={setUser} register={register}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </Container>
  )
}
