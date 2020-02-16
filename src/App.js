import React, { Component } from 'react';

import './App.css';

import Person from './Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Dmitry', age: 32 },
      { name: 'Max', age: 24 },
      { name: 'Stepan', age: 32 },
    ],
  }
  handleSwitchPerson = () => {
    this.setState({
      persons: [
        { name: 'Dmitry G. Anderson', age: 32 },
        { name: 'Maxim P. Pavlov', age: 24 },
        { name: 'Stepan V. Motovilov', age: 32 },
      ],
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'am react App</h1>
        <button onClick={this.handleSwitchPerson}>Switch persons</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
