import React from "react";
import {Col, Container} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVk} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return <footer className="bg-light mt-auto">
        <Container>
            <div className='d-flex flex-column flex-md-row'>
                <Col className="text-center">
                    <h6>Телефон</h6>
                    <a className="text-decoration-none" href="tel:+380067 605 93 37">
                        +380 067 605 93 37
                    </a><br/>
                    <a className="text-decoration-none" href="tel:+380067 605 93 37">
                        +380 067 605 93 37
                    </a><br/>
                    <a className="text-decoration-none" href="tel:+380067 605 93 37">
                        +380 067 605 93 37
                    </a>
                </Col>
                <Col className="text-center">
                    <h6>Соцсети</h6>
                    <div className="d-flex justify-content-evenly">
                        <a href="Fb" className="">
                            <FontAwesomeIcon icon={faFacebook}/>

                        </a>
                        <a href="vk" className="fa fa">
                            <FontAwesomeIcon icon={faVk}/>
                        </a>
                        <a href="In" className="fa fa">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                </Col>
                <Col className="text-center">
                    <h6>Место</h6>
                </Col>
            </div>
            <div className="row before-copyright">
                <p className="col-sm text-center">
                    &copy; 2020 | All right reserved | Terms of Service | Privacy
                </p>
            </div>
        </Container>


    </footer>
}

export default Footer;
