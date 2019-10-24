import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import Sidebar from './components/Sidebar';
import ProjectList from './components/ProjectList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
    };
  }

  //<P5Wrapper sketch={sketch}></P5Wrapper>
  render() {
    return (
      <div className="container">
        <Sidebar />
        <ProjectList />
      </div>
    );
  }
}

export default App;