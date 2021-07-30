import React from 'react';
import ReactDOM from 'react-dom';


import "./scss/App.scss";



//# Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ShowcaseSection from './components/Showcase';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
/*
    todo FINISH MENU AND HERO SECTION
    todo ADD the rest of the sections 
    TODO ADD EXPRESSJS to run in server


*/

const app = (
    <div className="App">
        <Header />
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <ContactSection />
        <h1>REACT is working</h1>
    </div>
);




   ReactDOM.render(app, document.getElementById('root'));