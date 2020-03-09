import React, { Component } from 'react'

import style from './Person.css'

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <div className={style.Person} >
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
      </div >
    )
  }
}
export default Person
