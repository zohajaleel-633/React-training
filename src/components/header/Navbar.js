import React from "react";
import logo from "../../assets/burger1.png";
import "../../assets/stylesheets/Navbar.css";
import "../../index.css";
import Button from "../Button";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function BasicNavbar() {
  return (
    <>
      <Navbar collapsOnSelect fixed="top" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#">
            <div className="rounded-box">
              <img src={logo} alt="" className="logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="order-lg-2">
            <Nav className="me-auto"></Nav>
            <Nav className="mr-auto">
              <Nav.Link>
                <Button>Burger Builder</Button>
              </Nav.Link>
              <Nav.Link>
                <Button>Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicNavbar;
