import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from '../../../node_modules/react-bootstrap';

class Menu extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand>PortFolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link  onClick = {() => {
              document.getElementById('main').scrollIntoView({behavior: "smooth"});
            }}>Main</Nav.Link>
            <Nav.Link onClick = {() => {
              document.getElementById('career').scrollIntoView({behavior: "smooth"});
            }}>Career</Nav.Link>
            <Nav.Link onClick = {() => {
              document.getElementById('skill').scrollIntoView({behavior: "smooth"});
            }}>Skills</Nav.Link>
            <Nav.Link onClick = {() => {
              document.getElementById('project').scrollIntoView({behavior: "smooth"});
            }}>Projects</Nav.Link>
            <Nav.Link onClick = {() => {
              document.getElementById('contact').scrollIntoView({behavior: "smooth"});
            }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
