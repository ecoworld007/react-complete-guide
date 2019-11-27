import React, {PureComponent} from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {
  // shouldPureComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   return this.props.persons!==nextProps.persons;
  // }

  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate');
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }
  render(){
    console.log('[Persons.js] rendering...');
    return (
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
}

export default Persons;