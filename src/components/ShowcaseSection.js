import React, { Component } from 'react';
import ProjectThumb from './ProjectThumb';


//# SHOWCASE SECTION
class ShowcaseSection extends Component {
    render() {
        return (
            <section className="showcase">
                
                <div className="showcaseGallery">
                    <div className="showcaseRow">
                            
                        <ProjectThumb />
                        <ProjectThumb />
                        <ProjectThumb />
                        <ProjectThumb />
                        
                    </div>
                    <div className="showcaseRow">
                                                    
                        <ProjectThumb />
                        <ProjectThumb />
                        <ProjectThumb />
                        <ProjectThumb />

                    </div>
                </div>

            </section>

        )
    }
}

export default ShowcaseSection;