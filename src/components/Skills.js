import React, { Component } from 'react'
import '../skills.css'


class Skills extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="center">Skills</h1>
                    <div className="skills-box row">
                        <div className="skills-icons">
                            <i className="devicon-javascript-plain"></i>
                            {/* <p className="skill-name">JavaScript</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-react-original-wordmark"></i>
                            {/* <p className="skill-name">React.js</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-html5-plain-wordmark"></i>
                            {/* <p className="skills-name">HTML 5</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-postgresql-plain-wordmark"></i>
                            {/* <p className="skills-name">PostgreSQL</p> */}
                        </div>

                        <div className="skills-icons">
                            <i className="devicon-bootstrap-plain-wordmark"></i>
                            {/* <p className="skills-name">Materialize</p> */}
                        </div>
                    </div>

                    <div className="skills-box row">
                        <div className="skills-icons">
                            <i className="devicon-nodejs-plain-wordmark"></i>
                            {/* <p className="skills-name">Node.js</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-express-original-wordmark"></i>
                            {/* <p className="skills-name">Express</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-python-plain-wordmark"></i>
                            {/* <p className="skills-name">Python</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-mysql-plain-wordmark"></i>
                            {/* <p className="skills-name">mySQL</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-sass-original"></i>
                            {/* <p className="skills-name">Sass</p> */}
                        </div>
                    </div>
                    <div className="skills-box row">
                        <div className="skills-icons">
                            <i className="devicon-git-plain-wordmark"></i>
                            {/* <p className="skills-name">Git</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-amazonwebservices-plain-wordmark"></i>
                            {/* <p className="skills-name">AWS</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-apache-plain-wordmark"></i>
                            {/* <p className="skills-name">Apache</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-jquery-plain-wordmark"></i>
                            {/* <p className="skills-name">jQuery</p> */}
                        </div>
                        <div className="skills-icons">
                            <i className="devicon-css3-plain-wordmark"></i>
                            {/* <p className="skills-name">CSS 3</p> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills