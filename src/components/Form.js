import React from 'react';


const textareaPlaceholder = "Tell me about your problems and I will send you my ideas of solutions";

class contactForm extends React.Component{
    render() {
        return (
            <form className="contactForm">
                        
                        <div className="namebox">
                            <label htmlFor="potentialClientFname">
                                First Name<span>*</span>
                            </label>
                            <input type="text" className="potentialClientFname" placeholder="Joe"/>
                        
                            <label htmlFor="potentialClientLname">
                                Last Name<span>*</span>
                            </label>
                            <input type="text"  className="potentialClientLname" placeholder="Client" />
                        </div>

                        
                        <label htmlFor="potentialClientEmail">
                            Email<span>*</span>
                        </label>
                        <input type="email" className="potentialClientEmail" placeholder="asldkfj@gopro.com" />
                        
                        <label htmlFor="potentialClientPhone">
                            Phone
                        </label>
                        <input type="tel" className="potentialClientPhone" placeholder="(000-000-0000)" />
                        
                        <label htmlFor="potentialClientEmail">
                            Message Type<span>*</span>
                        </label>

                        <select>
                            <option>New Project</option>
                            <option>Update Site</option>
                            <option>Web Site Design</option>
                            <option>App Design</option>
                            <option>Other</option>
                        </select>
                        
                        <label htmlFor="NewClientMessage">
                            Message <span>*</span>
                        </label>
                        <textarea className="NewClientMessage" placeholder={textareaPlaceholder}></textarea>

                        <button>Send</button>
                        
        </form>

        );
    }
}
export default contactForm;