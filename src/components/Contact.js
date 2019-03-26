import React, { Component } from 'react'
import '../index.css'
import Resume from '../images/Resume.pdf'

class Contact extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="container">
                <div id="contact-me" className="center">
                    <h2>Contact Me</h2>
                    <p class="mini-bio">If you would like to contact me, feel free to reach out via email, LinkedIn, or by phone at (478) 960-3575. You can also check out my project repositories on my GitHub. </p>
                    <div class="contact-icons">
                        <a class="contact-icon" href="https://www.linkedin.com/in/robert-ragans-54670142/" target="blank">
                            <i class="fab fa-linkedin"></i>
                            <div class="contact-icon-text">LinkedIn</div>
                        </a>
                        <a class="contact-icon" href="https://github.com/rcragans" target="blank">
                            <i class="fab fa-github"></i>
                            <div class="contact-icon-text">GitHub</div>
                        </a>
                        <a class="contact-icon" href="mailto:rcragans@gmail.com?Subject=Hello!" target="_top">
                            <i class="fas fa-envelope"></i>
                            <div class="contact-icon-text">Email</div>
                        </a>
                        <a class="contact-icon" href={Resume} target="blank">
                            <i class="far fa-file"></i>
                            <div class="contact-icon-text">Resume</div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact