import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CarouselIntro from "./Components/Carousel/Carousel";
import About from "./Components/About/About";

function App() {
    return <>
        <Header/>
        <About/>
        <CarouselIntro/>
        <Footer/>
    </>
}


export default App;
