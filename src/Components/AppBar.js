import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

const AppBar = () => {
  return (
    <Navbar fixed="top" bg="info" expand="lg"className='navbar' >
      <Container>
        <Navbar.Brand to="/">
          <h2 className="text-primary">
            <span>
              SK Restaurant
            </span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-start">
            <NavLink to="/" className="fw-bold">
              Home
            </NavLink>
            <NavLink to="/menu" className="fw-bold">
              Menu
            </NavLink>
          <NavLink to="/pickoftheweek " className="fw-bold">
              Special
            </NavLink>
            <NavLink to="/comments" className="fw-bold">
              Contact us
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;




