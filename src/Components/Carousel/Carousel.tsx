import React from "react";
import {Carousel, Container} from "react-bootstrap";
import s from "./Carousel.module.css"
import logo1 from './_0.jpg'
import logo2 from './_1.jpg'
import logo3 from './_2.jpg'
import logo4 from './_3.jpg'
import logo5 from './_4.jpg'


function CarouselIntro() {
    return <Container className="mt-5">
        <Carousel className="mt-3 main-carousel" controls={false}>
            <Carousel.Item className={s.items} interval={3000}>
                <img
                    className="d-block w-100 h-vh-50"
                    src={logo1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={s.items} interval={3000}>
                <img
                    className="d-block w-100"
                    src={logo2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={s.items} interval={3000}>
                <img
                    className="d-block w-100"
                    src={logo3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={s.items} interval={3000}>
                <img
                    className="d-block w-100"
                    src={logo4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={s.items} interval={3000}>
                <img
                    className="d-block w-100"
                    src={logo5}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>

}

export default CarouselIntro;
