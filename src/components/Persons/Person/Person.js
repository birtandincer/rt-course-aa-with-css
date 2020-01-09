//@@@@@@@@@@@@@@@@@@@@@@@@@ bolum 1 - 7 arası @@@@@@@@@@@@@@@@@@@@@@@@@@
import React from "react";
import styled from "styled-components";

// import './Person.css';
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person = props => {
  // const rnd = Math.random();

  // if ( rnd > 0.7 ) {
  //     throw new Error( 'Bir şeyler yanlış gitti');
  // }
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>name : {props.name}  --  age : {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default Person;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ bolum 7 @@@@@@@@@@@@@@@@@@@@@@@@@@
// import React from "react";
// import classes from './Person.css';

// const Person = props => {
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };
// export default Person;
