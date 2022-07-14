import React from 'react';
import { Stack, ProgressBar, Row, Col } from 'react-bootstrap';
import StoryHeaderButton from './StoryHeaderButton.js'
import Logo from '../img/logo.svg';
import Pause from '../img/pause.png';
import Play from '../img/play.png';
import Skip from '../img/skip.png';
import PDF from '../img/pdf.png';

export default function GameHeader({ isStoryRunning, setIsStoryRunning, skip }) {
  const iconSize = 60;
  const progressBarTextWidth = 100;
  const realTimeTextWidth = 150;
  const headerHeight = 90;
  return (
    <header>
      <Stack  direction="horizontal" gap={3} className="header justify-content-center px-3 no-select" style={{height: headerHeight+"px"}}>
        <div className="align-self-center me-3">
          <img src={Logo} alt="Deloitte Logo" height="40" />
        </div>
        <div>
          {isStoryRunning && <StoryHeaderButton src={Pause} alt="Pause" size={iconSize} onClick={() => setIsStoryRunning(false)} />}
          {!isStoryRunning && <StoryHeaderButton src={Play} alt="Play" size={iconSize} onClick={() => setIsStoryRunning(true)} />}
        </div>
        <div>
          <StoryHeaderButton src={Skip} alt="Skip" size={iconSize} onClick={skip} />
        </div>
        <div className="w-100 font-bold h5">
          <Row className="mb-2">
            <Col sm={1} style={{ width: progressBarTextWidth+"px" }} className="text-end pe-2">00:02:00</Col>
            <Col ><ProgressBar  variant="primary" now={75} label="Story" style={{ height: "22px" }} /></Col>
            <Col sm={1} style={{ width: progressBarTextWidth+"px" }} className="text-start ps-2">01:30:00</Col>
          </Row>
          <Row >
            <Col sm={1} style={{ width: progressBarTextWidth+"px" }} className="text-end pe-2">00:02:00</Col>
            <Col ><ProgressBar  variant="primary" now={20} label="Inject" style={{ height: "22px" }} /></Col>
            <Col sm={1} style={{ width: progressBarTextWidth+"px" }} className="text-start ps-2">00:10:00</Col>
          </Row>
        </div>
        <div className="text-center font-bold h5" style={{width: realTimeTextWidth+"px"}}>
          <Row className="">
            <Col>Real Time</Col>
          </Row>
          <Row>
            <Col>00:14:00</Col>
          </Row>
        </div>
        <div className="">
          <StoryHeaderButton src={PDF} alt="PDF" size={iconSize} onClick={skip} />
        </div>
      </Stack>
      <div style={{ height: headerHeight+"px" }}></div>
    </header>
  )
}
