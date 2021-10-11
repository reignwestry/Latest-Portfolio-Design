import React from 'react';


const textareaPlaceholder = "How can I help you?";
const telPlaceholder = "(000-000-0000)";
const emailPlaceholder = "asldkfj@gopro.com";
const fNamePlaceholder = "Joe";
const lNamePlaceholder = "Client";

class contactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            fName: ' ',
            lName: ' ',
            tel: ' ',
            emailType: ' ',
            email: ' ',
            message: ' '
        }
    }
    render() {
        return (
            <form className="contactForm">
                        
                        <div className="namebox" onSubmit={this.handleSubmit.bind(this)}>
                            <label htmlFor="potentialClientFname">
                                First Name<span>*</span>
                            </label>
                            <input type="text" className="potentialClientFname" id="fName" placeholder={fNamePlaceholder} value={this.state.fName} onChange={this.onfNameChange.bind(this)}/>
                        
                            <label htmlFor="potentialClientLname">
                                Last Name<span>*</span>
                            </label>
                            <input type="text"  className="potentialClientLname" id="lName" placeholder={lNamePlaceholder} value={this.state.lName} onChange={this.onlNameChange.bind(this)}/>
                        </div>

                        
                        <label htmlFor="potentialClientEmail">
                            Email<span>*</span>
                        </label>
                        <input type="email" id="clientEmail" className="potentialClientEmail" placeholder={emailPlaceholder} onChange={this.onEmailChange.bind(this)} />
                        
                        <label htmlFor="potentialClientPhone">
                            Phone
                        </label>
                        <input type="tel" id="clientPhone" className="potentialClientPhone" placeholder={telPlaceholder} />
                        
                        <label htmlFor="potentialClientEmail">
                            Message Type<span>*</span>
                        </label>

                        <select id="emailType" value={this.state.emailType} onChange={this.onSelectChange.bind(this)}>
                            <option value="New Project">New Project</option>
                            <option value="Update Site">Update Site</option>
                            <option value="Web Site Design">Web Site Design</option>
                            <option value="App Design">App Design</option>
                            <option value="Other">Other</option>
                        </select>
                        
                        <label htmlFor="NewClientMessage">
                            Message <span>*</span>
                        </label>
                        <textarea className="NewClientMessage" placeholder={textareaPlaceholder}></textarea>

                        <button type="submit">Send</button>
                        
        </form>

        );
    }
    onfNameChange(event){
        this.setState({fName: event.target.value})
    }
    onlNameChange(event){
        this.setState({lName: event.target.value})
    }
    onTelChange(event){
        this.setState({tel: event.target.value})
    }
    onSelectChange(event){
        this.setState({emailType: event.target.value})
    }
    onEmailChange(event){
        this.setState({email: event.target.value})
    }
    onMessageChange(event){
        this.setState({message: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

}
export default contactForm;