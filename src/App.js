import React, { Component } from 'react';
import './App.css';
import Calendar from "./Calendar.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Calendar with Task Functionality</h1>
        <Calendar />
      </div>
    );
  }
}

export default App;
