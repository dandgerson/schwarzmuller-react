import React, { Component } from 'react'

import style from './Person.css'

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return ([
        <p key='i1'>I'm a Person!</p>,
        <p
          key='i2'
          className={style.delete}
          onClick={this.props.handleClick}
        >
          My name is {this.props.name} and I am {this.props.age} years old.
        </p>,
        <input
          key='i3'
          type="text"
          onChange={this.props.handleChange}
          value={this.props.name}
        />,
        this.props.children && this.props.children,
    ])
  }
}
export default Person
