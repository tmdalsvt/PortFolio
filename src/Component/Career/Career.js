import React, {Component} from 'react';
import './Career.css';
import Education from './img/Education.png';
import {Container, Row, Col} from '../../../node_modules/react-bootstrap';

class Profile extends Component {
  render() {
    return (
      <div className='Career' id='career'>
        <div className='Career_Title'>
          <h1 className="Main_Title">Career</h1>
        </div>
        <Container>
          <Row>
            <div className="Education_Logo"></div>
            <h2>Education<span className="Period_Mark">.</span></h2>
          </Row>
          <div className="Content">
            <Row>
              <Col>
                <h3>서울과학기술대학교<span className="Period_Mark">.</span></h3>
              </Col>
              <Col>
                <div className="Info">
                  <h4>컴퓨터공학 전공<span className="Period_Mark">.</span></h4>
                  <span>2013. 03 - 2020. 02</span>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <div className="Certification_Logo"></div>
            <h2>Certification<span className="Period_Mark">.</span></h2>
          </Row>
          <div className="Content">
            <Row>
              <Col>
                <h3>네트워크 자격증<span className="Period_Mark">.</span></h3>
              </Col>
              <Col>
                <div className="Info">
                  <h4>CCNA<span className="Period_Mark">.</span></h4>
                  <span>2016. 03</span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Profile;
