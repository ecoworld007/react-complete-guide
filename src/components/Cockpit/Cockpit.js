import React, {useEffect} from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('saved data to cloud');
    }, 1000);
    return () => {
        console.log('[Cockpit.js] clean work in useeffect');
      }
  }, []);//[props.persons] if runs only when the state of persons change 

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