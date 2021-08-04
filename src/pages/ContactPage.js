import React, { Component } from 'react';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

class ContactPage extends Component {
    render() {
        return (
            <div>
                <h2>Contact Page</h2>
                <ContactSection />
                <FooterSection />
            </div>
        );
    }
}
export default ContactPage;