import React from 'react'

const Person = (props) => {
  return (
    <div>
      <p>I'm a Person!</p>
      <p>My name is {props.name} and I am {props.age} years old.</p>
      {props.children && props.children}
    </div>
  )
}

export default Person
