import React from "react";
import {Navbar, Nav, NavDropdown, Button, Form, FormControl, Container} from "react-bootstrap";

function Header() {
    return <Navbar bg="light" expand="lg" fixed="top">
        <Container>
        <Navbar.Brand href="#home">Кононученко Владимир</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">О мне</Nav.Link>
                <Nav.Link href="#link">Что-то</Nav.Link>
                <NavDropdown title="Услуги" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form className="d-lg-flex d-grid">
                <FormControl type="text" placeholder="Search" className="mr-2 me-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default Header;
