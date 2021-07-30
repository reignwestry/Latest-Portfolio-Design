import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        {/* todo <li>RESUME</li>  ADD LINK ONLY TO ABOUT PAGE */}
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    
                    <Switch>
                        <Route path="/pages/services">
                            <ServicesPage />
                        </Route>
                        <Route path="/pages/gallery">
                            <GalleryPage />
                        </Route>
                        <Route path="/pages/about">
                            <AboutPage />
                        </Route>
                        <Route path="/pages/contact">
                            <ContactPage />
                        </Route>
                        <Route path="/pages/resume">
                            <ResumePage />
                        </Route>
                        <Route path="/">   
                        </Route>
                    </Switch>
                </nav>
            </Router>
        );
    }
}
//PAGES
function ServicesPage() {
    return <h2>Services</h2>;
}
function GalleryPage() {
    return <h2>Gallery</h2>;
}
function AboutPage() {
    return <h2>About</h2>;
}
function ResumePage() {
    return <h2>Resume</h2>;
}
function ContactPage() {
    return <h2>Contact</h2>;
}



export default Nav;