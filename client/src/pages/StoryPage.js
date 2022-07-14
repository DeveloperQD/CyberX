import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmailForm from '../components/EmailForm.js';
import Shell from '../components/Shell.js';
import StoryHeader from '../components/StoryHeader.js';
import Footer from '../components/Footer.js';
import { useParams } from "react-router-dom";

export default function StoryPage({ data, isStoryRunning, setIsStoryRunning }) {
  const { storyid, scenarioid, injectid } = useParams();
  const story = data.find(story => story.id == storyid);
  const scenario = story.scenarios.find(scenario => scenario.id == scenarioid);
  const inject = scenario.injects.find(inject => inject.id == injectid);
  //pause/play | skip | time of task | line | task time | total time 
  const classes = "mt-1 fs-5";

  return (
<Container className="page">
      <div className="page-wrapper">
        <StoryHeader isStoryRunning={isStoryRunning} setIsStoryRunning={setIsStoryRunning} />
        <Row className="mt-3 justify-content-center">
          <Col sm={12} md={10} lg={8}>
            <Row className={classes}>
              <Col>
                ID: {scenario.id + "." + inject.id}
              </Col>
            </Row>
            <Row className={classes}>
              <Col>
                Type: {inject.type}
              </Col>
            </Row>
            <Row className={classes}>
              <Col>
                Seconds: {inject.seconds}
              </Col>
            </Row>
            <Row className={classes}>
              <Col>
                Content: {inject.description}
              </Col>
            </Row>

            <Row className="mt-2 justify-content-center">
              <Col>
                {inject.type === "email" && <EmailForm data={inject.email} />}
                {inject.type === "shell" && <Shell />}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
    </Container>
  )
}
