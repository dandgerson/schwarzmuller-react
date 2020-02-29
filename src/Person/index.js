import React from 'react'

const Person = ({
  handleClick = () => { },
  handleChange = () => { },
  ...props
}) => {

  return (
    <div>
      <p>I'm a Person!</p>
      <p
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
