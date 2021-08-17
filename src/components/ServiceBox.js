import React, { Component } from 'react';

//  import servicesList from '././staticData/servicesList';


class ServiceBox extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="serviceBox">
                
                <h3>{this.props.servicesList.serviceTitle}</h3>
                <div className="servicePara">
                    <p>{this.props.servicesList.serviceDescP}</p>
                </div>
                <div className="ServiceImage">
                    <img src={this.props.servicesList.serviceIcon} alt={this.props.servicesList.serviceIconAlt} />
                </div>
            </div>
                    
        );
    }
}
export default ServiceBox;