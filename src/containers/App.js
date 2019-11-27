import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor (props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons : [
      {id: 'asdsa1', name: 'Himanshu', age: 26},
      {id: 'asdsa2', name: 'Vinay', age: 27},
      {id: 'asdsa3', name: 'Rohit', age: 28}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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
    this.setState((prevState, props ) => {
      return {
        persons,
        changeCounter: prevState.changeCounter+1
      }
    });
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }
  render() {
    console.log('[App.js] render');
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons showPersons={this.state.showPersons} persons={this.state.persons} deleted={this.deletePersonHandler} nameChanged={this.nameChangedHandler}/>;
    }
    return (
        <Aux>
          <button onClick={() => this.setState({
            showCockpit: false
          })}>Hide cockpit</button>
          {this.state.showCockpit ? <Cockpit toggle={this.togglePersons} personsLength={this.state.persons.length} showPersons={this.state.showPersons}/> : null}
          {persons}
        </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to React'));
  }
}

export default withClass(App, classes.App);
