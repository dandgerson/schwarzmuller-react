import React, { Component } from 'react'

import Person from 'src/components/Persons/Person'

class Persons extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps', {props}, {state})
    return state
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate', {nextProps}, {nextState})
    return nextProps.persons.length > 0
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate', {prevProps}, {prevState})
    return { message: 'Snapshot!'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', snapshot)
  }

  render() {
    console.log('[Persons.js] rendering...')
    return (this.props.persons.map((person, i) => (
      <Person
        key={person.id}
        handleClick={(event) => this.props.handleDeletePerson(event, { id: person.id })}
        handleChange={(event) => this.props.handleChangeName(event, { id: person.id })}
        name={person.name}
        age={person.age}
      />
    )))
  }
}

export default Persons
