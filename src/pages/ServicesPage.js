import React, { Component } from 'react';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import ServicesSection from '../components/ServicesSection';

class ServicesPage extends Component {
    render() {
        return (
            <div>
                <ServicesSection />
                <ContactSection />
                <FooterSection />
            </div>
        );
    }
}
export default ServicesPage;