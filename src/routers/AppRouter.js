import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//# Pages
import HomePage from './../pages/HomePage';
import ServicePage from './../pages/ServicesPage';
import GalleryPage from './../pages/GalleryPage';
import AboutPage from './../pages/AboutPage';
import ContactPage from './../pages/ContactPage';
import ResumePage from './../pages/ResumePage';
import NotFoundPage from './../pages/NotFoundPage';

import Header from './../components/Header';
import HeroSection from './../components/HeroSection';

//Stateless Function
const AppRouter = () => (
    <BrowserRouter>
        
        <Header />
        <HeroSection />
        
        <Switch>

            <Route path="/" component={HomePage} exact={true} />
                
            <Route path="/services" component={ServicePage} />

            <Route path="/gallery" component={GalleryPage} />

            <Route path="/about" component={AboutPage} />

            <Route path="/contact" component={ContactPage} />

            <Route path="/resume" component={ResumePage} />
                
            <Route component={NotFoundPage} />

        </Switch>

    </BrowserRouter>
);

export default AppRouter;
