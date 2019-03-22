import React,  {Component} from 'react'

class Projects extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="center">
                <h1>Projects</h1>
                <div className="container">
                    <div>
                        <h4><a href="https://domesti.co">Domestico</a></h4>
                        <p>
                            Domestico is a web application designed to help roommates keep track of shared expenses. Simply register, add your roommates, enter expenses and/or payments, and your dashboard will keep track of how much everyone in your household owes.
                        </p>
                        <p>The website was built using React/Redux, Express, MySQL, and Materialize CSS. Click the name above for a live demo! </p>
                    </div>
                    <div>
                        <h4><a href="https://hair-gypsy.com">Hair Gypsy</a></h4>
                        <p>
                            Hair Gypsy is a marketing website for an independent stylist in Atlanta, GA. The website features pricing information and directions as well as a link to the stylist's online booking platform. There is also a photo gallery of current and former clients before/after haircuts. 
                        </p>
                        <p>The website was built using plain HTML, CSS, jQuery, and Google Maps API. Click the name above for a live demo!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects