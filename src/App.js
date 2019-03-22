import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import NavBar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import 'materialize-css/dist/css/materialize.min.css';
// import Devicon from 'devicon-react'
import IconReact from 'react-devicon/react/original'



class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </div> 
      </Router>
    );
  }
}

export default App;
