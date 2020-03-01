import React, { useState } from 'react';

import style from './App.css';

import Cockpit from 'src/components/Cockpit'
import Persons from 'src/components/Persons'

const App = (props) => {
  const [persons, setPersons] = useState([
    { id: 'aselk3', name: 'Dmitry', age: 32 },
    { id: 'aknee32', name: 'Max', age: 24 },
    { id: 'fngrrk321', name: 'Stepan', age: 32 },
  ])
  const [isPersonsShown, setPersonsShown] = useState(false)

  const handleDeletePerson = (data) => {
    setPersons(persons.filter(person => !(person.id === data.id)))
  }

  const handleChangeName = (data, event) => {
    setPersons(persons.reduce((acc, current) => {
      current.id === data.id ? acc.push({
        ...current,
        name: event.target.value,
      }) : acc.push(current)

      return acc
    }, []))
  }

  const handleTogglePersons = () => {
    setPersonsShown(!isPersonsShown)
  }

  let renderedPersons = null
  isPersonsShown && (renderedPersons = (
    <Persons
      persons={persons}
      handlers={{
        handleChangeName,
        handleDeletePerson,
      }}
    />
  ))

  return (
    <div className={style.App}>
      <Cockpit
        state={{
          persons,
          isPersonsShown,
        }}
        handlers={{
          handleTogglePersons,
        }}
        title={props.title}
      />
      <div>
        {renderedPersons}
      </div>
    </div>
  )
}

export default App;
