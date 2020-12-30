import React from "react";
import {Container} from "react-bootstrap";
import aboutAvatar from './about.jpg';

function About() {
    return <Container className="mt-3">
        <div className="about-content">
            <div className="about-description">
                <h5>Кононученко Владимир</h5>
                <p className="m-0">Кинезиолог и описание того что ты хочешь текст пишу на русском чтобы можно было
                    понять что сюда можно что угодно вписать</p>
            </div>
            <div className="about-image">
                <img src={aboutAvatar} alt="avatar"/>
            </div>
        </div>
    </Container>
}

export default About;
