import React from 'react'

const Person = ({
  handleClick = () => { },
  handleChanged = () => { },
  ...props
}) => {
  const style = {
    cursor: 'pointer',
  }
  return (
    <div>
      <p>I'm a Person!</p>
      <p
        onClick={() => handleClick('Dmitry')}
        style={style}
      >My name is {props.name} and I am {props.age} years old.</p>
      <input
      type="text"
      onChange={changed}
      value={props.name} />
      {props.children && props.children}
    </div>
  )
}

export default Person
