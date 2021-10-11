import React from 'react';
import ContactForm from './Form';
import ContactBackgroundImg from './../imgs/backgrounds/pexels-ovan-57690.jpg';

//# About Section
class ContactSection extends React.Component {
    render(){
        return(
            <section className="contactSection" style={{ backgroundImage: `url(${ContactBackgroundImg})`}}>
                <div className="backgroundScreen">
                    <div className="contactContainer">
                        <ContactForm />
                    </div>

                    <div className="contactSecColumn">
                        <p>Greeting</p>

                        <div className="greetingBox">
                            <h2>Hi, I am <span>Reign</span>.<br/> A full-stack developer studying and practicing to get into the industry. </h2>
                            <p>This site is a compilation of my work. I love to develop ideas, inspirations, and concepts that I feel will benefit society.</p>

                            <p>My goal is to be a professional developer working at a company with freelance work on the side. So, I am always up for new tasks and challenges.</p>

                            <p> If you need a developer for a project? I am very interested in making it a reality. Send me a message. Let's get started today...</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default ContactSection;