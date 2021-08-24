import React, {Component} from 'react';
import ContactSection from './../components/ContactSection';
import FooterSection from '../components/FooterSection';
import ResumeContainer from '../components/ResumeContainer';

class ResumePage extends Component {
    render() {
        return (
            <div>
                <ResumeContainer />
                <ContactSection />
                <FooterSection />
            </div>
        );
    }
}

export default ResumePage;