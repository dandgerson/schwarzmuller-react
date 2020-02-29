import React, { useState } from 'react';

import './App.css';

import Person from './Person'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Dmitry', age: 32 },
    { name: 'Max', age: 24 },
    { name: 'Stepan', age: 32 },
  ])
  const [isPersonsShown, setPersonsShown] = useState(false)

  const handleDeletePerson = (id) => {
    setPersons(persons.filter((_, i) => !(i === id)))
  }

  const handleChangeName = (event) => {
    // console.log({target: event.target})
    setPersons([
      { name: 'Dmitry G. Anderson', age: 32 },
      { name: event.target.value, age: 24 },
      { name: 'Stepan V. Motovilov', age: 32 },
    ])
  }

  const handleTogglePersons = () => {
    setPersonsShown(!isPersonsShown)
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  }

  let renderedPersons = null
  isPersonsShown && (renderedPersons = (
    <div>
      {persons.map((person, i) => (
        <Person
          key={i}
          handleClick={() => handleDeletePerson(i)}
          id={i}
          name={person.name}
          age={person.age}
        />
      ))}
    </div>
  ))

  return (
    <div className="App">
      <h1>Hi, I'am react App</h1>
      <button
        style={style}
        onClick={handleTogglePersons}
      >
        Toggle persons
      </button>
      {renderedPersons}
    </div>
  )
}

export default App;
