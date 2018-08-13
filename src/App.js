import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Personal from './Personal';
import Background from './Background';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="p-card card">
          <Personal></Personal>
        </div>
        <div className="b-card card">
          <Background></Background>
        </div>
      </div>
    );
  }
}

export default App;
