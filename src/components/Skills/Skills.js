import React, {Component} from 'react';
import './Skills.css';
import C from './logo/C.png';
import CPP from './logo/CPP.png';
import JAVA from './logo/JAVA.png';
import JavaScript from './logo/JavaScript.png';
import Android from './logo/Android.png';
import NodeJS from './logo/NodeJS.png';
import Spring from './logo/Spring.svg';
import JQuery from './logo/JQuery.png';
import ReactJS from './logo/ReactJS.png';
import MySQL from './logo/MySQL.png';

class Skills extends Component {
  render() {
    return (
      <div className='Skills' id='skill'>
        <h1 className="Main_Title">Skills</h1>
        <div className="Skill_Content">
          <h2 className="Skill_Content_Title">Launage</h2>
            <div className="Skill_box">
              <div className="Skill_image_container" style={{backgroundImage: `url(${C})`}}><div className="Skill_label">Basic</div></div>
              <div className="Skill_image_container" style={{backgroundImage: `url(${CPP})`}}><div className="Skill_label">Basic</div></div>
              <div className="Skill_image_container" style={{backgroundImage: `url(${JAVA})`}}><div className="Skill_label">Intermediate</div></div>
              <div className="Skill_image_container" style={{backgroundImage: `url(${JavaScript})`}}><div className="Skill_label">Basic</div></div>
            </div>
          <h2 className="Skill_Content_Title">FrameWork</h2>
            <div className="Skill_box">
              <div className="Skill_image_container" style={{backgroundImage: `url(${Android})`}}><div className="Skill_label">Basic</div></div>
              <div className="Skill_image_container" style={{backgroundImage: `url(${NodeJS})`}}><div className="Skill_label">Basic</div></div>
              <div className="Skill_image_container" style={{backgroundImage: `url(${Spring})`}}><div className="Skill_label">Basic</div></div>
            </div>
          <h2 className="Skill_Content_Title">Library</h2>
            <div className="Skill_box">
              <div className="Skill_image_container" style={{backgroundImage: `url(${ReactJS})`}}><div className="Skill_label">Basic</div></div>
              <div className="Skill_image_container" style={{backgroundImage: `url(${JQuery})`}}><div className="Skill_label">Basic</div></div>
            </div>
          <h2 className="Skill_Content_Title">Database</h2>
            <div className="Skill_box">
              <div className="Skill_image_container" style={{backgroundImage: `url(${MySQL})`}}><div className="Skill_label">Basic</div></div>
            </div>
        </div>
      </div>
    );
  }
}

export default Skills;
