import React, { useState } from 'react';

import style from './App.css';

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

  const buttonClasses = [style.button]

  let renderedPersons = null
  if (isPersonsShown) {
    buttonClasses.push(style.Red)

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

  const assignedClasses = []
  if (persons.length <= 2) {
    assignedClasses.push(style.red)
  }
  if (persons.length <= 1) {
    assignedClasses.push(style.bold)
  }

  return (
    <div className={style.App}>
      <h1>Hi, I'am react App</h1>
      <p className={assignedClasses.join(' ')}>Dynamically styled text.</p>
      <button
        className={buttonClasses.join(' ')}
        onClick={handleTogglePersons}
      >
        Toggle persons
      </button>
      {renderedPersons}
    </div>
  )
}

export default App;
