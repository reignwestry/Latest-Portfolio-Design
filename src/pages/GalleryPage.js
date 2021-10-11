import React, {Component} from 'react';

import GalleryFilterBar from '../components/GalleryFilterBar';
import Showcase from '../components/ShowcaseSection';
import ContactSection from './../components/ContactSection';
import FooterSection from './../components/FooterSection';
class GalleryPage extends Component {
    render() {
        return (
            <div>
                <GalleryFilterBar />
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