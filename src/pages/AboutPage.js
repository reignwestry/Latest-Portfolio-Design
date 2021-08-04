import React, { Component } from 'react';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <h2>About Page</h2>
                <ContactSection />
                <FooterSection />
            </div>
        );
    }
}
export default AboutPage;