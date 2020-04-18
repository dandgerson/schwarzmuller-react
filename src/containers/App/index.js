import React, { Component } from 'react';

import style from './App.css';

import Cockpit from 'src/components/Cockpit'
import Persons from 'src/components/Persons'
import withClass from 'src/hoc/withClass'

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
    isCockpitShown: true,
    isPersonsShown: false,
    changeCounter: 0,
  }

  /**
   * Lifecycle methods
   */
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', { props }, { state })
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate', true)
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate')
    return { message: 'Snapshot!' }
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
    event.persist()
    this.setState((prevState, props) => ({
      persons: prevState.persons.reduce((acc, current) => {
        current.id === payload.id ? acc.push({
          ...current,
          name: event.target.value,
        }) : acc.push(current)

        return acc
      }, []),
      changeCounter: prevState.changeCounter + 1,
    }))
  }

  handleTogglePersons = () => {
    this.setState({
      isPersonsShown: !this.state.isPersonsShown,
    })
  }
  handleToggleCockpit = () => {
    this.setState({
      isCockpitShown: !this.state.isCockpitShown,
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
      <React.Fragment>
        <button
          onClick={this.handleToggleCockpit}
        >
          Toggle Cockpit
        </button>
        {this.state.isCockpitShown && <Cockpit
          personsLength={this.state.persons.length}
          isPersonsShown={this.state.isPersonsShown}
          handleTogglePersons={this.handleTogglePersons}
          title={this.props.title}
        />}
        <div>
          {renderedPersons}
        </div>
      </React.Fragment>
    )
  }
}

export default withClass(App)([style.App]);
