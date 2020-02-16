import React, { Component } from 'react';

import './App.css';

import Person from './Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'am react App!</h1>
        <Person
          name='Dmitry'
          age='32'
        >
          {/* <p>Hello Dude!</p> */}
        </Person>
      </div>
    );
  }
}

export default App;
