import React, { Component } from 'react';

const languageType = `css`;
const switchType = `${languageType}Switch`;
console.log(switchType)

class toggleSwitch extends Component {
    render() {
        return (
            <div className="switch">
                <label htmlFor={switchType}>CSS
                    <input type="checkbox" id={switchType} />
                </label>
            </div>
        );
    }
}

export default toggleSwitch;