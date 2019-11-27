import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
class Person extends Component{
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Person.js] getDerivedStateFromProps');
  //   return state;
  // }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[Person.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(nextProps, nextState, snapshot){
    console.log('[Person.js] componentDidUpdate', snapshot);
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return {message: 'snapshot saved'}
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p onClick={this.props.click} >I am {this.props.name} and my age is {this.props.age} year</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.nameChanged} value={this.props.name}/>
      </Aux>
    )
  }
}

export default withClass(Person, classes.Person);