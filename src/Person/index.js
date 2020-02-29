import React from 'react'
import Radium from 'radium'

import './Person.css'

const Person = ({
  handleClick = () => { },
  handleChange = () => { },
  ...props
}) => {
  const style = {
    cursor: 'pointer',
  }
  return (
    <div className="Person">
      <p>I'm a Person!</p>
      <p
        onClick={handleClick}
        style={style}
      >My name is {props.name} and I am {props.age} years old.</p>
      <input
        type="text"
        onChange={handleChange}
        value={props.name}
      />
      {props.children && props.children}
    </div>
  )
}

export default Radium(Person)
