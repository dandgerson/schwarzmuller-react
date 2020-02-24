import React, { useState } from 'react';

import './App.css';

import Person from './Person'

const App = (props) => {
  const [state, setState] = useState({
    persons: [
      { name: 'Dmitry', age: 32 },
      { name: 'Max', age: 24 },
      { name: 'Stepan', age: 32 },
    ],
  })
  const handleSwitchPerson = (newName) => {
    setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Maxim P. Pavlov', age: 24 },
        { name: 'Stepan V. Motovilov', age: 32 },
      ],
    })
  }

  const handleChangeName = (event) => {
    // console.log({target: event.target})
    setState({
      persons: [
        { name: 'Dmitry G. Anderson', age: 32 },
        { name: event.target.value, age: 24 },
        { name: 'Stepan V. Motovilov', age: 32 },
      ],
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'am react App</h1>
      <button onClick={() => handleSwitchPerson('Dmitry G. Anderson')}>Switch persons</button>
      <Person
        name={state.persons[0].name}
        age={state.persons[0].age}
      />
      <Person
        name={state.persons[1].name}
        age={state.persons[1].age}
        click={handleSwitchPerson}
        changed={handleChangeName}
      />
      <Person
        name={state.persons[2].name}
        age={state.persons[2].age}
      />
    </div>
  )
}

export default App;
