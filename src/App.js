import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => (
              <Person 
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id}
                nameChanged = {event => this.nameChangedHandler(event, person.id)}
                />
              ))
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }
    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <p className={classes.join(' ')}>This is working</p>
          <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to React'));
  }
}

export default Radium(App);
