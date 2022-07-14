import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import StoryHeader from '../components/StoryHeader.js';
import Footer from '../components/Footer.js';
import {useParams, useNavigate} from "react-router-dom";
import StatusImage from '../components/StatusImage.js';
import TableButton from '../components/TableButton.js';
import Settings from '../img/settings.svg';

export default function StoryOverview({ data, isStoryRunning, setIsStoryRunning }) {
  const {storyid } = useParams();
  const navigate = useNavigate();
  const story = data.find(story => story.id==storyid);
  const skip = () => {

  }

  
  const size = 30;
  return (
    <Container className="page">
      <div className="page-wrapper">
        <StoryHeader isStoryRunning={isStoryRunning} setIsStoryRunning={setIsStoryRunning} />
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={12} className="mt-3 px-3">
            <Table striped bordered hover className="">
              <thead>
                <tr>
                  <th style={{width: "1%"}}>ID</th>
                  <th style={{width: "1%"}}>Type</th>
                  <th>Description</th>
                  <th style={{width: "13%"}}>From</th>
                  <th style={{width: "20%"}}>To</th>
                  <th style={{width: "1%"}}>Status</th>
                  <th style={{width: "1%"}}>Timestamp</th>
                  <th style={{width: "1%"}}>Inspect</th>
                </tr>
              </thead>
              <tbody>
                {story.scenarios.map((scenario) =>
                  scenario.injects.map((inject) => (
                    <tr key={scenario.id+inject.id}>
                      <td>{scenario.id+"."+inject.id}</td>
                      <td>{inject.type}</td>
                      
                      <td colSpan={inject.type==="email" ? 1 : 3}>{inject.description}</td>
                      {inject.type==="email" && <td>{inject.to}</td>}
                      {inject.type==="email" && <td>{inject.from}</td>}
                      <td  className="text-center"><StatusImage status={inject.status} size={size} /></td>
                      <td>{inject.timestamp}</td>
                      <td><TableButton onClick={() => navigate("/runner/story/"+storyid+"/scenario/"+scenario.id+"/inject/"+inject.id)} src={Settings} alt="Settings" size={size}/></td>
                    </tr>
                  ))
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
