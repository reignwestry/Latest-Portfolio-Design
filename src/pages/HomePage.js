import React, {Component} from 'react';

//# Components
import ShowcaseSection from '../components/ShowcaseSection';
import ServicesSection from './../components/ServicesSection';
import ContactSection from './../components/ContactSection';
import FooterSection from './../components/FooterSection';
/*
    todo FINISH MENU AND HERO SECTION
    todo ADD the rest of the sections 
    TODO ADD EXPRESSJS to run in server

*/

class HomePage extends Component {
    render() {
        return(
            <div>
                <ServicesSection />
                <ShowcaseSection />
                <ContactSection />
                <FooterSection />
            </div>
        );
    }
}

export default HomePage;