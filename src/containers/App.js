import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons : [
      {id: 'asdsa1', name: 'Himanshu', age: 26},
      {id: 'asdsa2', name: 'Vinay', age: 27},
      {id: 'asdsa3', name: 'Rohit', age: 28}
    ]
  }
 
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  nameChangedHandler = (event, id) => {
    console.log('was clicked!');
    // Don't Use this to change state this.state.persons = [{name: 'Himanshu', age: 26}, {name: 'Vinay', age: 27}, {name: 'Rohit', age: 28}]
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = Object.assign({}, this.state.persons[personIndex]);
    // const person = {
    //   ...this.state.persons[personIndex]
    // };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons
    });
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }
  render() {
    return (
        <div className={classes.App}>
            <Cockpit toggle={this.togglePersons} persons={this.state.persons} showPersons={this.state.showPersons}/>
            <Persons showPersons={this.state.showPersons} persons={this.state.persons} deleted={this.deletePersonHandler} nameChanged={this.nameChangedHandler}/>
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to React'));
  }
}

export default App;
