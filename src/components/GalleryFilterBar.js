import React, { Component } from 'react';

/**
    inputS FUNC
        * One click => darken true
        * One click => lighten = false
 */

class GalleryFilterBar extends Component {
    render() {
        return (
            <div className="galleryFilterBar">
                {/* <div className="filterTitle">

                </div> */}
                <div className="filterCol">
                    <div className="filterTitle">
                        <h3>Type</h3>

                    </div>
                    <div className="btnContainer">
                            <div>
                                <p htmlFor="Website">Website</p>
                                <input type="checkbox" id="Website" className="typeBtn" value="Website" />
                                <p>App</p>
                            </div>
                        
                            
                    </div>

                </div>
                <div className="filterCol">
                    <div className="filterTitle">
                        <h3>Language</h3>
                    </div>
                    <div className="languageSwitchContainer">
                        <div className="switchCol">
                            <div className="switchContainer">
                                <label htmlFor="htmlSwitch">HTML</label>
                                <input type="checkbox" id="htmlSwitch" className="languageSwitch" value="HTML" />
                            </div>
                            <div className="switchContainer">
                                <label htmlFor="cssSwitch">CSS</label>
                                <input type="checkbox" id="cssSwitch" className="languageSwitch" value="CSS" />
                            </div>
                            <div className="switchContainer">
                                <label htmlFor="scssSwitch">SCSS</label>
                                <input type="checkbox" id="cssSwitch" className="languageSwitch" value="SCSS" />
                            </div>
                        </div>
                        {/* 
                        <div className="switchContainer">
                            <label htmlFor="phpSwitch">PHP</label>
                            <input type="checkbox" id="phpSwitch" className="languageSwitch" value="PHP" />
                        </div>
                        <div className="switchContainer">
                            <label htmlFor="mysqlSwitch">MySQL</label>
                            <input type="checkbox" id="phpSwitch" className="languageSwitch" value="MYSQL" />
                        </div>
                        <div className="switchContainer">
                            <label htmlFor="reactjsSwitch">ReactJS</label>
                            <input type="checkbox" id="reactjsSwitch" className="languageSwitch" value="ReactJS" />
                        </div>
                        <div className="switchContainer">
                            <label htmlFor="nosqlSwitch">NoSQL</label>
                            <input type="checkbox" id="nosqlSwitch" className="languageSwitch" value="NoSQL" /> 
                        </div> 
                        */}
                    </div>
                </div>
                <div className="filterCol">
                    <div className="filterTitle">
                        <h3>Date</h3>
                    </div>
                </div>
{/* 
            <div className="filterTitle">
                <div>
                    <p>Type</p>
                </div>

                <div>
                    <p>Language</p>
                </div>
                
                <div>
                    <p>Sort</p>
                </div>
            </div>

            <div className="filterOptions">
                <div className="typeBox">
                    <ul>
                        <li><input type="checkbox" htmlFor="App" value="App" /><label htmlFor="App">App</label></li>
                        <li><input type="checkbox" htmlFor="Website" value="Website" /><label htmlFor="Website">Website</label></li>
                        
                    </ul>
                </div>
                    
                <div className="languageBox">
                    <ul>
                        <li><input type="checkbox" htmlFor="HTML" value="HTML" /><label htmlFor="HTML">HTML</label></li>
                        <li><input type="checkbox" htmlFor="CSS" value="CSS" /><label htmlFor="CSS">CSS</label></li>
                        <li><input type="checkbox" htmlFor="JavaScript" value="JavaScript" /><label htmlFor="JavaScript">JavaScript </label></li>
                        <li><input type="checkbox" htmlFor="PHP" value="PHP" /><label htmlFor="PHP">PHP</label></li>
                        <li><input type="checkbox" htmlFor="MySql" value="MySql" /><label htmlFor="HTML">MySQL</label></li>
                        <li><input type="checkbox" htmlFor="ReactJS" value="ReactJs" /><label htmlFor="reactjs">ReactJS</label></li>
                        <li><input type="checkbox" htmlFor="NoSQL" value="NoSQL" /><label htmlFor="NoSQL">NoSQL</label></li>
                        
                    </ul>
                </div>
                
                <div className="dateSort">
                    <select>
                        <option> - </option>
                        <option>Recent</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>                                   
                </div>    
            </div>  */}
        </div>  
        );
    }
}

export default GalleryFilterBar;