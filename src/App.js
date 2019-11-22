import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons : [
      {name: 'Himanshu', age: 26},
      {name: 'Vinay', age: 27},
      {name: 'Rohit', age: 28}
    ]
  }
 
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState(persons);
  }

  nameChangedHandler = (event) => {
    console.log('was clicked!');
    // Don't Use this to change state this.state.persons = [{name: 'Himanshu', age: 26}, {name: 'Vinay', age: 27}, {name: 'Rohit', age: 28}]
    this.setState({
      persons: [
        {name: 'Himanshu', age: 26},
        {name: event.target.value, age: 27},
        {name: 'Rohit', age: 29},
      ],
      showPersons: false,
    })
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (<div>{this.state.persons.map((person, index) => (<Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age}/>))}</div>);
    }
    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to React'));
  }
}

export default App;
