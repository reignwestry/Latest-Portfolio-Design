import React, {Component} from 'react';
import HeroSection from '../components/HeroSection';
import Header from './../components/Header';


class ServicesPage extends Component {
    render() {
        return (
            <div>
                <h2>Services Page</h2>
                <ContactSection />
                <FooterSection />
            </div>
        );
    }
}
export default ServicesPage;