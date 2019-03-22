import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css";
import '../index.css'


class NavBar extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
                M.AutoInit();
    }

    render() {
        return (
            <span>
                <nav>
                    <div className="nav-wrapper grey darken-2">
                     <span>
                         <Link to="/">Robert Ragans</Link>
                     </span>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    </div>
                </nav>
        
            <ul className="sidenav grey darken" id="mobile-demo">
                <li><Link className="white-text" to="/about">About</Link></li>
                <li><Link className="white-text" to="/projects">Projects</Link></li>
                <li><Link className="white-text" to="/skills">Skills</Link></li>
                <li><Link className="white-text" to="/contact">Contact</Link></li>
            </ul>
          </span>
        )
    }
}

export default NavBar