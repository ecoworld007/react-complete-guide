import React from 'react';
import Person from './Person/Person';
const persons = (props) => {
  let personsTag = null;
  if(props.showPersons){
    personsTag = (
      <div>
        {
          props.persons.map((person, index) => (
            <Person 
              click={() => props.deleted(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id}
              nameChanged = {event => props.nameChanged(event, person.id)}
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

export default persons;