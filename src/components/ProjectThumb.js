import React, {Component} from 'react';
import dumbyImg from './../imgs/dumby/04-thumbnail.jpg';


const projectData = {
    imgPath:  dumbyImg ,
    imgAlt: "Project Short Desc",
    projectName: "ProjectName",
    projectFullDesc: "Full Project Description Lorme;las a;lkjd ;lkdlfja; slkdfj;a lsd; alsjdf; lajs; fdlkaj ;dlfkja; ldsklsdjf; alksjd f;alkjs d;fkaj s;ldkjfa ;slkjfd ;alksasalskjf;alksjg ;aksfjglksdjf;gskjf;lg skjd;fg;lskjf ;lgflgj;lskjd;flgks ;ldkfjg s;lkdfjg ;sdkfjlgskdjfga;slskdfjgs;lkdfgj;slkdfjg;slkdfj",
    projectTypeIconPath: "#",
    typeIconDesc: "Project Type Icon Desc"
}

class ProjectThumb extends Component{
    render(props) {
        return (
            <div className="showcaseImgBox">
                <img src={projectData.imgPath} className="projectThumb" alt={projectData.imgAlt} />
                <div className="projectDataBox">
                    <div className="projectData">
                        <h3>{projectData.projectName}</h3>
                        <p>{projectData.projectFullDesc}</p>
                        <div className='projectTypeIcon'>
                            <img src={dumbyImg} className="projectTypeIcon" alt={projectData.typeIconDesc} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProjectThumb;