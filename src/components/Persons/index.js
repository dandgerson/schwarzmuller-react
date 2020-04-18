import React, { PureComponent } from 'react'

import Person from 'src/components/Persons/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps', { props }, { state })
    return state
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate', {nextProps}, {nextState}, (nextProps.persons !== this.props.persons))
  //   if (nextProps.persons !== this.props.persons) return true
  //   return false
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate', { prevProps }, { prevState })
    return { message: 'Snapshot!' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', snapshot)
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')
  }

  render() {
    console.log('[Persons.js] rendering...')
    return (this.props.persons.map((person, i) => (
      <Person
        key={i}
        handleClick={(event) => this.props.handleDeletePerson(event, { id: person.id })}
        handleChange={(event) => this.props.handleChangeName(event, { id: person.id })}
        name={person.name}
        age={person.age}
        isAuthenticated={this.props.isAuthenticated}
      >
        <p>Hello!</p>
      </Person>
    )))
  }
}

export default Persons
