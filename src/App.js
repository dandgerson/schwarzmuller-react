import React, { useState } from 'react';

import './App.css';

import Person from './Person'

const App = (props) => {
  const [persons, setPersons] = useState([
    { id: 'aselk3', name: 'Dmitry', age: 32 },
    { id: 'aknee32', name: 'Max', age: 24 },
    { id: 'fngrrk321', name: 'Stepan', age: 32 },
  ])
  const [isPersonsShown, setPersonsShown] = useState(false)

  const handleDeletePerson = (id) => {
    setPersons(persons.filter(person => !(person.id === id)))
  }

  const handleChangeName = (event, id) => {
    setPersons(persons.reduce((acc, current) => {
      current.id === id ? acc.push({
        ...current,
        name: event.target.value,
      }) : acc.push(current)

      return acc
    }, []))
  }

  const handleTogglePersons = () => {
    setPersonsShown(!isPersonsShown)
  }

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  }

  let renderedPersons = null
  if (isPersonsShown) {
    style.backgroundColor = 'red'

    renderedPersons = (
    <div>
      {persons.map((person, i) => (
        <Person
          key={person.id}
          handleClick={() => handleDeletePerson(person.id)}
          handleChange={(event) => handleChangeName(event, person.id)}
          name={person.name}
          age={person.age}
        />
      ))}
    </div>
  )}

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
