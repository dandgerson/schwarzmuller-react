import React from 'react'

import style from './Person.css'

const Person = ({
  handleClick = () => { },
  handleChange = () => { },
  ...props
}) => {

  return (
    <div className={style.Person}>
      <p>I'm a Person!</p>
      <p
        className={style.delete}
        onClick={handleClick}
      >
        My name is {props.name} and I am {props.age} years old.
      </p>
      <input
        type="text"
        onChange={handleChange}
        value={props.name}
      />
      {props.children && props.children}
    </div>
  )
}

export default Person
