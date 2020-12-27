import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CarouselIntro from "./Components/Carousel/Carousel";

function App() {
    return <>
        <Header/>
        <CarouselIntro/>
        <Footer/>
    </>
}


export default App;
