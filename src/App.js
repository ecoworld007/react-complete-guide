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
  switchNameHandler = (newName) => {
    console.log('was clicked!');
    // Don't Use this to change state this.state.persons = [{name: 'Himanshu', age: 26}, {name: 'Vinay', age: 27}, {name: 'Rohit', age: 28}]
    this.setState({
      persons: [
        {name: newName, age: 26},
        {name: 'Vinay', age: 27},
        {name: 'Rohit', age: 29}
      ]
    })
  }
  render() {
    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <button onClick={this.switchNameHandler.bind(this, 'Himanshu Negi')}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies is cycling</Person>
          <Person click={() => this.switchNameHandler('Negi')} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to React'));
  }
}

export default App;
