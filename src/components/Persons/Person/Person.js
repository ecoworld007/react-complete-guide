import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
class Person extends Component{
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Person.js] getDerivedStateFromProps');
  //   return state;
  // }
  componentDidMount(){
    console.log('[Person.js] componentDidMount');
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

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
        <AuthContext.Consumer>
          {(context) => context.authenticated ? 'Authenticated!' : 'Please log in!'}
        </AuthContext.Consumer>
        <p onClick={this.props.click} >I am {this.props.name} and my age is {this.props.age} year</p>
        <p>{this.props.children}</p>
        <input 
          // ref={(inputEl) => this.inputElement = inputEl} 
          ref={this.inputElementRef}
          type='text' 
          onChange={this.props.nameChanged} 
          value={this.props.name}/>
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  nameChanged: PropTypes.func 
}

export default withClass(Person, classes.Person);