import React from 'react'

import style from './Person.css'

const Person = ({
  handlers: { handleChange, handleClick},
  ...restProps
}) => {
  console.log('[Person.js] rendering...')
  return (
    <div className={style.Person}>
      <p>I'm a Person!</p>
      <p
        className={style.delete}
        onClick={handleClick}
      >
        My name is {restProps.name} and I am {restProps.age} years old.
      </p>
      <input
        type="text"
        onChange={handleChange}
        value={restProps.name}
      />
      {restProps.children && restProps.children}
    </div>
  )
}

export default Person
