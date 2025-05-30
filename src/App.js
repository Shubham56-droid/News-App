import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import About from './components/About';
// import Contact from './components/Contact';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <News/>
        {/* <About/>
        <Contact/> */}
      </div>
    );
  }
}

