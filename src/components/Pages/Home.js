import React, {Component} from 'react';

class Home extends Component {
    render(){
        return(
            <div className="container-fluid p-0 img-home">
                
                <section className="resume-section" id="about">
                    <div className="resume-section-content">
                        <h1 className="mb-0">
                            Samuli
                            <span className="text-primary"> Helttunen</span>
                        </h1>
                        <div className="subheading mb-5">
                            <a href="mailto:name@email.com">samuli.helttunen@gmail.com</a>
                        </div>
                        <p className="lead mb-5">Beginner-level developer specialized in software development. Best at testing, usability and designing but keen on learning other domains of development. Highly interested in web development (full stack) and game development and video games in general.</p>
                        <div className="social-icons">
                            <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                            <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Home;