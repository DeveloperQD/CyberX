import React, {useEffect, useContext} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import LoginForm from '../components/LoginForm.js';
import { NavLink, useNavigate } from "react-router-dom";
import {SocketContext} from '../components/SocketContext'

export default function Login({ user, setUser }) {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  useEffect(() => {
    socket.on('login_success', (data) => {
      navigate("/dashboard");
    });
    socket.on('login_failure', (data) => {
      console.log(data)
    });

    return () => {
      socket.off('login_success');
      socket.off('login_failure');
    };
  }, []);

  function login(data){
    socket.emit("login", data)
  }
  return (
    <Container className="page no-select">
      <div className="page-wrapper">
        <Header showRegistration={true} showLogin={false} />
        <Row className="justify-content-center">
          <Col sm={12} md={8} lg={6}>
            <Row className="mt-5 justify-content-center">
              <Col>
                <LoginForm user={user} setUser={setUser} login={login} />
              </Col>

              <Row>
                <NavLink to="/dashboard" className="text-decoration-none">Dashboard</NavLink>
              </Row>
              <Row>
                <NavLink to="/runner/story/1" className="text-decoration-none">Story</NavLink>
              </Row>

              <Row>
                <NavLink to="/builder/storyconfig" className="text-decoration-none">StoryConfig</NavLink>
              </Row>
              <Row>
                <NavLink to="/builder/scenarioconfig" className="text-decoration-none">ScenarioConfig</NavLink>
              </Row>
              <Row>
                <NavLink to="/builder/injectconfig" className="text-decoration-none">InjectConfig</NavLink>
              </Row>


              <Row>
                <NavLink to="/users" className="text-decoration-none">Users</NavLink>
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </Container>
  )
}
