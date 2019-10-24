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

  render() {
    return (
      <div className="container">
        <Sidebar />
        <ProjectList />
        <P5Wrapper sketch={sketch}></P5Wrapper>
      </div>
    );
  }
}

export default App;