import React from 'react'
import Radium from 'radium'

import './Person.css'

const Person = ({
  handleClick = () => { },
  handleChange = () => { },
  ...props
}) => {
  const styleText = {
    cursor: 'pointer',
  }
  const styleRoot = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div className="Person" style={styleRoot}>
      <p>I'm a Person!</p>
      <p
        onClick={handleClick}
        style={styleText}
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
