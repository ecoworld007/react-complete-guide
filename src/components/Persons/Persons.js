import React, {Component} from 'react';
import Person from './Person/Person';
class Persons extends Component {
  render(){
    console.log('[Persons.js] rendering...');
    let personsTag = null;
    if(this.props.showPersons){
      personsTag = (
        <div>
          {
            this.props.persons.map((person, index) => (
              <Person 
                click={() => this.props.deleted(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id}
                nameChanged = {event => this.props.nameChanged(event, person.id)}
                />
              ))
          }
        </div>
      );
    }
    return (
      <div>
        {personsTag}
      </div>
    );
  }
}

export default Persons;