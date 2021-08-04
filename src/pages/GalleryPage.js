import React, {Component} from 'react';

import Showcase from './../components/Showcase';
import ContactSection from './../components/ContactSection';
import FooterSection from './../components/FooterSection';
class GalleryPage extends Component {
    render() {
        return (
            <div>
                <h2>Gallery Page</h2>
                <Showcase />
                <Showcase />
                <Showcase />
                <Showcase />
                <Showcase />
                <Showcase />
                <Showcase />
                <Showcase />
                <ContactSection />
                <FooterSection />
            </div>
        
        );

    }
}
export default GalleryPage;