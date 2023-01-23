import React, {Component} from 'react';

class Projects extends Component{
    render(){
        return(
            <div className= "container-fluid p-0">
                <section className="resume-section">
                    <div className="row">
                            <div className="col-sm">
                                <div className="card" style={{width: '18rem'}}>
                                    <img src="public\assets\img\discordbottithumbnail.png" className="card-img-top" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm">
                                One of three columns
                            </div>
                            <div class="col-sm">
                                One of three columns
                            </div>
                        </div>
                    </section>
                </div>
        )
    }
}

export default Projects;