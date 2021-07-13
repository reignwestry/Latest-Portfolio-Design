import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
    import "./scss/App.scss";


import BackgroundImg from '../imgs/heroBackground.png';

/*
    todo FINISH MENU AND HERO SECTION
    todo ADD the rest of the sections 
    TODO ADD EXPRESSJS to run in server


*/
// COMPONENTS
class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="headerTitle">
                    <h1><span>Reign</span> Westry</h1>
                </div>
                
                <Nav />
            </header>
        );
    }
}
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
class HeroImage extends React.Component{
    render() {
        return (
            <section className="heroImg">
                <h2>HeroImage</h2>
            </section>
        );
    }
}

class About extends React.Component {
    render(){
        return(
            <section className="about">
                <h2>About</h2>
            </section>
        );
    }
}

class Services extends React.Component {
    render() {
        return (
            <section>
                <h2>Services</h2>
            </section>
        )
    }
}

class Gallery extends React.Component {
    render() {
        return (
            <section>
                <h2>Showcase</h2>
                <div className="showcase">
                    <div></div>
                </div>
            </section>

        )
    }
}




const app = (
    <div className="App">
        <Header />
        <HeroImage />
        <Services />
        <Gallery />
        <h1>REACT is working</h1>
    </div>
);

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



   ReactDOM.render(app, document.getElementById('root'));