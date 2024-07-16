import React from 'react';
import './App.css'; // Import CSS for custom styling
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="contact-container">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <div className="contact-logo">
            <img src="wheeldealname.png" alt="Company Logo" />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
          <Form className="contact-form">
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control className='contact-input' type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control className='contact-input' type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control className='contact-input' type="tel" placeholder="Enter your phone number" required />
            </Form.Group>
            <Form.Group controlId="message" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control className='contact-input' as="textarea" rows={5} placeholder="Enter your message" required />
            </Form.Group>
            <Button style={{backgroundColor: 'orange'}} type="submit" className="w-100" onClick={() => alert('Message submitted successfully!')}>Submit</Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={8} className="text-center contact-info">
          <p><strong>Contact Information:</strong></p>
          <p>Email: info@wheeldealrentals.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Car Rental Lane, City, Country</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
