import React, {Component} from 'react';
import dumbyImg from './../../imgs/dumby/04-thumbnail.jpg';

class ProjectThumb extends React.Component{
    render() {
        return (
            <div className="showcaseImgBox">
                <img src={dumbyImg} className="projectThumb" alt="#" />
                <div className="projectDataBox">
                    <div className="projectData">
                        <h3>ProjectName</h3>
                        <p>Short Description of project. Lorme;las a;lkjd ;lkdlfja; slkdfj;a lsd; alsjdf; lajs; fdlkaj ;dlfkja; ldsklsdjf; alksjd f;alkjs d;fkaj s;ldkjfa ;slkjfd ;alksasalskjf;alksjg ;aksfjglksdjf;gskjf;lg skjd;fg;lskjf ;lgflgj;lskjd;flgks ;ldkfjg s;lkdfjg ;sdkfjlgskdjfga;slskdfjgs;lkdfgj;slkdfjg;slkdfj</p>
                        <div className='projectTypeIcon'>
                            <img src="#" className="projectTypeIcon" alt />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProjectThumb;