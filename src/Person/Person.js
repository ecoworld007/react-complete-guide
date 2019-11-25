import React from 'react';
import styled from 'styled-components';

const StyledDiv =  styled.div`
                    margin: 16px auto;
                    width: 60%;
                    text-align: center;
                    border: 2px solid #ccc;
                    padding: 20px;
                    box-shadow: 0 2px 3px #eee;
                    @media (min-width: 500px) {
                      width: 450px;
                    }
                  `;
const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click} >I am {props.name} and my age is {props.age} year</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.nameChanged} value={props.name}/>
    </StyledDiv>
  )
}

export default person;