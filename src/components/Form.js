import React from 'react';

class Form extends React.Component{
    render() {
        return (
            <form className="contactForm">
                        
                        <div className="namebox">
                            <label for="potentialClientFname">
                                First Name<span>*</span>
                            </label>
                            <input type="text" className="potentialClientFname" placeholder="Joe"/>
                        
                            <label for="potentialClientLname">
                                Last Name<span>*</span>
                            </label>
                            <input type="text"  className="potentialClientLname" placeholder="Client" />
                        </div>

                        
                        <label for="potentialClientEmail">
                            Email<span>*</span>
                        </label>
                        <input type="email" className="potentialClientEmail" placeholder="asldkfj@gopro.com" />
                        
                        <label for="potentialClientPhone">
                            Phone
                        </label>
                        <input type="tel" className="potentialClientPhone" placeholder="(000-000-0000)" />
                        
                        <label for="potentialClientEmail">
                            Message Type<span>*</span>
                        </label>

                        <select>
                            <option>New Project</option>
                            <option>Update Site</option>
                            <option>Web Site Design</option>
                            <option>App Design</option>
                            <option>Other</option>
                        </select>
                        
                        <label for="NewClientMessage">
                            Message <span>*</span>
                        </label>
                        <textarea className="NewClientMessage" placeholder="Tell me about your problems and I will send you my ideas of solutions"></textarea>

                        <button>Send</button>
                        
        </form>

        );
    }
}
export default Form;