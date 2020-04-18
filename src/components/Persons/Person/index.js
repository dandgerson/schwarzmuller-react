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
  componentDidMount() {
    this.inputEl.current.focus()
  }
  render() {
    console.log('[Person.js] rendering...')
    return (
      <React.Fragment>
        <AuthContext.Consumer>
          {context => (
            <p>
              {`${context.isAuthenticated ? 'Logged in' : 'Isn\'t authenticated'}`}
            </p>
          )}
        </AuthContext.Consumer>
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
