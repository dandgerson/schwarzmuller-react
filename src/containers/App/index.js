import React, { Component } from 'react';

import style from './App.css';

import Cockpit from 'src/components/Cockpit'
import Persons from 'src/components/Persons'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  /**
   * Declare state as public property
   */
  state = {
    persons: [
      { id: 'aselk3', name: 'Dmitry', age: 32 },
      { id: 'aknee32', name: 'Max', age: 24 },
      { id: 'fngrrk321', name: 'Stepan', age: 32 },
    ],
    isPersonsShown: false,
  }

  /**
   * Lifecycle methods
   */
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', {props}, {state})
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate', nextState.persons.length > 0)
    return nextState.persons.length > 0
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate')
    return { message: 'Snapshot!'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate', snapshot)
  }

  /**
   * Handlers
   */
  handleDeletePerson = (event, payload) => {
    this.setState({
      persons: this.state.persons.filter(person => !(person.id === payload.id)),
    })
  }

  handleChangeName = (event, payload) => {
    this.setState({
      persons: this.state.persons.reduce((acc, current) => {
        current.id === payload.id ? acc.push({
          ...current,
          name: event.target.value,
        }) : acc.push(current)

        return acc
      }, []),
    })
  }

  handleTogglePersons = () => {
    this.setState({
      isPersonsShown: !this.state.isPersonsShown,
    })
  }

  render() {
    console.log('[App.js] render')
    let renderedPersons = null
    this.state.isPersonsShown && (renderedPersons = (
      <Persons
        persons={this.state.persons}
        handleChangeName={this.handleChangeName}
        handleDeletePerson={this.handleDeletePerson}
      />
    ))

    return (
      <div className={style.App}>
        <Cockpit
          state={{
            persons: this.state.persons,
            isPersonsShown: this.state.isPersonsShown,
          }}
          handlers={{
            handleTogglePersons: this.handleTogglePersons,
          }}
          title={this.props.title}
        />
        <div>
          {renderedPersons}
        </div>
      </div>
    )
  }
}

export default App;
