import React, { Component } from 'react'

import style from './Person.css'
import Aux from 'src/hoc/Aux'
class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <Aux>
        <p>I'm a Person!</p>
        <p
          className={style.delete}
          onClick={this.props.handleClick}
        >
          My name is {this.props.name} and I am {this.props.age} years old.
        </p>
        <input
          type="text"
          onChange={this.props.handleChange}
          value={this.props.name}
        />
        {this.props.children && this.props.children}
      </Aux>
    )
  }
}
export default Person
