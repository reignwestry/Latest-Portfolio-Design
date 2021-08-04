import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                404! - Page Not Found
                <Link to="/">Go Home</Link>
                <h2>Services Page</h2>
                <ContactSection />
                <FooterSection />

            </div>
        );
    }
}
export default NotFoundPage;