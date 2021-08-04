import React, {Component} from 'react';
import ContactSection from './../components/ContactSection';
import FooterSection from '../components/FooterSection';

class ResumePage extends Component {
    render() {
        return (
            <div>
                <h2>Resume Page</h2>
                <ContactSection />
                <FooterSection />
            </div>
        );
    }
}

export default ResumePage;