import React from 'react'

import Person from 'src/components/Persons/Person'

const Persons = ({ persons, handlers }) => (persons.map((person, i) => (
  <Person
    key={person.id}
    handleClick={handlers.handleDeletePerson.bind(null, { id: person.id })}
    handleChange={handlers.handleChangeName.bind(null, { id: person.id })}
    name={person.name}
    age={person.age}
  />
)))

export default Persons
