import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import "./Navbar.css";

export default function NavbarApp() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to={`/`}>
            <Navbar.Brand className="textNav">N3xtCoder Challenge</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link className="mr-3" to={`/`}>
              Photo Album
            </Link>
            <Link to={`/awsupload`}>Aws Upload</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
