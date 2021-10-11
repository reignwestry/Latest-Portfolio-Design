import React, {Component} from 'react';
import ToggleSwitch from './ToggleSwitch';

class SwitchCol extends Component {
    render() {
        return (
            
            <div className="switchCol">
                <div className="switch">
                    <label  htmlFor="htmlSwitch">HTML
                        <input type="checkbox" id="htmlSwitch" />
                    </label>
                </div>
                <div className="switch">
                    <label  htmlFor="htmlSwitch">CSS
                        <input type="checkbox" id="cssSwitch" />
                    </label>
                </div>
                <div className="switch">
                    <label className="switch" htmlFor="scssSwitch">SCSS
                        <input type="checkbox" id="scssSwitch" />
                    </label>
                </div>
                <div className="switch">
                    <label className="switch" htmlFor="scssSwitch">PHP
                        <input type="checkbox" id="phpSwitch"  />
                    </label>
                </div>
                <ToggleSwitch />


                
            </div>
  
        );
    }
}

export default SwitchCol;