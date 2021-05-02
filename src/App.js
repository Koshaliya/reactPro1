import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component{
//   state = {
//     persons:[
//       {name : 'Max' , age: 28},
//       {name : 'Pix' , age: 12},
//       {name : 'tid' , age: 14}
//     ]
//   }

//   switchNameHandler= () =>{
//     this.setState({
//       persons:[
//         {name:'xix',age:84},
//         {name:'xix',age:84},
//         {name:'xix',age:84}
//       ]
//     })
//   }

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Pix', age: 12 },
      { name: 'tid', age: 14 }
    ],
    //otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState(
    'some other value'
  );

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'xix', age: 84 },
        { name: 'xix', age: 84 },
        { name: 'xix', age: 84 }
      ],
      otherState: personState.otherState
    });
  };



  console.log(personState, otherState);
  return (
    <div className="App">
      <h1>
        Hi,this is my first react app.
        </h1>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}>Im testing</Person>
    </div>

  );
  //return React.createElement('div',{className:'App'},React.createElement('h1',null,'heloooooo'));
};


export default App;
