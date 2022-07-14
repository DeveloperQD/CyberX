import React, {useState, useEffect, useContext} from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import AccessImage from '../components/AccessImage.js';
import Delete from '../img/delete.svg';
import TableButton from '../components/TableButton.js';
import {SocketContext} from '../components/SocketContext'

export default function UserList({ data }) {
  const [userList, setUserList] = useState([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit("users")

    socket.on('users_success', (data) => {
      setUserList(data);
    });
    socket.on('users_failure', (data) => {
      console.log(data)
    });

    return () => {
      socket.off('users_success');
      socket.off('users_failure');
    };
  }, []);

  const size = 30;
  return (
    <Container className="page">
      <div className="page-wrapper">
        <Header showRegistration={false} showLogin={false} />
        <Row className="justify-content-center ">
          <Col sm={12} md={12} lg={11} className="mt-3 px-3">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th style={{ width: "4%" }}>ID</th>
                  <th style={{ width: "42%" }}>Username</th>
                  <th style={{ width: "46%" }}>Password</th>
                  <th style={{ width: "4%" }}>Permission</th>
                  <th style={{ width: "4%" }}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) =>
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td className="text-center"><AccessImage permission={user.permission} size={size} /></td>
                    <td><TableButton src={Delete} alt="Delete" size={size}/></td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        {/* <div style={{ height: "2000px" }}></div> */}
      </div>
      <Footer />
    </Container>
  )
}
