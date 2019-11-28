import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('saved data to cloud');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
        console.log('[Cockpit.js] clean work in useeffect');
      }
  }, []);//[props.persons] if runs only when the state of persons change 

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
  })

  console.log('[Cockpit.js] rendering...');
  let btnClass = '';
  if(props.showPersons){
    btnClass = classes.Red;
  }
  const assignedClasses = [];
  if(props.personsLength<=2){
    assignedClasses.push(classes.red);
  }
  if(props.personsLength<=1){
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Welcome to React</h1>
      <p className={assignedClasses.join(' ')}>This is working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>Toggle Persons</button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
}

export default React.memo(cockpit);