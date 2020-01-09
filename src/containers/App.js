//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ BOLUM 1 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React, { Component } from "react";
// import "./App.css";
// import Person from "./Person/Person";
// class App extends Component {
//   state = {
//     persons: [
//       { name: "max", age: 20 },
//       { name: "eko", age: 30 }
//     ],
//     otherState: "some other value"
//   };
//   switchNameHandler = () => {
//     // console.log('was clicked!');
//     // alert('was clicked!');
//     this.setState({
//       persons: [
//         { name: "birtango", age: 26 },
//         { name: "memo", age: 31 }
//       ]
//     });
//   };
//   editNameHandler = () => {
//     this.setState({
//       persons: [
//         { name: "max", age: 20 },
//         { name: "eko", age: 30 }
//       ]
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Test</h1>
//         <p>Test 1</p>
//         <button onClick={this.switchNameHandler}>Change</button>
//         <button onClick={this.editNameHandler}>Undo</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         />
//         <Person name="birtan" age="26" />
//         <Person name="ekrem" age="31">
//           Tester
//         </Person>
//       </div>
//     );
//     //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello'));
//   }
// }

// export default App;

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ BOLUM 2 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import React, { Component } from "react";
// import "./App.css";
// import Person from "./Person/Person";
// //const App = props => {
// class App extends Component {

//   state = {
//    // keyword: 'test' ,
//     persons: [
//       { name: "xx", age: 1 },
//       { name: "yy", age: 2 }
//     ],
//     otherState: "some other value"
//   };
//   switchNameHandler = newName => {
//     this.setState({
//       persons: [
//         { name: newName, age: 3 },
//         { name: "bb", age: 4 }
//       ]
//     });
//   };
//   nameChangedHandler = event => {
//    // const name= event.target.value;
//     this.setState({
//       persons: [
//         { name: "cc", age: 28 },
//         { name: event.target.value, age: 29 }
//       ]
//     });
//   };

//   render () {

//     return (
//       <div className="App">
//        <h1></h1>
//         <button onClick={() => this.switchNameHandler('Birtan')}>buton</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age} />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//           click={this.switchNameHandler.bind(this, 'Ekrem')}
//           changed={this.nameChangedHandler}
//           //    value={this.state.keyword}
//           >Üstteki yazıya tıkla</Person>

//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }
// export default App;
// //Notlar:
// /*
//  -click={this.switchNameHandler.bind(this, 'Ekrem')} butona basılınca switchNameHandler Propertysi calısır
//  name buton icin de atanan ('birtan olarak gelir) diğer veriler fonsiyonun icindekiler olarak gelir

//  -changed={this.nameChangedHandler} yazılı oldugu input içinde değişiklik oldugunda
//  nameChangedHandler propertysi calısır.
//  //value Person.js den gelir.

// */
// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ BOLUM 3 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// import React, { Component } from "react";
// import "./App.css";
// import Person from "./Person/Person";
// //const App = props => {
// class App extends Component {
//   state = {
//     // keyword: 'test' ,
//     persons: [
//       { name: "xx", age: 1 },
//       { name: "yy", age: 2 }
//     ],
//     otherState: "some other value",
//     showPersons: false
//   };
//   switchNameHandler = newName => {
//     this.setState({
//       persons: [
//         { name: newName, age: 3 },
//         { name: "bb", age: 4 }
//       ]
//     });
//   };
//   nameChangedHandler = event => {
//     // const name= event.target.value;
//     this.setState({
//       persons: [
//         { name: "cc", age: 28 },
//         { name: event.target.value, age: 29 }
//       ]
//     });
//   };
//   tooglePersonsHandler = () => {
//     const doesShow=this.state.showPersons;
//     this.setState({showPersons:!doesShow});
//   };

//   render() {
//     const style = {
//       backgroundColor: "white",
//       font: "inherit",
//       border: "2px solid blue",
//       padding: "8px",
//       cursor: "pointer"
//     };
//     return (
//       <div className="App">
//         <h1></h1>
//         <button style={style} onClick={this.tooglePersonsHandler}>
//           Toogle Persons
//         </button>
//         {this.state.showPersons ===true ?
//            (
//           <div>
//             <Person
//               name={this.state.persons[0].name}
//               age={this.state.persons[0].age}
//             />
//             <Person
//               name={this.state.persons[1].name}
//               age={this.state.persons[1].age}
//               click={this.switchNameHandler.bind(this, "Ekrem")}
//               changed={this.nameChangedHandler}
//               //    value={this.state.keyword}
//             >
//               Üstteki yazıya tıkla
//             </Person>
//           </div>
//         ) : null}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }
// export default App;
// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ BOLUM 4 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// import React, { Component } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// //const App = props => {
// class App extends Component {
//   state = {
//     // keyword: 'test' ,
//     persons: [
//       { name: "xx", age: 1 },
//       { name: "yy", age: 2 }
//     ],
//     otherState: "some other value",
//     showPersons: false
//   };

//   nameChangedHandler = event => {
//     // const name= event.target.value;
//     this.setState({
//       persons: [
//         { name: "cc", age: 28 },
//         { name: event.target.value, age: 29 }
//       ]
//     });
//   };
//   deletePersonHandler = personIndex => {
//     const persons = this.state.persons;
//     persons.splice(personIndex, 1);
//     this.setState({ persons: persons });
//   };
//   tooglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     const style = {
//       marginTop: "5px",
//       backgroundColor: "white",
//       font: "inherit",
//       border: "2px solid blue",
//       padding: "8px",
//       cursor: "pointer"
//     };

//     let persons = null;
//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 click={()=>this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//               />
//             );
//           })}
//         </div>
//       );
//     }
//     return (
//       <div className="App">
//         <button style={style} onClick={this.tooglePersonsHandler}>
//           Toogle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }
// export default App;
// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ BOLUM 5 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// import React, { Component } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// //const App = props => {
// class App extends Component {
//   state = {
//     // keyword: 'test' ,
//     persons: [
//       {id:'deneme1', name: "xx", age: 1 },
//       {id:'deneme2', name: "yy", age: 2 }
//     ],
//     otherState: "some other value",
//     showPersons: false
//   };

//   nameChangedHandler = (event,id) => {
//     const personIndex=this.state.persons.findIndex(p =>{
//       return p.id===id;
//     });

//     const person=
//     {
//       ...this.state.persons[personIndex]};
//     //  const person=Object.assign({},this.state.persons[personIndex]);alternatif
//       person.name=event.target.value;
//       const persons=[...this.state.persons];
//       persons[personIndex]=person;
//     this.setState({persons:persons})
//   };
//   deletePersonHandler = personIndex => {
//     // const persons = this.state.persons.slice();
//     const persons=[...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({ persons: persons });
//   };
//   tooglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     const style = {
//       marginTop: "5px",
//       backgroundColor: "white",
//       font: "inherit",
//       border: "2px solid blue",
//       padding: "8px",
//       cursor: "pointer"
//     };

//     let persons = null;
//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 click={()=>this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 changed={(event)=>this.nameChangedHandler(event,person.id)}
//               />
//             );
//           })}
//         </div>
//       );
//     }
//     return (
//       <div className="App">
//         <button style={style} onClick={this.tooglePersonsHandler}>
//           Toogle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }
// export default App;
// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ BOLUM 6 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// import React, { Component } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// //const App = props => {
// class App extends Component {
//   state = {
//     // keyword: 'test' ,
//     persons: [
//       {id:'deneme1', name: "xx", age: 1 },
//       {id:'deneme2', name: "yy", age: 2 }
//     ],
//     otherState: "some other value",
//     showPersons: false
//   };

//   nameChangedHandler = (event,id) => {
//     const personIndex=this.state.persons.findIndex(p =>{
//       return p.id===id;
//     });

//     const person=
//     {
//       ...this.state.persons[personIndex]
//     };
//     //  const person=Object.assign({},this.state.persons[personIndex]);alternatif
//       person.name=event.target.value;
//       const persons=[...this.state.persons];
//       persons[personIndex]=person;
//     this.setState({persons:persons})
//   };
//   deletePersonHandler = personIndex => {
//     // const persons = this.state.persons.slice();
//     const persons=[...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({ persons: persons });
//   };
//   tooglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     const style = {
//       marginTop: "5px",
//       backgroundColor: "white",
//       font: "inherit",
//       border: "2px solid blue",
//       padding: "8px",
//       cursor: "pointer"
//     };

//     let persons = null;
//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 click={()=>this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 changed={(event)=>this.nameChangedHandler(event,person.id)}
//               />
//             );
//           })}
//         </div>
//       );
//     }
//     return (
//       <div className="App">
//         <button style={style} onClick={this.tooglePersonsHandler}>
//           Toogle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }
// export default App;
// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ BOLUM 7 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// import React, { Component } from "react";
// import "./App.css";
// import Person from "./Person/Person";
// import styled from "styled-components";

// const StyledButton = styled.button`
//   background-color: ${props => props.changeIt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.changeIt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;
// class App extends Component {
//   state = {
//     // keyword: 'test' ,
//     persons: [
//       { id: "deneme1", name: "xx", age: 1 },
//       { id: "deneme2", name: "yy", age: 2 }
//     ],
//     otherState: "some other value",
//     showPersons:false
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });

//     const person = {
//       ...this.state.persons[personIndex]
//     };
//     //  const person=Object.assign({},this.state.persons[personIndex]);alternatif
//     person.name = event.target.value;
//     const persons = [...this.state.persons];
//     persons[personIndex] = person;
//     this.setState({ persons: persons });
//   };
//   deletePersonHandler = personIndex => {
//     // const persons = this.state.persons.slice();
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({ persons: persons });
//   };
//   tooglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };

//   render() {
//     // const style = {
//     //   backgroundColor: 'green',
//     //   color: 'white',
//     //   font: 'inherit',
//     //   border: '1px solid blue',
//     //   padding: '8px',
//     //   cursor: 'pointer',
//     //   ':hover': {
//     //     backgroundColor: 'lightgreen',
//     //     color: 'black'
//     //   }
//     // };

//     let persons = null;
//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 click={() => this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 changed={event => this.nameChangedHandler(event, person.id)}
//               />
//             );
//           })}
//         </div>
//       );
//       // style.backgroundColor = "red";
//       // style[":hover"] = {
//       //   backgroundColor: "salmon",
//       //   color: "black"
//       // };
//     }
//     //  let classes = ["red", "bold"].join(" ");
//     const classes = [];
//     if (this.state.persons.length <= 2) {
//       classes.push("red"); //classes=['red']
//     }
//     if (this.state.persons.length <= 1) {
//       classes.push("bold"); //classes=['red','bold']
//     }

//     return (
//       <div className="App">
//         <p className={classes.join(' ')}>Birto</p>
//         <StyledButton changeIt={this.state.showPersons} onClick={this.tooglePersonsHandler}>
//           Toggle Persons
//         </StyledButton>
//         {persons}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }
// export default App;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ BOLUM 8 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// import React, { Component } from "react";
// import classes from "./App.css";
// import Person from "./Person/Person";

// class App extends Component {
//   state = {
//     // keyword: 'test' ,
//     persons: [
//       { id: "deneme1", name: "xx", age: 1 },
//       { id: "deneme2", name: "yy", age: 2 }
//     ],
//     otherState: "some other value",
//     showPersons:false
//   };

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(p => {
//       return p.id === id;
//     });
//     const person = {
//       ...this.state.persons[personIndex]
//     };
//     person.name = event.target.value;

//     const persons = [...this.state.persons];
//     persons[personIndex] = person;

//     this.setState({ persons: persons });
//   };

//   deletePersonHandler = personIndex => {

//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({ persons: persons });
//   };

//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({ showPersons: !doesShow });
//   };
//   render() {
//     let persons = null;
//     let btnClass = '';

//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return (
//               <Person
//                 click={() => this.deletePersonHandler(index)}
//                 name={person.name}
//                 age={person.age}
//                 key={person.id}
//                 changed={event => this.nameChangedHandler(event, person.id)}
//               />
//             );
//           })}
//         </div>
//       );

//       btnClass = classes.Red;
//     }
//     const assignedClasses = [];
//     if (this.state.persons.length <= 2) {
//       assignedClasses.push(classes.red); // classes = ['red']
//     }
//     if (this.state.persons.length <= 1) {
//       assignedClasses.push(classes.bold); // classes = ['red', 'bold']
//     }

//     return (
//       <div className={classes.App}>
//         <p className={assignedClasses.join(' ')}>This is really working!</p>
//         <button className={btnClass} onClick={this.togglePersonsHandler}>
//           Toggle Persons
//         </button>
//         {persons}
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }
// }

// export default App;
// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ BOLUM tekrar 7 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import React, { Component } from "react";
import styled from "styled-components";

import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

const StyledButton = styled.button`
  background-color: ${props => (props.changeIt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.changeIt ? "salmon" : "lightgreen")};
    color: black;
  }
`;
class App extends Component {
  state = {
    // keyword: 'test' ,
    persons: [
      { id: "deneme1", name: "xx", age: 1 },
      { id: "deneme2", name: "yy", age: 2 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      //return p.id === id; debug icin id -> userId yaptık
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    //    person.name = event.target.value; debug icin targed -> input yaptık consolde tanımsız olarak hata verdi
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      // <div className="App">
      //   <h1>Hi, I'm a React App</h1>
      //   <p className={classes.join(" ")}>This is really working!</p>
      //   <StyledButton
      //     changeIt={this.state.showPersons}
      //     onClick={this.togglePersonsHandler}
      //   >
      //     Toggle Persons
      //   </StyledButton>
      //   {persons}
      // </div>
      <div className="App">
      <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
      />
      {persons}
    </div>

    );
  }
}

export default App;
