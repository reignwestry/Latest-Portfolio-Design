import React, {Component} from 'react';
import BackgroundImg from './../../imgs/backgrounds/heroBackground.png';
class HeroSection extends React.Component{
    render() {
        return (
            <section className="heroSection" style={{ backgroundImage: `url(${BackgroundImg})`}}>
                <div className="heroP">
                    <p>Hi, I'm Reign.</p>
                    <p>I develop & design web and mobile app solutions.</p>
                </div>
            </section>
        );
    }
}

export default HeroSection;