import React, { Component } from 'react';
import image from "../images/DSA_4788.jpg"
import '../index.css'
console.log(image)

class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }


    render() {
        return (
            <div className="center">
                <div className="container center" style={{marginTop: 15}}>
                    <div className="myImage">
                        <img className="myImage" src={image} alt =""></img>
                    </div>
                    <div className="aboutParagraph">
                        <p>Hi, my name is Robert and I am a full-stack web developer. After working in various industries such as consulting and logistics, I realized my strengths were around problem solving, manipulating data and making processes more efficient. I decided to fully pursue web development at DigitalCrafts in an effort to expand upon these strengths, challenge myself and enter into a career path that I am excited about. I am looking for an opportunity where I am able to continue to learn and elevate my coding skills to add value to my team. In my spare time, I enjoy playing music (everything from the piano to the guitar), golfing, and spending time with my 10 year old Bull Mastiff, Porkchop. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
