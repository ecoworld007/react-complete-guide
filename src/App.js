import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <Person name='Himanshu' age='26'/>
          <Person name='Vinay' age='27'/>
          <Person name='Rohit' age='28'/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to React'));
  }
}

export default App;
