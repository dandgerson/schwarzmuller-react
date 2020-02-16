import React, { Component } from 'react';

import './App.css';

import Person from './Person'

class App extends Component {
  state = [
    { name: 'Dmitry', age: 32 },
    { name: 'Max', age: 24 },
    { name: 'Stepan', age: 32 },
  ]
  render() {
    return (
      <div className="App">
        <h1>Hi, I'am react App</h1> 
        <button>Switch persons</button>
        <Person
          name={this.state[0].name}
          age={this.state[0].age}
        />
        <Person
          name={this.state[1].name}
          age={this.state[1].age}
        />
        <Person
          name={this.state[2].name}
          age={this.state[2].age}
        />
      </div>
    );
  }
}

export default App;
