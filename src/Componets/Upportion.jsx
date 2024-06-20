import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Upportion() {
  return (
    <>
    
      <Navbar bg="primary" data-bs-theme="primary">
        <Container>
          <Navbar.Brand href="/home" >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/login">Login</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Upportion