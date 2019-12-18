import React, {Component} from 'react';
import './Projects.css';
import {Container, Row, Col} from '../../../node_modules/react-bootstrap';
import Github from './img/Github.png';

class Projects extends Component {
  render() {
    return (
      <div className='Projects' id='project'>
        <div className='Project_Title'>
          <h1 className="Main_Title">Project</h1>
        </div>
        <Container>
          <Row>
            <Col>
              <h2>Hotel List<span className="Period_Mark">.</span></h2>
              <h5>호텔리스트 보여주는 애플리케이션</h5>
            </Col>
          </Row>
          <div className="Content">
            <Row>
              <Col>
                <div className="Project_Video">
                  <iframe className="Project1" src="https://www.youtube.com/embed/NQJ8kaLDrIw" frameBorder="0" gesture="media" allowFullScreen />
                </div>
              </Col>
              <Col>
                <div className="Info">
                  <h4>개발기간<span className="Period_Mark">.</span></h4>
                  <span>2019. 10. 03 - 2019. 10. 21</span>
                  <h4>설명<span className="Period_Mark">.</span></h4>
                  <span>JSoup라이브러리를 이용해 각 호텔사이트들의 정보를 크롤링하여 리스트로 보여주는 애플리케이션</span>
                  <h4>사용기술<span className="Period_Mark">.</span></h4>
                  <span>#Android #Java #PHP</span>
                  <h4>소스링크<span className="Period_Mark">.</span></h4>
                  <a href="https://github.com/tmdalsvt/PortFolio" alt="github"><img src={Github} alt="github" className="Image"/></a>
                </div>
              </Col>
            </Row>
          </div>
            <Row>
              <Col>
                <h2>Elevator Simulator<span className="Period_Mark">.</span></h2>
                <h5>엘리베이터 동작을 구현한 애플리케이션</h5>
              </Col>
            </Row>
            <div className="Content">
              <Row>
                <Col>
                  <div className="Project_Video">
                    <iframe className="Project1" src="https://www.youtube.com/embed/7AN4gO_6gdg" frameBorder="0" gesture="media" allowFullScreen />
                  </div>
                </Col>
                <Col>
                  <div className="Info">
                    <h4>개발기간<span className="Period_Mark">.</span></h4>
                    <span>2014. 04. 01 - 2014. 06. 01</span>
                    <h4>설명<span className="Period_Mark">.</span></h4>
                    <span>엘리베이터 동작을 Java 소켓프로그래밍을 이용해 구현한 시뮬레이터 애플리케이션</span>
                    <h4>사용기술<span className="Period_Mark">.</span></h4>
                    <span>#Java</span>
                    <h4>소스링크<span className="Period_Mark">.</span></h4>
                    <a href="https://github.com/tmdalsvt/PortFolio" alt="github"><img src={Github} alt="github" className="Image"/></a>
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
