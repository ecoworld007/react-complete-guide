import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
  console.log('[Cockpit.js] rendering...');
  let btnClass = '';
  if(props.showPersons){
    btnClass = classes.Red;
  }
  const assignedClasses = [];
  if(props.persons.length<=2){
    assignedClasses.push(classes.red);
  }
  if(props.persons.length<=1){
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Welcome to React</h1>
      <p className={assignedClasses.join(' ')}>This is working</p>
      <button className={btnClass} onClick={props.toggle}>Toggle Persons</button>
    </div>
  );
}

export default cockpit;