import React from 'react';
import Form from './Form';
import ContactBackgroundImg from './../../imgs/backgrounds/pexels-ovan-57690.jpg';
//# About Section
class ContactSection extends React.Component {
    render(){
        return(
            <section className="contactSection" style={{ backgroundImage: `url(${ContactBackgroundImg})`}}>
                <div className="contactContainer">
                    <Form />
                </div>

                <div className="contactMessage">
                    <h2>I am always </h2>
                </div>

            </section>
        );
    }
}
export default ContactSection;