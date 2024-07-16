import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.css'

function Navbars() {
  return (
    <Navbar className='nav' expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand as={Link} to="/" className="me-auto" id="logo">
            <img src='wheeldealname.png' alt="Wheel Deal Rentals Logo" className="logo-image" />
          </Navbar.Brand>
          <Nav className="ms-auto">
          <Button id='homebook' variant="orange" size="lg" as="a" href="/book">Book Now</Button>
            <Nav.Link className='navbtn' as={Link} to="/" >Home</Nav.Link>
            <Nav.Link className='navbtn' as={Link} to="/cars">Our Cars</Nav.Link>
            <Nav.Link className='navbtn' as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link className='navbtn' as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars

