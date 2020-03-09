import React from 'react'

import Person from 'src/components/Persons/Person'

const Persons = ({
  state: { persons },
  handlers: { handleChangeName, handleDeletePerson },
}) => {
  console.log('[Persons.js] rendering...')
  return (persons.map((person, i) => (
    <Person
      key={person.id}
      handlers={{
        handleClick: handleDeletePerson.bind(null, { id: person.id }),
        handleChange: handleChangeName.bind(null, { id: person.id }),
      }}
      name={person.name}
      age={person.age}
    />
  )))
}

export default Persons
