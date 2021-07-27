import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./scss/App.scss";

//Service Icons
import WebDesignImg from './../imgs/serviceIcons/designs.png';
import AppDesignImg from './../imgs/serviceIcons/iosANDandroid.png';
import MaintenanceImg from './../imgs/serviceIcons/Layer 1.png';
import UpdateImg from './../imgs/serviceIcons/multiple-design.png';

import dumbyImg from './../imgs/dumby/04-thumbnail.jpg';
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

//body
class HeroImage extends React.Component{
    render() {
        return (
            <section className="heroSection">
                <div className="heroP">
                    <p>Hi, I'm Reign.</p>
                    <p>I develop & design web and mobile app solutions.</p>
                </div>
            </section>
        );
    }
}

//# About Section
class About extends React.Component {
    render(){
        return(
            <section className="about">
                <h2>About</h2>
            </section>
        );
    }
}

//# SERVICES SECTION
class Services extends React.Component {
    render() {
        return (
            <section className="servicesSection">
                <div className="servicesHeader">
                    <h2>Services</h2>
                </div>
                <div className="servicesList">
                    <div className="serviceBox">
                        <h3>Web Design</h3>
                        <div className="servicePara">
                            <p>Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s</p>
                        </div>
                        <div className="ServiceImage">
                            <img src={WebDesignImg} alt="Web Design Icon"/>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <h3>App Design</h3>
                        <div className="servicePara">
                            <p>Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s</p>
                        </div>
                        <div className="ServiceImage">
                            <img src={AppDesignImg} alt=" App Design Icon"/>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <h3>Maintenance</h3>
                        <div className="servicePara">
                            <p>Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s</p>
                        </div>
                        <div className="ServiceImage">
                            <img src={MaintenanceImg} alt=" Maintenance Icon"/>
                        </div>
                    </div>
                    <div className="serviceBox">
                        <h3>Updates</h3>
                        <div className="servicePara">
                            <p>Lorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;sLorem Ipsume alnk alnslknaslknasndflans;dnfalsdjf;akjsdlfkja;skjf;a sjfa jsdf;kaj;ds fkja s;dfj a;skjdf ;akjs df;s</p>
                        </div>
                        <div className="ServiceImage">
                            <img src={UpdateImg} alt="Icon"/>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

//# SHOWCASE SECTION
class Showcase extends React.Component {
    render() {
        return (
            <section className="showcase">
                {/* <h2>Showcase</h2> */}
                <div className="showcaseGallery">
                    <div class="showcaseRow">
                        <div class="showcaseImgBox">
                            <img src={dumbyImg} className="projectThumb" alt="#" />
                            <div className="projectDataBox">
                                <div className="projectData">ProjectName</div>
                            </div>
                        </div>
                        <div class="showcaseImgBox">
                            <img src={dumbyImg} className="projectThumb"  alt="#"/>
                        </div>
                        <div class="showcaseImgBox">
                            <img src={dumbyImg} className="projectThumb"  alt="#"/>
                        </div>
                        <div class="showcaseImgBox">
                            <img src={dumbyImg} className="projectThumb"  alt="#"/>
                        </div>
                    </div>
                    <div class="showcaseRow">
                        <div class="showcaseImgBox">
                            <img src={dumbyImg} className="projectThumb"  alt="#"/>
                        </div>
                        <div class="showcaseImgBox">
                            <img src={dumbyImg} className="projectThumb"  alt="#"/>
                        </div>
                        <div class="showcaseImgBox">
                            <img src={dumbyImg} className="projectThumb"  alt="#"/>
                        </div>
                        <div class="showcaseImgBox">
                            <img src={dumbyImg} className="projectThumb"  alt="#"/>
                        </div>
                    </div>
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
        <Showcase />
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