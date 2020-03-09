import React, { Component } from 'react';

import style from './App.css';

import Cockpit from 'src/components/Cockpit'
import Persons from 'src/components/Persons'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'aselk3', name: 'Dmitry', age: 32 },
      { id: 'aknee32', name: 'Max', age: 24 },
      { id: 'fngrrk321', name: 'Stepan', age: 32 },
    ],
    isPersonsShown: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  handleDeletePerson = (payload) => {
    this.setState({
      persons: this.state.persons.filter(person => !(person.id === payload.id)),
    })
  }

  handleChangeName = (payload, event) => {
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
        state={{
          persons: this.state.persons,
        }}
        handlers={{
          handleChangeName: this.handleChangeName,
          handleDeletePerson: this.handleDeletePerson,
        }}
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
