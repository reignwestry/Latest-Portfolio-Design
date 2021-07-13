    import React, {Component} from 'react';
    import ReactDOM from 'react-dom';
    import "./scss/App.scss";


import BackgroundImg from '../imgs/heroBackground.png';



class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="headerTitle">
                    <h1>Reign Westry</h1>
                </div>
                
                <Menu />
            </header>
        );
    }
}
class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    {/* todo <li>RESUME</li>  ADD LINK ONLY TO ABOUT PAGE */}
                    <li>About</li>
                </ul>
            </div>
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





   ReactDOM.render(app, document.getElementById('root'));