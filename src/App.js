import React, { useState } from 'react';
import Radium, { StyleRoot } from 'radium'

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
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black',
    }
  }

  let renderedPersons = null
  if (isPersonsShown) {
    style.backgroundColor = 'red'
    style[':hover'] = {
      backgroundColor: 'lightcoral',
      color: 'black',
    }

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
    )
  }

  const classes = []
  if (persons.length <= 2) {
    classes.push('red')
  }
  if (persons.length <= 1) {
    classes.push('bold')
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1>Hi, I'am react App</h1>
        <p className={classes.join(' ')}>Dynamically styled text.</p>
        <button
          style={style}
          onClick={handleTogglePersons}
        >
          Toggle persons
      </button>
        {renderedPersons}
      </div>
    </StyleRoot>
  )
}

export default Radium(App);
