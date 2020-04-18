import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AuthContext from 'src/context/AuthContext'

import withClass from 'src/hoc/withClass'

import style from './Person.css'
class Person extends Component {
  constructor(props) {
    super(props)
    this.inputEl = React.createRef()
  }

  static contextType = AuthContext

  componentDidMount() {
    this.inputEl.current.focus()
    console.log({ context: this.context })
  }
  render() {
    console.log('[Person.js] rendering...')
    return (
      <React.Fragment>
        <p>
          {`${this.context.isAuthenticated ? 'Logged in' : 'Isn\'t authenticated'}`}
        </p>
        <p>I'm a Person!</p>
        <p
          className={style.delete}
          onClick={this.props.handleClick}
        >
          My name is {this.props.name} and I am {this.props.age} years old.
        </p>
        <input
          type="text"
          ref={this.inputEl}
          onChange={this.props.handleChange}
          value={this.props.name}
        />
        {this.props.children && this.props.children}
      </React.Fragment>
    )
  }
}

Person.propTypes = {
  handleClick: PropTypes.func,
  hanbleChange: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
}

export default withClass(Person)([style.Person])
