import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PaperTexture from './../imgs/Resume/paperTexture.png';

class ResumeContainer extends Component {
    render() {
        return (
            <section className="resumeContainer">

                <div className="page" style={{ backgroundImage: `url(${PaperTexture})` }}>
                    <div className="columnHeader">
                        <div className="resumeNameBox">
                            <p>Reign Westry</p>
                            <span>
                                Full-Stack Developer (Student)
                            </span>
                        </div>
                        
                        <div className="headerBox">
                            <h2 style={{ backgroundImage: `url(${PaperTexture})` }}>Personal Info</h2>
                        </div>

                        <div className="resumeListData">
                            <div>
                                <h4>Address</h4>
                                <p>Lilburn, Georgia</p>
                            </div>
                        </div>
                        
                        <div className="headerBox">
                            <h2 style={{ backgroundImage: `url(${PaperTexture})` }}>Skills</h2>
                        </div>

                        <div className="resumeListData">

                            <ul>
                                <li>Web Site Design & Development</li>
                                <li>App Design & Development</li>
                                <li>Database Management</li>

                            </ul>
                        </div>
                        
                        <div className="headerBox">
                            <h2 style={{ backgroundImage: `url(${PaperTexture})` }}>Languages</h2>
                        </div>

                        <div className="resumeListData">
                            
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SCSS</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>

                            </ul>
                        </div>

                        <div className="headerBox">
                            <h2 style={{ backgroundImage: `url(${PaperTexture})` }}>Social</h2>
                        </div>

                        <div className="resumeListData">
                            <ul>
                                <li><Link to='/linkedin' className="socialLink">LinkedIn</Link></li>
                                <li><Link to='/github' className="socialLink">Github</Link></li>
                                

                            </ul>
                        </div>


                    </div>
                    
                    <div className="rightColumn">
                        <div>
                            <p>Enthusiastic junior full-stack developer with broad exposure from web development to app development. Seeking to gain professional experience and dedicate to project development teams. Able to quickly grasp new technical skills and concepts to deliver under tight deadlines.</p>

                            <h2>Professional Projects</h2>
                            
                            <div className="experienceColumn">
                                <div className="dateColumn">
                                    Currently Seeking
                                </div>
                                <div>
                                    <h3>None</h3>
                                    {/* <span>Thermo Fisher Scientific - Suwanee, GA</span>
                                    <ul>
                                        <li>Scanning serials and products to update the warehouse database.</li>
                                        <li>Communicating with corporate to get the warehouse database efficiently updated.</li>
                                        <li>2 month temp project</li>
                                    </ul> */}
                                </div>
                            </div>

                            <h2>Experience</h2>

                            <div className="experienceColumn">
                                <div className="dateColumn">
                                    Jun 2021 - present
                                </div>
                                <div>
                                    <h3>RF Scanner Technician</h3>
                                    <span>Thermo Fisher Scientific - Suwanee, GA</span>
                                    <ul>
                                        <li>Scanning serials and products to update the warehouse database.</li>
                                        <li>Communicating with corporate to get the warehouse database efficiently updated.</li>
                                        <li>2 month temp project</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experienceColumn">
                                <div className="dateColumn">
                                    Oct 2019 - Jan 2021
                                </div>
                                <div>
                                    <h3>Forklift Operator / Warehouse Supervisor</h3>
                                    <span>U.S. Cabinetry - Lawrenceville, GA</span>
                                    <ul>
                                        <li>Building, Adjusting, and Removing racks.</li>
                                        <li>Cataloging Inventory</li>
                                        <li>Pulling Orders</li>
                                        <li>Taught & Guided 5 3-4 man crews on how to place and adjust racks. Assisted with last minute changes and positions.</li>
                                        <li>Trained new crew members on the operation and safety of forklifts.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experienceColumn">
                                <div className="dateColumn">
                                    Oct 2018 - Dec 2018
                                </div>
                                <div>
                                    <h3>Narrow Aisle Forklift Operator - Cycle Counter</h3>
                                    <span>Habasit America - Suwanee, GA</span>
                                    <ul>
                                        <li>Cycle counted all narrow aisles by RF scanner and computer.</li>
                                        <li>Cherry picked and delivered material based on order.</li>
                                        
                                    </ul>
                                </div>
                            </div>

                            <h2>Education</h2>

                            <div className="experienceColumn">
                                <div className="dateColumn">
                                    Aug 2019 - present
                                </div>
                                <div>
                                    <h3>Associates of Computer Science</h3>
                                    <span>Georgia State University</span>
                                    {/* <ul>
                                        <li>Oversaw all major hospital IT projects for 10+ years, focus on cost reduction.</li>

                                    </ul> */}
                                </div>
                            </div>

                            <div className="experienceColumn">
                                <div className="dateColumn">
                                    Aug 2019 - present
                                </div>
                                <div>
                                    <h3>Web Site Specialist Certificate</h3>
                                    <h3>Associates of Computer Science</h3>
                                    <span>Gwinnett Technical College</span>

                                </div>
                            </div>

                            <h2>Interests</h2>

                            
                            <div className="experienceColumn">
                                {/* <div className="dateColumn">
                                    Aug 2019 - present
                                </div> */}
                                <div>
                                    <h3>Web Development</h3>
                                    <h3>App Development</h3>
                                    <h3>Software Engineering</h3>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
export default ResumeContainer;