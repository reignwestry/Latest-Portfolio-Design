import React from 'react';
import ContactForm from './Form';
import ContactBackgroundImg from './../imgs/backgrounds/pexels-ovan-57690.jpg';

//# About Section
class ContactSection extends React.Component {
    render(){
        return(
            <section className="contactSection" style={{ backgroundImage: `url(${ContactBackgroundImg})`}}>
                <div className="contactContainer">
                    <ContactForm />
                </div>

                <div>
                    
                </div>

            </section>
        );
    }
}
export default ContactSection;