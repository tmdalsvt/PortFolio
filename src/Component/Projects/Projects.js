import React, {Component} from 'react';
import './Projects.css';
import {Container, Row, Col} from '../../../node_modules/react-bootstrap';

class Projects extends Component {
  render() {
    return (
      <div className='Projects' id='project'>
        <div className='Project_Title'>
          <h1 className="Main_Title">Project</h1>
        </div>
        <Container>
          <Row>
            <h2>Hotel List<span className="Period_Mark">.</span></h2>
          </Row>
          <div className="Content">
            <Row>
              <Col>
                <h3>서울과학기술대학교<span className="Period_Mark">.</span></h3>
              </Col>
              <Col>
                <div className="Info">
                  <h4>개발기간<span className="Period_Mark">.</span></h4>
                  <span>2019. 10. 03 - 2019. 10. 21</span>
                  <h4>설명<span className="Period_Mark">.</span></h4>
                  <span>JSoup라이브러리를 이용해 각 호텔사이트들의 정보를 크롤링하여 리스트로 보여주는 애플리케이션</span>
                  <h4>사용기술<span className="Period_Mark">.</span></h4>
                  <span>#Android #Java #PHP</span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Projects;
