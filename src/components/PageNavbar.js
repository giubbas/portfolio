import React from 'react'

// Import Bootstrap components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const PageNavbar = () => {

  return (
    <Navbar expand="md" className='py-4'>
      <Container className="px-0 justify-content-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#interests">Interests</a>
          <a href="#contact">Contact</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar