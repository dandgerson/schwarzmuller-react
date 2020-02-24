import React from 'react'

const Person = ({ click = () => {}, ...props}) => {
  const style = {
    cursor: 'pointer',
  }
  return (
    <div>
      <p>I'm a Person!</p>
      <p
        onClick={() => click('Dmitry')}
        style={style}
      >My name is {props.name} and I am {props.age} years old.</p>
      {props.children && props.children}
    </div>
  )
}

export default Person
