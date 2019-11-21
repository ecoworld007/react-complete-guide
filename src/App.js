import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';
const App = () => {
  let [personsState, setPersonsState] = useState({
    persons : [
      {name: 'Himanshu', age: 26},
      {name: 'Vinay', age: 27},
      {name: 'Rohit', age: 28}
    ]
  });
  const switchNameHandler = () => {
    console.log('was clicked!');
    // Don't Use this to change state this.state.persons = [{name: 'Himanshu', age: 26}, {name: 'Vinay', age: 27}, {name: 'Rohit', age: 28}]
    setPersonsState({
      persons: [
        {name: 'Himanshu Negi', age: 26},
        {name: 'Vinay', age: 27},
        {name: 'Rohit', age: 29}
      ]
    });
  }
    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies is cycling</Person>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to React'));
}

export default App;
