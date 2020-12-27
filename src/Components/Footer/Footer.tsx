import React from "react";
import {Container} from "react-bootstrap";

function Footer() {
    return <footer className="bg-light mt-auto">
        <Container className="d-grid d-sm-flex justify-content-center justify-content-sm-between">
        <span>Телефон</span>
        <span>Соцсети</span>
        <span>Место</span>
        </Container>
    </footer>
}

export default Footer;
