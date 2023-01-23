import React, {Component} from 'react';

class Education extends Component {
    render(){
        return(
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <hr></hr>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Oulu</h3>
                            <div class="subheading mb-3">Bachelor of Science</div>
                            <div>Information Processing Science</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-lightblue">August 2013 - May 2019</span></div>
                    </div>
                    <hr></hr>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Oulu</h3>
                            <div class="subheading mb-3">Master of Science</div>
                            <div>Information Processing Science</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-lightblue">August 2013 -  2022</span></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Education;