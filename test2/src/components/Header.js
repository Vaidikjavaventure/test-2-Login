import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to='/'>User Registration</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to='/' className="text-decoration-none lh-base text-light">Home </NavLink>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
